import Experience from "../models/Experience.js";
import Slot from "../models/Slot.js";

export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: "Error fetching experiences" });
  }
};

export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) return res.status(404).json({ message: "Experience not found" });

    const slots = await Slot.find({ experienceId: experience._id });
    res.json({ ...experience._doc, slots });
  } catch (error) {
    res.status(500).json({ message: "Error fetching experience details" });
  }
};
