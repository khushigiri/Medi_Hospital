import "./WhyChoose.css";
import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaUserMd,
    FaHospital,
    FaHeartbeat,
    FaFlask,
    FaHandHoldingHeart,
    FaMoneyBillWave,
} from "react-icons/fa";

import whyChooseImg from "./whyChoose.jpeg";

const features = [
    {
        icon: <FaUserMd />,
        title: "20+ Years of Medical Expertise",
        desc: "Experienced care under the guidance of Dr. N. K. Modi.",
    },
    {
        icon: <FaHospital />,
        title: "20-Bedded ICU & HDU",
        desc: "Advanced critical care facilities for emergency treatment.",
    },
    {
        icon: <FaHeartbeat />,
        title: "24×7 Emergency Care",
        desc: "Immediate medical attention whenever you need it.",
    },
    {
        icon: <FaFlask />,
        title: "Diagnostic Lab & Imaging",
        desc: "Modern diagnostic services for accurate and timely results.",
    },
    {
        icon: <FaHandHoldingHeart />,
        title: "Patient-Centered Care",
        desc: "Compassionate treatment focused on comfort and recovery.",
    },
    {
        icon: <FaMoneyBillWave />,
        title: "Affordable Healthcare",
        desc: "Quality healthcare services at reasonable costs.",
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
        x: 30,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
        },
    },
};

export default function WhyChoose() {
    return (
        <section className="why-section">

            <div className="why-container">

                <motion.div
                    className="why-image"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src={whyChooseImg} alt="Why Choose Medi Hospital" />
                </motion.div>

                <motion.div
                    className="why-content"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.span
                        variants={item}
                        className="why-tag"
                    >
                        WHY CHOOSE US
                    </motion.span>

                    <motion.h2 variants={item}>
                        Trusted Healthcare,
                        <br />
                        Compassionate Treatment
                    </motion.h2>

                    <motion.p
                        variants={item}
                        className="why-description"
                    >
                        Medi Hospital combines experienced medical
                        professionals, modern facilities and a patient-first
                        approach to deliver quality healthcare for every
                        individual and family.
                    </motion.p>

                    <motion.div
                        variants={container}
                        className="why-features"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="why-feature-card"
                            >
                                <div className="why-icon">
                                    {feature.icon}
                                </div>

                                <div className="why-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </div>

                                <FaCheckCircle className="why-check" />
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}