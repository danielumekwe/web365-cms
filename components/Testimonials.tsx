"use client";

import { useEffect, useState } from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Corporate Website Client",
      image: "https://i.pravatar.cc/300?img=1",
      text:
        "Web365 delivered a modern business website and significantly improved our online visibility, branding and customer engagement.",
    },

    {
      name: "Michael Anderson",
      role: "Ecommerce Client",
      image: "https://i.pravatar.cc/300?img=12",
      text:
        "Professional communication, quality delivery and excellent support throughout the project lifecycle.",
    },

    {
      name: "Olivia Carter",
      role: "SEO Client",
      image: "https://i.pravatar.cc/300?img=32",
      text:
        "The SEO structure, speed optimization and overall design quality exceeded our expectations.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const review = reviews[current];

  return (
    <section className="bg-[#fff7ed] py-28 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <span className="text-orange-500 uppercase font-semibold tracking-[3px]">
          Testimonials
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-black mt-4 mb-6">
          What Clients Say
        </h2>

        <p className="text-gray-700 max-w-3xl mx-auto leading-8 mb-16">
          Hear from businesses and organizations that trusted Web365 for
          websites, ecommerce solutions and digital growth.
        </p>

        <div className="bg-white border border-orange-100 rounded-[32px] shadow-xl p-10 md:p-16 max-w-5xl mx-auto">

          {/* Client Image */}

          <img
            src={review.image}
            alt={review.name}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-10 border-[6px] border-orange-500 shadow-lg"
          />

          {/* Quote */}

          <div className="text-orange-500 text-8xl leading-none mb-4">
            "
          </div>

          {/* Review */}

          <p className="text-black text-xl md:text-2xl leading-10 max-w-3xl mx-auto mb-10">
            {review.text}
          </p>

          {/* Client */}

          <h4 className="text-black text-2xl font-black">
            {review.name}
          </h4>

          <p className="text-gray-600 mt-2">
            {review.role}
          </p>

          {/* Indicators */}

          <div className="flex justify-center gap-3 mt-12">

            {reviews.map((_, index) => (

              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-orange-500 w-12"
                    : "bg-gray-300 w-3"
                }`}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}