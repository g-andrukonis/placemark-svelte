import { curentDataSets, currentEntertainers, currentEvents, loggedInUser } from "$lib/runes.svelte";
import type { Entertainer, Event } from "$lib/types/event-types";
import type LeafletMap from "$lib/ui/LeafletMap.svelte";
//import { eventService } from "./event-service";


export function computeByMethod(eventList: Event[]) {
  eventList.forEach((event) => {
    if (event.method == "standing") {
      curentDataSets.eventsByMethod.datasets[0].values[0] += event.price;
    } else if (event.method == "seated") {
      curentDataSets.eventsByMethod.datasets[0].values[1] += event.price;
    }
  });
}

export function computeByEntertainer(eventList: Event[], entertainers: Entertainer[]) {
  curentDataSets.eventsByEntertainer.labels = [];
  entertainers.forEach((entertainer) => {
    curentDataSets.eventsByEntertainer.labels.push(
      // @ts-ignore
      `${entertainer.lastName}, ${entertainer.firstName}`
    );
    curentDataSets.eventsByEntertainer.datasets[0].values.push(0);
  });

  entertainers.forEach((entertainer, i) => {
    eventList.forEach((event) => {
      if (typeof event.entertainer !== "string") {
        if (event.entertainer._id == entertainer._id) {
          curentDataSets.eventsByEntertainer.datasets[0].values[i] += event.price;
        }
      }
    });
  });
}

export async function refreshEventMap(map: LeafletMap) {
  // const events = await eventService.getEvents(loggedInUser.token);
  currentEvents.events.forEach((event: Event) => {
    if (typeof event.entertainer !== "string") {
      const popup = `${event.entertainer.firstName} ${event.entertainer.lastName}: €${event.price}`;
      map.addMarker(event.lat, event.lng, popup);
    }
  });
  const lastEvent = currentEvents.events[currentEvents.events.length - 1];
  if (lastEvent) map.moveTo(lastEvent.lat, lastEvent.lng);
}

export function clearEventState() {
  currentEvents.events = [];
  currentEntertainers.entertainers = [];
  loggedInUser.email = "";
  loggedInUser.name = "";
  loggedInUser.token = "";
  loggedInUser._id = "";
}

export async function refreshEventState(events: Event[], entertainers: Entertainer[]) {
  currentEvents.events = events;
  currentEntertainers.entertainers = entertainers;
  computeByMethod(currentEvents.events);
  computeByEntertainer(currentEvents.events, currentEntertainers.entertainers);
}

