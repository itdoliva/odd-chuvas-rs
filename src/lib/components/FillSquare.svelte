<script>
  import { onMount } from "svelte"; 
  import * as d3 from "d3"

  export let index
  export let p

  const sqrId = crypto.randomUUID()
  const mskId = crypto.randomUUID()

  let offset = 0
  let size = 100

  onMount(() => {
    setInterval(() => {
      offset += Math.PI * .015
    }, 50)
  })

  $: y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, size])

  $: r = .04 * size

  $: d = makeD(size, y(p), offset)


  function makeD(size, height, offset) {
    const amplitude = 4 + Math.sin(offset); // height of each wave
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

    <use class="fill-square__background" href="#{sqrId}" x=0 y=0 />

    <path class="fill-square__bar" d={d}  mask="url(#{mskId})"/>

  </svg>


</div>

<style lang="scss">
  .fill-square {
    width: 100%;
    aspect-ratio: 1/1;

    margin: auto;

    &__background {
      fill: var(--clr-primary);
    }

    &__bar {
      fill: var(--clr-secondary);
    }
  }
</style>