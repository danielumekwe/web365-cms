export default function CTA() {
  return (

    <section className="py-28 bg-[#fff7ed]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-black rounded-[40px] p-16 text-center text-white relative overflow-hidden">

          {/* Decorative circles */}

          <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange-500/20 rounded-full"></div>

          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-500/20 rounded-full"></div>

          <div className="relative z-10">

            <span className="text-orange-500 uppercase tracking-[3px] font-semibold">
              Let's Build Together
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6">
              Ready To Grow Your Business Online?
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-8">
              Professional websites, ecommerce solutions,
              SEO and digital growth services designed to
              help businesses scale.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold transition duration-300 shadow-lg">

              Request Free Quote →

            </button>

          </div>

        </div>

      </div>

    </section>

  );
}