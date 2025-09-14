"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1,
      alpha: Math.random() * 0.6 + 0.2,
      dx: (Math.random() - 0.5) * 0.15,
      dy: (Math.random() - 0.5) * 0.15,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-r from-[#0b1120] via-[#1e293b] to-[#1e1b4b]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-700 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-600 rounded-full opacity-15 blur-3xl animate-ping"></div>
        <div className="absolute top-1/3 left-1/2 w-[350px] h-[350px] bg-amber-400 rounded-full opacity-10 blur-3xl animate-spin-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <motion.h1
          className="text-white text-4xl md:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bridging Tradition and Digital Discovery
        </motion.h1>

        <motion.p
          className="text-slate-300 text-lg md:text-2xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering artisans with AI to share their craft and connect with a global audience.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            href="/explore"
            className="px-8 py-4 bg-gradient-to-r from-cyan-700 to-teal-700 text-white rounded-2xl text-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform"
          >
            Explore Crafts
          </Link>
          <Link
            href="/artisans"
            className="px-8 py-4 border-2 border-slate-500 text-slate-200 rounded-2xl text-lg font-semibold hover:bg-slate-700/30 hover:scale-105 transition"
          >
            Meet Artisans
          </Link>
        </motion.div>

        {/* AI assistant button */}
        <motion.button
          className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-full font-medium shadow-md hover:scale-105 hover:shadow-lg transition-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => alert("AI Assistant coming soon!")}
        >
          Help me find something unique
        </motion.button>
      </div>

      {/* Starfield canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </section>
  );
}
