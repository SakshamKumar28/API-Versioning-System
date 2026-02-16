import mongoose from "mongoose";
import dotenv from "dotenv";
import { translateV1ToV2 } from "../src/utils/translationLayer.js";
import UserV1 from "../src/v1/models/User.js";
import UserV2 from "../src/v2/models/User.js";

dotenv.config();

const URL = process.env.MONGO_URI || "mongodb://localhost:27017/local";

async function migrateData() {
  try {
    await mongoose.connect(URL);
    console.log("Connected to MongoDB for Migration");

    const v1Users = await UserV1.find();
    console.log(`Found ${v1Users.length} users in V1 collection.`);

    let migratedCount = 0;
    let skippedCount = 0;

    for (const v1User of v1Users) {
      // Check if user already exists in V2 by email
      const existingV2User = await UserV2.findOne({ email: v1User.email });
      
      if (existingV2User) {
        console.log(`Skipping ${v1User.email} - already exists in V2.`);
        skippedCount++;
        continue;
      }

      // Translate data
      const v2Data = translateV1ToV2({ name: v1User.name, email: v1User.email });
      
      // Create V2 User
      const newV2User = new UserV2(v2Data);
      await newV2User.save();
      console.log(`Migrated ${v1User.email} to V2.`);
      migratedCount++;
    }

    console.log(`\nMigration Complete.`);
    console.log(`Total V1 Users: ${v1Users.length}`);
    console.log(`Migrated: ${migratedCount}`);
    console.log(`Skipped: ${skippedCount}`);

    process.exit(0);

  } catch (error) {
    console.error("Migration Error:", error);
    process.exit(1);
  }
}

migrateData();
