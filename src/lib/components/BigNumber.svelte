<script>
  export let index = crypto.randomUUID()
  export let value
  export let title
  export let size = 'm'
  export let color = "var(--clr-primary)"

  const sizeMap = {
    l: "h2",
    m: "h3",
  }
</script>


<div id="ban-{index}" class="big-number {size}" style:--clr={color}>

  <svelte:element this={sizeMap[size]} class="big-number__value">
    {value}
  </svelte:element>
  
  <p class="big-number__title">
    {title}
  </p>

</div>

<style lang="scss">
  .big-number {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__value,
    &__title {
      text-align: inherit;
      color: var(--clr);
    }

    &__title {
      margin: 0;
    }

    &.l {
      align-items: center;
      text-align: center;
    }
  }
</style>