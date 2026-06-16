const services = [
  {
    title: "Website Design & Development",
    desc: "Professional websites built for credibility, speed, mobile responsiveness and lead generation.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/layout-dashboard.svg",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "We help your business rank on Google so customers can find you when searching for your services.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/chart-line.svg",
  },
  {
    title: "Ecommerce Development",
    desc: "Full-featured online stores with payment integration, product management and a smooth checkout experience.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/shopping-cart.svg",
  },
  {
    title: "PPC & Google Ads",
    desc: "Targeted paid advertising campaigns that drive traffic, generate leads and deliver measurable ROI.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/ad.svg",
  },
  {
    title: "Brand Identity & UI/UX",
    desc: "Logo design, brand systems and modern user experiences that leave a lasting impression.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/palette.svg",
  },
  {
    title: "Software & CRM Solutions",
    desc: "Custom software, ERP systems and business automation built around your unique operations.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/settings-cog.svg",
  },
];

const reasons = [
  {
    title: "826+ Businesses Served",
    text: "We have designed websites and delivered digital solutions for businesses across Nigeria and beyond.",
  },
  {
    title: "Nigeria-Based Team",
    text: "Our team understands the Nigerian market, its business culture and the needs of local and national brands.",
  },
  {
    title: "Results-Focused",
    text: "Every project we take on is tied to a real business goal — leads, sales, visibility or credibility.",
  },
  {
    title: "Fast Turnaround",
    text: "We deliver quality work on schedule without compromising standards or cutting corners.",
  },
];

const faqs = [
  {
    q: "Is Web365 Nigeria based in Nigeria?",
    a: "Yes. Web365 Nigeria is a fully Nigerian digital agency with clients across Lagos, Abuja, Port Harcourt and other states nationwide.",
  },
  {
    q: "What makes Web365 the leading website design company in Nigeria?",
    a: "We combine professional design, technical development, SEO expertise and business strategy to deliver websites that actually work for your brand. Our track record of 826+ businesses speaks for itself.",
  },
  {
    q: "Do you handle SEO alongside website design?",
    a: "Yes. We offer SEO services as part of our digital growth packages. Your website is built with SEO-friendly structure from day one.",
  },
  {
    q: "How do I get started with Web365 Nigeria?",
    a: "Simply contact us through our website, send us a message on WhatsApp or request a quote. We will respond within 24 hours.",
  },
  {
    q: "Do you work with businesses outside Lagos?",
    a: "Yes. We serve clients nationwide across all 36 states and also work with Nigerian businesses in the diaspora.",
  },
];

export default function Web365NigeriaPageSections() {
  return (
    <>
      {/* HERO */}
      <section className="bg-black py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
              Web365 Nigeria
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8 leading-tight">
              The Leading Website Design &amp; SEO Company in Nigeria
            </h1>

            <p className="text-xl text-gray-300 leading-9 mb-10">
              Web365 Nigeria is a full-service digital agency helping businesses across Nigeria build websites, rank on Google and grow their brand online.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/request-a-quote"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold"
              >
                Request A Quote →
              </a>

              <a
                href="/portfolio"
                className="border border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-black"
              >
                View Our Work
              </a>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c"
            alt="Web365 Nigeria — Leading Website Design Company"
            className="rounded-[36px] shadow-2xl w-full h-[600px] object-cover"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#fff7ed] py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight mb-8">
              Who Is Web365 Nigeria?
            </h2>

            <p className="text-black leading-9 mb-6">
              Web365 Nigeria is a top-rated website design and digital marketing agency founded to help businesses across Nigeria establish a powerful online presence.
            </p>

            <p className="text-black leading-9 mb-6">
              From startups and SMEs to established corporates, we have built websites, run SEO campaigns, managed Google Ads and developed custom software for over 826 businesses nationwide.
            </p>

            <p className="text-black leading-9">
              We don&apos;t just build websites — we build digital growth systems that attract customers, build trust and drive revenue for your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Professional Website Design",
              "SEO & Google Rankings",
              "Ecommerce Development",
              "Google Ads Management",
              "Brand Identity Design",
              "Custom Software Solutions",
              "Web Hosting Services",
              "Mobile App Development",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow font-bold text-black"
              >
                <span className="text-orange-500 mr-2">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-black py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-[3px] font-bold">
              What We Do
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-5">
              Digital Services Built for Nigerian Businesses
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mt-6 leading-8">
              Everything your business needs to win online — from a professional website to top Google rankings.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group block min-h-[280px] rounded-2xl p-10 ${
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

                <h3 className="mb-5 text-2xl font-black text-black">
                  {service.title}
                </h3>

                <p className="leading-8 text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-[3px] font-bold">
              Why Web365 Nigeria
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-black mt-5">
              Why Businesses Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {reasons.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-3xl mx-auto flex items-center justify-center mb-8">
                  <span className="text-4xl font-black text-orange-500">
                    0{index + 1}
                  </span>
                </div>

                <h4 className="text-2xl font-black text-black mb-4">
                  {item.title}
                </h4>

                <p className="text-gray-700 leading-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-orange-500 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center text-white">
            {[
              { number: "826+", label: "Businesses Served" },
              { number: "10+", label: "Years of Experience" },
              { number: "36", label: "States in Nigeria Covered" },
              { number: "100%", label: "Client-Focused Delivery" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-5xl md:text-6xl font-black mb-3">
                  {stat.number}
                </p>
                <p className="text-white/90 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-[#fff7ed] py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-orange-500 uppercase tracking-[3px] font-bold">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-black mt-5 mb-16">
            Recent Website Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            {[
              { title: "Fashion Ecommerce Website", image: "/projects/project1.jpg" },
              { title: "Night Club Website", image: "/projects/project2.jpg" },
              { title: "School Website", image: "/projects/project3.jpg" },
              { title: "Business Website", image: "/projects/project4.jpg" },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] overflow-hidden shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-black text-black">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/portfolio"
            className="inline-block mt-16 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold"
          >
            View All Projects →
          </a>
        </div>
      </section>

      {/* CONTENT BLOCK */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-10 leading-tight">
            Web365 Nigeria: The #1 Website Design Company in Nigeria
          </h2>

          <p className="text-gray-700 leading-9 mb-6">
            When it comes to website design in Nigeria, Web365 Nigeria stands out as the most trusted and results-driven agency for businesses that want a professional online presence. From Lagos to Abuja, Port Harcourt to Kano — our team has helped hundreds of Nigerian businesses go digital with confidence.
          </p>

          <p className="text-gray-700 leading-9 mb-6">
            We understand that a website is more than just a digital brochure. It is your most important sales tool. That is why every website we build is designed to convert visitors into paying customers, rank well on Google search results and represent your brand professionally 24 hours a day, 7 days a week.
          </p>

          <h3 className="text-3xl font-black text-black mt-14 mb-6">
            Leading SEO Company in Nigeria
          </h3>

          <p className="text-gray-700 leading-9 mb-6">
            Beyond website design, Web365 Nigeria is also recognised as one of the leading SEO companies in Nigeria. Our search engine optimization services help businesses rank on the first page of Google for keywords their customers are searching for daily.
          </p>

          <p className="text-gray-700 leading-9 mb-6">
            We offer complete SEO campaigns covering keyword research, on-page optimization, technical SEO, content strategy, link building and monthly reporting — so you always know how your website is performing.
          </p>

          <h3 className="text-3xl font-black text-black mt-14 mb-6">
            Digital Growth Services for Nigerian Businesses
          </h3>

          <p className="text-gray-700 leading-9 mb-6">
            Web365 Nigeria is a one-stop digital agency. Whether you need a new website, a redesign of your existing site, an ecommerce store, Google Ads management, brand design or custom software — we have the expertise and experience to deliver exactly what your business needs.
          </p>

          <p className="text-gray-700 leading-9">
            Our approach is always business-first. We ask the right questions, understand your goals and then build solutions tailored to your market, audience and objectives.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fff7ed] py-28">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="border border-orange-100 bg-white rounded-2xl p-6"
              >
                <summary className="text-black font-bold cursor-pointer text-xl">
                  {faq.q}
                </summary>
                <p className="mt-6 text-black leading-8">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
