import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import AboutHero from "../components/About/AboutPage/AboutPage";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons/FloatingButtons";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function About() {
  return (
    <>
      <Loader />
      <Navbar />
      <AboutHero />
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </>
  );
}

export default About;