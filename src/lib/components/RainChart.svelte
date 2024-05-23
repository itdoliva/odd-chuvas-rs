<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { locale } from "svelte-i18n";

	import Drop from '$lib/icons/Drop.svelte';
	import Cloud from '$lib/icons/Cloud.svelte';
  import App from "../App.svelte";

  import dateFormat from "$lib/util/dateFormat"
  import getEnglishOrdinal from "$lib/util/getEnglishOrdinal"
  import format from "$lib/format"
  import DropEmitter from "./DropEmitter.svelte";

  export let index = crypto.randomUUID()

  export let data

  export let xAcc = d => d.date
  export let yAcc = d => d.maxMT
  export let yticks = [ 0, 50, 100, 150, 250 ]

  export let margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 60,
  }

  const maskUUID = crypto.randomUUID()
  
  let w = 300
  let h = 300

  $: plotWidth = w - (margin.left + margin.right)
  $: plotHeight = h - (margin.top + margin.bottom)

  $: xScale = d3.scaleTime()
    .domain(d3.extent(data, xAcc))
    .range([ 0, plotWidth ])

  $: yScale = d3.scaleLinear()
    .domain([ 0, d3.max(data, yAcc) ])
    .range([ 0, plotHeight ])
    
  $: area = d3.area()
    .x(d => xScale(xAcc(d)))
    .y0(yScale(0))
    .y1(d => yScale(yAcc(d)))

  $: line = d3.line()
    .x(d => xScale(xAcc(d)))
    .y(d => yScale(yAcc(d)))

  $: maxRecord = data.find(d => yAcc(d) === d3.max(data, yAcc))



</script>


<div id="rc-{index}" class="rain-chart">
  <DropEmitter {margin} />
  <div class="svg-wrapper" bind:clientWidth={w} bind:clientHeight={h}>
    <svg id={maskUUID}>

      <mask id={maskUUID}>
        <rect width={plotWidth} height={plotHeight} fill="white" />
      </mask>

      <g class="chart">

        <g class="x-axis" transform="translate({margin.left}, 0)">

          <g class="cloud" transform="translate({plotWidth/2 -280*.35/2}, {-180*.35/1.6})">
            <Cloud n={2} width={280*.35} height={180*.35} />
          </g>

          <g class="title" transform="translate({plotWidth/2}, 0)">
            <text>2024</text>
          </g>

          {#each d3.extent(data, xAcc) as xtick (xtick)}
            <g class="tick {xtick}" transform="translate({xScale(xtick)}, 0)">
              <text>
                {dateFormat(xtick, $locale)}
                {#if $locale.slice(0, 2) === "en"}
                  <tspan class="superscript" baseline-shift="super" font-size=".8em" dy=".25em">
                    {getEnglishOrdinal(xtick.getUTCDate())}
                  </tspan>
                {/if}
              </text>
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

        <g class="area" transform="translate({margin.left}, {margin.top})" mask="url(#{maskUUID})">
          <path class="area__fill" d={area(data)} />
          <path class="area__stroke" d={line(data)} />
        </g>

        <g class="annots" transform="translate({margin.left}, {margin.top})">
          <g class="max-label" transform="translate({xScale(xAcc(maxRecord))}, {yScale(yAcc(maxRecord))})">
            <text dx="-1em" dy="1.5em">{format($locale, ".1f", yAcc(maxRecord))} mm</text>
          </g>
        </g>
      </g>

    </svg>
  </div>
</div>

<style lang="scss">
  .rain-chart {
    position: relative;
    width: 100%;
    height: 100%;

    .svg-wrapper {
      width: 100%;
      height: 100%;

      svg {
        width: 100%;
        height: 100%;
        overflow: visible;

        .chart {

          .x-axis, 
          .y-axis {
            font-size: 12px;
            fill: var(--clr-primary);
          }

          .x-axis {
            .title {
              font-size: 1.45em;
              text-anchor: middle;
            }

            .tick {
              &:first-child {
                text-anchor: start;
              }

              &:last-child {
                text-anchor: end;
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

          .area {
            &__fill {
              fill: #EEF0EB;
              opacity: .6;
            }

            &__stroke {
              fill: none;
              stroke: #F4F9E9;
              stroke-width: 4;
              stroke-linecap: round;
              stroke-linejoin: round;
            }
          }

          .annots {
            .max-label {
              font-size: 16px;
              fill: var(--clr-secondary);
            }
          }
        }
      }
    }
  }
</style>