import type { Entertainer } from "$lib/types/event-types";
import mongoose, { Model } from "mongoose";

const entertainerSchema = new mongoose.Schema<Entertainer>({
  firstName: String,
  lastName: String,
  occupation: String
});

let EntertainerMongoose: Model<Entertainer>;
try {
  EntertainerMongoose = mongoose.model<Entertainer>("Entertainer");
} catch {
  EntertainerMongoose = mongoose.model<Entertainer>("Entertainer", entertainerSchema);
}

export { EntertainerMongoose };
