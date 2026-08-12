import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import ContactPage from "../components/Contact/ContactPage/ContactPage";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons/FloatingButtons";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function Contact() {
  return (
    <>
      <Loader />
      <Navbar />
      <ContactPage />
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </>
  );
}

export default Contact;