<script>
  export let index
</script>

<section id="ss-{index}" class="slide-section">
  
  {#if $$slots.header}
    <div class="slide-secion__header">
      <slot name="header"/>
    </div>
  {/if}

  {#if $$slots.body}
    <div class="slide-section__body">
      <slot name="body"/>
    </div>
  {/if}

</section>

<style lang="scss">
  .slide-section {
    height: 100vh;
    height: 100svh;

    padding: calc(var(--fs-default)*3.2) 0;

    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;

    &__header {

    }

    &__body {
      position: relative;
    }
  }
</style>

