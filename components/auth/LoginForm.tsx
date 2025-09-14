"use client";

import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [resetEmail, setResetEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showReset, setShowReset] = useState(false);

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
      localStorage.setItem("token", data.token); // store token
    } else {
      setMessage(data.message || "Login failed.");
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const response = await fetch("/api/auth/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: resetEmail }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage("Password reset link sent to your email!");
      setShowReset(false);
    } else {
      setMessage(data.message || "Reset failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-10 shadow-2xl rounded-3xl border border-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-100 mb-6">
          Welcome Back to <span className="text-indigo-400">CraftAI</span>
        </h2>

        {!showReset ? (
          <>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <button
                type="submit"
                className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition"
              >
                Login
              </button>
            </form>

            <p
              onClick={() => setShowReset(true)}
              className="mt-4 text-center text-indigo-400 hover:underline cursor-pointer text-sm"
            >
              Forgot Password?
            </p>
          </>
        ) : (
          <>
            <form className="space-y-5" onSubmit={handleResetPassword}>
              <input
                type="email"
                name="resetEmail"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="w-full p-4 rounded-xl bg-gray-800 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <button
                type="submit"
                className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition"
              >
                Send Reset Link
              </button>
            </form>

            <p
              onClick={() => setShowReset(false)}
              className="mt-4 text-center text-indigo-400 hover:underline cursor-pointer text-sm"
            >
              Back to Login
            </p>
          </>
        )}

        {message && (
          <p
            className={`text-center mt-4 ${
              message.includes("successfully") || message.includes("sent")
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
