"use client";

import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage("Logged in successfully!");
      // store token in localStorage or cookie
      localStorage.setItem("token", data.token);
    } else {
      setMessage(data.message || "Login failed.");
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-10 shadow-xl rounded-3xl">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Login</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
      {message && <p className="text-center mt-4 text-red-600">{message}</p>}
    </div>
  );
}
