import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import Hero from "../components/Home/Hero.jsx";
import ClientLogoStrip from "../components/Home/ClientLogoStrip.jsx";
import ProductCategory from "../components/Home/ProductCategory.jsx";
import AboutPreview from "../components/Home/AboutPreview.jsx";
import GlobalAuthority from "../components/Home/GlobalAuthority.jsx";
import WhyPartner from "../components/Home/WhyPartner.jsx";
import InnovationSlider from "../components/Home/InnovationSlider.jsx";
import SolarBanner from "../components/Home/SolarBanner.jsx";
import Testimonials from "../components/Home/Testimonials.jsx";
import FAQ from "../components/Home/FAQ.jsx";
import ContactCTA from "../components/Home/ContactCTA.jsx";
import HeroBanner from "../components/Home/HeroBanner.jsx";

import "../styles/Global.css";

const Home = () => {
  return (
    <>
      <Header />

      {/* <Hero /> */}
      <HeroBanner />
      <ClientLogoStrip />
      <ProductCategory />
      <AboutPreview />
      <GlobalAuthority />
      <WhyPartner />
      <InnovationSlider />
      <SolarBanner
        heading="High-Performance Solar<br />Fasteners and Component supplier"
        description="L&R Green India Pvt Ltd manufactures high-quality solar fasteners and components for residential, commercial, and utility-scale projects, including roof-mounted and ground-mounted systems, using durable stainless steel and coated alloy steel for long-lasting performance and reliability."
        imgSrc="/Images/solar fastner.png"
        imgAlt="Solar Fastener"
        watermark="IN INDIA"
      />
      <Testimonials />
      <FAQ />
      <ContactCTA />

      <Footer />
    </>
  );
};

export default Home;