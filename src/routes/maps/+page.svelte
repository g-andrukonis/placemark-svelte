<script lang="ts">
  import { subTitle } from "$lib/runes.svelte";
  import { refreshEventMap, refreshEventState } from "$lib/services/event-utils";
  import Card from "$lib/ui/Card.svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";
  import type { PageProps } from "./$types";

  subTitle.text = "Venue Map";
  let map: LeafletMap;
  let { data }: PageProps = $props();

  onMount(async () => {
    await refreshEventState(data.events, data.entertainers);
    await refreshEventMap(map);
  });
</script>

<Card title="Venue Location">
  <LeafletMap height={60} bind:this={map} />
</Card>


