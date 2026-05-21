"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-orange-500/20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-24 flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center"
          >

            <img
              src="/logo.png"
              alt="Web365"
              className="h-14 w-auto object-contain"
            />

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            <Link
              href="/"
              className="text-white hover:text-orange-500 transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-orange-500 transition"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-white hover:text-orange-500 transition"
            >
              Services
            </Link>

            <Link
              href="/portfolio"
              className="text-white hover:text-orange-500 transition"
            >
              Portfolio
            </Link>

            <Link
              href="/blog"
              className="text-white hover:text-orange-500 transition"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-orange-500 transition"
            >
              Contact
            </Link>

          </nav>

          {/* CTA */}

          <Link
            href="/contact"
            className="hidden lg:flex bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Get Free Quote
          </Link>

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />

            </svg>

          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-black border-t border-orange-500/20">

          <div className="px-6 py-8 flex flex-col gap-6">

            <Link
              href="/"
              className="text-white hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-white hover:text-orange-500"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-white hover:text-orange-500"
            >
              Services
            </Link>

            <Link
              href="/portfolio"
              className="text-white hover:text-orange-500"
            >
              Portfolio
            </Link>

            <Link
              href="/blog"
              className="text-white hover:text-orange-500"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-orange-500"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-center font-semibold"
            >
              Get Free Quote
            </Link>

          </div>

        </div>

      )}

    </header>

  );
}