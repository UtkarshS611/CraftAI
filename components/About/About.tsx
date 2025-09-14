"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Users } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600 drop-shadow-lg">
          About <span className="text-indigo-300">CraftAI</span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          At <span className="text-indigo-400 font-semibold">CraftAI</span>, we
          blend the <span className="text-gray-200">artistry of human creativity</span> with the{" "}
          <span className="text-purple-400">power of artificial intelligence</span>.  
          Our mission is to empower artisans, creators, and innovators by
          connecting them to the <span className="text-indigo-300">digital future</span>.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl w-full">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-2xl bg-gray-900/60 backdrop-blur-lg border border-gray-700 shadow-lg hover:shadow-indigo-500/30 transition"
        >
          <Cpu className="w-12 h-12 text-indigo-400 mb-4" />
          <h3 className="text-xl font-bold text-indigo-300 mb-2">AI-Powered</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Harness next-gen artificial intelligence to create, analyze, and
            innovate like never before.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-2xl bg-gray-900/60 backdrop-blur-lg border border-gray-700 shadow-lg hover:shadow-purple-500/30 transition"
        >
          <Globe className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold text-purple-300 mb-2">
            Global Reach
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Connecting artisans and innovators across the globe with digital
            tools and storytelling.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-8 rounded-2xl bg-gray-900/60 backdrop-blur-lg border border-gray-700 shadow-lg hover:shadow-pink-500/30 transition"
        >
          <Users className="w-12 h-12 text-pink-400 mb-4" />
          <h3 className="text-xl font-bold text-pink-300 mb-2">Community</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            A thriving network where creators, developers, and dreamers
            collaborate and inspire each other.
          </p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-100 mb-4">
          Ready to craft the future?
        </h2>
        <p className="text-gray-400 mb-6">
          Join us on our mission to merge{" "}
          <span className="text-indigo-400 font-semibold">art & AI</span> into
          something truly revolutionary.
        </p>
        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:shadow-purple-600/40 transition">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}
