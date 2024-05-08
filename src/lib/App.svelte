<script>
  // Libraries
  import { _ } from "svelte-i18n";

  // Components
  import Headline from "$lib/components/Headline.svelte";
  import Text from "$lib/components/Text.svelte";
</script>

<div class="app">
  <Headline index=1>{@html $_("h1")}</Headline>

  <!-- <Text index=1>{@html $_("p1")}</Text>
  <Text index=2>{@html $_("p2")}</Text>
  <Text index=3>{@html $_("p3")}</Text>
  <Text index=4>{@html $_("p4")}</Text> -->
</div>

<style lang="scss">
  .app {
    margin: 0 auto;
    max-width: 768px;
  }
</style>