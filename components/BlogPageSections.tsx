const posts = [
  {
    title: "Why Every Business Needs a Professional Website",
    category: "Website Design",
    date: "May 21, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    excerpt:
      "A professional website helps your business build trust, attract customers and convert visitors into enquiries.",
  },
  {
    title: "How SEO Helps Nigerian Businesses Grow Online",
    category: "SEO",
    date: "May 21, 2026",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    excerpt:
      "SEO helps your business appear on Google when potential customers are searching for your products or services.",
  },
  {
    title: "Website Design Mistakes That Reduce Sales",
    category: "Business Growth",
    date: "May 21, 2026",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    excerpt:
      "Slow speed, poor mobile design and weak content can make visitors leave before contacting your business.",
  },
  {
    title: "Why Ecommerce Websites Need Good Product Pages",
    category: "Ecommerce",
    date: "May 21, 2026",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    excerpt:
      "Strong product pages help customers understand your offer, trust your store and complete their orders.",
  },
  {
    title: "How Web Hosting Affects Website Performance",
    category: "Web Hosting",
    date: "May 21, 2026",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    excerpt:
      "Reliable hosting improves website speed, uptime, security and customer experience.",
  },
  {
    title: "Why Businesses Need Custom Software",
    category: "Software",
    date: "May 21, 2026",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    excerpt:
      "Custom software helps businesses automate tasks, manage operations and reduce manual work.",
  },
];

export default function BlogPageSections() {
  return (
    <>
      <section className="bg-black py-32 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Web365 Blog
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8">
            Digital Growth Articles
          </h1>

          <p className="max-w-4xl mx-auto text-xl leading-9">
            Insights on website design, SEO, ecommerce, hosting and software
            development for business growth.
          </p>
        </div>
      </section>

      <section className="bg-[#fff7ed] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-[32px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">
                  <span className="text-orange-500 font-bold uppercase text-sm">
                    {post.category}
                  </span>

                  <h2 className="text-2xl font-black text-black mt-4 mb-4 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-gray-700 leading-8 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>

                    <a
                      href="/blog"
                      className="text-orange-500 font-bold hover:text-orange-600"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}