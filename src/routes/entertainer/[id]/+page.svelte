<script lang="ts">
  import Card from "$lib/ui/Card.svelte";
  import EntertainerEvents from "$lib/ui/EntertainerEvents.svelte";
  import { subTitle } from "$lib/runes.svelte";

  let { data }: any = $props();
  subTitle.text = `Events for ${data.entertainer.firstName} ${data.entertainer.lastName}`;
</script>

<Card title="Events">
  <EntertainerEvents events={data.events} />
</Card>
