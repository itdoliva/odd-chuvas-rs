<script>
  export let index
  export let align = "center"
</script>

<h2 id="hl-{index}" class="headline padded"
  style:text-align={align}
>
  <slot/>
</h2>