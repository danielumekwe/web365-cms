"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-24">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center"
          >

            <Image
              src="/logo.png"
              alt="Web365 Nigeria"
              width={220}
              height={70}
              className="object-contain"
            />

          </Link>


          {/* DESKTOP */}

          <nav className="hidden lg:flex items-center gap-10 text-white">

            <Link
              href="/"
              className="hover:text-orange-500 transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-orange-500 transition"
            >
              Who We Are
            </Link>


            {/* SERVICES */}

            <div className="relative group py-8 -my-8">

              <button className="flex items-center gap-2 hover:text-orange-500 transition">

                What We Do

                <ChevronDown size={18} />

              </button>


              <div className="absolute top-full left-0 w-[320px] bg-white rounded-3xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">

                <div className="space-y-4 text-black">

                  <Link
                    href="/services/website-development"
                    className="block hover:text-orange-500"
                  >
                    Website Development
                  </Link>

                  <Link
                    href="/services/ecommerce-website"
                    className="block hover:text-orange-500"
                  >
                    Ecommerce Website
                  </Link>

                  <Link
                    href="/services/search-engine-optimization"
                    className="block hover:text-orange-500"
                  >
                    Search Engine Optimization
                  </Link>

                  <Link
                    href="/services/pay-per-click-management"
                    className="block hover:text-orange-500"
                  >
                    PPC Management
                  </Link>

                  <Link
                    href="/services/secured-web-hosting"
                    className="block hover:text-orange-500"
                  >
                    Secured Web Hosting
                  </Link>

                  <Link
                    href="/services/software-development"
                    className="block hover:text-orange-500"
                  >
                    Software Development
                  </Link>

                </div>

              </div>

            </div>


            <Link
              href="/our-work"
              className="hover:text-orange-500 transition"
            >
              Our Work
            </Link>

            <Link
              href="/blog"
              className="hover:text-orange-500 transition"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="hover:text-orange-500 transition"
            >
              Contact
            </Link>

          </nav>


          {/* CTA */}

          <div className="hidden lg:block">

            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-4 rounded-full font-bold transition"
            >
              Get Free Quote
            </Link>

          </div>


          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >

            {mobileOpen ? (
              <X size={34} />
            ) : (
              <Menu size={34} />
            )}

          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      {mobileOpen && (

        <div className="lg:hidden bg-black border-t border-white/10">

          <div className="px-6 py-8 space-y-6 text-white">

            <Link href="/">
              Home
            </Link>

            <Link href="/about">
              Who We Are
            </Link>


            <div>

              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex justify-between items-center w-full"
              >

                What We Do

                <ChevronDown
                  className={`transition ${
                    serviceOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>


              {serviceOpen && (

                <div className="pl-5 mt-5 space-y-4 text-gray-300">

                  <Link href="/services/website-development">
                    Website Development
                  </Link>

                  <Link href="/services/ecommerce-website">
                    Ecommerce Website
                  </Link>

                  <Link href="/services/search-engine-optimization">
                    Search Engine Optimization
                  </Link>

                  <Link href="/services/pay-per-click-management">
                    PPC Management
                  </Link>

                  <Link href="/services/secured-web-hosting">
                    Secured Web Hosting
                  </Link>

                  <Link href="/services/software-development">
                    Software Development
                  </Link>

                </div>

              )}

            </div>


            <Link href="/our-work">
              Our Work
            </Link>

            <Link href="/blog">
              Blog
            </Link>

            <Link href="/contact">
              Contact
            </Link>


            <Link
              href="/contact"
              className="block bg-orange-500 text-center py-4 rounded-full font-bold"
            >
              Get Free Quote
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}