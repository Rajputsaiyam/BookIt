import Booking from "../models/Booking.js";
import Slot from "../models/Slot.js";
import { nanoid } from "nanoid";

export const createBooking = async (req, res) => {
  try {
    const { experienceId, slotId, date, time, user, pricePaid, promoCode } = req.body;

    // Atomically check and update slot
    const slot = await Slot.findOneAndUpdate(
      { _id: slotId, booked: { $lt: "$capacity" } },
      { $inc: { booked: 1 } },
      { new: true }
    );

    if (!slot) return res.status(409).json({ message: "Slot full or not found" });

    const booking = new Booking({
      experienceId,
      slotId,
      date,
      time,
      user,
      pricePaid,
      promoCode,
      confirmationCode: "BOOK-" + nanoid(8),
    });

    await booking.save();
    res.status(201).json({ message: "Booking confirmed", booking });
  } catch (error) {
    res.status(500).json({ message: "Booking failed", error });
  }
};
