<script>
  import { onMount } from "svelte";
  import { lenis } from "$lib/lenis"

  import App from "$lib/App.svelte";

  onMount(() => {
    lenis()
  })
</script>

<App/>
