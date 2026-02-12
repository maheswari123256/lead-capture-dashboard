import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    company: String,
    message: String,
    source: {
      type: String,
      enum: ["Website", "Instagram", "Referral", "Other"],
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
