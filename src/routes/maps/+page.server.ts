import { eventService } from "$lib/services/event-service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    events: await eventService.getEvents(),
    entertainers: await eventService.getEntertainers()
  };
}


