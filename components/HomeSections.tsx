import Link from "next/link";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
];

const services = [
  {
    title: "Web Design & Development",
    desc: "Responsive websites, ecommerce solutions and corporate web experiences.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/layout-dashboard.svg",
    href: "/services/website-development",
  },
  {
    title: "Brand Identity & UI/UX",
    desc: "Logo design, brand systems and modern digital experiences.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/palette.svg",
    href: "/services/brand-identity-ui-ux",
  },
  {
    title: "Mobile App Development",
    desc: "Android apps, optimization and business integrations.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/device-mobile.svg",
    href: "/services/software-development",
  },
  {
    title: "Software / CRM Solutions",
    desc: "ERP systems, custom software and business automation.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/settings-cog.svg",
    href: "/services/software-development",
  },
  {
    title: "SEO & Digital Marketing",
    desc: "SEO, Google Ads and lead generation strategies.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/chart-line.svg",
    href: "/services/search-engine-optimization",
  },
  {
    title: "PPC Management",
    desc: "Professional Google Ads management and optimization.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/ad.svg",
    href: "/services/pay-per-click-management/",
  },
];

export default function HomeSections() {
  return (
    <>
      {/* ABOUT */}
      <section className="bg-[#fff7ed] py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-4xl font-black leading-[1.1] text-black md:text-6xl">
              Web design Company you will
              <br />
              Love to work with
            </h2>

            <p className="mb-8 leading-8 text-gray-700">
              Web365 Nigeria helps businesses build websites, ecommerce stores,
              software and digital growth systems.
            </p>

            <a
              href="/contact"
              className="font-bold text-orange-500 hover:text-orange-600"
            >
              Start a Free Web Design Consultation →
            </a>
          </div>

          <div className="space-y-5">
            {[
              "Training Registration",
              "Careers At Web365",
              "Past Projects",
              "Request A Quote",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-orange-100 p-5 font-bold text-black"
              >
                <span>{item}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="overflow-hidden bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-12 text-4xl font-black text-black md:text-5xl">
            Trusted by over
            <span className="mx-3 rounded bg-orange-500 px-3 text-white">
              826+
            </span>
            Businesses Worldwide
          </h2>

          <div className="overflow-hidden">
            <div className="flex w-max gap-8 animate-logo-scroll">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex h-24 w-44 shrink-0 items-center justify-center rounded-xl border bg-white p-4 shadow-sm"
                >
                  <img
                    src={logo}
                    alt="Client logo"
                    className="max-h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-5 text-4xl font-black text-white md:text-5xl">
              Services you can trust us to deliver
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300">
              Professional digital services for businesses and brands.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group block min-h-[320px] rounded-2xl p-10 transition duration-300 hover:-translate-y-2 ${
                  index % 2 === 0 ? "bg-white" : "bg-orange-50"
                }`}
              >
                <div className="mb-8">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-100">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-11 w-11 object-contain"
                    />
                  </div>
                </div>

                <h3 className="mb-6 text-2xl font-black text-black">
                  {service.title}
                </h3>

                <p className="leading-8 text-gray-700">{service.desc}</p>

                <div className="mt-8 text-3xl text-orange-500 transition group-hover:translate-x-1">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-black text-orange-500">
            Recent Projects
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {["Fashion Ecommerce", "Night Club Website", "School Website", "Business Website"].map(
              (title, index) => (
                <div key={index}>
                  <img
                    src={`/projects/project${index + 1}.jpg`}
                    alt={title}
                    className="h-[420px] w-full rounded-xl object-cover"
                  />
                  <h3 className="mt-6 text-xl font-bold text-black">{title}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-28 text-center"
        style={{
          backgroundImage: "url('/web-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <h2 className="mb-10 text-4xl font-black text-orange-500 md:text-5xl">
            A website company that understands your business
          </h2>

          <p className="mb-12 leading-9 text-gray-200">
            We build websites, apps and digital experiences designed to help
            businesses scale.
          </p>

          <a
            href="/services"
            className="rounded-full bg-orange-500 px-10 py-5 text-white hover:bg-orange-600"
          >
            Our Services
          </a>
        </div>
      </section>
    </>
  );
}