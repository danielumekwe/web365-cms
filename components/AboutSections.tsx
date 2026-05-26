import Image from "next/image";
import {
  Target,
  Globe,
  Zap,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function AboutSections() {
  return (
    <>
      {/* HERO */}
      <section className="bg-black pt-44 pb-32 text-white relative">
        <div className="absolute inset-0 bg-orange-500/10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
            About Web365 Nigeria
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8">
            Building Digital Foundations For Growth
          </h1>

          <p className="max-w-4xl mx-auto text-white text-xl leading-9">
            Web365 Nigeria helps businesses establish a strong digital presence
            through websites, ecommerce, SEO and technology solutions.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#fff7ed] py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <img
              src="/images/web365.png"
              alt="Web365 Nigeria founder"
              className="rounded-[32px] shadow-xl"
            />
          </div>

          <div>
            <span className="text-orange-500 uppercase font-semibold">
              Who We Are
            </span>

            <h2 className="text-5xl font-black text-black mt-4 mb-8">
              We Design. You Grow.
            </h2>

            <p className="text-black leading-9 mb-6">
              Web365 Nigeria is a digital solutions company helping
              entrepreneurs, SMEs and organizations build strong online brands.
            </p>

            <p className="text-black leading-9 mb-8">
              We specialize in website development, ecommerce, SEO, branding,
              hosting and digital growth systems.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow">
                <h3 className="text-4xl font-black text-orange-500">500+</h3>
                <p className="mt-3 text-black">Projects Delivered</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow">
                <h3 className="text-4xl font-black text-orange-500">2014</h3>
                <p className="mt-3 text-black">Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* PASSIONATE ABOUT CREATING */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-orange-500 text-white overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[760px] items-center">
          <div className="flex items-center py-28 px-10 lg:px-32">
            <div className="max-w-xl">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-12">
                Passionate
                <br />
                About Creating
                <br />
                Quality Design
              </h2>

              <div className="mb-14">
                <h3 className="text-3xl font-black mb-5">
                  We Love What We Do
                </h3>

                <p className="text-xl leading-9 text-white/90">
                  We are a creative website design agency helping businesses
                  build strong digital experiences, ecommerce platforms and
                  growth-focused websites.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black mb-5">
                  Why Work With Us
                </h3>

                <p className="text-xl leading-9 text-white/90">
                  Our clients choose Web365 Nigeria because we build websites
                  focused on growth, branding, visibility and long-term success.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-full flex items-center justify-end pr-10 lg:pr-16">
            <Image
              src="/images/about-passion.jpg"
              alt="Web365 Nigeria team at work"
              width={1200}
              height={900}
              className="w-[85%] h-[620px] lg:h-[760px] object-cover"
            />
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="bg-black">
        <div className="grid lg:grid-cols-2 items-stretch">
          <div className="px-6 lg:px-16 py-20 lg:py-28 text-white">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-black leading-none mb-10">
                Why
                <br />
                Choose us?
              </h2>

              <div className="space-y-8 text-white/80 text-lg leading-9">
                <p>
                  We know you are here because you want to grow your business
                  online, launch something meaningful, or build a stronger
                  digital presence — not necessarily to read our story.
                </p>

                <p>
                  Our journey into technology started with a passion for
                  creating. Websites, digital platforms and business solutions
                  fascinated us. We spent years learning, experimenting and
                  helping businesses grow online.
                </p>

                <p>
                  Small projects became larger opportunities. Businesses needed
                  websites, ecommerce platforms, hosting, SEO and digital
                  systems that could support growth.
                </p>

                <p>
                  Today Web365 helps businesses, entrepreneurs, schools and
                  organizations establish and strengthen their digital presence
                  through web development, hosting, branding and technology
                  solutions.
                </p>

                <p className="text-white font-bold text-2xl leading-10 pt-4">
                  It has never been only about building websites.
                  <br />
                  It is about building digital foundations for growth.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#e9e9e9] min-h-[500px] lg:min-h-full">
            <img
              src="/images/about-founder.png"
              alt="Web365 Nigeria founder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}