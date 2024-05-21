<script>
  export let index = crypto.randomUUID()
  export let position = "absolute"
  export let top = 0
  export let right = false
  export let bottom = false
  export let left = 0
  export let width = "100%"
  export let height = false
  export let zIndex = 5
  export let padded = false

  const isPositioned = position !== "relative"
</script>

<div 
  id="pc-{index}" 
  class="panel-content" 
  class:padded
  style:position
  style:top={isPositioned && top}
  style:right={isPositioned && right}
  style:bottom={isPositioned && bottom}
  style:left={isPositioned && left}
  style:width
  style:height  
  style:z-index={zIndex}
>
  <slot />
</div>

<style lang="scss">
  .panel-content {
  }
</style>