const projects = [
  {
    title: "Fashion Ecommerce Web Design",
    category: "Ecommerce Website",
    image: "/projects/project1.jpg",
  },

  {
    title: "Night Club Web Design",
    category: "Entertainment Website",
    image: "/projects/project2.jpg",
  },

  {
    title: "School Website Design",
    category: "Education Website",
    image: "/projects/project3.jpg",
  },

  {
    title: "Ecommerce Web Design",
    category: "Online Store",
    image: "/projects/project4.jpg",
  },

  {
    title: "Corporate Website",
    category: "Business Website",
    image: "/projects/project1.jpg",
  },

  {
    title: "Professional Services Website",
    category: "Corporate",
    image: "/projects/project2.jpg",
  },
];

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

      <section className="bg-[#fff7ed] py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {projects.map((project,index)=>(

              <div
                key={index}
                className="bg-white rounded-[36px] overflow-hidden shadow-xl group"
              >

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[650px] object-cover object-top group-hover:scale-105 transition duration-700"
                  />

                </div>

                <div className="p-10">

                  <span className="text-orange-500 uppercase font-bold tracking-[2px]">
                    {project.category}
                  </span>

                  <h2 className="text-3xl font-black text-black mt-4">
                    {project.title}
                  </h2>

                  <p className="text-gray-700 leading-8 mt-5">
                    Professional website solution designed with focus on
                    branding, performance and user experience.
                  </p>

                  <a
                    href="#"
                    className="inline-block mt-8 bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600"
                  >
                    View Project →
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}