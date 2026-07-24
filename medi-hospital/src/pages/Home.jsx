import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Doctors from "../components/Doctors/Doctors";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;