<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { clearEventState } from "$lib/services/event-utils";

  clearEventState();
  if (browser) goto("/");
</script>


