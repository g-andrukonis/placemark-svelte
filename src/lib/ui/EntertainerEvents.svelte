<script lang="ts">
  let { events } = $props();
</script>

<table class="table is-fullwidth">
  <thead>
    <tr>
      <th>Ticket Price</th>
      <th>Access Method</th>
      <th>Organizer</th>
    </tr>
  </thead>
  <tbody>
    {#each events as event}
      <tr>
        <td>
          {event.price}
        </td>
        <td>
          {event.method}
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
