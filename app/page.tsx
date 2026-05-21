import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HomeSections from "@/components/HomeSections";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeSections />
    
      
      
      <Testimonials />
      <BlogSection />
      <CTA />
      <Footer />
    </>
  );
}