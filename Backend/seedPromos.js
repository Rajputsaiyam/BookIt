import mongoose from "mongoose";
import dotenv from "dotenv";
import PromoCode from "./models/PromoCode.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const promos = [
  { code: "SAVE10", discountType: "PERCENT", value: 10 },
  { code: "FLAT100", discountType: "FLAT", value: 100 },
];

await PromoCode.insertMany(promos);
console.log("Promo codes added!");
mongoose.connection.close();
