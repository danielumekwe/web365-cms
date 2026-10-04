import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const host = url ? new URL(url).host.replace(/^www\./, "") : "";
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-neutral-800 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        {host && (
          <span className="ml-3 hidden truncate rounded-md bg-neutral-900 px-3 py-1 text-xs text-gray-400 sm:block">
            {host}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[2.2rem] border-[7px] border-neutral-900 bg-neutral-900 shadow-2xl ring-1 ring-white/10 ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

function ScrollShot({
  src,
  alt,
  size,
}: {
  src: string;
  alt: string;
  size: "lg" | "sm";
}) {
  return (
    <div className={`cs-scroll ${size === "lg" ? "cs-scroll-lg" : "cs-scroll-sm"}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

function VisitButton({ study, className = "" }: { study: CaseStudy; className?: string }) {
  if (!study.url) return null;
  return (
    <a
      href={study.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-orange-600 ${className}`}
    >
      Visit Live Website <span aria-hidden>↗</span>
    </a>
  );
}

export default function CaseStudySections({
  study,
  next,
}: {
  study: CaseStudy;
  next: CaseStudy;
}) {
  const facts = [
    { k: "Client", v: study.title },
    { k: "Industry", v: study.industry },
    study.location ? { k: "Location", v: study.location } : { k: "Project", v: study.category },
    study.stack
      ? { k: "Built With", v: study.stack.join(" + ") }
      : study.url
        ? { k: "Website", v: new URL(study.url).host.replace(/^www\./, "") }
        : null,
  ].filter((f) => f !== null);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black pb-24 pt-40 text-white">
        <div className="pf-blob h-96 w-96 -left-24 top-10 opacity-30" style={{ background: study.accent }} />
        <div className="pf-blob pf-blob-b h-96 w-96 -right-24 bottom-0 bg-orange-500 opacity-20" />
        <div className="pf-grid absolute inset-0" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
              <Link href="/portfolio" className="hover:text-orange-500">
                Portfolio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-200">{study.title}</span>
            </nav>

            <span
              className="inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[3px]"
              style={{ borderColor: study.accent, color: study.accent }}
            >
              {study.category}
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-6xl">{study.title}</h1>

            <p className="mt-6 text-xl leading-9 text-gray-300">{study.tagline}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <VisitButton study={study} />
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 font-bold transition hover:border-orange-500 hover:text-orange-500"
              >
                ← All Projects
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <BrowserFrame url={study.url}>
              <img src={study.desktop} alt={`${study.title} homepage`} className="block w-full" />
            </BrowserFrame>
            {study.mobile[0] && (
              <PhoneFrame
                src={study.mobile[0]}
                alt={`${study.title} on mobile`}
                className="absolute -bottom-12 -left-4 w-28 sm:-left-10 sm:w-40"
              />
            )}
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="border-b border-orange-100 bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-12 md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.k} className="border-l-2 border-orange-500 pl-5">
              <dt className="text-xs font-semibold uppercase tracking-[3px] text-gray-500">{f.k}</dt>
              <dd className="mt-2 font-bold text-black">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          {[
            { n: "01", h: "The Client", t: study.overview },
            { n: "02", h: "The Brief", t: study.goal },
          ].map((b) => (
            <div key={b.n}>
              <span className="text-6xl font-black text-orange-500/20">{b.n}</span>
              <h2 className="mt-2 text-3xl font-black text-black">{b.h}</h2>
              <p className="mt-5 text-lg leading-9 text-gray-600">{b.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN & DEVELOPMENT */}
      <section className="bg-[#fff7ed] py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-semibold uppercase tracking-[4px] text-orange-500">Design & Development</span>
            <h2 className="mt-4 text-4xl font-black leading-tight text-black">How we brought it to life</h2>
            {study.design.map((p) => (
              <p key={p.slice(0, 24)} className="mt-6 text-lg leading-9 text-gray-600">
                {p}
              </p>
            ))}
            {study.stack && (
              <div className="mt-8 flex flex-wrap gap-2">
                {study.stack.map((s) => (
                  <span key={s} className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
                    {s}
                  </span>
                ))}
                <span className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
                  Fully Responsive
                </span>
              </div>
            )}
          </div>

          <div className="grid content-start gap-5 sm:grid-cols-2 lg:col-span-7">
            {study.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-orange-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-4 block h-1.5 w-10 rounded-full" style={{ background: study.accent }} />
                <h3 className="text-lg font-bold text-black">{f.title}</h3>
                <p className="mt-2 leading-7 text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      {study.homeFull && (
        <section className="bg-black py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="font-semibold uppercase tracking-[4px] text-orange-500">The Website</span>
                <h2 className="mt-4 text-4xl font-black md:text-5xl">Inside {study.title}</h2>
              </div>
              <p className="text-sm text-gray-400">
                <span className="hidden md:inline">Hover over a page to scroll through it</span>
                <span className="md:hidden">Swipe inside a page to scroll through it</span>
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
              <figure className="lg:col-span-7">
                <BrowserFrame url={study.url}>
                  <ScrollShot src={study.homeFull} alt={`${study.title} full homepage`} size="lg" />
                </BrowserFrame>
                <figcaption className="mt-4 text-sm font-semibold text-gray-400">Homepage</figcaption>
              </figure>

              <div className={`grid gap-8 lg:col-span-5 ${study.pages.length > 1 ? "" : "content-start"}`}>
                {study.pages.map((p) => (
                  <figure key={p.src}>
                    <BrowserFrame url={study.url}>
                      <ScrollShot src={p.src} alt={`${study.title} ${p.label} page`} size={study.pages.length > 1 ? "sm" : "lg"} />
                    </BrowserFrame>
                    <figcaption className="mt-4 text-sm font-semibold text-gray-400">{p.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {study.mobile.length > 0 && (
              <div className="mt-24 grid items-center gap-12 rounded-[40px] border border-white/10 bg-white/[0.03] p-8 md:grid-cols-2 md:p-16">
                <div>
                  <span className="font-semibold uppercase tracking-[4px] text-orange-500">Mobile Experience</span>
                  <h3 className="mt-4 text-3xl font-black md:text-4xl">Designed for every screen</h3>
                  <p className="mt-5 text-lg leading-8 text-gray-300">
                    Every page adapts to phones and tablets, with touch-friendly navigation and layouts that keep
                    the brand looking sharp wherever customers find it.
                  </p>
                </div>
                <div className="flex justify-center gap-5 sm:gap-8">
                  {study.mobile.map((m, i) => (
                    <PhoneFrame
                      key={m}
                      src={m}
                      alt={`${study.title} mobile view ${i + 1}`}
                      className={`w-36 sm:w-52 ${i === 1 ? "mt-12" : ""}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* LIVE SITE */}
      {study.url && (
        <section className="bg-white py-20 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-4xl font-black text-black">See it live</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore the full {study.title} website and experience the work first-hand.
            </p>
            <VisitButton study={study} className="mt-8" />
          </div>
        </section>
      )}

      {/* NEXT PROJECT */}
      <section className="bg-[#fff7ed] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href={`/portfolio/${next.slug}`}
            className="group grid items-center gap-10 overflow-hidden rounded-[32px] bg-black p-8 text-white md:grid-cols-2 md:p-12"
          >
            <div>
              <span className="text-sm font-semibold uppercase tracking-[4px] text-orange-500">Next Project</span>
              <h2 className="mt-4 text-4xl font-black transition group-hover:text-orange-500">{next.title}</h2>
              <p className="mt-3 text-gray-400">{next.category}</p>
              <span className="mt-8 inline-block font-bold text-orange-500">View Case Study →</span>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src={next.desktop}
                alt={next.title}
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
