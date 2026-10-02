import PortfolioShowcase from "./PortfolioShowcase";

export default function PortfolioPageSections() {
  return (
    <>
      {/* HERO */}

      <section className="bg-black py-32 text-white text-center">

        <div className="max-w-7xl mx-auto px-6">

          <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Our Portfolio
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8">
            Projects We Have Built
          </h1>

          <p className="max-w-4xl mx-auto text-xl leading-9">
            Explore selected website projects designed for businesses,
            ecommerce brands, schools and organizations.
          </p>

        </div>

      </section>


      {/* PROJECTS */}
      <PortfolioShowcase heading="Our Recent Work" bg="bg-[#fff7ed]" />
    </>
  );
}