import "./ServicesSection.css";
import { motion } from "framer-motion";
import {
    FaUserMd,
    FaHeartbeat,
    FaNotesMedical,
    FaProcedures,
    FaTint,
    FaFlask,
    FaPills,
    FaAmbulance,
    FaClipboardCheck,
} from "react-icons/fa";

const services = [
    {
        icon: <FaHeartbeat />,
        title: "Diabetes Care",
        desc: "Personalized diabetes diagnosis and long-term management.",
    },
    {
        icon: <FaNotesMedical />,
        title: "ECG",
        desc: "Accurate heart rhythm monitoring with modern equipment.",
    },
    {
        icon: <FaTint />,
        title: "Thyroid Care",
        desc: "Diagnosis and treatment for thyroid disorders.",
    },

    {
        icon: <FaFlask />,
        title: "Laboratory Tests",
        desc: "Reliable pathology and diagnostic investigations.",
    },

    // ⭐ Featured Card
    {
        icon: <FaUserMd />,
        title: "General Physician",
        desc: "Comprehensive consultations, preventive care, health screenings, and personalized treatment plans for every member of your family.",
        featured: true,
    },

    {
        icon: <FaProcedures />,
        title: "2D Echo",
        desc: "Advanced cardiac imaging for accurate diagnosis.",
    },

    {
        icon: <FaPills />,
        title: "Pharmacy",
        desc: "Quality medicines available within the hospital.",
    },
    {
        icon: <FaClipboardCheck />,
        title: "Health Checkups",
        desc: "Routine preventive examinations for better wellness.",
    },
    {
        icon: <FaAmbulance />,
        title: "Emergency Care",
        desc: "Immediate medical assistance during emergencies.",
    },
];

function ServicesSection() {
    return (
        <section className="services-section">

            <div className="container">

                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span>OUR SERVICES</span>

                    <p>
                        Providing compassionate healthcare through modern
                        facilities, experienced doctors and patient-centered
                        treatment for every stage of life.
                    </p>
                </motion.div>

                <div className="services-grid">

                    {services.map((service, index) => (

                        <motion.div
                            key={index}
                            className={`service-card ${service.featured ? "featured" : ""}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                        >

                            <div className="service-icon">
                                {service.icon}
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.desc}</p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default ServicesSection;