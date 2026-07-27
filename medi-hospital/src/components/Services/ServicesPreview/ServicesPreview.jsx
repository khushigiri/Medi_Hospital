import "./ServicesPreview.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    FaHeartbeat,
    FaBrain,
    FaLungs,
    FaAmbulance,
    FaTint,
    FaNotesMedical,
    FaArrowRight,
} from "react-icons/fa";

const services = [
    {
        icon: <FaHeartbeat />,
        title: "Heart Clinic",
        desc: "Comprehensive cardiac consultation and personalized heart care.",
    },
    {
        icon: <FaBrain />,
        title: "Neuro Clinic",
        desc: "Expert diagnosis and treatment for neurological disorders.",
    },
    {
        icon: <FaTint />,
        title: "Diabetic Clinic",
        desc: "Specialized diabetes management with long-term care plans.",
    },
    {
        icon: <FaLungs />,
        title: "Asthma Clinic",
        desc: "Advanced respiratory care for asthma and breathing conditions.",
    },
    {
        icon: <FaNotesMedical />,
        title: "Thyroid Clinic",
        desc: "Comprehensive evaluation and treatment for thyroid disorders.",
    },
    {
        icon: <FaAmbulance />,
        title: "Emergency Care",
        desc: "Prompt emergency medical care with trained professionals and advanced facilities.",
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export default function Services() {
    return (
        <section className="services-section" id="services">

            <motion.div
                className="services-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <span className="services-tag">
                    OUR SERVICES
                </span>

                <h2>
                    Quality Healthcare Across Multiple Specialities
                </h2>

                <p>
                    We provide compassionate and comprehensive healthcare
                    through specialized clinics and advanced medical facilities,
                    ensuring the best treatment for every patient.
                </p>
            </motion.div>

            <motion.div
                className="services-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {services.map((service, index) => (
                    <motion.div
                        className="service-card"
                        key={index}
                        variants={item}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.3 },
                        }}
                    >
                        <div className="service-icon">
                            {service.icon}
                        </div>

                        <h3>{service.title}</h3>

                        <p>{service.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="services-btn-wrapper"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
            >
                <Link to="/services" className="services-btn">
                    View All Services
                    <FaArrowRight />
                </Link>
            </motion.div>

        </section>
    );
}