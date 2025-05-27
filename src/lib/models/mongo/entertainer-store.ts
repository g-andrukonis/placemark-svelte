import type { Entertainer } from "$lib/types/event-types.js";
import { EntertainerMongoose } from "./entertainer.js";

export const entertainerStore = {
  async find(): Promise<Entertainer[]> {
    const entertainers = await EntertainerMongoose.find().lean();
    return entertainers;
  },

  async findOne(id: string): Promise<Entertainer | null> {
    const entertainer = await EntertainerMongoose.findOne({ _id: id }).lean();
    return entertainer;
  },

  async findBy(lastName: string, firstName: string): Promise<Entertainer | null> {
    const entertainer = await EntertainerMongoose.findOne({
      lastName,
      firstName
    }).lean();
    return entertainer;
  }
};
