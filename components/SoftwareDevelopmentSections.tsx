const services = [
  "Custom Software Development",
  "CRM Development",
  "ERP Solutions",
  "Business Automation",
  "SaaS Applications",
  "Web Applications",
  "API Integrations",
  "Dashboard Systems",
];

const solutions = [
  {
    title: "Custom Business Software",
    image:"https://cdn-icons-png.flaticon.com/512/2881/2881142.png",
    text:"Tailored software systems built around your workflow and business processes.",
  },

  {
    title: "CRM Solutions",
    image:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    text:"Customer management platforms for sales, support and lead tracking.",
  },

  {
    title: "ERP Systems",
    image:"https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
    text:"Centralized management systems connecting departments and operations.",
  },

  {
    title: "Automation Systems",
    image:"https://cdn-icons-png.flaticon.com/512/4334/4334887.png",
    text:"Automate repetitive tasks and improve business efficiency.",
  },
];

export default function SoftwareDevelopmentSections() {
  return (
    <>
      {/* HERO */}

      <section className="bg-black pt-44 pb-32 text-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
              Software Development
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8 leading-tight">
              Software Solutions Built For Growth
            </h1>

            <p className="text-xl text-gray-300 leading-9 mb-10">
              Build powerful software systems, business tools and digital
              platforms tailored to your organization.
            </p>

            <a
              href="/contact"
              className="bg-orange-500 px-10 py-5 rounded-full font-bold"
            >
              Discuss Project →
            </a>

          </div>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt=""
            className="rounded-[36px] h-[620px] object-cover w-full"
          />

        </div>

      </section>


      {/* ABOUT */}

      <section className="bg-[#fff7ed] py-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl md:text-6xl font-black text-black mb-8">
              Software That Works Around Your Business
            </h2>

            <p className="text-black leading-9 mb-6">
              We design systems that simplify operations, improve productivity
              and help businesses scale efficiently.
            </p>

            <p className="text-black leading-9">
              From internal dashboards to customer-facing platforms, we build
              solutions around your exact needs.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-5">

            {services.map((item,index)=>(

              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow font-bold text-black"
              >

                ✓ {item}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* SOLUTIONS */}

      <section className="bg-white py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black text-orange-500 mb-8">
              Software Solutions We Build
            </h2>

            <p className="text-black max-w-5xl mx-auto leading-8">
              We create software systems for startups, SMEs and enterprises.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {solutions.map((item,index)=>(

              <div
                key={index}
                className="bg-[#fff7ed] rounded-[32px] p-10 shadow text-center"
              >

                <img
                  src={item.image}
                  alt=""
                  className="w-24 h-24 object-contain mx-auto mb-8"
                />

                <h3 className="text-2xl font-black text-black mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-700 leading-8">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* INDUSTRIES */}

      <section className="bg-black py-28 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black">
              Industries We Serve
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Education",
              "Healthcare",
              "Real Estate",
              "Logistics",
              "Finance",
              "Corporate Organizations",
            ].map((item,index)=>(

              <div
                key={index}
                className="bg-white/10 rounded-3xl p-10 text-center text-2xl font-bold"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-[#fff7ed] py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black text-black mb-8">
            Need Custom Software?
          </h2>

          <p className="text-black leading-8 mb-10">
            Let's discuss your project requirements and build something amazing.
          </p>

          <a
            href="/contact"
            className="inline-block bg-orange-500 text-white px-10 py-5 rounded-full font-bold"
          >
            Start Project →
          </a>

        </div>

      </section>

    </>
  );
}