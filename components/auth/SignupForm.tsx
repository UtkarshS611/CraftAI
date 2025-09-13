"use client";

import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: "",
    phone: "",
    bio: "",
    craftType: "",
    region: "",
    story: "",
    instagram: "",
    facebook: "",
    youtube: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    // prepare craftType array
    const payload = {
      ...formData,
      craftType: formData.craftType.split(",").map((c) => c.trim()),
      socialLinks: {
        instagram: formData.instagram,
        facebook: formData.facebook,
        youtube: formData.youtube,
      },
    };

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (response.ok) setMessage("Signed up successfully!");
    else setMessage(data.message || "Signup failed.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <div className="w-full max-w-2xl bg-white p-10 shadow-xl rounded-3xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Create Artisan Account</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="profileImage"
            placeholder="Profile Image URL"
            value={formData.profileImage}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="craftType"
            placeholder="Craft Types (comma separated)"
            value={formData.craftType}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="region"
            placeholder="Region / Cultural Heritage"
            value={formData.region}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="bio"
            placeholder="Short Bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 col-span-2"
          />
          <textarea
            name="story"
            placeholder="Your Story"
            value={formData.story}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 col-span-2"
          />
          <input
            type="text"
            name="instagram"
            placeholder="Instagram URL"
            value={formData.instagram}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="facebook"
            placeholder="Facebook URL"
            value={formData.facebook}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="youtube"
            placeholder="YouTube URL"
            value={formData.youtube}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full md:col-span-2 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        {message && <p className="text-center mt-4 text-red-600">{message}</p>}
      </div>
    </div>
  );
}
