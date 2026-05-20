# Projektdokumentation - MacroMate

## Inhaltsverzeichnis

1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)
   1. [Understand & Define](#31-understand--define)
   2. [Sketch](#32-sketch)
   3. [Decide](#33-decide)
   4. [Prototype](#34-prototype)
   5. [Validate](#35-validate)
4. [Erweiterungen [Optional]](#4-erweiterungen-optional)
5. [Projektorganisation [Optional]](#5-projektorganisation-optional)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang [Optional]](#7-anhang-optional)

> **Hinweis:** Massgeblich sind die im **Unterricht** und auf **Moodle** kommunizierten Anforderungen.

<!-- WICHTIG: DIE KAPITELSTRUKTUR DARF NICHT VERÄNDERT WERDEN! -->

<!-- Diese Vorlage ist für eine README.md im Repository gedacht. Abschnitte mit [Optional] können weggelassen werden, wenn in den Übungen nichts anderes verlangt wird. -->

## 1. Ausgangslage

Kurz beschreiben, welches Problem adressiert wird und welches Ergebnis angestrebt ist.
Wem nützt die Lösung, wer ist beteiligt oder betroffen?

- **Problem:** Viele Menschen, die ihre Ernährung verbessern oder ein bestimmtes
  Körpergewicht erreichen möchten, haben keine einfache und übersichtliche Möglichkeit,
  ihre tägliche Makronährstoffaufnahme (Proteine, Kohlenhydrate, Fette) zu verfolgen.
  Bestehende Lösungen sind entweder zu komplex, kostenpflichtig oder bieten keine
  integrierte Übersicht über Kalorien, Makros und Rezepte in einer einzigen Anwendung.
  _(Beispiel: Ein Student, der Muskeln aufbauen möchte, weiss nicht, ob er täglich genug
  Protein zu sich nimmt, ohne mühsames Rechnen in Excel oder teure Premium-Apps.)_

- **Ziele:**
  - Kostenlose Webapplikation zur täglichen Erfassung von Mahlzeiten und Makronährstoffen
  - Integrierter Kalorienrechner zur Berechnung des individuellen Tagesbedarfs
  - Lebensmitteldatenbank mit Makroangaben pro 100g / Portion
  - Gesunde Rezepte mit vollständigen Nährwertangaben
  - Einfache Benutzerregistrierung und persönliches Konto

- **Primäre Zielgruppe:** Gesundheits- und fitnessbewusste Personen im Alter von 18–45
  Jahren, die ihre Ernährung gezielt steuern möchten, sei es zum Abnehmen, Muskelaufbau
  oder zur allgemeinen Gesundheitsverbesserung. Vorkenntnisse in Ernährungswissenschaften
  werden nicht vorausgesetzt.

- **Weitere Stakeholder:**
  - _Ernährungsberater (zukünftig):_ Könnten die Plattform zur Begleitung von Klienten nutzen
  - _Fitnessstudios / Trainer (zukünftig):_ Potenzielle Partner für Weiterempfehlungen

## 2. Lösungsidee

MacroMate ist eine kostenlose, webbasierte Applikation, die Nutzern ermöglicht,
ihre tägliche Ernährung einfach und übersichtlich zu verfolgen, ohne Installation,
ohne Abonnement und ohne Vorkenntnisse in Ernährungswissenschaften.

- **Kernfunktionalität:**
  - _Daily Tracking:_ Nutzer erfassen täglich ihre Mahlzeiten und sehen sofort,
    wie viel Kalorien, Protein, Kohlenhydrate und Fett sie bereits konsumiert haben,
    visualisiert über Fortschrittsbalken pro Makronährstoff.
  - _Calorie Calculator:_ Basierend auf Alter, Geschlecht, Gewicht, Grösse und
    Aktivitätslevel wird der individuelle Tageskalorienbedarf berechnet
    und als persönliches Ziel gespeichert.
  - _Food Macros:_ Eine durchsuchbare Lebensmitteldatenbank liefert die
    Makronährstoffwerte pro 100g oder Portion für eine grosse Auswahl an
    Lebensmitteln.
  - _Recipes:_ Gesunde Rezepte werden mit vollständigen Nährwertangaben pro
    Portion angezeigt, sodass Nutzer diese direkt in ihr Daily Tracking
    übernehmen können.
  - _Login / Register:_ Nutzer erstellen ein persönliches Konto, um ihre
    Daten geräteübergreifend zu speichern und ihren Fortschritt über Zeit
    zu verfolgen.

- **Annahmen:**
  - Nutzer sind bereit, ihre Mahlzeiten täglich manuell einzutragen, wenn
    der Aufwand gering und die Oberfläche intuitiv ist
  - Eine übersichtliche Visualisierung der drei Hauptmakros (Protein,
    Kohlenhydrate, Fett) reicht als tägliche Rückmeldung aus
  - Eine lokale Lebensmitteldatenbank deckt die häufigsten Alltagslebensmittel
    ausreichend ab

- **Abgrenzung:**
  - Keine Integration mit Fitness-Trackern oder Wearables (z. B. Apple Watch,
    Fitbit) im aktuellen Umfang
  - Kein Barcode-Scanner zur automatischen Lebensmittelerkennung
  - Keine medizinische oder klinische Ernährungsberatung, MacroMate ersetzt
    keinen Ernährungsberater
  - Keine mobile App (iOS/Android), reine Webapplikation

## 3. Vorgehen & Artefakte

Die Durchführung erfolgt phasenbasiert; dokumentieren Sie die wichtigsten Ergebnisse je Phase.

### 3.1 Understand & Define

### 3.1 Understand & Define

#### Zielgruppenverständnis

**Problemraumanalyse**

Viele Menschen möchten sich gesünder ernähren oder gezielt Gewicht verlieren bzw. Muskeln
aufbauen, scheitern jedoch daran, den Überblick über ihre tägliche Kalorie- und
Makronährstoffzufuhr zu behalten. Bestehende Apps wie MyFitnessPal oder Yazio sind
funktional umfangreich, wirken jedoch für Einsteiger oft überladen und wenig motivierend.
MacroMate setzt hier an: eine einfache, übersichtliche Webanwendung, die die wichtigsten
Funktionen – Rezeptinspiration, Kalorienkalkulation und Tagesprotokoll – ohne unnötige
Komplexität vereint.

---

**Proto-Persona 1 – Der Fitness-Einsteiger**

|                 |                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Name**        | Jonas, 22 Jahre                                                                                                              |
| **Situation**   | Informatikstudent, möchte nach langer Inaktivität mit dem Training beginnen und gleichzeitig mehr auf seine Ernährung achten |
| **Ziel**        | Muskelmasse aufbauen, mehr Protein essen, verstehen was er täglich zu sich nimmt                                             |
| **Frustration** | Findet Ernährungs-Apps zu kompliziert und gibt schnell auf                                                                   |
| **Bedürfnis**   | Einfacher Einstieg, klare Makro-Übersicht, Rezeptvorschläge mit Nährwertangaben                                              |

---

**Proto-Persona 2 – Die gesundheitsbewusste Berufstätige**

|                 |                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------- |
| **Name**        | Laura, 29 Jahre                                                                          |
| **Situation**   | Arbeitet Vollzeit, kocht gerne, möchte ihr Gewicht halten und sich ausgewogen ernähren   |
| **Ziel**        | Bewusster essen, gesunde Rezepte entdecken, ohne stundenlang Kalorien zu zählen          |
| **Frustration** | Vergisst Mahlzeiten einzutragen, wenn der Prozess zu viele Schritte erfordert            |
| **Bedürfnis**   | Schnelles Eintragen von Mahlzeiten, Rezepte gefiltert nach Kategorie, tägliche Übersicht |

---

#### Wesentliche Erkenntnisse

- Nutzende wollen **schnell** sehen, wie viel sie noch essen dürfen – eine klare Tagesübersicht ist essenziell
- **Rezeptinspiration mit direkten Nährwertangaben** wird als wertvoller empfunden als reine Kalorientabellen
- Der **Einstieg in die App** muss reibungslos sein – zu viele Pflichtfelder bei der Registrierung schrecken ab
- Begriffe wie „Makronährstoffe", „TDEE" oder „Aktivitätslevel" sind **nicht allen Nutzenden bekannt** – einfache Sprache und kurze Erklärungen sind nötig
- Nutzende erwarten **sofortiges Feedback** nach Aktionen (Login, Eintrag hinzufügen, Filter anwenden)
- Eine **Verbindung zwischen Rezepten und Tagesprotokoll** (direkt übernehmen) wird als selbstverständlich erwartet
- Mobile Nutzung spielt eine wichtige Rolle – die App muss auf **Smartphone-Bildschirmen** gut bedienbar sein

### 3.2 Sketch

#### Variantenüberblick

Im Sketch-Schritt wurden konzeptionelle Varianten für das Layout und die
Hauptinteraktion von MacroMate skizziert und verglichen. Ziel war es, unterschiedliche
Ansätze für die Navigation und den zentralen Workflow (Mahlzeit erfassen → Übersicht sehen)
zu evaluieren, bevor mit der eigentlichen Umsetzung begonnen wurde.

|                         | Variante A                                          | Variante B                               | Variante C                                        |
| ----------------------- | --------------------------------------------------- | ---------------------------------------- | ------------------------------------------------- |
| **Konzept**             | Dashboard-zentriert                                 | Tracking-First                           | Rezept-First                                      |
| **Startseite**          | Übersichtsdashboard mit allen Infos auf einen Blick | Direkt das Tagesprotokoll als Startseite | Rezeptvorschläge als Einstieg, Tracking sekundär  |
| **Navigation**          | Klassische Top-Navbar mit 5 Menüpunkten             | Bottom-Navigation (mobil-orientiert)     | Seitenleiste (Sidebar) mit Icons                  |
| **Makro-Darstellung**   | Chart zentral auf Dashboard                         | Balkendiagramm je Mahlzeit               | Numerische Tabelle ohne Grafik                    |
| **Mahlzeit hinzufügen** | Floating Action Button (+)                          | Inline direkt in der Mahlzeitliste       | Über Rezept-Detailseite „Zum Tracking hinzufügen" |
| **Stärke**              | Guter Gesamtüberblick                               | Schneller Zugriff aufs Tracking          | Motiviert durch Rezeptinspiration                 |
| **Schwäche**            | Viel Information auf einmal                         | Navigation zu anderen Seiten umständlich | Tracking-Funktion schwer auffindbar               |

---

- **Skizzen:**

  ![Alt text](/static/images/readme/skizze.png)

  ![Alt text](/static/images/readme/skizze2.png)

---

### 3.3 Decide

**Entscheid:** Variante A wurde als Grundlage gewählt, ergänzt mit dem
„Zum Tracking hinzufügen"-Gedanken aus Variante C. Die Top-Navbar aus Variante A
bietet die beste Übersicht auf Desktop und Mobile, während der Chart das
tägliche Makro-Ziel visuell ansprechend kommuniziert.

**Entscheidkriterien:**

| Kriterium                           | Variante A             | Variante B              | Variante C                |
| ----------------------------------- | ---------------------- | ----------------------- | ------------------------- |
| **Gesamtüberblick auf einen Blick** | ✅ Stark               | ⚠️ Nur Tracking         | ❌ Fehlt                  |
| **Einstieg für Neulinge**           | ✅ Klar & strukturiert | ⚠️ Mittel               | ✅ Motivierend            |
| **Schneller Zugriff auf Tracking**  | ✅ Via Navbar          | ✅ Direkt               | ❌ Versteckt              |
| **Desktop & Mobile gleichwertig**   | ✅ Top-Navbar          | ⚠️ Bottom-Nav nur mobil | ⚠️ Sidebar eng auf Mobile |
| **Erweiterbarkeit**                 | ✅ Gut                 | ⚠️ Mittel               | ⚠️ Mittel                 |
| **Umsetzbarkeit im Zeitrahmen**     | ✅ Realistisch         | ✅ Realistisch          | ⚠️ Aufwändig              |

**Begründung:**
Variante A überzeugt durch die ausgewogene Balance zwischen Überblick und
Erreichbarkeit aller Funktionen. Das Dashboard gibt Nutzenden beim Öffnen der App
sofort die wichtigsten Informationen (Kalorienstand, Makros) ohne scrollen oder
navigieren zu müssen. Die klassische Top-Navbar funktioniert auf Desktop und Mobile
gleichermassen gut und ist aus anderen Webanwendungen bekannt, was die Lernkurve
minimiert. Die Integration des „Zum Tracking hinzufügen"-Buttons aus Variante C auf
der Rezept-Detailseite verbessert den zentralen Workflow erheblich, ohne das
Grundkonzept von Variante A zu verändern.

---

- **End-to-End-Ablauf:** _[Beschreibung inkl. User Journey Map]_

**Schritte im Detail:**

| Schritt | Seite           | Aktion                                           | Nutzerziel                                    |
| ------- | --------------- | ------------------------------------------------ | --------------------------------------------- |
| 1       | `/login`        | E-Mail & Passwort eingeben                       | Zugang zur App erhalten                       |
| 2       | `/`             | Tagesstand prüfen                                | Verstehen, wie viel noch gegessen werden kann |
| 3       | `/recipes`      | Nach Kategorie filtern, Rezept suchen            | Inspiration für die nächste Mahlzeit          |
| 4       | `/recipes/[id]` | Makros prüfen, „Zum Tracking hinzufügen" klicken | Mahlzeit schnell ins Protokoll übernehmen     |
| 5       | `/daily`        | Eingetragene Mahlzeiten prüfen, ggf. anpassen    | Tagesprotokoll vervollständigen               |
| 6       | `/`             | Aktualisierten Chart ansehen                     | Fortschritt des Tages überblicken             |

**Emotionale Kurve der User Journey:**

### User Journey Map (SOLL) – "Einen Tag mit MacroMate tracken"

|                 | 1) Login & Start                                                          | 2) Rezept entdecken                                                              | 3) Mahlzeit erfassen                                                         | 4) Tagesübersicht prüfen                                                  |
| --------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Ziel**        | Zugang zur App erhalten und Tagesstand sehen                              | Passendes Rezept für die nächste Mahlzeit finden                                 | Mahlzeit schnell ins Tagesprotokoll eintragen                                | Überblick über Kalorien & Makros des Tages behalten                       |
| **Aktionen**    | App öffnen → Einloggen → Homepage lädt → Chart zeigt aktuellen Tagesstand | Recipes-Seite öffnen → Nach Kategorie filtern → Rezept auswählen → Makros prüfen | „Zum Tracking hinzufügen" klicken → Portion bestätigen → Eintrag gespeichert | Daily Tracking öffnen → Mahlzeiten prüfen → Eintrag löschen oder ergänzen |
| **Touchpoints** | Login-Seite, Homepage-Dashboard                                           | Recipes-Übersicht, Rezept-Detailseite                                            | Rezept-Detailseite, Daily Tracking                                           | Daily Tracking, Homepage-Donut-Chart                                      |
| **Emotion**     | Orientierung & Motivation                                                 | Inspiration & Neugier                                                            | Effizienz & Kontrolle                                                        | Zufriedenheit & Überblick                                                 |
| **Risiko**      | Login-Feedback                                                            | Filter zeigt keine sofortige Wirkung → Verwirrung                                | „Zum Tracking"-Button schwer auffindbar → Abbruch                            | Tagesstand unklar wenn Chart-Labels fehlen                                |
| **Mitigation**  | Erfolgs-Toast nach Login; Username in Navbar anzeigen                     | Reaktives Filtern mit ohne Seitenreload                                          | Button prominent & grün gestalten; fixierte Position                         | Makro-Labels direkt im Chart; Prozentwerte anzeigen                       |

- **Mockup:**
  Link to the figma mockup website: https://www.figma.com/design/tlhBCLcc3ESERBE1mSrfmt/MacroMate-Website?nodeid=1-2&t=Y48VTyom4s17t9Ot-1

### 3.4 Prototype

#### 3.4.1. Entwurf (Design)

##### Informationsarchitektur

MacroMate ist als einseitige Navigation aufgebaut. Alle Hauptseiten sind direkt über die
Navigationsleiste erreichbar – es gibt keine versteckten Unterseiten oder komplexen
Navigationspfade. Das Ziel war eine flache Hierarchie, damit Nutzende jederzeit mit einem
Klick zur gewünschten Funktion gelangen.

**Seitenstruktur & Navigation:**

```
MacroMate
├── Home (/)                    → Einstiegsseite mit Übersicht & Quicklinks
├── Daily Tracking (/daily)     → Tagesprotokoll: Mahlzeiten & Makroübersicht
├── Calculator (/calculator)    → TDEE-Rechner & persönliche Tagesziele
├── Food (/food)                → Lebensmitteldatenbank mit Makrotabelle
├── Recipes (/recipes)          → Rezeptübersicht mit Filter & Detailseite
│   └── Rezeptdetail (/recipes/[id])
└── Login (/login)              → Authentifizierung
```

**Navigationskonzept:**

- Die Hauptnavigation (Navbar) ist auf allen Seiten sichtbar und persistent.
- Die Rezeptdetailseite ist die einzige Unterseite, sie wird über die Rezeptübersicht erreicht.
- Mobile: Die Navbar kollabiert zu einem Hamburger-Menü.

---

##### User Interface Design

**Screen 1 – Homepage (`/`)**

Die Homepage dient als zentrales Dashboard. Sie begrüsst die Nutzenden namentlich
und zeigt einen kompakten Überblick über den heutigen Stand: bereits verbrauchte Kalorien,
Makro-Fortschritt sowie Quicklinks zu den häufig genutzten Seiten (Tracking, Rezepte,
Kalkulator).

> _Designentscheid:_ Die Homepage ist bewusst knapp gehalten, sie soll motivieren und weiterführen, nicht überladen informieren.

---

**Screen 2 – Recipes (`/recipes`)**

Die Rezeptseite zeigt alle verfügbaren Rezepte als Karten-Grid. Jede Karte enthält:

- Kategorie-Badge (Breakfast, Lunch, Dinner, Snack)
- Titel & kurze Beschreibung
- Zubereitungszeit & Portionen
- Makro-Kurzübersicht (kcal / Protein / Kohlenhydrate / Fett)

Oberhalb des Grids befindet sich eine Suchleiste (Freitext) sowie ein Kategorie-Dropdown.
Die Filterung erfolgt reaktiv – ohne Seitenreload, direkt beim Tippen bzw. Auswählen.

> _Designentscheid:_ Das Dropdown für Kategorien wurde gegenüber einem Freitextfeld bevorzugt, um Tippfehler zu verhindern und die möglichen Optionen direkt sichtbar zu machen.

---

**Screen 3 – Calculator (`/calculator`)**

Der Kalkulator führt Nutzende durch eine strukturierte Eingabemaske mit folgenden Feldern:
Alter, Geschlecht, Gewicht (kg), Grösse (cm), Aktivitätslevel (Dropdown) und Ziel
(abnehmen / halten / zunehmen). Nach dem Berechnen werden der TDEE sowie die
empfohlene Makroverteilung angezeigt. Mit dem Button „Als meine Tagesziele speichern"
werden die Werte im User-Profil in der Datenbank hinterlegt.

> _Designentscheid:_ Das Aktivitätslevel wird als beschriftetes Dropdown mit kurzen Erklärungstexten je Option angezeigt, da Usability-Tests zeigten, dass der Begriff ohne Kontext missverstanden wurde (siehe Kapitel 5, Issue U-04).

---

**Screen 4 – Daily Tracking (`/daily`)**

Das Tagesprotokoll zeigt oben einen Makro-Fortschrittsring (Donut-Chart) mit dem
aktuellen Tagesstand. Darunter werden die eingetragenen Mahlzeiten nach Tageszeit
gruppiert (Frühstück / Mittagessen / Abendessen / Snacks). Ein prominent platzierter
„+ Mahlzeit hinzufügen"-Button ermöglicht das schnelle Erfassen neuer Einträge.

> _Designentscheid:_ Der CTA-Button für „Mahlzeit hinzufügen" wurde nach dem
> Usability-Test visuell prominenter gestaltet (grösser, grüne Akzentfarbe, fixierte
> Position).

---

**Screen 5 – Login (`/login`)**

Die Login-Seite ist minimalistisch gehalten: E-Mail-Feld, Passwort-Feld, Login-Button.
Zusätzlich gibt es einen Link zur Registrierung für neue Nutzende.

---

##### Designentscheidungen

| Entscheidung               | Beschreibung                                        | Begründung                                                                            |
| -------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Dark Mode als Standard** | Die gesamte UI verwendet ein dunkles Farbschema     | Passend zur Fitness-/Health-Zielgruppe; reduziert Augenmüdigkeit bei häufiger Nutzung |
| **Grün als Akzentfarbe**   | als primäre Akzentfarbe für CTAs und Badges         | Assoziation mit Gesundheit, Natur und positiver Verstärkung                           |
| **Kartenbasiertes Layout** | Rezepte und Lebensmittel als Cards mit hover-Effekt | Gute Scannbarkeit; Nutzende können schnell zwischen Einträgen vergleichen             |
| **Reaktives Filtern**      | Filter auf der Rezeptseite ohne Seitenreload        | Unmittelbares Feedback verbessert die Bedienbarkeit                                   |
| **Flache Navigation**      | Alle Hauptseiten direkt über Navbar erreichbar      | Minimale Klicktiefe; Nutzende verlieren sich nicht in Unterseiten                     |
| **Makro-Farbkodierung**    | Kalorien, Protein, Carbs, Fett je in eigener Farbe  | Schnelle visuelle Unterscheidung der Nährwerte ohne Lesen der Labels                  |
| **MongoDB als Datenbasis** | Flexible Dokumentenstruktur für User, Rezepte, Logs | Passt zu variablen Datenstrukturen (z.B. unterschiedlich viele Zutaten pro Rezept)    |

#### 3.4.2. Umsetzung (Technik)

##### Technologie-Stack

| Schicht               | Technologie              | Version | Zweck                                                 |
| --------------------- | ------------------------ | ------- | ----------------------------------------------------- |
| **Framework**         | SvelteKit                | 2.x     | Full-Stack Web-Framework (Routing, SSR, API Routes)   |
| **Sprache**           | JavaScript (ES2022)      | —       | Frontend & Backend Logik                              |
| **Datenbank**         | MongoDB Atlas            | 7.x     | Cloud-Datenbank für User, Rezepte, Logs, Lebensmittel |
| **DB-Treiber**        | mongodb (Node.js)        | 6.x     | Verbindung zu MongoDB aus SvelteKit Server-Code       |
| **Authentifizierung** | bcryptjs + jsonwebtoken  | —       | Passwort-Hashing & Session-Token (JWT in Cookie)      |
| **Styling**           | Bootstrap 5 + Custom CSS | 5.3     | UI-Komponenten, Grid, Utility-Klassen                 |
| **Icons**             | Bootstrap Icons          | 1.x     | Einheitliche Icon-Bibliothek                          |
| **Laufzeit**          | Node.js                  | 20.x    | Server-Laufzeitumgebung                               |

---

##### Tooling

| Tool                   | Einsatz                                                 |
| ---------------------- | ------------------------------------------------------- |
| **Visual Studio Code** | Primäre Entwicklungsumgebung                            |
| **Svelte for VS Code** | Syntax-Highlighting, IntelliSense für `.svelte`-Dateien |
| **MongoDB Compass**    | Lokale GUI zur Verwaltung und Inspektion der Datenbank  |
| **Git & GitHub**       | Versionskontrolle und Code-Verwaltung                   |
| **npm**                | Paketverwaltung                                         |

> Der Einsatz von KI-Werkzeugen wird im Kapitel **KI-Deklaration** beschrieben.

---

##### Struktur & Komponenten

**Projektstruktur (vereinfacht):**

```
src/
├── lib/
│   ├── server/
│   │   └── db.js               ← Alle MongoDB-Funktionen (getRecipes, getUser, …)
│   └── components/
│       ├── recipes/
│       │   └── RecipeCard.svelte
│       ├── tracking/
│       │   └── MacroRing.svelte
│       └── ui/
│           ├── Navbar.svelte
│           └── Button.svelte
└── routes/
    ├── +layout.svelte           ← Root-Layout mit Navbar
    ├── +page.svelte             ← Homepage
    ├── login/+page.svelte
    ├── daily/+page.svelte
    ├── calculator/+page.svelte
    ├── food/+page.svelte
    ├── recipes/
    │   ├── +page.svelte
    │   └── [id]/+page.svelte
    └── api/
        ├── recipes/+server.js
        ├── foods/+server.js
        └── auth/
            ├── login/+server.js
            └── register/+server.js
```

**Wichtige Komponenten:**

- **`RecipeCard.svelte`** – Wiederverwendbare Karte mit Makro-Kurzübersicht; wird auf der Rezeptübersichtsseite in einem Grid gerendert.
- **`db.js`** (server-only) – Zentrales Datenbankmodul; kapselt alle MongoDB-Operationen und wird ausschliesslich in Server-seitigem Code (`+server.js`, `+page.server.js`) importiert.

**State Management:**

Für den globalen Applikationsstatus (eingeloggter User, Tagesziele) werden native **Svelte Stores** (`writable()`) eingesetzt. Da SvelteKit in `localStorage`-eingeschränkten Umgebungen läuft, wird der User-State über den JWT-Cookie bei jedem Request serverseitig validiert.

---

##### Daten & Schnittstellen

**Datenbankstruktur (MongoDB Collections):**

| Collection  | Inhalt                | Wichtige Felder                                          |
| ----------- | --------------------- | -------------------------------------------------------- |
| `users`     | Nutzerkonten          | `email`, `password` (bcrypt), `profile`, `dailyGoals`    |
| `recipes`   | Rezepte               | `title`, `category`, `ingredients[]`, `macrosPerServing` |
| `foods`     | Lebensmitteldatenbank | `name`, `calories`, `protein`, `carbs`, `fat` (pro 100g) |
| `dailylogs` | Tagesprotokolle       | `userId`, `date`, `meals[]`                              |

**API-Routen (SvelteKit `+server.js`):**

| Methode | Route                | Funktion                                                              |
| ------- | -------------------- | --------------------------------------------------------------------- |
| `GET`   | `/api/recipes`       | Alle Rezepte abrufen, optional gefiltert nach `category` und `search` |
| `GET`   | `/api/foods`         | Lebensmittel abrufen, optional gefiltert nach `search`                |
| `POST`  | `/api/auth/login`    | Login – validiert Passwort, setzt JWT-Cookie                          |
| `POST`  | `/api/auth/register` | Registrierung – hasht Passwort, erstellt User-Dokument                |

---

##### Deployment

> Die Anwendung wurde lokal entwickelt und getestet (`localhost:5173`).
> Der produktive Link ist: https://macromateeb.netlify.app/

---

##### Besondere Entscheidungen TO DO!

**1. JWT in HttpOnly-Cookie statt localStorage**
Die Session wird als `httpOnly`-Cookie gespeichert statt in `localStorage`. Dies verhindert XSS-Angriffe, bei denen JavaScript im Browser auf den Token zugreifen könnte. Der Kompromiss: Cookies müssen bei jedem Request mitgesendet werden und erfordern serverseitige Validierung.

**2. Clientseitiges Filtern bei Rezepten**
Die Filterung der Rezepte (Suche, Kategorie) findet clientseitig statt – alle Rezepte werden einmalig geladen und mit `$derived` reaktiv gefiltert. Für einen Prototyp mit begrenzter Datenmenge ist dies performant genug und vereinfacht die Implementierung erheblich. Bei grossen Datenmengen wäre serverseitiges Filtern vorzuziehen.

### 3.5 Validate

- **URL der getesteten Version** (separat deployt)

- **Stichprobe:** _[Mit wem wurde getestet? Profil; Anzahl]_
- **Aufgaben/Szenarien:** _[Ausformulierte Testaufgaben]_
- **Kennzahlen & Beobachtungen:** _[z. B. Erfolgsquote, Zeitbedarf, qualitative Findings]_
- **Zusammenfassung der Resultate:** _[Wichtigste Erkenntnisse; 2-4 Sätze]_
- **Abgeleitete Verbesserungen:** _[Anforderungen, die als nächstes umgesetzt werden sollten, priorisiert, kurz begründet; falls Verbesserungen im Prototyp konkret umgesetzt wurden: In Kap. 4 dokumentieren]_

### Ziele der Prüfung:

Die Evaluation soll folgende Fragen beantworten:

1. Können neue Nutzer ohne Anleitung einen Account erstellen und sich einloggen?
2. Ist die Navigation zwischen den Hauptseiten (Recipes, Daily Tracking, Calculator) intuitiv verständlich?
3. Können Nutzer auf der Recipes-Seite gezielt nach einer Mahlzeit suchen und filtern?
4. Verstehen Nutzer die Makro-Darstellung (Kalorien, Protein, Kohlenhydrate, Fett) auf den Cards?
5. Ist der Kalorienkalkulator (TDEE) selbsterklärend und liefert er nachvollziehbare Ergebnisse?

---

### Vorgehen

- **Methode:** Moderierter Usability-Test
- **Setting:** On-site (persönlich vor Ort)
- **Dauer pro Session:** ca. 20–30 Minuten
- **Werkzeuge:** Browser (Chrome/Firefox), Beobachtungsprotokoll, optionale Bildschirmaufnahme
- **Rolle Moderator:** Aufgaben vorlesen, keine Hilfestellung geben, Beobachtungen notieren

---

### Stichprobe

Es wurden **2 Testpersonen** rekrutiert (2 Studenten). Das Profil entspricht der Zielgruppe der Applikation (gesundheitsbewusste Personen mit Interesse an Ernährung und Fitness):

---

### Aufgaben / Szenarien

Die Testpersonen erhielten folgende ausformulierte Aufgaben nacheinander:

**Aufgabe 1 – Login**

> „Du hast bereits einen Account bei MacroMate. Melde dich mit der E-Mail `xxx@example.com` und dem Passwort `Test1234` an."

**Aufgabe 2 – Rezept suchen**

> „Du möchtest ein proteinreiches Frühstücksrezept finden. Suche auf der Rezeptseite nach einem passenden Rezept und öffne es."

**Aufgabe 3 – Kategorie filtern**

> „Filtere die Rezeptliste so, dass nur Mittagessen angezeigt werden."

**Aufgabe 4 – Kalorienbedarf berechnen**

> „Berechne deinen täglichen Kalorienbedarf mit dem Kalkulator. Verwende dazu deine eigenen Angaben (oder: Alter 25, Gewicht 70 kg, Grösse 175 cm, moderat aktiv, Ziel: Gewicht halten)."

**Aufgabe 5 – Daily Tracking**

> „Trage eine Mahlzeit für heute ein. Füge 'Overnight Oats' zum Tagesprotokoll hinzu."

---

### Kennzahlen & Beobachtungen

#### Erfolgsquoten

| Aufgabe               | T1  | T2  | Erfolgsquote |
| --------------------- | --- | --- | ------------ |
| 1 – Login             | ❌  | ❌  | 0%           |
| 2 – Rezept suchen     | ⚠️  | ⚠️  | 75%          |
| 3 – Kategorie filtern | ⚠️  | ⚠️  | 75%          |
| 4 – Kalkulator        | ✅  | ✅  | 75%          |
| 5 – Daily Tracking    | ⚠️  | ⚠️  | 25%          |

> ✅ = Nichts ändern | ⚠️ = Ändern mit tiefer Priorität | ❌ = Ändern mit hoher Priorität

#### Qualitative Findings (Issue Map)

| ID   | Seite          | Schweregrad | Beobachtung                                                                                                   |
| ---- | -------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| U-01 | Daily Tracking | 🟢 Gering   | Der delete Button is nicht schön                                                                              |
| U-02 | Login          | 🟡 Mittel   | Wenn man sich einloggt, sieht man nicht das es funktioniert hat, es hat kein "Profil Bild" was verwirrend ist |
| U-03 | Recipes        | 🟡 Mittel   | Nach dem man filtert passiert nichts, bis man die seite refreshed                                             |
| U-04 | Foods          | 🔴 Kritisch | Es gibt nur optionen für z.b 100 Gramm Chicken Breast, aber nicht z.b 68 Gramm                                |

---

#### Screenshots der Issues

**U-01 – Delete-Button (Daily Tracking)**
![U-01 Delete Button](/static/images/readme/screenshotBEFOREdailytracking.png)
_Der Delete-Button ist visuell nicht vom restlichen UI abgehoben._

---

**U-02 – Fehlendes Feedback nach Login**
![U-02 Login Feedback](/static/images/readme/screenshotBEFOREloginuser.png)
_Nach dem Einloggen gibt es keine sichtbare Bestätigung – kein Username, kein Profilbild in der Navbar._

---

**U-03 – Filter ohne sofortige Wirkung (Recipes)**
![U-03 Filter](/static/images/readme/secreenshotBEFORErecipes.png)
_Der Filter zeigt keine Wirkung, bis die Seite manuell neu geladen wird._

---

**U-04 – Keine freie Mengenangabe (Foods)**
![U-04 Foods Menge](/static/images/readme/screenshotBEFOREfoodmacro.png)
_Es sind nur vordefinierte Mengen wählbar – individuelle Gramm-Angaben sind nicht möglich._

### Zusammenfassung der Resultate

Die Evaluation zeigt, dass die grundlegende Navigation und der Login-Prozess funktionieren, jedoch fehlt nach dem Einloggen eine sichtbare Rückmeldung, Nutzende sind unsicher, ob die Anmeldung erfolgreich war. Der kritischste Befund betrifft die Food-Seite: Die Lebensmitteldatenbank erlaubt nur vordefinierte Mengen (z.B. 100g), was für den praktischen Alltag unbrauchbar ist, da individuelle Gramm-Angaben nicht möglich sind. Auf der Recipes-Seite zeigt der Filter keine sofortige Wirkung, eine Seitenaktualisierung ist nötig, was den Workflow unterbricht. Kleinere visuelle Mängel wie der ungestaltete Delete-Button auf der Tracking-Seite beeinträchtigen den Gesamteindruck.

---

### Abgeleitete Verbesserungen

| Priorität | Issue | Massnahme                                                                          | Begründung                                                                                  |
| --------- | ----- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 🔴 P1     | U-04  | Freies Eingabefeld für Grammangabe bei Lebensmitteln ergänzen                      | Kritischer Blocker – ohne individuelle Mengen ist die Food-Funktion im Alltag nicht nutzbar |
| 🟡 P2     | U-02  | Erfolgs-Feedback nach Login hinzufügen (z.B. Weiterleitung mit Username in Navbar) | Nutzende wissen sonst nicht, ob der Login geklappt hat – grundlegende UX-Erwartung          |
| 🟡 P3     | U-03  | Reaktives Filtern ohne Seitenreload implementieren                                 | Filterung, die nur nach Refresh wirkt, fühlt sich kaputt an und verwirrt Nutzende           |
| 🟢 P4     | U-01  | Delete-Button visuell überarbeiten (Farbe, Icon, Grösse)                           | Kosmetisches Problem – verbessert den Gesamteindruck der Tracking-Seite                     |

---

## 4. Erweiterungen [Optional]

Dokumentiert Erweiterungen über den Mindestumfang hinaus.

> **Hinweis:** Jede Erweiterung ist separat nach dem folgenden Schema zu beschreiben.

### _[4.x Kurzbeschreibung / Titel]_

- **Beschreibung & Nutzen:** _[Was wurde erweitert? Warum?]_
- **Wo umgesetzt:** _[Wie und wo wurde es gemacht? Frontend, Backend, Datenbank?]_
- **Referenz:** _[Wo wird die Erweiterung auch noch beschrieben, z.B. Screenshot oder Beschreibung in einem anderen Kapitel]_
- **Aus Evaluation abgeleitet?:** _[Wurde diese Erweiterung als Folge eines in der Evaluation identifizierten Issues implementiert?]_

> Das folgende **Beispiel** wurde bewusst kurz gehalten. Erweiterungen dürfen auch ausführlicher beschrieben werden.

### 4.1 Tabelle nach Kategorien filtern

- **Beschreibung & Nutzen:** Tabelle X kann nach Kategorie gefiltert werden, weil User typischerweise nur an einer bestimmten Kategorie interessiert sind.
- **Wo umgesetzt:**
  - **Frontend:** Tabelle mit Dropdown in Datei ...
  - **Backend:** Form Action ... in Datei ...
  - **Datenbank:** MongoDB-Query in Datei ...
- **Referenz:** Screenshot in Kap. x.y
- **Aus Evaluation abgeleitet?:** Ja, Issue x.y

## 5. Projektorganisation [Optional]

Beispiele:

- **Repository & Struktur:** _[Link; kurze Strukturübersicht]_
- **Issue-Management:** _[Vorgehen kurz beschreiben]_
- **Commit-Praxis:** _[z. B. sprechende Commits]_

## 6. KI-Deklaration

Die folgende Deklaration beschreibt den Einsatz von KI im Rahmen dieses Projekts.

### 6.1 KI-Tools

- **Eingesetzte Tools:**
  - _Perplexity AI (Claude Sonnet 4.6):_ Hauptsächlich eingesetzt für
    Codevorschläge, Komponentenstruktur und Dokumentation
  - _GitHub Copilot (optional):_ Unterstützung bei Autovervollständigung
    im Code-Editor

- **Zweck & Umfang:**
  - Generierung von SvelteKit-Komponentenstruktur (Navbar, Footer, Login-Page,
    Homepage)
  - Vorschläge für CSS Design Tokens und das globale Farbsystem
  - Erstellung der Projektdokumentation für REAMDME.md syntax
  - Beratung zur Dateistruktur und Best Practices in SvelteKit
  - Die generierten Code-Abschnitte wurden jeweils als Ausgangsbasis verwendet
    und anschliessend manuell angepasst

- **Eigene Leistung (Abgrenzung):**
  - Eigenständige Konzeption der Applikationsidee (MacroMate) und Definition
    der Anforderungen
  - Manuelle Integration aller Komponenten in das SvelteKit-Projekt
  - Anpassung von Farben, Inhalten und Struktur an die eigenen Vorstellungen
  - Testing und Debugging im lokalen Entwicklungsserver
  - Entscheidungen zu Design, Navigation und User Experience

---

### 6.2 Prompt-Vorgehen

Beim Einsatz von KI-Tools wurde grundsätzlich mit klaren, kontextbezogenen
Prompts gearbeitet. Dabei wurde jeweils der bestehende Code als Ausgangslage
mitgeliefert, damit die KI konsistente Vorschläge machen konnte, die zum
vorhandenen Stil und zur Projektstruktur passen.

Die Prompts wurden schrittweise verfeinert, zuerst mit einer allgemeinen
Anfrage, gefolgt von gezielten Anpassungsprompts. Dieses iterative Vorgehen
ermöglichte es, die KI-Ausgaben gezielt zu steuern und unnötige oder
unpassende Vorschläge direkt zu verwerfen.

---

### 6.3 Reflexion

**Nutzen:**
Der Einsatz von KI hat die Entwicklung deutlich beschleunigt, insbesondere
bei repetitiven Aufgaben wie dem Aufsetzen von Bootstrap-Komponenten oder
dem Schreiben von CSS-Variablen.

**Grenzen:**
KI-generierter Code muss stets auf Korrektheit und Kompatibilität geprüft
werden. Vereinzelt wurden veraltete SvelteKit-Syntaxen vorgeschlagen, die manuell
korrigiert werden mussten.

**Risiken & Qualitätssicherung:**

- Alle KI-Vorschläge wurden vor der Integration ins Projekt lokal getestet
- Logik und Berechnungen (z. B. Makro-Kalkulation) wurden eigenständig
  überprüft und nicht blind übernommen

## 7. Anhang [Optional]

Beispiele:

- **Quellen:** _[verwendete Vorlagen/Assets/Modelle; Lizenz/Urheberrecht; ...]_
- **Testskript & Materialien:** _[Link/Datei]_
- **Rohdaten/Auswertung:** _[Link/Datei]_
