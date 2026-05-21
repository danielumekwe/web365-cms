import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img
            src="/logo.png"
            alt="Web365"
            className="h-14 w-auto object-contain mb-6"
          />

          <p className="text-gray-300 leading-8 mb-6">
            Web365 Nigeria helps businesses build professional websites,
            ecommerce stores, software solutions and digital growth systems.
          </p>

          <p className="text-orange-500 font-bold">
            Build. Grow. Scale Online.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-black mb-6 text-orange-500">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-500">About Us</Link></li>
            <li><Link href="/services" className="hover:text-orange-500">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-orange-500">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-orange-500">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-black mb-6 text-orange-500">
            Our Services
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>Website Design</li>
            <li>Ecommerce Development</li>
            <li>SEO & Digital Marketing</li>
            <li>Brand Identity Design</li>
            <li>Mobile App Development</li>
            <li>Software / CRM Solutions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-black mb-6 text-orange-500">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-300">
            <p>
              <span className="text-white font-bold">Phone:</span>
              <br />
              +2348142746695
            </p>

            <p>
              <span className="text-white font-bold">Email:</span>
              <br />
              info@web365ng.com
            </p>

            <p>
              <span className="text-white font-bold">Location:</span>
              <br />
              Lagos, Nigeria
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              f
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              x
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
              in
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Web365 Nigeria. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-orange-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-500">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}