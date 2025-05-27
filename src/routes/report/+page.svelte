<script lang="ts">
  import Card from "$lib/ui/Card.svelte";
  import EventList from "$lib/ui/EventList.svelte";
  import { subTitle } from "$lib/runes.svelte";
  import { refreshEventState } from "$lib/services/event-utils";
  import type { PageProps } from "./$types";

  subTitle.text = "Event Stats";
  let { data }: PageProps = $props();
  refreshEventState(data.events, data.entertainers);
</script>

<Card title="Events">
  <EventList />
</Card>


