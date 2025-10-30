import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    experienceId: { type: mongoose.Schema.Types.ObjectId, ref: "Experience" },
    slotId: { type: mongoose.Schema.Types.ObjectId, ref: "Slot" },
    date: String,
    time: String,
    user: {
      name: String,
      email: String,
      phone: String,
    },
    pricePaid: Number,
    promoCode: String,
    status: {
      type: String,
      enum: ["CONFIRMED", "CANCELLED", "FAILED"],
      default: "CONFIRMED",
    },
    confirmationCode: { type: String, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
