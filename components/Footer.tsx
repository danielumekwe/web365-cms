import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* NEWSLETTER */}
      <div className="border-b border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="font-semibold uppercase tracking-[3px] text-orange-500">
                Newsletter
              </span>

              <h2 className="mb-6 mt-4 text-4xl font-black md:text-5xl">
                Subscribe For Digital Insights
              </h2>

              <p className="leading-8 text-gray-400">
                Get updates on websites, SEO, ecommerce, hosting and business
                growth directly in your inbox.
              </p>
            </div>

            <form className="flex flex-col gap-5 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-8 py-5 text-white outline-none"
              />

              <button
                type="submit"
                className="rounded-full bg-orange-500 px-10 py-5 font-bold hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* COMPANY */}
          <div>
            <Image
              src="/logo.png"
              alt="Web365 Nigeria"
              width={220}
              height={70}
              className="mb-8"
            />

            <p className="mb-8 leading-8 text-gray-400">
              Web365 Nigeria helps businesses build, grow and scale online
              through websites, ecommerce, SEO, hosting and software solutions.
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                <a href="tel:+2348142746695" className="hover:text-orange-500">
                  +2348142746695
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                <a href="mailto:info@web365ng.com" className="hover:text-orange-500">
                  info@web365ng.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* WHO WE ARE */}
          <div>
            <h3 className="mb-8 text-2xl font-black text-orange-500">
              Who We Are
            </h3>

            <div className="space-y-4 text-gray-300">
              <Link href="/about" className="block hover:text-orange-500">
                About Us
              </Link>

              <Link href="/our-work" className="block hover:text-orange-500">
                Our Work
              </Link>

              <Link href="/blog" className="block hover:text-orange-500">
                Blog
              </Link>

              <Link href="/contact" className="block hover:text-orange-500">
                Contact
              </Link>
            </div>
          </div>

          {/* WHAT WE DO */}
          <div>
            <h3 className="mb-8 text-2xl font-black text-orange-500">
              What We Do
            </h3>

            <div className="space-y-4 text-gray-300">
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
                href="/services/software-development"
                className="block hover:text-orange-500"
              >
                Software Development
              </Link>

              <Link
                href="/services/secured-web-hosting"
                className="block hover:text-orange-500"
              >
                Secured Web Hosting
              </Link>
            </div>
          </div>

          {/* HOSTING */}
          <div>
            <h3 className="mb-8 text-2xl font-black text-orange-500">
              Hosting Solutions
            </h3>

            <p className="mb-8 leading-8 text-gray-400">
              Need domains, hosting, VPS, SSL certificates and business email?
              Visit Webcenter Hosting.
            </p>

            <a
              href="https://webcenter.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-orange-500 px-8 py-4 font-bold hover:bg-orange-600"
            >
              Visit Webcenter →
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Web365 Nigeria. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-gray-400">
            <Link href="/privacy" className="hover:text-orange-500">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-orange-500">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}