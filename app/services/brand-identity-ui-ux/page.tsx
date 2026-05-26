import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brand Identity & UI/UX Design",
  description:
    "Web365 provides brand identity, UI/UX design, wireframes, design systems, and modern product experiences for businesses.",
};

export default function BrandIdentityUiUxPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b0b0b] text-white">
        {/* HERO */}
        <section className="bg-black pt-44 pb-32 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[4px] text-orange-500">
                Brand Identity & UI/UX Design
              </span>

              <h1 className="mt-6 mb-8 text-5xl font-black leading-tight md:text-7xl">
                Digital Experiences Designed For Growth
              </h1>

              <p className="mb-10 text-xl leading-9 text-gray-300">
                We design memorable brands and user-friendly digital experiences
                that help businesses look professional, build trust, and convert
                more customers.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-orange-500 px-10 py-5 font-bold text-black transition hover:opacity-90"
                >
                  Discuss Project →
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-white/15 px-10 py-5 font-bold text-white transition hover:border-orange-500"
                >
                  View All Services
                </Link>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                alt="UI and UX design workspace"
                className="h-[620px] w-full rounded-[36px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Logo design and visual identity systems",
            "Website UI/UX design for desktop and mobile",
            "Wireframes, user flows and page planning",
            "Landing pages focused on conversion",
            "Design systems for product consistency",
            "Modern, clean interfaces for startups and businesses",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-base text-gray-200">{item}</p>
            </div>
          ))}
        </section>

        {/* WHAT YOU GET */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <h2 className="text-2xl font-semibold md:text-3xl">
              What you get
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-orange-500">
                  Strategy
                </h3>
                <p className="text-gray-300">
                  We define your brand direction, user goals, and content
                  structure before design starts.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-orange-500">
                  Interface Design
                </h3>
                <p className="text-gray-300">
                  We create polished page layouts, mobile-friendly screens, and
                  clear user journeys.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-orange-500">
                  Consistency
                </h3>
                <p className="text-gray-300">
                  We build reusable styles and visual rules that keep your brand
                  consistent everywhere.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}