export default function Portfolio() {
  const projects = [
    {
      title: "Corporate Website",
      category: "Business Website",
    },
    {
      title: "Ecommerce Store",
      category: "Online Shop",
    },
    {
      title: "SEO Project",
      category: "Digital Marketing",
    },
  ];

  return (
    <section className="bg-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-end mb-16">

          <div>

            <span className="text-blue-600 font-semibold uppercase">
              Portfolio
            </span>

            <h2 className="text-5xl font-black text-slate-900 mt-4">
              Recent Projects
            </h2>

          </div>

          <a
            href="#"
            className="text-blue-600 font-semibold"
          >
            View All →
          </a>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project,index)=>(

<div
key={index}
className="group rounded-3xl overflow-hidden shadow-xl bg-white"
>

<div className="h-72 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-900"></div>

<div className="p-8">

<span className="text-blue-600 text-sm font-semibold">
{project.category}
</span>

<h3 className="text-2xl font-bold mt-3 text-slate-900">
{project.title}
</h3>

<p className="text-slate-600 mt-4">
Modern responsive business solution.
</p>

</div>

</div>

          ))}

        </div>

      </div>

    </section>
  );
}