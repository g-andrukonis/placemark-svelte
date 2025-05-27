import type { Entertainer, Event } from "./types/event-types";

export const subTitle = $state({ text: "" });
export const loggedInUser = $state({ 
    email: "",
    name: "",
    token: "",
    _id: ""
 });

export const currentEvents = $state({ events: [] as Event[] });
export const currentEntertainers = $state({ entertainers: [] as Entertainer[] });

export const curentDataSets = $state({
  eventsByMethod: {
    labels: ["standing", "seated"],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  },
  eventsByEntertainer: {
    labels: [],
    datasets: [
      {
        values: [0, 0]
      }
    ]
  }
})
