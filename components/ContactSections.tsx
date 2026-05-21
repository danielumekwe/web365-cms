export default function ContactSections() {
  return (
    <>
      {/* HERO */}

      <section className="bg-black py-32 text-white text-center">

        <div className="max-w-7xl mx-auto px-6">

          <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Contact Us
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8">
            Let's Build Something Great
          </h1>

          <p className="max-w-4xl mx-auto text-xl leading-9">
            Need a website, ecommerce solution, SEO service or software
            development? Let’s discuss your project.
          </p>

        </div>

      </section>


      {/* CONTACT INFO */}

      <section className="bg-[#fff7ed] py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              icon:"📞",
              title:"Phone",
              value:"+234 814 274 6695",
            },

            {
              icon:"✉️",
              title:"Email",
              value:"info@web365ng.com",
            },

            {
              icon:"📍",
              title:"Office",
              value:"Lagos, Nigeria",
            },

            {
              icon:"💬",
              title:"WhatsApp",
              value:"+234 814 274 6695",
            },

          ].map((item,index)=>(

            <div
              key={index}
              className="bg-white rounded-[30px] p-10 shadow-lg text-center"
            >

              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black text-black mb-4">
                {item.title}
              </h3>

              <p className="text-gray-700">
                {item.value}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* CONTACT + MAP */}

      <section className="bg-white py-28">

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}

          <div className="text-center mb-16">

            <span className="text-orange-500 uppercase tracking-[3px] font-bold">
              Send Message
            </span>

            <h2 className="text-5xl md:text-6xl font-black text-black mt-5 mb-6">
              Tell Us About Your Project
            </h2>

            <p className="text-gray-700 text-lg">
              Fill the form and our team will get back to you.
            </p>

          </div>


          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* MAP */}

            <div className="bg-[#fff7ed] p-5 rounded-[36px] shadow-lg overflow-hidden">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.815588279605!2d3.302999874993125!3d6.544955693447952!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f635e1ea509%3A0x41a1aff2466a00ea!2sWeb365%20Nigeria%20-Website%20Design%20and%20SEO%20Company%20in%20Nigeria!5e0!3m2!1sen!2sng!4v1779396021159!5m2!1sen!2sng"
                width="100%"
                height="650"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[28px]"
              />

            </div>


            {/* FORM */}

            <div className="bg-[#fff7ed] p-10 rounded-[36px]">

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-5 rounded-2xl border border-gray-200 bg-white text-black"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-5 rounded-2xl border border-gray-200 bg-white text-black"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-5 rounded-2xl border border-gray-200 bg-white text-black"
                />

                <input
                  type="text"
                  placeholder="Service Needed"
                  className="w-full p-5 rounded-2xl border border-gray-200 bg-white text-black"
                />

                <textarea
                  rows={7}
                  placeholder="Project Details"
                  className="w-full p-5 rounded-2xl border border-gray-200 bg-white text-black"
                />

                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* BOTTOM CTA */}

      <section className="bg-black py-24 text-center text-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl font-black mb-8">
            Ready To Start Your Project?
          </h2>

          <p className="text-xl text-gray-300 mb-10">
            Let Web365 help you build and grow online.
          </p>

          <a
            href="https://wa.me/2348142746695"
            className="inline-block bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-bold"
          >
            Chat On WhatsApp →
          </a>

        </div>

      </section>

    </>
  );
}