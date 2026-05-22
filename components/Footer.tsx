import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* NEWSLETTER */}

      <div className="border-b border-white/10 bg-[#111111]">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <span className="text-orange-500 uppercase tracking-[3px] font-semibold">
                Newsletter
              </span>

              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
                Subscribe For Digital Insights
              </h2>

              <p className="text-gray-400 leading-8">
                Get updates on websites, SEO, ecommerce, hosting and business
                growth directly in your inbox.
              </p>

            </div>


            <form className="flex flex-col md:flex-row gap-5">

              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white outline-none"
              />

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-bold"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

      </div>


      {/* MAIN FOOTER */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* COMPANY */}

          <div>

            <Image
              src="/logo.png"
              alt="Web365 Nigeria"
              width={220}
              height={70}
              className="mb-8"
            />

            <p className="text-gray-400 leading-8 mb-8">
              Web365 Nigeria helps businesses build, grow and scale online
              through websites, ecommerce, SEO, hosting and software solutions.
            </p>

            <div className="space-y-3 text-gray-300">

              <p>
                📞 +2348142746695
              </p>

              <p>
                ✉️ info@web365ng.com
              </p>

              <p>
                📍 Lagos, Nigeria
              </p>

            </div>

          </div>


          {/* WHO WE ARE */}

          <div>

            <h3 className="text-2xl font-black mb-8 text-orange-500">
              Who We Are
            </h3>

            <div className="space-y-4 text-gray-300">

              <Link
                href="/about"
                className="block hover:text-orange-500"
              >
                About Us
              </Link>

              <Link
                href="/our-work"
                className="block hover:text-orange-500"
              >
                Our Work
              </Link>

              <Link
                href="/blog"
                className="block hover:text-orange-500"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="block hover:text-orange-500"
              >
                Contact
              </Link>

            </div>

          </div>


          {/* WHAT WE DO */}

          <div>

            <h3 className="text-2xl font-black mb-8 text-orange-500">
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

            <h3 className="text-2xl font-black mb-8 text-orange-500">
              Hosting Solutions
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Need domains, hosting, VPS, SSL certificates and business email?
              Visit Webcenter Hosting.
            </p>

            <a
              href="https://webcenter.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-bold"
            >
              Visit Webcenter →
            </a>

          </div>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-400">
            © {new Date().getFullYear()} Web365 Nigeria. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-gray-400">

            <Link
              href="/privacy"
              className="hover:text-orange-500"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-orange-500"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}