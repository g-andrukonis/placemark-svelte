<script lang="ts">
  import { enhance } from "$app/forms";
  import Coordinates from "$lib/ui/Coordinates.svelte";

  let { entertainerList = [], enhanceFn, message = $bindable("") } = $props();

    let lat = 52.160858;
    let lng = -7.15242;
    let accessMethods = ["standing", "seated"];
</script>

<form method="POST" action="?/addEvent" use:enhance={enhanceFn}>
  <div class="field">
    <label class="label" for="price">Enter Ticket Price:</label>
    <input class="input" id="price" name="price" type="number" />
  </div>
  <div class="field">
    <div class="control">
      <label class="label" for="price">Select Access Method:</label>
      {#each accessMethods as method}
        <input class="radio" type="radio" value={method} name="method" /> {method}
      {/each}
    </div>
  </div>
  <div class="field">
    <label class="label" for="price">Select Entertainer:</label>
    <div class="select">
      <select name="entertainer">
        {#each entertainerList as entertainer}
          <option value={entertainer._id}>{entertainer.lastName},{entertainer.firstName} </option>
        {/each}
      </select>
    </div>
  </div>
  <Coordinates bind:lat bind:lng />
  <div class="field">
    <div class="control">
      <button class="button is-success is-fullwidth">Add</button>
    </div>
  </div>
</form>
<div class="box mt-4">
  <div class="content has-text-centered">
    {message}
  </div>
</div>
