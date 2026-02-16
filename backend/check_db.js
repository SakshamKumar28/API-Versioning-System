import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.MONGO_URI || "mongodb://localhost:27017/local";

async function checkCollections() {
  try {
    await mongoose.connect(URL);
    console.log("Connected to MongoDB");

    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    
    console.log("Collections in DB:", collectionNames);

    if (collectionNames.includes("users_v1") && collectionNames.includes("users_v2")) {
        console.log("SUCCESS: Both users_v1 and users_v2 collections exist.");
    } else {
        console.log("FAILURE: Missing one or both collections.");
    }
    
    // Optional: Check document structure
    const v1Users = await mongoose.connection.db.collection("users_v1").find().toArray();
    console.log("V1 Users Sample:", v1Users);

    const v2Users = await mongoose.connection.db.collection("users_v2").find().toArray();
    console.log("V2 Users Sample:", v2Users);

    await mongoose.disconnect();
  } catch (error) {
    console.error("Error:", error);
  }
}

checkCollections();
