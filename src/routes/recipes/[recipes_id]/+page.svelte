<script>
  import RecipeDetail from "$lib/components/recipes/RecipeDetail.svelte";

  export let data;
  const { recipe } = data;
</script>

<RecipeDetail {recipe} />
