import mongoose from "mongoose";

const WaitlistUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  referralCode: {
    type: String,
  },
  referredBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const WaitlistUser =
  mongoose.models.WaitlistUser ||
  mongoose.model("WaitlistUser", WaitlistUserSchema);

export default WaitlistUser;
