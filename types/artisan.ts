export interface IArtisan {
  _id?: string;
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
  createdAt?: Date;
  updatedAt?: Date;
}
