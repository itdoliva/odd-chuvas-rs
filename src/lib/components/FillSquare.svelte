<script>
  import { onMount } from "svelte"; 
  import * as d3 from "d3"

  export let index = crypto.randomUUID()
  export let p

  const sqrId = crypto.randomUUID()
  const mskId = crypto.randomUUID()

  let offset = 0
  let size = 100

  onMount(() => {
    setInterval(() => {
      offset += Math.PI * .03
    }, 50)
  })

  $: y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, size])

  $: r = .04 * size

  $: d = makeD(size, y(p), offset)


  function makeD(size, height, offset) {
    const amplitude = 8*Math.sin(offset/2); // height of each wave
    const frequency = 2.4; // frequency of the waves (how many waves)

    const y = size - height

    let d = (
      `M ${size}, ${y} ` +
      `L ${size}, ${size} ` +
      `L 0, ${size} ` + 
      `L 0 ${y} `
    )

    for (let x = 0; x <= size; x += 5) {
      const xRelative = x / size
      const yx = y + (amplitude * Math.sin(2*Math.PI * frequency * xRelative - offset)) ;
      d += `L ${x}, ${yx} `;
    }

    d += "Z"

    return d
  }

</script>

<div id="fs-{index}" class="fill-square" bind:clientWidth={size}>

  <svg width="100%" height="100%">
    <defs>
      <rect id={sqrId} width={size} height={size} rx={r} ry={r} />
    </defs>


    <mask id={mskId}>
      <use href="#{sqrId}" fill="white" />
    </mask>

    <g class="square">
      <use class="square__background" href="#{sqrId}" x=0 y=0 />
      <path class="square__bar" d={d}  mask="url(#{mskId})"/>
    </g>

  </svg>

  <div class="label">
    <slot />
  </div>

</div>

<style lang="scss">
  .fill-square {
    position: relative;
    overflow: hidden;

    width: 100%;
    aspect-ratio: 1/1;

    margin: auto;

    svg {
      .square {
        &__background {
          fill: var(--clr-secondary);
        }
        
        &__bar {
          fill: var(--clr-primary);
        }
      }
    }

    .label {
      position: absolute;
      left: var(--fs-default);
      bottom: var(--fs-default);
    }

  }
</style>