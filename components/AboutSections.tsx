export default function AboutSections() {
  return (
    <>
      {/* HERO */}

      <section className="bg-black pt-44 pb-32 text-white">

        <div className="absolute inset-0 bg-orange-500/10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

          <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
            About Web365 Nigeria
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8">
            Building Digital Foundations For Growth
          </h1>

          <p className="max-w-4xl mx-auto text-white text-xl leading-9">
            Web365 Nigeria helps businesses establish a strong digital presence
            through websites, ecommerce, SEO and technology solutions.
          </p>

        </div>

      </section>


      {/* ABOUT */}

      <section className="bg-[#fff7ed] py-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Team"
              className="rounded-[32px] shadow-xl"
            />

          </div>

          <div>

            <span className="text-orange-500 uppercase font-semibold">
              Who We Are
            </span>

            <h2 className="text-5xl font-black text-black mt-4 mb-8">
              We Design. You Grow.
            </h2>

            <p className="text-black leading-9 mb-6">
              Web365 Nigeria is a digital solutions company helping
              entrepreneurs, SMEs and organizations build strong online brands.
            </p>

            <p className="text-black leading-9 mb-8">
              We specialize in website development, ecommerce, SEO, branding,
              hosting and digital growth systems.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white p-8 rounded-3xl shadow">

                <h3 className="text-4xl font-black text-orange-500">
                  500+
                </h3>

                <p className="mt-3 text-black">
                  Projects Delivered
                </p>

              </div>

              <div className="bg-white p-8 rounded-3xl shadow">

                <h3 className="text-4xl font-black text-orange-500">
                  2014
                </h3>

                <p className="mt-3 text-black">
                  Founded
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CORE VALUES */}

      <section className="bg-[#064f3d] py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">

            <span className="bg-white/10 text-orange-400 px-5 py-2 rounded-full uppercase tracking-[3px] text-sm font-bold">
              What We Stand For
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-white mt-8">
              Our Core Values
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                icon:"🎯",
                title:"Results over aesthetics",
                text:"Beautiful design must also convert. We measure success by outcomes not pixels.",
              },

              {
                icon:"🌍",
                title:"Nigeria-first thinking",
                text:"We design around local realities, customer behavior and business needs.",
              },

              {
                icon:"⚡",
                title:"Speed & reliability",
                text:"Fast websites and dependable delivery remain core to our process.",
              },

              {
                icon:"🤝",
                title:"Long-term partnership",
                text:"We build relationships beyond launching websites.",
              },

              {
                icon:"🔒",
                title:"Transparency always",
                text:"Clear timelines and honest communication always.",
              },

              {
                icon:"📈",
                title:"Continuous improvement",
                text:"We evolve with technology to help clients grow.",
              },

            ].map((value,index)=>(

              <div
                key={index}
                className="bg-white/10 rounded-2xl border border-white/10 p-8"
              >

                <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center text-2xl mb-8">
                  {value.icon}
                </div>

                <h3 className="text-white text-xl font-black mb-4">
                  {value.title}
                </h3>

                <p className="text-white leading-8">
                  {value.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* TEAM */}

      <section className="bg-[#fff7ed] py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-orange-500 uppercase tracking-[3px] font-semibold">
              Meet The Team
            </span>

            <h2 className="text-5xl md:text-6xl font-black text-black mt-6 mb-6">
              The People Behind Web365
            </h2>

            <p className="text-black max-w-3xl mx-auto leading-8">
              Our team combines creativity, technology and strategy.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                name:"Daniel Umekwe",
                role:"Founder / Digital Strategist",
                image:"https://i.pravatar.cc/500?img=12",
              },

              {
                name:"UI / UX Designer",
                role:"Design Lead",
                image:"https://i.pravatar.cc/500?img=32",
              },

              {
                name:"Web Developer",
                role:"Development Team",
                image:"https://i.pravatar.cc/500?img=18",
              },

              {
                name:"Marketing Lead",
                role:"SEO / Growth",
                image:"https://i.pravatar.cc/500?img=47",
              },

            ].map((member,index)=>(

              <div
                key={index}
                className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:-translate-y-2 transition"
              >

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-8 text-center">

                  <h3 className="text-2xl font-black text-black mb-2">
                    {member.name}
                  </h3>

                  <p className="text-orange-500 font-semibold">
                    {member.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* MISSION + VISION */}

      <section className="bg-black py-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          <div className="bg-orange-500 p-12 rounded-[32px] text-white">

            <h2 className="text-4xl font-black mb-8">
              Our Mission
            </h2>

            <p className="leading-9">
              To empower businesses with websites and digital systems that help them grow online.
            </p>

          </div>

          <div className="bg-white p-12 rounded-[32px]">

            <h2 className="text-4xl font-black text-black mb-8">
              Our Vision
            </h2>

            <p className="leading-9 text-black">
              To become a leading digital transformation company helping brands build, grow and scale globally.
            </p>

          </div>

        </div>

      </section>

    </>
  );
}