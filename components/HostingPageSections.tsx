const hostingFeatures = [
  "99.9% Uptime Support",
  "Free SSL Certificate Setup",
  "Business Email Hosting",
  "cPanel Hosting Management",
  "Website Migration Support",
  "Daily / Regular Backup Options",
  "Fast SSD Hosting",
  "24/7 Technical Support",
];

const hostingTypes = [
  {
    title: "Shared Hosting",
    text: "Affordable hosting for startups, SMEs, blogs and business websites that need a reliable online presence.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/server.svg",
  },
  {
    title: "Unlimited Hosting",
    text: "Flexible hosting for growing websites that need more storage, bandwidth and room to scale.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/infinity.svg",
  },
  {
    title: "VPS Hosting",
    text: "More power, control and performance for businesses, developers and applications with higher demands.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/cloud-computing.svg",
  },
  {
    title: "Dedicated Servers",
    text: "Enterprise-grade hosting for businesses that need exclusive server resources, speed and security.",
    icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/server-2.svg",
  },
];

const faqs = [
  {
    q: "Do you provide hosting for business websites?",
    a: "Yes. We provide reliable hosting for corporate websites, ecommerce stores, blogs and business platforms.",
  },
  {
    q: "Can you help me migrate my website?",
    a: "Yes. We can help migrate your website from another hosting provider with minimal downtime.",
  },
  {
    q: "Do you provide business email hosting?",
    a: "Yes. We can set up professional business emails using your domain name.",
  },
];

export default function HostingPageSections() {
  return (
    <>
      <section className="bg-black py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
              Secured Web Hosting
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8 leading-tight">
              Reliable Website & Email Hosting Services
            </h1>

            <p className="text-xl text-gray-300 leading-9 mb-10">
              Keep your website online, secure and fast with dependable hosting
              solutions for businesses, ecommerce stores and web applications.
            </p>

            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-bold"
            >
              Get Hosting Support →
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
            alt="Secure web hosting server"
            className="rounded-[36px] shadow-2xl w-full h-[620px] object-cover"
          />
        </div>
      </section>

      <section className="bg-[#fff7ed] py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-8">
              Hosting That Keeps Your Business Online
            </h2>

            <p className="text-black leading-9 mb-6">
              Your website needs a stable foundation. Poor hosting can slow your
              website, affect customer trust and create downtime.
            </p>

            <p className="text-black leading-9">
              Web365 Nigeria provides hosting support through reliable hosting
              infrastructure, security setup, SSL, business email and technical
              assistance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {hostingFeatures.map((item, index) => (
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

      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-orange-500 mb-8">
            Web Hosting Solutions We Provide
          </h2>

          <p className="text-black max-w-5xl mx-auto leading-8 mb-16">
            From small business websites to resource-heavy platforms, we help you
            choose the right hosting environment for your website needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {hostingTypes.map((item, index) => (
              <div
                key={index}
                className="bg-[#fff7ed] rounded-[32px] p-10 text-center shadow hover:shadow-xl transition"
              >
                <div className="w-24 h-24 bg-orange-100 rounded-3xl mx-auto flex items-center justify-center mb-8">
                  <img src={item.icon} alt={item.title} className="w-12 h-12" />
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

      <section className="bg-black py-28 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Hosting support"
            className="rounded-[36px] w-full h-[560px] object-cover"
          />

          <div>
            <span className="text-orange-500 uppercase tracking-[3px] font-bold">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-6xl font-black mt-5 mb-8">
              Hosting Support Built Around Business Needs
            </h2>

            <p className="text-gray-300 leading-9 mb-6">
              We understand that businesses need more than server space. They
              need support, security, email reliability, SSL configuration and
              help when technical issues arise.
            </p>

            <p className="text-gray-300 leading-9">
              Our hosting service is designed to help businesses stay online,
              protect their digital assets and maintain a reliable web presence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7ed] py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-orange-500 uppercase tracking-[3px] font-bold">
            Hosting Benefits
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-black mt-5 mb-16">
            Everything Your Website Needs To Stay Online
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Secure SSL setup to protect visitors and improve trust.",
              "Professional email setup for business communication.",
              "Hosting support for WordPress, ecommerce and corporate websites.",
              "Migration assistance when moving from another hosting provider.",
              "Performance-friendly hosting for better loading experience.",
              "Technical help when your website or email needs attention.",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] p-8 shadow text-black leading-8"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-black text-black text-center mb-16">
            Web Hosting FAQs
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="border rounded-2xl p-6">
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