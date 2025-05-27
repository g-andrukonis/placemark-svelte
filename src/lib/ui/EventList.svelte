<script lang="ts">
  import { currentEvents } from "$lib/runes.svelte";
</script>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th>Ticket Price</th>
      <th>Access Method</th>
      <th>Entertainer</th>
      <th>Organizer</th>
    </tr>
  </thead>
  <tbody>
    {#each currentEvents.events as event}
      <tr>
        <td>
          {event.price}
        </td>
        <td>
          {event.method}
        </td><td>
          {#if typeof event.entertainer !== "string"}
          <a href={`/entertainer/${event.entertainer._id}`}>{event.entertainer.lastName}, {event.entertainer.firstName}</a>
          {/if}
        </td>
        <td>
          {#if typeof event.organizer !== "string"}
            {event.organizer.lastName}, {event.organizer.firstName}
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>

