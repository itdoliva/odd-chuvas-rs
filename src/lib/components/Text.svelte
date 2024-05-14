<script>
  export let index
  export let size = 'm'
</script>

<p id="text-{index}" class="text {size}">
  <slot />
</p>

<style lang="scss">
  .text {
    font-size: var(--fs-default);
    text-align: center;

    &.s {
      font-size: var(--fs-note);
      font-weight: 300;
      line-height: 115%;
      text-align: left;
    }
  }

</style>