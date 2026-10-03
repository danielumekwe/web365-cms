"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  category: string;
  tag: string;
  desc: string;
  image: string;
  accent: string;
};

export const allProjects: Project[] = [
  {
    title: "RNOW Industrial Supply",
    category: "Corporate Website",
    tag: "Corporate",
    desc: "Industrial supply platform built around product discovery and quote requests.",
    image: "/portfolio/rnow.jpg",
    accent: "#dc2626",
  },
  {
    title: "FPC Couture",
    category: "Fashion Ecommerce",
    tag: "Ecommerce",
    desc: "Luxury menswear store with worldwide shipping, wishlist and order tracking.",
    image: "/portfolio/fpc-couture.jpg",
    accent: "#ef4444",
  },
  {
    title: "Simtek Devices",
    category: "Electronics Ecommerce",
    tag: "Ecommerce",
    desc: "Gadget marketplace with category mega-menu, deals and Naira checkout.",
    image: "/portfolio/simtek-devices.jpg",
    accent: "#2563eb",
  },
  {
    title: "Brianna Integrated",
    category: "Oil & Gas Website",
    tag: "Corporate",
    desc: "IT solutions and technical support company site for the energy sector.",
    image: "/portfolio/brianna-integrated.jpg",
    accent: "#22c55e",
  },
  {
    title: "Techron Integrated",
    category: "Engineering Website",
    tag: "Corporate",
    desc: "Engineering excellence showcased through a bold animated hero slider.",
    image: "/portfolio/techron-integrated.jpg",
    accent: "#eab308",
  },
  {
    title: "Pearse Energy",
    category: "Energy Services Website",
    tag: "Corporate",
    desc: "Engineering, procurement and inspection services for oil & gas clients.",
    image: "/portfolio/pearse-energy.jpg",
    accent: "#16a34a",
  },
  {
    title: "GIL Mining",
    category: "Mining Website",
    tag: "Corporate",
    desc: "Investor-ready website for a trusted name in the mining sector.",
    image: "/portfolio/gil-mining.jpg",
    accent: "#c2581e",
  },
  {
    title: "Cityview Bar & Lodge",
    category: "Hospitality Website",
    tag: "Hospitality",
    desc: "Bar, lodge, nightclub and gym experience with reservations built in.",
    image: "/portfolio/cityview.jpg",
    accent: "#d4af37",
  },
  {
    title: "Petra Wassaif Camp",
    category: "Travel & Booking Website",
    tag: "Hospitality",
    desc: "Bedouin camp in Jordan with accommodation, experiences and WhatsApp booking.",
    image: "/portfolio/petra-wassaif-camp.jpg",
    accent: "#a0522d",
  },
  {
    title: "Seacomida",
    category: "Food Ecommerce",
    tag: "Ecommerce",
    desc: "Ready-to-eat food brand store with a cinematic hero slider and online ordering.",
    image: "/portfolio/seacomida.jpg",
    accent: "#d4a959",
  },
];

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, seen] as const;
}

function Card({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const [ref, seen] = useInView<HTMLDivElement>();

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
  };
  const onLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className={`pf-reveal ${seen ? "pf-in" : ""}`}
      style={{ transitionDelay: `${(index % 2) * 150}ms` }}
    >
      <button
        onClick={onOpen}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group block w-full text-left transition-transform duration-300 ease-out"
        aria-label={`View ${project.title}`}
      >
        <div className="relative aspect-[16/11] overflow-hidden rounded-xl shadow-xl">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />
          <span className="pf-shine" />
          <span className="absolute right-4 top-4 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-orange-500 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            ↗
          </span>
        </div>
        <h3 className="mt-6 text-center text-xl font-bold text-black transition-colors group-hover:text-orange-500">
          {project.title}
        </h3>
      </button>
    </div>
  );
}

export default function PortfolioShowcase({
  heading = "Recent Projects",
  limit,
  viewAll = false,
  bg = "bg-white",
}: {
  heading?: string;
  limit?: number;
  viewAll?: boolean;
  bg?: string;
}) {
  const projects = limit ? allProjects.slice(0, limit) : allProjects;
  const [active, setActive] = useState<number | null>(null);
  const [headRef, headSeen] = useInView<HTMLHeadingElement>();

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) =>
      setActive((i) =>
        i === null ? i : (i + dir + projects.length) % projects.length
      ),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  const current = active !== null ? projects[active] : null;

  return (
    <section className={`${bg} py-24`}>
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2
          ref={headRef}
          className={`pf-reveal mb-6 text-5xl font-black text-orange-500 ${headSeen ? "pf-in" : ""}`}
        >
          {heading}
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {projects.map((p, i) => (
            <Card key={p.title} project={p} index={i} onOpen={() => setActive(i)} />
          ))}
        </div>

        {viewAll && (
          <Link
            href="/portfolio"
            className="mt-16 inline-block rounded-full bg-orange-500 px-10 py-5 font-bold text-white hover:bg-orange-600"
          >
            View More Projects →
          </Link>
        )}
      </div>

      {current && (
        <div
          className="pf-fade fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <div
            className="pf-pop relative w-full max-w-5xl overflow-hidden rounded-xl bg-neutral-900 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-h-[70vh] overflow-y-auto">
              <img src={current.image} alt={current.title} className="w-full" />
            </div>
            <div className="flex items-center justify-between gap-4 p-5">
              <h3 className="text-xl font-bold">{current.title}</h3>
              <div className="flex shrink-0 gap-2">
                <button
                  onClick={() => step(-1)}
                  className="h-10 w-10 rounded-full border border-white/20 hover:bg-orange-500"
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  onClick={() => step(1)}
                  className="h-10 w-10 rounded-full border border-white/20 hover:bg-orange-500"
                  aria-label="Next project"
                >
                  →
                </button>
              </div>
            </div>
            <button
              onClick={close}
              className="absolute right-3 top-3 h-10 w-10 rounded-full bg-black/70 text-xl hover:bg-orange-500"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
