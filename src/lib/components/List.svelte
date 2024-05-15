<script>
  export let index
</script>

<div id="list-{index}" class="list padded">
  <slot />
</div>

<style lang="scss">
  .list {
    display: grid;
    grid-auto-flow: row;
    row-gap: var(--fs-default);
  }
</style>