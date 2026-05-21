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
  },
  {
    title: "Brand Identity & UI/UX",
    desc: "Logo design, brand systems and modern digital experiences.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/palette.svg",
  },
  {
    title: "Mobile App Development",
    desc: "Android apps, optimization and business integrations.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/device-mobile.svg",
  },
  {
    title: "Software / CRM Solutions",
    desc: "ERP systems, custom software and business automation.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/settings-cog.svg",
  },
  {
    title: "SEO & Digital Marketing",
    desc: "SEO, Google Ads and lead generation strategies.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/chart-line.svg",
  },
  {
    title: "Training & Capacity Building",
    desc: "Professional digital and technology training.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/school.svg",
  },
];

export default function HomeSections() {
  return (
    <>
      {/* ABOUT */}

      <section className="bg-[#fff7ed] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-black leading-[1.1] mb-8">
              Web design Company you will
              <br />
              Love to work with
            </h2>

            <p className="text-gray-700 leading-8 mb-8">
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
                className="bg-orange-100 p-5 rounded-xl flex justify-between items-center text-black font-bold"
              >
                {item}

                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}

      <section className="bg-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl text-black font-black mb-12">
            Trusted by over
            <span className="bg-orange-500 text-white px-3 rounded mx-3">
              826+
            </span>
            Businesses Worldwide
          </h2>

          <div className="overflow-hidden">
            <div className="flex gap-8 animate-logo-scroll w-max">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="w-44 h-24 border rounded-xl shadow-sm flex items-center justify-center p-4 bg-white shrink-0"
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-black mb-5">
              Services you can trust us to deliver
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto">
              Professional digital services for businesses and brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-10 rounded-2xl min-h-[320px] hover:-translate-y-2 transition duration-300 ${
                  index % 2 === 0 ? "bg-white" : "bg-orange-50"
                }`}
              >
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-11 h-11 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-black text-2xl font-black mb-6">
                  {service.title}
                </h3>

                <p className="text-gray-700 leading-8">{service.desc}</p>

                <div className="text-orange-500 text-3xl mt-8">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-orange-500 mb-6">
            Recent Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              "Fashion Ecommerce",
              "Night Club Website",
              "School Website",
              "Business Website",
            ].map((title, index) => (
              <div key={index}>
                <img
                  src={`/projects/project${index + 1}.jpg`}
                  alt={title}
                  className="h-[420px] w-full object-cover rounded-xl"
                />

                <h3 className="text-black text-xl font-bold mt-6">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section
        className="py-28 text-center relative"
        style={{
          backgroundImage: "url('/web-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-orange-500 mb-10">
            A website company that understands your business
          </h2>

          <p className="text-gray-200 leading-9 mb-12">
            We build websites, apps and digital experiences designed to help
            businesses scale.
          </p>

          <a
            href="/services"
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full"
          >
            Our Services
          </a>
        </div>
      </section>
    </>
  );
}