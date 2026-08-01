import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import ServicesHero from "../components/Services/ServicesHero/ServicesHero";
import ServicesSection from "../components/Services/ServicesGrid/ServicesGrid";
import PatientsWard from "../components/Services/PatientWards/PatientWards";
import Facilities from "../components/Services/Facilities/Facilities";
import TreatmentProcess from "../components/Services/TreatmentProcess/TreatmentProcess";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons/FloatingButtons";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

function Services() {
    return (
        <>
            <Loader />
            <Navbar />
            <ServicesHero />
            <ServicesSection />
            <PatientsWard />
            <Facilities />
            <TreatmentProcess />
            <Footer />
            <FloatingButtons />
            <ScrollToTop />
        </>
    );
}

export default Services;