import Navbar from "@/components/Navbar";
import HostingPageSections from "@/components/HostingPageSections";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function SecuredWebHostingPage() {
  return (
    <>
      <Navbar />
      <HostingPageSections />

      <section className="bg-black py-24">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-5xl font-black text-white mb-8">
      Need Reliable Web Hosting?
    </h2>

    <p className="text-gray-300 text-xl leading-9 mb-10">
      Explore hosting plans, domains, SSL certificates, business email and
      cloud solutions on Webcenter Hosting.
    </p>

    <a
      href="https://webcenter.ng/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold"
    >
      Visit Webcenter Hosting →
    </a>

  </div>

</section>
      <CTA />
      <Footer />
    </>
  );
}