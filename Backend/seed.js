import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Experience from "./models/Experience.js";

dotenv.config();

const __dirname = path.resolve();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

const seedData = async () => {
  try {
    // Read JSON data
    const dataPath = path.join(__dirname, "data", "experiences.json");
    const rawData = fs.readFileSync(dataPath, "utf-8");
    const experiences = JSON.parse(rawData);

    // Clear old data
    await Experience.deleteMany();

    // Add unique slugs for each record
    const updatedExperiences = experiences.map((exp) => ({
      ...exp,
      slug:
        exp.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") +
        "-" +
        Math.random().toString(36).substring(2, 7),
    }));

    // Insert data
    await Experience.insertMany(updatedExperiences);
    console.log("✅ Data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
