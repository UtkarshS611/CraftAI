"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">CraftAI</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Empowering artisans with AI-driven tools to tell their stories, 
            expand digital reach, and connect with modern audiences. 
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="hover:text-purple-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/artisans" className="hover:text-purple-400 transition-colors">
                Artisans
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/blog" className="hover:text-purple-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-purple-400 transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="mt-4 flex space-x-4">
            <Link href="https://facebook.com" className="hover:text-purple-400">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" className="hover:text-purple-400">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" className="hover:text-purple-400">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-purple-400">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CraftAI. All rights reserved.
      </div>
    </footer>
  );
}
