import Navbar from "../components/Navbar/Navbar";
import ServicesHero from "../components/Services/ServicesHero/ServicesHero";
import ServicesSection from "../components/Services/ServicesGrid/ServicesGrid";
import Footer from "../components/Footer/Footer";

function Services() {
    return (
        <>
            <Navbar />
            <ServicesHero />
            <ServicesSection />
            <Footer />
        </>
    );
}

export default Services;