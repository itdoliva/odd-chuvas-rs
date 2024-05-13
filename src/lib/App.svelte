<script>
  // Libraries
  import { _, locale } from "svelte-i18n";

  // Components
  import Headline from "$lib/components/Headline.svelte";
  import Text from "$lib/components/Text.svelte";
  import BigNumber from "$lib/components/BigNumber.svelte";
  import SlideSection from "$lib/components/SlideSection.svelte";
  import FillMap from "$lib/components/FillMap.svelte";

  // Functions
  import format from "$lib/format"

  export let data


</script>

<main class="app">
  
  <SlideSection index=1>
    <Headline index=1>{@html $_("headline.1")}</Headline>

    <Text index=1>{$_("p.1")}</Text>
    <Text index=2>{$_("p.2")}</Text>

    <Text index=3>{$_("p.3")}</Text>

    <Text index=4>{$_("p.4")}</Text>

    <Text index=5>{$_("p.5")}</Text>

    <Headline index=2>{$_("headline.2")}</Headline>

    <Text index=400>{$_("note.1")}</Text>

    <Text index=6>{$_("p.6")}</Text>
    <Text index=7>{$_("p.7")}</Text>

    <Text index=8>{$_("p.8")}</Text>

    <Text index=9>{$_("p.9")}</Text>
    <Text index=10>{$_("p.10")}</Text>
    <Text index=11>{$_("p.11")}</Text>
    <Text index=12>{$_("p.12")}</Text>
    <Text index=13>{$_("p.13")}</Text>
    <Text index=14>{$_("p.14")}</Text>
    <Text index=15>{$_("p.15")}</Text>
    <Text index=16>{$_("p.16")}</Text>
    <Text index=17>{$_("p.17")}</Text>

    <Text index=100>{$_("chart-title.flooded-cities-pct")}</Text>
  
    <Text index=101>{$_("chart-title.area-equivalents")}</Text>
    <BigNumber value={format($locale, ",", data.area.cities)} title={$_("label.cities")} />
    <BigNumber value="{format($locale, ",", data.area.total)} km2" title="({$_("label.total-area")})" />
    <BigNumber value="{format($locale, ",", data.area.affected)} km2" title="({$_("label.affected-area")} ~ {format($locale, ".0%", data.area.affected / data.area.total)})" />
  
    <Text index=102>{$_("chart-title.area-corresponds-to")}</Text>
    <BigNumber value={format($locale, ".1%", data.area.ofSpain)} title={$_("label.of-spain")} />
    <FillMap country="spain" p=.389 />
    <BigNumber value={format($locale, ".1%", data.area.ofItaly)} title={$_("label.of-italy")} />
    <FillMap country="italy" p=.653 />
    <BigNumber value={format($locale, ".1%", data.area.ofEngland)} title={$_("label.of-england")} />
    <FillMap country="unitedKingdom" p=.9407 />
  
    <Text index=103>{$_("chart-title.people-affected")}</Text>
  
    <BigNumber value={format($locale, ",", data.people.affected)} title={$_("label.people")} size="l" />
  
    <BigNumber value={format($locale, ".1%", data.people.ofBarcelona)} title={$_("label.of-barcelona-population")} />
    <BigNumber value={format($locale, ".1%", data.people.ofRome)} title={$_("label.of-rome-population")} />
    <BigNumber value={format($locale, ".1%", data.people.ofParis)} title={$_("label.of-paris-population")} />
  
    <BigNumber value={format($locale, ",", data.people.inShelters)} title={$_("label.in-shelters-people-or")} size="l" />
  
    <BigNumber value={format($locale, ",", data.people.displaced)} title={$_("label.displaced-people")} />
    <BigNumber value={format($locale, ",", data.people.affected)} title={$_("label.affected-people")} />
    <BigNumber value={format($locale, ",", data.people.injured)} title={$_("label.injured-people")} />
    <BigNumber value={format($locale, ",", data.people.missing)} title={$_("label.missing-people")} />
    <BigNumber value={format($locale, ",", data.people.dead)} title={$_("label.dead-people")} />
  
    <Text index=18>{$_("p.18")}</Text>
    <Text index=19>{$_("p.19")}</Text>
  
    <Text index=10>{$_("p.10")}</Text>
    <Text index=20>{$_("p.20")}</Text>
  </SlideSection>

</main>

<style lang="scss">
  .app {
    margin: 0 auto;
    max-width: 768px;

    padding: 0 var(--fs-default);
  }
</style>