import type { Event } from "$lib/types/event-types.js";
import { EventMongoose } from "./event.js";

export const eventStore = {
  async find(): Promise<Event[]> {
    const events = await EventMongoose.find().populate("organizer").populate("entertainer").lean();
    return events;
  },

  async findBy(entertainerId: string): Promise<Event[]> {
    const events = await EventMongoose.find({ entertainer: entertainerId }).populate("organizer").populate("entertainer").lean();
    return events;
  },

  async add(event: Event): Promise<Event | null> {
    const newEvent = new EventMongoose({ ...event });
    await newEvent.save();
    const populatedEvent = await EventMongoose.findById(newEvent._id).populate("organizer").populate("entertainer").lean();
    return populatedEvent;
  },

  async delete() {
    await EventMongoose.deleteMany({});
  }
};
