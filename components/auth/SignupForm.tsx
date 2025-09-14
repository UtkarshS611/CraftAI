"use client";

import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    craftType: "",
    region: "",
    story: "",
    instagram: "",
    facebook: "",
    youtube: "",
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    // prepare FormData
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "craftType") {
        payload.append(
          "craftType",
          value
            .split(",")
            .map((c) => c.trim())
            .join(",")
        );
      } else {
        payload.append(key, value);
      }
    });

    if (profileImage) {
      payload.append("profileImage", profileImage);
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: payload, // no headers -> browser sets multipart automatically
    });

    const data = await response.json();
    if (response.ok) setMessage("Signed up successfully!");
    else setMessage(data.message || "Signup failed.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10 shadow-2xl rounded-3xl border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
          Join <span className="text-indigo-400">CraftAI</span>
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          />

          {/* File Upload */}
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-400 focus:ring-2 focus:ring-indigo-500 col-span-2"
          />

          <input
            type="text"
            name="craftType"
            placeholder="Craft Types (comma separated)"
            value={formData.craftType}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="region"
            placeholder="Region / Cultural Heritage"
            value={formData.region}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="bio"
            placeholder="Short Bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 col-span-2"
          />
          <textarea
            name="story"
            placeholder="Your Story"
            value={formData.story}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 col-span-2"
          />
          <input
            type="text"
            name="instagram"
            placeholder="Instagram URL"
            value={formData.instagram}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="facebook"
            placeholder="Facebook URL"
            value={formData.facebook}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="youtube"
            placeholder="YouTube URL"
            value={formData.youtube}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full md:col-span-2 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition"
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p
            className={`text-center mt-4 ${
              message.includes("successfully")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
