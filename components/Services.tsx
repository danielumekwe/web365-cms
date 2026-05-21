export default function Services() {
  const services = [
    {
      title: "Website Design",
      desc: "Professional corporate, business and ecommerce websites.",
    },
    {
      title: "SEO Services",
      desc: "Improve rankings, traffic and visibility on Google.",
    },
    {
      title: "Google Ads",
      desc: "Generate quality leads and conversions.",
    },
    {
      title: "Hosting & Email",
      desc: "Business hosting, SSL and professional email setup.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">
            OUR SERVICES
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900">
            Digital Solutions For Growing Businesses
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl border border-slate-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 mb-6"></div>

              <h3 className="font-bold text-xl mb-4 text-slate-900">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}