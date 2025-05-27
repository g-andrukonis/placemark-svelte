import { eventService } from "$lib/services/event-service";
import type { Session } from "$lib/types/event-types";
import type { PageServerLoad } from "./$types";
import type { RequestEvent } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
  return {
    events: await eventService.getEvents(),
    entertainers: await eventService.getEntertainers()
  };
};

export const actions = {
  addEvent: async ({ request, cookies }: RequestEvent) => {
    const cookieStr = cookies.get("event-user") as string;
    if (!cookieStr) {
      return { success: false, error: "No user session found" };
    }

    const session = JSON.parse(cookieStr) as Session;
    if (!session) {
      return { success: false, error: "Invalid session" };
    }

    const form = await request.formData();
    const event = {
      price: form.get("price") as unknown as number,
      method: form.get("method") as string,
      entertainer: form.get("entertainer") as string,
      lat: form.get("lat") as unknown as number,
      lng: form.get("lng") as unknown as number,
      organizer: session._id
    };

    try {
      const newEvent = await eventService.addEvent(event);
      return newEvent;
    } catch (error) {
      return {
        success: false,
        error: "Failed to create event"
      };
    }
  }
};
