<script>
  export let index = crypto.randomUUID()
  export let height = false
</script>

<div id="bl-{index}" class="block padded" style:height>
  <slot />
</div>

<style>
  .block {
    position: relative;
  }
</style>