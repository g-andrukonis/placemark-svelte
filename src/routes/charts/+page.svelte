<script lang="ts">
  import { subTitle } from "$lib/runes.svelte";
  import { curentDataSets } from "$lib/runes.svelte";
  // @ts-ignore
  import Chart from "svelte-frappe-charts";
  import Card from "$lib/ui/Card.svelte";
  import type { PageProps } from "./$types";

  import { refreshEventState } from "$lib/services/event-utils";

  subTitle.text = "Venue Report";
  let { data }: PageProps = $props();
  refreshEventState(data.events, data.entertainers);
</script>

<div class="columns">
  <div class="column">
    <Card title="Earnings by Access Method">
      <Chart data={curentDataSets.eventsByMethod} type="bar" />
    </Card>
  </div>
  <div class="column has-text-centered">
    <Card title="Earnings by Entertainer">
      <Chart data={curentDataSets.eventsByEntertainer} type="pie" />
    </Card>
  </div>
</div>

