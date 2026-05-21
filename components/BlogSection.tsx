const posts = [
  {
    title: "Why Every Business Needs a Professional Website",
    date: "May 21, 2026",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    excerpt:
      "A professional website builds trust, improves visibility and helps your business attract better customers online.",
  },

  {
    title: "How SEO Helps Nigerian Businesses Grow Online",
    date: "May 21, 2026",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    excerpt:
      "SEO makes your business easier to find on Google and helps generate consistent leads.",
  },

  {
    title: "Website Design Mistakes That Reduce Sales",
    date: "May 21, 2026",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    excerpt:
      "Poor speed, weak content and confusing layouts can make visitors leave quickly.",
  },
];

export default function BlogSection() {
  return (

    <section className="bg-[#fff7ed] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-orange-500 uppercase font-semibold tracking-[3px]">
            Latest News
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-black mt-4 mb-6">
            From Our Blog
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto leading-8">
            Read helpful articles on website design,
            SEO, ecommerce and digital growth.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post,index)=>(

            <article
              key={index}
              className="bg-white border border-orange-100 rounded-[28px] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <span className="text-orange-500 text-sm font-semibold">
                  {post.date}
                </span>

                <h3 className="text-2xl font-black text-black mt-4 mb-5 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-700 leading-8 mb-8">
                  {post.excerpt}
                </p>

                <a
                  href="/blog"
                  className="font-bold text-orange-500 hover:text-orange-600"
                >
                  Read More →
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );
}