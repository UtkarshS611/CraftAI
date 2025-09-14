import mongoose, { Model } from "mongoose";
import { ArtisanSchema } from "@/schemas/ArtisanSchema";

export interface IArtisan extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  profileImage?: string;
  phone?: string;
  bio?: string;
  craftType?: string[];
  region?: string;
  story?: string;
  aiEnhancedStory?: string;
  portfolio?: string[];
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
  verified?: boolean;
}

const Artisan: Model<IArtisan> = mongoose.models.Artisan || mongoose.model<IArtisan>("Artisan", ArtisanSchema);

export default Artisan;
