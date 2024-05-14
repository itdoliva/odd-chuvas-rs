<script>
  export let index

  export let top = 0
  export let right = false
  export let bottom = false
  export let left = 0
  export let width = "100%"
  export let height = false
  export let zIndex = 5
</script>

<div id="pc-{index}" class="panel-content"
  style:top
  style:right
  style:bottom
  style:left
  style:width
  style:height
  style:z-index={zIndex}
>
  <slot />
</div>

<style lang="scss">
  .panel-content {
    position: absolute;
  }
</style>