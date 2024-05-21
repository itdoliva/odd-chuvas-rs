<script>
  export let index = crypto.randomUUID()
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
    grid-template-rows: max-content 1fr;
    grid-template-areas: 
      "header"
      "body";
    row-gap: calc(var(--fs-default)*2.4);

    &__header,
    &__body {
      width: 100%;
      position: relative;
    }

    &__header {
      grid-area: header;
    }

    &__body {
      grid-area: body;
    }
  }
</style>

