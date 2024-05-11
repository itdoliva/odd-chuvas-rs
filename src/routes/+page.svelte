<script>
  import { onMount } from "svelte";
  import { lenis } from "$lib/lenis"
  import { isLoading } from 'svelte-i18n';

  import App from "$lib/App.svelte";

  export let data

  onMount(() => {
    lenis()
  })
</script>

{#if !$isLoading}
  <App {data} />
{/if}
