import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutPreview from "../components/About/AboutPreview/AboutPreview";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Doctors from "../components/Doctors/Doctors";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons/FloatingButtons";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <AboutPreview />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </>
  );
}

export default Home;