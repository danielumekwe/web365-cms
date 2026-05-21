const services = [
  {
    number: "01",
    title: "Website Development",
    subtitle: "Professional websites that make your business look credible and convert visitors into enquiries.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    intro:
      "Your website is often the first serious impression people have about your business. We design websites that are clean, fast, mobile-friendly and structured to help customers understand what you do, trust your brand and contact you easily.",
    details:
      "Whether you need a company website, school website, church website, personal brand website or landing page, we build with your business goal in mind. Every section is planned to communicate value, show credibility and guide visitors toward action.",
    benefits: [
      "Modern homepage and inner page layouts",
      "Mobile responsive design",
      "Clear call-to-action structure",
      "Contact form, WhatsApp and enquiry setup",
      "Speed, security and SEO-friendly foundation",
    ],
  },
  {
    number: "02",
    title: "Ecommerce Website",
    subtitle: "Online stores built to help you sell products, receive payments and manage orders easily.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    intro:
      "An ecommerce website should do more than display products. It should make shopping simple, build confidence and help customers complete purchases without confusion.",
    details:
      "We create ecommerce websites for physical products, digital products and service-based businesses. From product categories to checkout, payment gateway, order notifications and admin management, we set up your store so you can start selling online professionally.",
    benefits: [
      "Product listing and category setup",
      "Cart, checkout and payment integration",
      "Order management dashboard",
      "Customer-friendly product pages",
      "Delivery, coupon and sales features",
    ],
  },
  {
    number: "03",
    title: "SEO",
    subtitle: "Search engine optimization that helps the right customers find your business on Google.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    intro:
      "A beautiful website is not enough if people cannot find it. SEO helps your business appear for the keywords your potential customers are searching for.",
    details:
      "We improve your website structure, pages, content, speed and technical setup so Google can understand your website better. Our SEO approach focuses on visibility, quality traffic and long-term growth rather than empty rankings.",
    benefits: [
      "Keyword research and page optimization",
      "Technical SEO and website structure",
      "Google Search Console setup",
      "Speed and performance improvement",
      "SEO content guidance",
    ],
  },
  {
    number: "04",
    title: "Web Hosting",
    subtitle: "Reliable hosting, domain and business email setup for serious businesses.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    intro:
      "Your website needs a stable home online. Poor hosting can make your website slow, unavailable or insecure, which can affect your reputation and sales.",
    details:
      "We provide hosting support for business websites, ecommerce stores and custom platforms. We also help with domain setup, SSL certificates, email configuration, migration and technical support so your website runs smoothly.",
    benefits: [
      "Business website hosting",
      "Domain and DNS configuration",
      "SSL certificate setup",
      "Business email support",
      "Website migration and maintenance",
    ],
  },
  {
    number: "05",
    title: "Software Development",
    subtitle: "Custom business systems that help you automate processes and manage operations better.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    intro:
      "Many businesses outgrow manual processes, spreadsheets and disconnected tools. Custom software helps you organize operations, serve customers better and save time.",
    details:
      "We build web applications, admin dashboards, CRM systems, booking platforms, internal portals and automation tools. The goal is to create software that fits the way your business works instead of forcing your business into a generic system.",
    benefits: [
      "Custom web applications",
      "Admin dashboards and portals",
      "CRM and ERP-style systems",
      "Booking and management platforms",
      "Business workflow automation",
    ],
  },
];

export default function ServicesPageSections() {
  return (
    <>
      <section className="bg-black py-32 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Our Services
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8">
            Digital Services Built For Business Growth
          </h1>

          <p className="max-w-4xl mx-auto text-white text-xl leading-9">
            We help businesses design, launch and grow with professional
            websites, ecommerce stores, SEO, hosting and custom software
            solutions.
          </p>
        </div>
      </section>

      <section className="bg-[#fff7ed] py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="relative rounded-[36px] overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[520px] object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30"></div>

                  <div className="absolute top-8 left-8 bg-orange-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center text-3xl font-black">
                    {service.number}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[36px] p-10 md:p-14 shadow-xl">
                <span className="text-orange-500 uppercase tracking-[3px] font-bold">
                  Web365 Service
                </span>

                <h2 className="text-4xl md:text-5xl font-black text-black mt-4 mb-5">
                  {service.title}
                </h2>

                <h3 className="text-xl font-bold text-orange-500 leading-8 mb-8">
                  {service.subtitle}
                </h3>

                <p className="text-black leading-9 mb-6">
                  {service.intro}
                </p>

                <p className="text-gray-700 leading-9 mb-10">
                  {service.details}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="bg-[#fff7ed] border border-orange-100 rounded-2xl p-4 text-black font-semibold"
                    >
                      <span className="text-orange-500 mr-2">✓</span>
                      {benefit}
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold"
                >
                  Request This Service →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}