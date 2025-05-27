import type { Event } from "$lib/types/event-types";
import mongoose, { Model } from "mongoose";

const eventSchema = new mongoose.Schema<Event>({
  price: Number,
  method: String,
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  entertainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Entertainer"
  },
  lat: Number,
  lng: Number
});

let EventMongoose: Model<Event>;
try {
  EventMongoose = mongoose.model<Event>("Event");
} catch {
  EventMongoose = mongoose.model<Event>("Event", eventSchema);
}

export { EventMongoose };
