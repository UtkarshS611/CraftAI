"use client";

import { useState } from "react";
import SignupForm from "@/components/auth/SignupForm";
import LoginForm from "@/components/auth/LoginForm";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function AuthPage() {
  const [mode, setMode] = useState<"signup" | "login" | "reset">("signup");

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-50">
      <div>
        {mode === "signup" && <SignupForm />}
        {mode === "login" && <LoginForm />}
        {mode === "reset" && <ResetPasswordForm />}

        <div className="mt-4 text-center">
          {mode !== "signup" && (
            <button
              className="text-indigo-600 font-medium mx-2"
              onClick={() => setMode("signup")}
            >
              Sign Up
            </button>
          )}
          {mode !== "login" && (
            <button
              className="text-indigo-600 font-medium mx-2"
              onClick={() => setMode("login")}
            >
              Login
            </button>
          )}
          {mode !== "reset" && (
            <button
              className="text-red-500 font-medium mx-2"
              onClick={() => setMode("reset")}
            >
              Reset Password
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
