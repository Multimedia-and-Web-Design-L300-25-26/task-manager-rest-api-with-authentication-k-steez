import mongoose from "mongoose";
import dotenv from "dotenv";

export default async function globalTeardown() {
  dotenv.config({ path: ".env.test" });
  await mongoose.connect(process.env.MONGO_URI);
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
}
