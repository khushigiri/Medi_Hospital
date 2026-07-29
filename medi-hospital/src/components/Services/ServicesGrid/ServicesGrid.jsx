import "./ServicesGrid.css";

import {
    FaStethoscope,
    FaSyringe,
    FaNotesMedical,
    FaBrain,
    FaHandHoldingMedical,
    FaLungs,
    FaBandAid,
    FaHeartbeat,
} from "react-icons/fa";

import { GiStomach } from "react-icons/gi";

const services = [
    {
        icon: <FaStethoscope />,
        title: "General Medicine",
        description:
            "Comprehensive diagnosis and treatment for common illnesses and preventive healthcare.",
    },
    {
        icon: <FaHeartbeat />,
        title: "Heart Clinic",
        description:
            "Expert cardiac consultation, ECG evaluation, hypertension, and heart disease management.",
    },
    {
        icon: <FaSyringe />,
        title: "Diabetic Clinic",
        description:
            "Personalized diabetes care, blood sugar monitoring, and long-term management.",
    },
    {
        icon: <FaNotesMedical />,
        title: "Thyroid Clinic",
        description:
            "Diagnosis and treatment of thyroid disorders with hormonal evaluation and care.",
    },
    {
        icon: <FaBrain />,
        title: "Neuro Clinic",
        description:
            "Specialized care for brain, spine, nerve disorders, headaches, and stroke management.",
    },
    {
        icon: <GiStomach />,
        title: "Gastro Clinic",
        description:
            "Diagnosis and treatment for digestive, liver, stomach, and intestinal disorders.",
    },
    {
        icon: <FaHandHoldingMedical />,
        title: "Kidney Clinic",
        description:
            "Comprehensive care for kidney diseases, urinary disorders, and renal health.",
    },
    {
        icon: <FaLungs />,
        title: "Asthma Clinic",
        description:
            "Advanced treatment for asthma, allergies, breathing difficulties, and respiratory conditions.",
    },
    {
        icon: <FaBandAid />,
        title: "Pain Clinic",
        description:
            "Effective pain management for chronic, joint, muscle, back, and nerve-related pain.",
    },
];

export default function ServicesGrid() {
    return (
        <section className="services-section">
            <div className="container">
                <div className="section-heading">
                    <span>Our Medical Services</span>
                    <h2>Specialized Healthcare for Every Need</h2>
                    <p>
                        We provide expert consultation, accurate diagnosis, and
                        compassionate treatment across multiple specialties.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="flip-card" key={index}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="service-grid-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                </div>

                                <div className="flip-card-back">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}