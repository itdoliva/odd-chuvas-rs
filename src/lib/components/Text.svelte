<script>
  export let index = crypto.randomUUID()
  export let size = 'm'
  export let align = 'center'
  export let color = 'var(--clr-primary)'
</script>

<p 
  id="text-{index}" 
  class="text padded {size}"
  style:text-align={align}
  style:color={color}
>
  <slot />
</p>

<style lang="scss">
  .text {
    font-size: var(--fs-default);

    &.s {
      font-size: var(--fs-note);
      font-weight: 300;
      line-height: 115%;
    }
  }

</style>