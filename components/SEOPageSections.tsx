const seoServices = [
  "Keyword Research",
  "On-page SEO",
  "Technical SEO",
  "Local SEO",
  "Google Search Console Setup",
  "Speed Optimization",
  "SEO Content Strategy",
  "Monthly SEO Reporting",
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. Improvements can begin early but strong results often take 3–6 months depending on competition.",
  },
  {
    q: "Can SEO guarantee first page ranking?",
    a: "No ethical SEO company can guarantee rankings. We focus on sustainable growth strategies.",
  },
  {
    q: "Do you offer Local SEO?",
    a: "Yes. We optimize businesses for local searches and Google visibility.",
  },
];

export default function SEOPageSections() {
  return (
    <>
      <section className="bg-black py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
              Search Engine Optimization
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8 leading-tight">
              SEO Services That Help Customers Find Your Business
            </h1>

            <p className="text-xl text-gray-300 leading-9 mb-10">
              Improve visibility, attract traffic and generate leads through
              strategic SEO campaigns.
            </p>

            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-bold"
            >
              Request SEO Audit →
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="SEO Analytics Dashboard"
            className="rounded-[36px] shadow-2xl w-full h-[600px] object-cover"
          />
        </div>
      </section>

      <section className="bg-[#fff7ed] py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-8">
              A Beautiful Website Is Not Enough
            </h2>

            <p className="text-black leading-9 mb-6">
              SEO ensures customers discover your business online when they
              search for your services, products or solutions.
            </p>

            <p className="text-black leading-9">
              We optimize technical structure, content, speed, keywords and
              search visibility so your website can compete better on Google.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {seoServices.map((item, index) => (
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
            Best SEO Company in Lagos Nigeria
          </h2>

          <p className="text-black max-w-5xl mx-auto leading-8 mb-6">
            Web365 Nigeria delivers SEO campaigns focused on visibility,
            rankings, qualified traffic and business growth.
          </p>

          <p className="text-gray-700 max-w-5xl mx-auto leading-8 mb-16">
            We understand your business, your target audience and your market
            before building strategies around goals that matter.
          </p>

          <h3 className="text-4xl md:text-5xl font-black text-black mb-16">
            Here&apos;s How We Do SEO For You
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/search.svg",
                title: "Site Auditing",
                text: "We audit technical SEO issues, page structure, speed, indexing and content gaps affecting ranking.",
              },
              {
                icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/target-arrow.svg",
                title: "Keyword Research",
                text: "We identify keywords your ideal customers search for before choosing a business like yours.",
              },
              {
                icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/chart-bar.svg",
                title: "Search Ranking",
                text: "We optimize pages, content and structure to improve your ranking opportunities on search engines.",
              },
              {
                icon: "https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/report-analytics.svg",
                title: "Rank Monitoring",
                text: "We monitor rankings, traffic movement and competitors so improvements can continue over time.",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="w-24 h-24 bg-orange-100 rounded-3xl mx-auto flex items-center justify-center mb-8">
                  <img src={item.icon} alt={item.title} className="w-12 h-12" />
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

      <section className="bg-[#fff7ed] py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black text-orange-500 mb-8">
            Top SEO Agency in Lagos Nigeria
          </h2>

          <p className="text-gray-700 leading-8 max-w-5xl mx-auto mb-16">
            Our SEO campaigns are designed to improve search visibility, attract
            qualified visitors and increase organic traffic over time.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <img
              src="/seo/ranking1.jpg"
              alt="SEO ranking result screenshot"
              className="rounded-3xl shadow-xl"
            />

            <img
              src="/seo/ranking2.jpg"
              alt="SEO ranking result screenshot"
              className="rounded-3xl shadow-xl"
            />

            <img
              src="/seo/ranking3.jpg"
              alt="SEO ranking result screenshot"
              className="rounded-3xl shadow-xl md:col-span-2"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-black text-black text-center mb-16">
            SEO FAQs
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