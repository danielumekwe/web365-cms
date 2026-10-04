import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CaseStudySections from "@/components/CaseStudySections";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return {
    title: `${study.title} – ${study.category} Case Study | Web365`,
    description: study.tagline,
    openGraph: { images: [study.desktop] },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const i = caseStudies.indexOf(study);
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <>
      <Navbar />
      <CaseStudySections study={study} next={next} />
      <CTA />
      <Footer />
    </>
  );
}
