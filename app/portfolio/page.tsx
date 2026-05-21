import Navbar from "@/components/Navbar";
import PortfolioPageSections from "@/components/PortfolioPageSections";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <PortfolioPageSections />
      <CTA />
      <Footer />
    </>
  );
}