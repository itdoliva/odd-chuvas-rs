<script>
  // Libraries
  import { _ } from "svelte-i18n";

  // Components
  import Headline from "$lib/components/Headline.svelte";
  import Text from "$lib/components/Text.svelte";

  import BigNumber from "$lib/components/BigNumber.svelte";
  import SlideSection from "$lib/components/SlideSection.svelte";

  import FillMap from "$lib/components/FillMap.svelte";

  export let data
</script>

<div class="app">
  <FillMap country="italy" p=.9 />
  
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
    <BigNumber value={data.area.cities} title={$_("label.cities")} />
    <BigNumber value="{data.area.total} km2" title="({$_("label.total-area")})" />
    <BigNumber value="{data.area.affected} km2" title="({$_("label.affected-area")} ~ 70%)" />
  
    <Text index=102>{$_("chart-title.area-corresponds-to")}</Text>
    <BigNumber value={data.area.ofSpain} title={$_("label.of-spain")} />
    <BigNumber value={data.area.ofItaly} title={$_("label.of-italy")} />
    <BigNumber value={data.area.ofEngland} title={$_("label.of-england")} />
  
    <Text index=103>{$_("chart-title.people-affected")}</Text>
  
    <BigNumber value={data.people.affected} title={$_("people")} />
  
    <BigNumber value={data.people.ofBarcelona} title={$_("of-barcelona-population")} />
    <BigNumber value={data.people.ofRome} title={$_("of-rome-population")} />
    <BigNumber value={data.people.ofParis} title={$_("of-paris-population")} />
  
    <BigNumber value={data.people.inShelters} title={$_("in-shelters-people-or")} />
  
    <BigNumber value={data.people.displaced} title={$_("displaced-people")} />
    <BigNumber value={data.people.affected} title={$_("affected-people")} />
    <BigNumber value={data.people.injured} title={$_("injured-people")} />
    <BigNumber value={data.people.missing} title={$_("missing-people")} />
    <BigNumber value={data.people.dead} title={$_("dead-people")} />
  
    
    <Text index=18>{$_("p.18")}</Text>
    <Text index=19>{$_("p.19")}</Text>
  
    <Text index=10>{$_("p.10")}</Text>
    <Text index=20>{$_("p.20")}</Text>
    <Text index=21>{$_("p.21")}</Text>
  </SlideSection>


</div>

<style lang="scss">
  .app {
    margin: 0 auto;
    max-width: 768px;

    padding: 0 var(--fs-default);
  }
</style>