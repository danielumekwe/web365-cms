"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    smallTitle: "We Design",
    title: "Corporate Websites",
    text: "The Premier Web Designers in Lagos, crafting high-performance digital solutions for innovative brands.",
    image: "/slider/slide1.jpg",
  },
  {
    smallTitle: "We Build",
    title: "Ecommerce Websites",
    text: "Beautiful online stores with payment integration and conversion-focused design.",
    image: "/slider/slide2.jpg",
  },
  {
    smallTitle: "We Grow",
    title: "Brands Online",
    text: "SEO, Google Ads and digital marketing strategies to help your business grow.",
    image: "/slider/slide3.jpg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState("");

  const slide = slides[currentSlide];

  useEffect(() => {
    let i = 0;
    setTypedText("");

    const typing = setInterval(() => {
      if (i < slide.title.length) {
        setTypedText(slide.title.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [currentSlide, slide.title]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative h-[70vh] min-h-[550px] bg-cover bg-center transition-all duration-700 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${slide.image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h3 className="text-orange-500 text-xl md:text-2xl font-semibold mb-4">
          {slide.smallTitle}
        </h3>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {typedText}
          <span className="animate-pulse text-orange-500">|</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          {slide.text}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/services"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition"
          >
            Our Services
          </a>

          <a
            href="/contact"
            className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-orange-500 w-8" : "bg-white/50 w-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}