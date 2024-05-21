<script>
  export let index

  import { width } from "$lib/store/dimensions"
</script>

<div id="crs-{index}" class="carousel hidden-scrollbar" style:width="{$width}px">
  <ol class="carousel__viewport">
    <slot />
  </ol>
</div>

<style lang="scss">
  .carousel {
    overflow-y: hidden;
    // pointer-events: none;

    &__viewport {
      display: flex;
    }
  }
</style>