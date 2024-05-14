<script>
  export let index
</script>

<div id="pc-{index}" class="panel-content">
  <slot />
</div>

<style lang="scss">
  .panel-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>