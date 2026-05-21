import Navbar from "@/components/Navbar";
import BlogPageSections from "@/components/BlogPageSections";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogPageSections />
      <CTA />
      <Footer />
    </>
  );
}