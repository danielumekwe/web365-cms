import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Web365NigeriaPageSections from "@/components/Web365NigeriaPageSections";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Web365 Nigeria: Leading website design company in Nigeria",
  description:
    "Web365 Nigeria is the leading website design and SEO company in Nigeria. We help businesses build professional websites, rank on Google and grow online.",
};

export default function Web365NigeriaPage() {
  return (
    <>
      <Navbar />
      <Web365NigeriaPageSections />
      <CTA />
      <Footer />
    </>
  );
}
