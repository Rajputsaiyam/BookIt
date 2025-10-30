import Promo from "../models/Promo.js";

export const validatePromo = async (req, res) => {
  try {
    const { code, amount } = req.body;

    const promo = await Promo.findOne({ code: code.toUpperCase() });
    if (!promo) return res.json({ valid: false, message: "Invalid promo code" });

    if (promo.expiresAt && promo.expiresAt < new Date())
      return res.json({ valid: false, message: "Promo expired" });

    let discountedAmount = amount;
    if (promo.type === "percent")
      discountedAmount = Math.round(amount * (1 - promo.value / 100));
    else discountedAmount = Math.max(0, amount - promo.value);

    res.json({ valid: true, discountedAmount, code: promo.code });
  } catch (error) {
    res.status(500).json({ message: "Error validating promo code" });
  }
};
