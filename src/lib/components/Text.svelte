<script>
  export let index = crypto.randomUUID()
  export let size = 'm'
</script>

<p id="text-{index}" class="text padded {size}">
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