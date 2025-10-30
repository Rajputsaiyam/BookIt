import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: String,
  price: Number,
  image: String,
  category: String,
  description: String,
  slots: [
    {
      date: String,
      time: String,
      available: Boolean,
    },
  ],
  slug: {
    type: String,
    unique: true, // Keep it unique, but now we auto-generate
  },
});

export default mongoose.model("Experience", experienceSchema);
