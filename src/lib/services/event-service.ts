import type { EventService, Session, User } from "$lib/types/event-types";
import type { Entertainer, Event } from "$lib/types/event-types";
import { userStore } from "$lib/models/mongo/user-store";
import { eventStore } from "$lib/models/mongo/event-store";
import { entertainerStore } from "$lib/models/mongo/entertainer-store";

export const eventService: EventService = {
  async signup(user: User): Promise<boolean> {
    try {
      const newUser = await userStore.add(user);
      return !!newUser;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async login(email: string, password: string): Promise<Session | null> {
    try {
      const user = await userStore.findBy(email);
      if (user !== null && user.password === password) {
        const session = {
          name: `${user.firstName} ${user.lastName}`,
          token: user._id!.toString(),
          _id: user._id!.toString(),
          email: user.email
        };
        return session;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async addEvent(event: Event) {
    try {
      const newEvent = await eventStore.add(event);
      return JSON.parse(JSON.stringify(newEvent));
    } catch (error) {
      return false;
    }
  },

  async getEntertainers(): Promise<Entertainer[]> {
    try {
      const entertainers = await entertainerStore.find();
      return JSON.parse(JSON.stringify(entertainers));
    } catch (error) {
      return [];
    }
  },

  async getEvents(entertainerId?: string): Promise<Event[]> {
    try {
      if (entertainerId) {
        const events = await eventStore.findBy(entertainerId);
        return JSON.parse(JSON.stringify(events)); 
      } else {
        const events = await eventStore.find();
        return JSON.parse(JSON.stringify(events));
      }
    } catch (error) {
      return [];
    }
  }

};
