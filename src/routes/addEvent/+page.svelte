<script lang="ts">
  import { curentDataSets, currentEntertainers, currentEvents, loggedInUser, subTitle } from "$lib/runes.svelte";
  import type { ActionResult } from "@sveltejs/kit";
  import Card from "$lib/ui/Card.svelte";
  import AddEventForm from "./AddEventForm.svelte";
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import EventList from "$lib/ui/EventList.svelte";
  import LeafletMap from "$lib/ui/LeafletMap.svelte";
  import { onMount } from "svelte";
  import { refreshEventMap, refreshEventState } from "$lib/services/event-utils";
  import type { Event } from "$lib/types/event-types";
  import type { PageProps } from "./$types";

  subTitle.text = "Organise Venues & Events";

  let { data }: PageProps = $props();
  let message = $state("Add an Event!");

  const handleEventSuccess = () => {
    return async ({ result }: { result: ActionResult }) => {
      if (result.type === "success") {
        const event = result.data as Event;
        currentEvents.events.push(event);
        map.addMarker(event.lat, event.lng, "");
        map.moveTo(event.lat, event.lng);
        refreshEventState(currentEvents.events, currentEntertainers.entertainers);
        message = `Event has been added successfully!`;
      }
    };
  };

  let map: LeafletMap;

  onMount(async () => {
    await refreshEventState(data.events, data.entertainers);
    await refreshEventMap(map);
  });
</script>

<div class="columns">
  <div class="column">
    <Card title="Venue Location">
      <LeafletMap height={50} bind:this={map} />
    </Card>
  </div>
  <div class="column">
    <Card title="Add an Event">
      <AddEventForm entertainerList={currentEntertainers.entertainers} enhanceFn={handleEventSuccess} {message} />
    </Card>
  </div>
</div>
<div class="columns">
  <div class="column">
    <Card title="Venue Stats">
      <Chart data={curentDataSets.eventsByEntertainer} type="bar" />
    </Card>
  </div>
  <div class="column">
    <Card title="Events Added">
      <EventList />
    </Card>
  </div>
</div>
