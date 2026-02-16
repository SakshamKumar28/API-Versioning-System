import mongoose from "mongoose";

const URL = process.env.MONGO_URI || "mongodb://localhost:27017/local";
async function connectDb() {
  if (!URL) {
    return console.error("URL is not provided in enviornment variable");
  }
  try {
    await mongoose.connect(URL);
    console.log("MongoBD connected successfully");
  } catch (error) {
    return console.error(`Error connecting in DB: ${error}`);
  }
}

export default connectDb;
