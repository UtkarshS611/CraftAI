"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-r from-purple-700 via-pink-600 to-orange-400">
      {/* Background abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-yellow-300 rounded-full opacity-25 blur-3xl animate-spin-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Bridging Tradition and Digital Discovery
        </h1>

        <p className="text-white text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md">
          Reflects the challenge artisans face in reaching modern, digitally-native audiences.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col md:flex-row gap-6">
          <Link
            href="/explore"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Explore Crafts
          </Link>
          <Link
            href="/artisans"
            className="px-8 py-4 border-2 border-white text-white rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Meet Artisans
          </Link>
        </div>

        {/* AI assistant button */}
        <button
          className="mt-8 px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
          onClick={() => alert("AI Assistant coming soon!")}
        >
          Help me find something unique
        </button>
      </div>

      {/* Optional animated background canvas effect */}
      <canvas
        id="hero-canvas"
        className="absolute inset-0 w-full h-full pointer-events-none"
      ></canvas>
    </section>
  );
}
