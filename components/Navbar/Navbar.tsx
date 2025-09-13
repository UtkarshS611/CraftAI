"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Crafts", href: "/explore" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <span className="font-bold text-xl md:text-2xl text-gray-800">
              CraftAI
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6 items-center text-gray-700 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-1 py-2 text-gray-700 hover:text-blue-500 transition-colors"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden bg-gray-50"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search crafts or artisans"
              className="px-3 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-full hover:bg-blue-600 transition-colors"
            >
              Search
            </button>
          </form>

          {/* Login / Signup */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/login"
              className="px-5 py-2 border border-gray-400 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full font-medium hover:from-blue-500 hover:to-blue-700 transition-colors"
            >
              Signup
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-gray-700 font-medium bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="px-4 py-2 text-gray-700 font-medium border border-gray-400 rounded-full hover:bg-gray-100 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-white font-medium bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 transition-colors"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
