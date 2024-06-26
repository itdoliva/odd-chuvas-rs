<script>
  // Libraries
	import { onMount } from 'svelte';
  import { _, locale } from "svelte-i18n";

  // Components
  import SlideSection from "$lib/components/SlideSection.svelte";
  import PanelContent from "$lib/components/PanelContent.svelte";
  import List from "$lib/components/List.svelte";
	import Block from '$lib/components/Block.svelte';

  import Headline from "$lib/components/Headline.svelte";
  import ChartTitle from "$lib/components/ChartTitle.svelte";
  import Text from "$lib/components/Text.svelte";

  import BigNumber from "$lib/components/BigNumber.svelte";
  import FillMap from "$lib/components/FillMap.svelte";
  import FillSquare from "$lib/components/FillSquare.svelte";
	import RaindropChart from '$lib/components/RaindropChart.svelte';
	import RainChart from '$lib/components/RainChart.svelte';

  import Clouds from "$lib/components/Clouds.svelte";
  import CityBackground from "$lib/components/CityBackground.svelte";

  // Store
  import { yearMaxRainMT } from "$lib/store/command"
  import { width } from "$lib/store/dimensions"

  // Functions
  import format from "$lib/format"
  import initTimelines from "$lib/scrollytelling";

  export let data

  
  const maxMT = {
    y2009: data.yearsMaxMT.find(d => d.year === 2009).maxMT,
    y2016: data.yearsMaxMT.find(d => d.year === 2016).maxMT,
    y2023: data.yearsMaxMT.find(d => d.year === 2023).maxMT,
    y2024: data.yearsMaxMT.find(d => d.year === 2024).maxMT,
  }
  
  onMount(() => {
    setTimeout(() => {
      initTimelines()
    }, 1000)
  })

</script>

<main class="app">
  <article class="timeline" bind:clientWidth={$width}>

    <SlideSection index=100>

      <svelte:fragment slot="header">
        <Clouds index=102/>
        <Headline index=101>{@html $_("headline.1")}</Headline>
      </svelte:fragment>

      <svelte:fragment slot="body">
        <PanelContent index=110>
          <Text>{$_("p.1")}</Text>
          <Text>{$_("p.2")}</Text>
        </PanelContent>

        <PanelContent index=120>
          <Text>{$_("p.3")}</Text>
        </PanelContent>

        <PanelContent index=130>
          <Text>{$_("p.4")}</Text>
        </PanelContent>

        <PanelContent index=140>
          <Text>{$_("p.5")}</Text>
        </PanelContent>
      </svelte:fragment>

    </SlideSection>

    
    <SlideSection index=200>
      <svelte:fragment slot="header">
        <Headline index=210>{$_("headline.2")}</Headline>
      </svelte:fragment>
    </SlideSection>


    <SlideSection index=1000>

      <svelte:fragment slot="header">
        <PanelContent position="relative">
          <Text size="s" color="var(--clr-annot)">{$_("label.state-precipitation-moving-total")}</Text>
        </PanelContent>

        <Block height="22.5vh">

          <PanelContent index=1010>
            <ChartTitle>
              {@html $_("chart-title.max-year--precipitation-mt.1")
                .replace("${1}", format($locale, ".1f", maxMT.y2009))}
            </ChartTitle>
          </PanelContent>

          <PanelContent index=1020>
            <ChartTitle>
              {@html $_("chart-title.max-year--precipitation-mt.2")
                .replace("${1}", format($locale, ".1f", maxMT.y2016))}
            </ChartTitle>
          </PanelContent>

          <PanelContent index=1030>
            <ChartTitle>
              {@html $_("chart-title.max-year--precipitation-mt.3")
                .replace("${1}", format($locale, ".1f", maxMT.y2023))}
            </ChartTitle>
          </PanelContent>

          <PanelContent index=1040>
            <ChartTitle>
              {@html $_("chart-title.max-year--precipitation-mt.4")
                .replace("${1}", format($locale, ".1f", maxMT.y2024))}
            </ChartTitle>
          </PanelContent>
          
        </Block>
      </svelte:fragment>

      <svelte:fragment slot="body">
        <RaindropChart index=1001 data={data.yearsMaxMT} xShowTo={$yearMaxRainMT} />
      </svelte:fragment>

    </SlideSection>

    <SlideSection index=1100>

      <svelte:fragment slot="header">
        <PanelContent position="relative">
          <Text size="s" color="var(--clr-annot)">{$_("label.state-precipitation-moving-total")}</Text>
        </PanelContent>

      </svelte:fragment>

      <svelte:fragment slot="body">
        <RainChart index=1101 data={data.tragedyMT} />
      </svelte:fragment>

    </SlideSection>
    

    <SlideSection index=300>
      <svelte:fragment slot="header">
        <Headline>{@html $_("headline.1")}</Headline>
        <Text size="s">{$_("note.1")}</Text>
      </svelte:fragment>

      <svelte:fragment slot="body">
        <PanelContent index=310>
          <Text>{$_("p.6")}</Text>
          <Text>{$_("p.7")}</Text>
        </PanelContent>

        <PanelContent index=320>
          <Text>{$_("p.8")}</Text>
        </PanelContent>

        <PanelContent index=330>
          <Text>{$_("p.9")}</Text>
        </PanelContent>

        <PanelContent index=340>
          <Text>{$_("p.10")}</Text>
          <List>
            <Text>{$_("p.11")}</Text>
            <Text>{$_("p.12")}</Text>
          </List>
        </PanelContent>

        <PanelContent index=350>
          <Text>{$_("p.13")}</Text>
        </PanelContent>

        <PanelContent index=360>
          <Text>{$_("p.14")}</Text>
        </PanelContent>

        <PanelContent index=370>
          <Text>{$_("p.15")}</Text>
        </PanelContent>

        <PanelContent index=380>
          <Text>{$_("p.16")}</Text>
        </PanelContent>

        <PanelContent index=390>
          <Text>{$_("p.17")}</Text>
        </PanelContent>

      </svelte:fragment>
    </SlideSection>


    <SlideSection index=400>

      <svelte:fragment slot="header">
        <Text>{$_("chart-title.flooded-cities-pct").replace("${1}", data.cities.total).replace("${2}", data.cities.affected)}</Text>
      </svelte:fragment>

      <svelte:fragment slot="body">
        <PanelContent index=410 padded={true} position="relative">
          <FillSquare p={data.cities.affected / data.cities.total}>
            <BigNumber index=412 value={format($locale, ".1%", data.cities.affected / data.cities.total)} title={$_("label.of-cities")} color="var(--clr-on-light-background)"/>
          </FillSquare>
        </PanelContent>
      </svelte:fragment>

    </SlideSection>


    <SlideSection index=500>

      <svelte:fragment slot="header">
        <Text>{$_("chart-title.area-equivalents")}</Text>
      </svelte:fragment>

      <svelte:fragment slot="body">
        <List>
          <BigNumber index=511 value={format($locale, ",", data.area.cities)} title={$_("label.cities")} />
          <BigNumber index=512 value="{format($locale, ",", data.area.total)} km2" title="({$_("label.total-area")})" />
          <BigNumber index=513 value="{format($locale, ",", data.area.affected)} km2" title="({$_("label.affected-area")} ~ {format($locale, ".0%", data.area.affected / data.area.total)})" />
        </List>
      </svelte:fragment>

    </SlideSection>


    <SlideSection index=600>

      <svelte:fragment slot="header">
        <Text>{$_("chart-title.area-corresponds-to")}</Text>
      </svelte:fragment>

      <svelte:fragment slot="body">
        <List index=610>
          <BigNumber index=611 value={format($locale, ".1%", data.area.ofSpain)} title={$_("label.of-spain")} />
          <BigNumber index=612 value={format($locale, ".1%", data.area.ofItaly)} title={$_("label.of-italy")} />
          <BigNumber index=613 value={format($locale, ".1%", data.area.ofEngland)} title={$_("label.of-england")} />
        </List>

        <PanelContent index=620 height="100%" zIndex=4>
          <FillMap country="spain" p=.389 />
        </PanelContent>

        <PanelContent index=630 height="100%" zIndex=4>
          <FillMap country="italy" p=.653 />
        </PanelContent>

        <PanelContent index=640 height="100%" zIndex=4>
          <FillMap country="unitedKingdom" p=.9407 /> 
        </PanelContent>

      </svelte:fragment>

    </SlideSection>
    

    <SlideSection index=700>

      <svelte:fragment slot="header">
        <Text>{$_("chart-title.people-affected")}</Text>
        <Text>
          <BigNumber index=701 value={format($locale, ",", data.people.affected)} title={$_("label.people")} size="l" />
        </Text>
      </svelte:fragment> 

      <svelte:fragment slot="body">
        <List index=710>
          <BigNumber index=711 value={format($locale, ".1%", data.people.ofBarcelona)} title={$_("label.of-barcelona-population")} />
          <BigNumber index=712 value={format($locale, ".1%", data.people.ofRome)} title={$_("label.of-rome-population")} />
          <BigNumber index=713 value={format($locale, ".1%", data.people.ofParis)} title={$_("label.of-paris-population")} />
        </List>
      </svelte:fragment>

    </SlideSection>
        

    <SlideSection index=800>

      <svelte:fragment slot="header">
        <Text>
          <BigNumber index=801 value={format($locale, ",", data.people.inShelters)} title={$_("label.in-shelters-people-or")} size="l" />
        </Text>
      </svelte:fragment>

      <svelte:fragment slot="body">
        <PanelContent index=810>
          <List>
            <BigNumber index=811 value={format($locale, ",", data.people.displaced)} title={$_("label.displaced-people")} />
            <BigNumber index=812 value={format($locale, ",", data.people.affected)} title={$_("label.affected-people")} />
            <BigNumber index=813 value={format($locale, ",", data.people.injured)} title={$_("label.injured-people")} />
            <BigNumber index=814 value={format($locale, ",", data.people.missing)} title={$_("label.missing-people")} />
            <BigNumber index=815 value={format($locale, ",", data.people.dead)} title={$_("label.dead-people")} />
          </List>
        </PanelContent>
      </svelte:fragment>

    </SlideSection>

    <SlideSection index=900>
      <svelte:fragment slot="body">
        <PanelContent index=910>
          <Text index=911>{$_("p.18")}</Text>
          <Text index=912>{$_("p.19")}</Text>
        </PanelContent>

        <PanelContent index=920>
          <Text index=922>{$_("p.20")}</Text>
        </PanelContent>
      </svelte:fragment>
    </SlideSection>

  </article>

  <aside class="background">
    <CityBackground index=1/>
  </aside>
</main>

<style lang="scss">
  .app {
    position: relative;
    width: 100%;

    article,
    aside.background {
      max-width: 768px;
      margin: 0 auto;
    }

    article {
      position: relative;
      z-index: 1;

    }

    aside.background {
      overflow: hidden;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;

      z-index: 0;
    }
  }
</style>