<script>
  import City from "$lib/icons/City.svelte";

  export let index
</script>

<div id="ctbg-{index}" class="city-background">
  <City />
</div>

<style lang="scss">
  .city-background {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-end;
    pointer-events: none;
  }
</style>