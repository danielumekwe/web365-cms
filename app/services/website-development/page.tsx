import Navbar from "@/components/Navbar";
import WebsitePageSections from "@/components/WebsitePageSections";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function WebsitePage() {
  return (
    <>
      <Navbar />
      <WebsitePageSections />
      <CTA />
      <Footer />
    </>
  );
}