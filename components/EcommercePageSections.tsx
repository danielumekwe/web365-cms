const ecommerceFeatures = [
  "WooCommerce Development",
  "Payment Gateway Integration",
  "Product Catalog Setup",
  "Shopping Cart & Checkout",
  "Inventory Management",
  "Mobile Responsive Store",
  "Shipping Configuration",
  "SEO Ready Structure",
];

const faqs = [
  {
    q: "How much does an ecommerce website cost?",
    a: "Cost depends on products, features, payment integrations and custom functionality required.",
  },

  {
    q: "Can I manage products myself?",
    a: "Yes. You will be able to add products, update prices and manage orders from the admin dashboard.",
  },

  {
    q: "Can payment gateways be added?",
    a: "Yes. We integrate Paystack, Flutterwave and other supported payment systems.",
  },
];

export default function EcommercePageSections() {
  return (
    <>
      {/* HERO */}

      <section className="bg-black py-32 text-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
              Ecommerce Website Development
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8 leading-tight">
              Ecommerce Websites Designed To Sell More
            </h1>

            <p className="text-xl text-gray-300 leading-9 mb-10">
              Build powerful ecommerce platforms with payment integration,
              inventory management and conversion-focused shopping experiences.
            </p>

            <a
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-bold"
            >
              Request Ecommerce Quote →
            </a>

          </div>

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
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
              Turn Visitors Into Customers
            </h2>

            <p className="text-black leading-9 mb-6">
              Ecommerce is more than displaying products. Your store should
              inspire trust, simplify checkout and improve conversions.
            </p>

            <p className="text-black leading-9">
              We build online stores optimized for growth and customer
              experience.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-5">

            {ecommerceFeatures.map((item,index)=>(

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


      {/* SERVICES */}

      <section className="bg-white py-28">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl md:text-6xl font-black text-orange-500 mb-8">
            Ecommerce Solutions We Build
          </h2>

          <p className="text-black max-w-5xl mx-auto leading-8 mb-16">
            We develop ecommerce platforms tailored for startups, SMEs and
            established businesses.
          </p>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {
                image:"https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
                title:"Online Stores",
                text:"Full ecommerce websites for products and services.",
              },

              {
                image:"https://cdn-icons-png.flaticon.com/512/891/891419.png",
                title:"Payment Integration",
                text:"Paystack, Flutterwave and payment systems.",
              },

              {
                image:"https://cdn-icons-png.flaticon.com/512/4290/4290854.png",
                title:"Order Management",
                text:"Order tracking and inventory systems.",
              },

              {
                image:"https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
                title:"Mobile Commerce",
                text:"Responsive stores optimized for phones.",
              },

            ].map((item,index)=>(

              <div
                key={index}
                className="bg-[#fff7ed] rounded-[32px] p-10 shadow text-center"
              >

                <img
                  src={item.image}
                  alt=""
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


      {/* WHY ECOMMERCE */}

      <section className="bg-black py-28 text-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc"
            alt=""
            className="rounded-[36px] w-full h-[560px] object-cover"
          />

          <div>

            <span className="text-orange-500 uppercase tracking-[3px] font-bold">
              Why Ecommerce
            </span>

            <h2 className="text-4xl md:text-6xl font-black mt-5 mb-8">
              Sell Products Anytime Anywhere
            </h2>

            <p className="text-gray-300 leading-9 mb-6">
              Ecommerce allows customers to discover, order and pay from any
              location.
            </p>

            <p className="text-gray-300 leading-9">
              Grow beyond physical limitations and reach more customers online.
            </p>

          </div>

        </div>

      </section>


      {/* PROJECT TYPES */}

      <section className="bg-white py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black text-black">
              Ecommerce Industries We Serve
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Fashion Stores",
              "Electronics",
              "Food & Groceries",
              "Beauty Products",
              "Furniture",
              "Industrial Products",
            ].map((item,index)=>(

              <div
                key={index}
                className="bg-[#fff7ed] p-10 rounded-3xl text-center text-2xl font-bold text-black"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FAQ */}

      <section className="bg-[#fff7ed] py-28">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl font-black text-black text-center mb-16">
            Ecommerce FAQs
          </h2>

          <div className="space-y-6">

            {faqs.map((faq,index)=>(

              <details
                key={index}
                className="bg-white rounded-2xl p-6"
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