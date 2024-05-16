<script>
  import * as d3 from "d3"
	import { onMount } from 'svelte';

	import Drop from '$lib/icons/Drop.svelte';

  export let index 
  
  export let data
  export let strokeWidth = 2
  export let dropHeight = 20
  
  export let xAcc = d => d.year
  export let xticks = [ 2009, 2016, 2023 ]
  export let xShowTo = false

  export let yAcc = d => d.maxMT
  export let yticks = [ 0, 50, 150, 250 ]

  const dropAspectRatio = 1/2
  const dropRawHeight = 40
  const dropScale = dropHeight / dropRawHeight
  const dropWidth = dropAspectRatio * dropHeight

  const maskUUID = crypto.randomUUID()
  
  const margin = {
    top: 80,
    right: 40,
    bottom: 40,
    left: 60,
  }

  let yAxisEl
  let w = 300
  let h = 300

  $: plotWidth = w - (margin.left + margin.right)
  $: plotHeight = h - (margin.top + margin.bottom)

  $: xScale = d3.scalePoint()
    .domain(data.map(xAcc))
    .range([ 0, plotWidth ])
    .padding(.5)

  $: yScale = d3.scaleLinear()
    .domain([ 0, d3.max(data, yAcc) ])
    .range([ 0, plotHeight ])

      
  function getBarState(x) {
    if (!xShowTo) {
      return false
    }

    if (x < xShowTo) {
      return "lt"
    } 
    else if (x === xShowTo) {
      return "eq"
    }
    else {
      "gt"
    }
  }


</script>

<div id="rdc-{index}" class="raindrop-chart"  bind:clientWidth={w} bind:clientHeight={h}>
  <svg>

    <mask id={maskUUID}>
      <rect width={plotWidth} height={plotHeight} fill="white" />
    </mask>

    <g class="chart">

      <g class="x-axis" transform="translate({margin.left}, {margin.top/3})">
        <g transform="translate({plotWidth/2}, 0)">
          <line class="domain" x1={-(plotWidth/2 - xScale.padding() * xScale.step())} x2={plotWidth/2 - xScale.padding() * xScale.step()}/>
        </g>
        
        {#each xticks as xtick (xtick)}
          <g class="tick {xtick}" transform="translate({xScale(xtick)}, 0)">
            <circle />
            <text dy="2em">{xtick}</text>
          </g>
        {/each}
      </g>

      <g class="y-axis" transform="translate(0, {margin.top})">
        {#each yticks as ytick (ytick)} 
          <g class="tick {ytick}" transform="translate(0, {yScale(ytick)})">
            <line x2={w} />
            <text x={margin.left} dx="-.2em" dy="-.3em">{ytick} mm</text>
          </g>
        {/each}
      </g>

      <g class="bars" transform="translate({margin.left}, {margin.top})" mask="url(#{maskUUID})">
        {#each data.map(d => ({ ...d, id: xAcc(d) })) as d (d.id)}
        {@const barHeight = yScale(yAcc(d))}
        {@const lineHeight = barHeight - dropHeight * 1.25}
        {@const x = xAcc(d)}
        {@const state = getBarState(x)}
  
          <g class="bar {x} {state}" transform="translate({xScale(x)}, 0)">
            
            <line class="bar__line" y2={lineHeight} stroke-width={strokeWidth} />
            <g class="bar__drop" transform="translate({-dropWidth/2}, {barHeight - dropHeight})">
              <Drop width={dropWidth} height={dropHeight} />
            </g>
          </g>
        {/each}
      </g>
    </g>

  </svg>
</div>

<style lang="scss">
  .raindrop-chart {
    width: 100%;
    height: 100%;

    svg {
      width: 100%;
      height: 100%;

      .x-axis, 
      .y-axis {
        .tick {
          font-size: 12px;

          text {
            fill: var(--clr-primary);
          }
        }
      }

      .x-axis {
        .domain {
          stroke: var(--clr-primary);
          stroke-width: 1;
        }

        .tick {
          circle {
            r: 5;
            fill: var(--clr-background);
            stroke: var(--clr-primary);
            stroke-width: 1;
          }

          text {
            text-anchor: middle;
          }
        }
      }


      .y-axis {
        .tick {

          line {
            stroke: var(--clr-primary);
            stroke-width: .5;
            stroke-opacity: .5;
          }

          text {
            opacity: .9;
            text-anchor: end;

          }
        }
      }

      .bars {
        .bar {
          &__line {
            stroke: var(--clr-primary);
            // stroke-opacity: .4;
            stroke-dasharray: 12 6;
          }
  
          &__drop {
            fill: var(--clr-primary);
          }

          // &.lt {
          //   opacity: .4;
          // }
        }
      }
    }
  }
</style>