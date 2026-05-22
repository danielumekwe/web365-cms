const ppcServices = [
  "Google Ads Setup",
  "Keyword Research",
  "Landing Page Review",
  "Conversion Tracking",
  "Ad Copywriting",
  "Campaign Optimization",
  "Negative Keyword Management",
  "Monthly Reporting",
];

const faqs = [
  {
    q: "How much should I budget for Google Ads?",
    a: "Budget depends on your business type, competition and goals. We help define an appropriate advertising budget.",
  },

  {
    q: "Do you manage campaigns monthly?",
    a: "Yes. We continuously optimize campaigns, monitor performance and provide reports.",
  },

  {
    q: "Can PPC generate leads faster than SEO?",
    a: "Yes. PPC can begin producing traffic immediately after launch while SEO is long-term.",
  },
];

export default function PPCPageSections() {
  return (
    <>
      {/* HERO */}

      <section className="bg-black py-32 text-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
              PPC Management
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8 leading-tight">
              Google Ads & PPC Campaigns That Generate Leads
            </h1>

            <p className="text-xl text-gray-300 leading-9 mb-10">
              We help businesses run profitable PPC campaigns that generate
              traffic, leads and conversions.
            </p>

            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-bold"
            >
              Request PPC Strategy →
            </a>

          </div>

          <img
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
            alt=""
            className="rounded-[36px] shadow-2xl w-full h-[620px] object-cover"
          />

        </div>

      </section>


      {/* INTRO */}

      <section className="bg-[#fff7ed] py-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl md:text-6xl font-black text-black mb-8">
              Paid Ads Should Bring Measurable Results
            </h2>

            <p className="text-black leading-9 mb-6">
              Running ads without optimization can waste budget quickly.
            </p>

            <p className="text-black leading-9">
              We build PPC systems focused on conversions and ROI.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-5">

            {ppcServices.map((item,index)=>(

              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow font-bold text-black"
              >

                ✓ {item}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* HOW WE DO PPC */}

      <section className="bg-white py-28">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl md:text-6xl font-black text-orange-500 mb-8">
            Pay Per Click Management in Nigeria
          </h2>

          <p className="text-black max-w-5xl mx-auto leading-8 mb-16">
            We manage PPC campaigns with audience targeting, keyword research,
            conversion tracking and continuous optimization.
          </p>

          <h3 className="text-4xl md:text-5xl font-black text-black mb-16">
            Here's How We Manage PPC For You
          </h3>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {
                icon:"https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/target-arrow.svg",
                title:"Campaign Strategy",
                text:"Audience targeting, goals and planning.",
              },

              {
                icon:"https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/search.svg",
                title:"Keyword Targeting",
                text:"Finding high-intent keywords.",
              },

              {
                icon:"https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/ad.svg",
                title:"Ad Creation",
                text:"Compelling ad copy and creatives.",
              },

              {
                icon:"https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/outline/chart-line.svg",
                title:"Optimization",
                text:"Reduce spend waste and improve conversions.",
              },

            ].map((item,index)=>(

              <div key={index}>

                <div className="w-24 h-24 bg-orange-100 rounded-3xl mx-auto flex items-center justify-center mb-8">

                  <img
                    src={item.icon}
                    alt=""
                    className="w-12 h-12"
                  />

                </div>

                <h4 className="text-2xl font-black text-black mb-4">
                  {item.title}
                </h4>

                <p className="text-gray-700 leading-8">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* PPC SERVICES */}

      {/* PPC SERVICES */}

<section className="bg-[#fff7ed] py-28">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">

      <span className="text-orange-500 uppercase tracking-[3px] font-bold">
        Our PPC Solutions
      </span>

      <h2 className="text-5xl md:text-6xl font-black text-black mt-5 mb-6">
        Our Various PPC Services
      </h2>

      <p className="max-w-4xl mx-auto text-gray-700 leading-8">
        We manage multiple PPC channels helping businesses generate more leads,
        improve visibility and increase conversions.
      </p>

    </div>


    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {[
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",

          title:"Google Ads",

          text:
            "Google Ads setup, optimization, conversion tracking and search campaigns.",
        },

        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",

          title:"Bing Ads",

          text:
            "Reach additional search audiences beyond Google using Microsoft Ads.",
        },

        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",

          title:"Social Advertising",

          text:
            "Facebook, Instagram, LinkedIn and social advertising campaigns.",
        },

        {
          image:
            "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",

          title:"Remarketing & Retargeting",

          text:
            "Reconnect with visitors and improve conversion opportunities.",
        },

      ].map((item,index)=>(

        <div
          key={index}
          className="bg-white rounded-[32px] p-10 text-center shadow hover:shadow-xl transition"
        >

          <img
            src={item.image}
            alt={item.title}
            className="w-28 h-28 object-contain mx-auto mb-8"
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


      {/* WHY PPC */}

      <section className="bg-black py-28 text-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt=""
            className="rounded-[36px] w-full h-[560px] object-cover"
          />

          <div>

            <span className="text-orange-500 uppercase tracking-[3px] font-bold">
              Why PPC Works
            </span>

            <h2 className="text-4xl md:text-6xl font-black mt-5 mb-8">
              Reach Customers Ready To Buy
            </h2>

            <p className="text-gray-300 leading-9 mb-6">
              PPC gives immediate visibility when customers search.
            </p>

            <p className="text-gray-300 leading-9">
              We focus on clicks that become enquiries.
            </p>

          </div>

        </div>

      </section>


      {/* FAQ */}

      <section className="bg-white py-28">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl font-black text-black text-center mb-16">
            PPC FAQs
          </h2>

          <div className="space-y-6">

            {faqs.map((faq,index)=>(

              <details
                key={index}
                className="border rounded-2xl p-6"
              >

                <summary className="text-black font-bold cursor-pointer text-xl">
                  {faq.q}
                </summary>

                <p className="mt-6 text-black leading-8">
                  {faq.a}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}