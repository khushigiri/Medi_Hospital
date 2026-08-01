import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import DoctorsHero from "../components/Doctors/DoctorsHero/DoctorsHero";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons/FloatingButtons";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function Doctors() {
  return (
    <>
      <Loader />
      <Navbar />
      <DoctorsHero />
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </>
  );
}

export default Doctors;