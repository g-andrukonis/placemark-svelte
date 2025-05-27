import { eventService } from "$lib/services/event-service";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const entertainers = await eventService.getEntertainers();
  const entertainer = entertainers.find((c) => c._id === params.id);
  return {
    entertainer,
    events: await eventService.getEvents(params.id)
  };
};
