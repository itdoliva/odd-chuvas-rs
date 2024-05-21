<script>
  export let index = crypto.randomUUID()
  export let align = "center"
</script>

<h5 id="ct-{index}" class="chart-title padded" style:text-align={align}>
  <slot/>
</h5>

<style lang="scss">
  .chart-title {
    font-weight: 300;
    letter-spacing: -.02em;
  }
</style>