export default function WhyChoose() {
  const features = [
    "Professional & Modern Website Design",
    "SEO Optimized Structure",
    "Fast Hosting & Performance",
    "Lead Generation Strategy",
    "Mobile Responsive Layout",
    "Business Growth Focused",
  ];

  return (
    <section className="bg-white py-28">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <span className="text-blue-600 uppercase font-semibold">
            Why Choose Web365
          </span>

          <h2 className="text-5xl font-black text-black mt-4 mb-8">
            Helping Businesses Build, Grow & Scale Online
          </h2>

          <p className="text-gray-700 leading-8 mb-10">
            We help businesses create conversion-focused websites,
            improve visibility on Google and generate more leads through
            strategic design and digital solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-5">

            {features.map((item, index) => (

              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-black shadow-sm"
              >

                ✅ {item}

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-blue-600 text-white rounded-3xl p-10 shadow-lg">

            <h3 className="text-5xl font-black">
              500+
            </h3>

            <p className="mt-3">
              Websites Delivered
            </p>

          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">

            <h3 className="text-5xl font-black text-black">
              24/7
            </h3>

            <p className="text-gray-700 mt-3">
              Customer Support
            </p>

          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10">

            <h3 className="text-5xl font-black text-black">
              SEO
            </h3>

            <p className="text-gray-700 mt-3">
              Ready Structure
            </p>

          </div>

          <div className="bg-blue-700 text-white rounded-3xl p-10 shadow-lg">

            <h3 className="text-5xl font-black">
              100%
            </h3>

            <p className="mt-3">
              Mobile Friendly
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}