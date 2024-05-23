<script>
	import { onMount } from 'svelte';
  import { tweened } from "svelte/motion";
  import * as d3 from "d3"
  import { shuffle } from "lodash"

	import Drop from '$lib/icons/Drop.svelte';
	import Cloud from '$lib/icons/Cloud.svelte';
  import { fly } from 'svelte/transition';

  export let index = crypto.randomUUID() 
  
  export let data
  export let strokeWidth = 2
  export let dropHeight = 20
  
  export let xAcc = d => d.year
  export let xShowTo

  export let yAcc = d => d.maxMT
  export let yticks = [ 0, 50, 100, 150, 250 ]
  
  export let margin = {
    top: 80,
    right: 40,
    bottom: 40,
    left: 60,
  }

  const dropAspectRatio = 1/2
  const dropWidth = dropAspectRatio * dropHeight

  const maskUUID = crypto.randomUUID()
  
  const xShowToPos_t = tweened(undefined, { duration: 1000, easing: d3.easeQuadInOut })

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

  $: if (xShowTo){
    $xShowToPos_t = xScale(xShowTo)
  }

  $: clouds = makeCloudData(plotWidth, 90)

  function makeCloudData(pw, every) {
    const nClouds = pw/every

    const clouds = d3.range(nClouds).map(i => {
      const n = 1 + i%3
      const rotate = -Math.PI/4 + 2*Math.PI/4*Math.random()
      const scale = .4 + Math.random() * .3
      const width = 280 * scale
      const height = 180 * scale
      const xOffset = every/2 - every*.5 + 2*Math.random()*.5
      const yOffset = -height*.05 + 2*height*.05*Math.random()
      const x = i*every + xOffset - width/2
      const y = -height/2 + yOffset
      const entryDirection = x < pw/2 ? "left" : "right"

      return { n, x, y, width, height, rotate, entryDirection }
    })

    return shuffle(clouds)
  }



</script>

<div id="rdc-{index}" class="raindrop-chart">
  <div class="svg-wrapper" bind:clientWidth={w} bind:clientHeight={h}>
    <svg>

      <mask id={maskUUID}>
        <rect width={plotWidth} height={plotHeight} fill="white" />
      </mask>

      <g class="chart">

        <g class="x-axis" transform="translate({margin.left}, {margin.top/3})" opacity=.7>

          <g class="x-axis__clouds">
            {#each clouds as d}
              <g class="cloud {d.entryDirection}" transform="translate({d.x}, {d.y})">
                <g transform="rotate({d.rotate})">
                  <Cloud n={d.n} width={d.width} height={d.height} />
                </g>
              </g>
            {/each}
          </g>


          <line class="domain"
            stroke-dasharray={plotWidth}
            stroke-dashoffset={plotWidth}
            x1={xScale.padding() * xScale.step()} 
            x2={plotWidth - xScale.padding() * xScale.step()}
          />
          
          {#each data.map(xAcc) as xtick (xtick)}
            <g class="tick ordinary year-{xtick}" transform="translate({xScale(xtick)}, 0)">
              <circle />
            </g>
          {/each}

          {#if xShowTo}
            <g class="tick special year-{xShowTo}" transform="translate({$xShowToPos_t}, 0)" transition:fly={{ y: -20 }}>
              <circle />
              <text dy="2em">{xShowTo}</text>
            </g>
          {/if}
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
          {@const xPos = xScale(x)}
          {@const visible = x <= xShowTo}
          {@const highlight = x === xShowTo}
    
            <g class="bar year-{x}" class:visible class:highlight 
              style:--entry-delay="{Math.floor(Math.random() * 300)}ms" 
              style:--entry-duration="{700 + Math.floor(Math.random() * 300)}ms"
            >
              <line class="bar__line" x1={xPos} x2={xPos} y2={lineHeight} stroke-width={strokeWidth} />
              <g class="bar__drop" transform="translate({xPos - dropWidth/2}, {barHeight - dropHeight})">
                <Drop width={dropWidth} height={dropHeight} />
              </g>
            </g>
          {/each}
        </g>
      </g>

    </svg>
  </div>
</div>

<style lang="scss">
  .raindrop-chart {
    width: 100%;
    height: 100%;

    .svg-wrapper {
      width: 100%;
      height: 100%;

      svg {
        width: 100%;
        height: 100%;
        overflow: visible;
  
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
              r: 2;
              fill: var(--clr-primary);
            }
  
            text {
              text-anchor: middle;
              opacity: 0;
            }
  
            &.special {
              circle {
                r: 5;
                fill: var(--clr-background);
                stroke: var(--clr-primary);
                stroke-width: 1;
              }
    
              text {
                opacity: 1;
              }
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
            opacity: .4;
            transform: translate(0, -100%);
            transition: opacity 500ms ease-in-out, transform var(--entry-duration) ease-out var(--entry-delay);

            &__line {
              stroke: var(--clr-primary);
              stroke-dasharray: 12 6;
            }
    
            &__drop {
              fill: var(--clr-primary);
            }

            &.highlight {
              opacity: 1;
            }

            &.visible {
              transform: translate(0, 0);
              transition: opacity 500ms ease-in-out, transform var(--entry-duration) ease-in var(--entry-delay);
            }
  

          }
        }
      }
    }

  }
</style>