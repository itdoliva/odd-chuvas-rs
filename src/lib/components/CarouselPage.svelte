<script>
  export let index

  import { width } from "$lib/store/dimensions"
</script>

<li id="crsp-{index}" class="carousel-page" style:width="{$width}px">
  <slot />
</li>

<style lang="scss">
  .carousel-page {
    position: relative;
    overflow: visible;
    flex: 0 0 100%;
    width: 100%;
    padding: var(--fs-default) 0;
  }
</style>