import mongoose from "mongoose";

export const ArtisanSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    profileImage: String,
    phone: String,
    bio: String,
    craftType: [String],
    region: String,
    story: String,
    aiEnhancedStory: String,
    portfolio: [String],
    socialLinks: {
      instagram: String,
      facebook: String,
      youtube: String,
    },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);
