const benefits = [
  "Responsive website design",
  "SEO-friendly structure",
  "Fast-loading pages",
  "Conversion-focused layout",
  "WhatsApp and contact form integration",
  "Professional business branding",
];

const faqs = [
  {
    q: "How much does a website cost?",
    a: "The cost depends on the number of pages, design style, features, content, ecommerce needs and integrations. We can give a proper quote after understanding your business goals.",
  },
  {
    q: "How long does website development take?",
    a: "A standard business website can take 1–4 weeks depending on the scope, content availability and required features.",
  },
  {
    q: "Will my website be mobile responsive?",
    a: "Yes. Every website we build is designed to work properly on mobile phones, tablets and desktop screens.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can redesign your existing website to make it more modern, faster, easier to use and better optimized for leads.",
  },
];

export default function WebsitePageSections() {
  return (
    <>
      {/* HERO */}

      <section className="bg-black py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
              Website Development
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8 leading-tight">
              Website Design That Helps Your Business Grow
            </h1>

            <p className="text-xl text-gray-300 leading-9 mb-10">
              We build professional websites for businesses that want to look
              credible, attract customers, generate enquiries and grow online.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold"
              >
                Request A Quote →
              </a>

              <a
                href="/portfolio"
                className="border border-white text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-black"
              >
                View Projects
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Website Development"
              className="rounded-[36px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="bg-[#fff7ed] py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-tight mb-8">
              A Website Is More Than Just Looking Good
            </h2>

            <p className="text-black leading-9 mb-6">
              Your website is your online office. It should explain your
              business clearly, build trust, show your services and make it easy
              for customers to contact you.
            </p>

            <p className="text-black leading-9">
              At Web365 Nigeria, we design websites with business goals in mind.
              We focus on structure, speed, mobile responsiveness, SEO,
              conversion and professional presentation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow text-black font-bold"
              >
                <span className="text-orange-500 mr-2">✓</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}

      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-[3px] font-bold">
              What We Build
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-black mt-5">
              Websites For Different Business Needs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Websites",
                text: "Professional websites for companies, consultants, agencies and organizations.",
              },
              {
                title: "Business Websites",
                text: "Conversion-focused websites for SMEs and growing businesses.",
              },
              {
                title: "Landing Pages",
                text: "Sales pages built for adverts, lead generation and product campaigns.",
              },
              {
                title: "School Websites",
                text: "Clean websites for schools, academies, training centres and institutions.",
              },
              {
                title: "Church & NGO Websites",
                text: "Websites for churches, ministries, non-profits and communities.",
              },
              {
                title: "Website Redesign",
                text: "Modern redesign for old websites that need better speed, layout and trust.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#fff7ed] rounded-[28px] p-8 border border-orange-100"
              >
                <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-2xl mb-8">
                  ✦
                </div>

                <h3 className="text-2xl font-black text-black mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="bg-black py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-500 uppercase tracking-[3px] font-bold">
              Our Process
            </span>

            <h2 className="text-4xl md:text-6xl font-black mt-5">
              How We Build Your Website
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                text: "We understand your business, audience, goals and website requirements.",
              },
              {
                step: "02",
                title: "Design",
                text: "We create a professional layout that matches your brand and message.",
              },
              {
                step: "03",
                title: "Development",
                text: "We build the website, connect forms, optimize pages and test responsiveness.",
              },
              {
                step: "04",
                title: "Launch",
                text: "We deploy the website, connect domain, setup SSL and hand over properly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-[28px] p-8"
              >
                <h3 className="text-orange-500 text-4xl font-black mb-6">
                  {item.step}
                </h3>

                <h4 className="text-white text-2xl font-black mb-4">
                  {item.title}
                </h4>

                <p className="text-gray-300 leading-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="bg-[#fff7ed] py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-500 uppercase tracking-[3px] font-bold">
            Website Samples
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-black mt-5 mb-16">
            Recent Website Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            {[
              {
                title: "Fashion Ecommerce Website",
                image: "/projects/project1.jpg",
              },
              {
                title: "Night Club Website",
                image: "/projects/project2.jpg",
              },
              {
                title: "School Website",
                image: "/projects/project3.jpg",
              },
              {
                title: "Business Website",
                image: "/projects/project4.jpg",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] overflow-hidden shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[550px] object-cover object-top"
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
            View More Projects →
          </a>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-black">
              Website Development FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="border border-gray-200 rounded-2xl p-6"
              >
                <summary className="cursor-pointer text-black text-xl font-bold">
                  {faq.q}
                </summary>

                <p className="text-black leading-8 mt-6">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}