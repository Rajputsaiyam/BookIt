import mongoose from "mongoose";

const promoSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  type: { type: String, enum: ["percent", "flat"], default: "percent" },
  value: Number,
  minAmount: { type: Number, default: 0 },
  expiresAt: Date,
});

export default mongoose.model("Promo", promoSchema);
