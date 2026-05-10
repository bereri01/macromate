import { fail, redirect } from "@sveltejs/kit";
import db from "$lib/db";
import crypto from "crypto";

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export const actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData();
    const mode = String(form.get("mode") || "login");
    const email = String(form.get("email") || "")
      .trim()
      .toLowerCase();
    const password = String(form.get("password") || "");
    const name = String(form.get("name") || "").trim();

    if (!email || !password) {
      return fail(400, { error: "Please fill in all fields." });
    }

    const hashedPassword = hashPassword(password);

    if (mode === "register") {
      if (password.length < 8) {
        return fail(400, { error: "Password must be at least 8 characters." });
      }

      const userName = name || email.split("@")[0];
      const result = await db.createUser({ name: userName, email, password: hashedPassword });

      if (!result) {
        return fail(500, { error: "Unable to create account. Please try again." });
      }

      if (typeof result === "object" && result.error) {
        return fail(400, { error: result.error });
      }

      cookies.set("session", String(result), {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
      });

      throw redirect(303, "/dailytracking");
    }

    const user = await db.getUser(email);
    if (!user) {
      return fail(400, { error: "Invalid email or password." });
    }

    let passwordMatches = user.password === hashedPassword;
    if (!passwordMatches && user.password === password) {
      // Upgrade existing plaintext passwords to hashed form.
      await db.updateUser({ ...user, password: hashedPassword });
      passwordMatches = true;
    }

    if (!passwordMatches) {
      return fail(400, { error: "Invalid email or password." });
    }

    cookies.set("session", String(user._id), {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    throw redirect(303, "/dailytracking");
  },
};
