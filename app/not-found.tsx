import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Website Design & Development",
    desc: "Professional, responsive websites built to attract customers and generate leads.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/layout-dashboard.svg",
    href: "/services/website-development",
  },
  {
    title: "Search Engine Optimization",
    desc: "Rank higher on Google and get found by customers searching for your services.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/chart-line.svg",
    href: "/services/search-engine-optimization",
  },
  {
    title: "Ecommerce Development",
    desc: "Full-featured online stores with payment integration and smooth checkout.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/shopping-cart.svg",
    href: "/services/ecommerce-website",
  },
  {
    title: "PPC & Google Ads",
    desc: "Targeted ad campaigns that drive qualified traffic and real business results.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/ad.svg",
    href: "/services/pay-per-click-management",
  },
  {
    title: "Brand Identity & UI/UX",
    desc: "Logo design, brand systems and digital experiences that make you stand out.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/palette.svg",
    href: "/services/brand-identity-ui-ux",
  },
  {
    title: "Software & CRM Solutions",
    desc: "Custom software, ERP systems and business automation tailored to your needs.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/settings-cog.svg",
    href: "/services/software-development",
  },
  {
    title: "Secured Web Hosting",
    desc: "Fast, reliable and secure hosting with SSL, uptime monitoring and support.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/server.svg",
    href: "/services/secured-web-hosting",
  },
  {
    title: "Mobile App Development",
    desc: "Android apps and mobile solutions built for Nigerian businesses.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/device-mobile.svg",
    href: "/services/software-development",
  },
];

export default function NotFound() {
  return (
    <>
      <Navbar />

      {/* 404 HERO */}
      <section className="bg-black py-32 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-6">
            Error 404
          </p>

          <h1 className="text-[120px] md:text-[180px] font-black leading-none text-white/10 select-none">
            404
          </h1>

          <h2 className="text-4xl md:text-6xl font-black mt-4 mb-8 -mt-8 relative z-10">
            Page Not Found
          </h2>

          <p className="text-xl text-gray-300 leading-9 mb-12 max-w-2xl mx-auto">
            The page you are looking for does not exist or may have been moved. Let us help you find what you need.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold transition duration-300"
            >
              Go Back Home →
            </Link>

            <Link
              href="/contact"
              className="border border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-black transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#fff7ed] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-[3px] font-bold">
              While You Are Here
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-black mt-5">
              Explore Our Services
            </h2>

            <p className="text-gray-700 max-w-3xl mx-auto mt-6 leading-8">
              Web365 Nigeria offers a full suite of digital services to help your business grow online.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-orange-50 hover:-translate-y-2 transition duration-300 block"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 mb-6">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <h3 className="text-lg font-black text-black mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm">{service.desc}</p>

                <div className="mt-6 text-2xl text-orange-500 transition group-hover:translate-x-1">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-3xl font-black text-black mb-10">
            Quick Links
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Work", href: "/our-work" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Blog", href: "/blog" },
              { label: "Request A Quote", href: "/request-a-quote" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-gray-200 px-6 py-3 font-semibold text-black hover:bg-orange-500 hover:text-white hover:border-orange-500 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}
