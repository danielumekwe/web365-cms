"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Mr. Abbey Paseda",
      role: "Founder, Focus on Disability Foundation",
      image: "/images/abbey-paseda.jpg",
      text:
        "Web365 Nigeria Technology built our NGO website from scratch, and we couldn't be happier with the result. The website is sleek, fast, highly optimized, and easy to use. Mr. Daniel Umekwe demonstrated exceptional professionalism throughout the project and delivered beyond our expectations. Our website looks great and operates flawlessly. We highly recommend Web365 Nigeria Technology to any organization seeking quality web development services.",
    },
    {
      name: "Mrs. Priscilla Stephen",
      role: "Founder, Pcainspires Blog",
      image: "/images/stephen.jpg",
      text:
        "Amazing work Web365. They built my blog exactly how I envisioned it; clean, fast, and easy to manage. Super professional team. I highly recommend.",
    },
    {
      name: "Mr. Ademola Victor",
      role: "School Administrator, Olivesfield International School",
      image: "/images/demavict.jpg",
      text:
        "Web365 Nigeria Technology transformed our online presence with a professionally designed school website that perfectly reflects our values and educational excellence. The team was responsive, knowledgeable, and delivered a fast, user-friendly platform that has improved communication with parents and increased inquiries from prospective families.",
    },
    {
      name: "Mr. Promise Obodozie",
      role: "Founder, Seacomida Foods",
      image: "/images/promise.jpg",
      text:
        "Responsive and user friendly website for seacomida Limited. Thank you for making the project a great experience both for us and our users. We are very happy with the result and look forward to working with you again.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [paused, reviews.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

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
          websites, eCommerce solutions and digital growth.
        </p>

        <div
          className="relative bg-white border border-orange-100 rounded-[32px] shadow-xl p-10 md:p-16 max-w-5xl mx-auto transition-all duration-700"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Content */}
          <div
            key={current}
            className="animate-[fadeIn_0.6s_ease-in-out]"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-10 border-[6px] border-orange-500 shadow-lg"
            />

            <div className="text-orange-500 text-8xl leading-none mb-4">
              "
            </div>

            <p className="text-black text-xl md:text-2xl leading-10 max-w-3xl mx-auto mb-10">
              {review.text}
            </p>

            <h4 className="text-black text-2xl font-black">
              {review.name}
            </h4>

            <p className="text-gray-600 mt-2">
              {review.role}
            </p>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "bg-orange-500 w-12 h-3"
                    : "bg-gray-300 w-3 h-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}