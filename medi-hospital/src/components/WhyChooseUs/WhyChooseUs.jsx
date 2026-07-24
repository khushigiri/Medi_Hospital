import "./WhyChooseUs.css";
import { motion } from "framer-motion";

import {
    FaShieldAlt,
    FaHandHoldingHeart,
    FaNotesMedical,
    FaWallet,
    FaPills,
    FaHeartbeat,
} from "react-icons/fa";

const features = [
    {
        icon: <FaShieldAlt />,
        title: "Transparent Billing",
        text: "Every treatment cost is clearly explained with no hidden charges, ensuring complete transparency.",
    },
    {
        icon: <FaWallet />,
        title: "Affordable Healthcare",
        text: "Quality medical care at fair and reasonable prices without compromising treatment standards.",
    },
    {
        icon: <FaNotesMedical />,
        title: "Evidence-Based Treatment",
        text: "Only medically necessary investigations and procedures are recommended for every patient.",
    },
    {
        icon: <FaHandHoldingHeart />,
        title: "Compassionate Care",
        text: "Every patient is treated with dignity, empathy and personal attention throughout their healthcare journey.",
    },
    {
        icon: <FaPills />,
        title: "Cost-Effective Medicines",
        text: "Affordable medicines and equally effective alternatives are prescribed whenever appropriate.",
    },
    {
        icon: <FaHeartbeat />,
        title: "Best Clinical Outcomes",
        text: "Our commitment is to deliver ethical healthcare with the best possible outcomes at a fair price.",
    },
];

function WhyChooseUs() {
    return (
        <section className="why-section" id="why-us">

            <div className="container">

                <motion.div
                    className="why-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                >

                    <span className="section-tag">
                        WHY CHOOSE US
                    </span>

                    <h2>
                        Trusted Care.
                        <br />
                        Transparent Costs.
                        <br />
                        Better Outcomes.
                    </h2>

                    <p>
                        At Medi Hospital, we believe quality healthcare should
                        be ethical, affordable and completely transparent.
                        Every decision we make is focused on delivering
                        compassionate care with honesty and trust.
                    </p>

                </motion.div>

                <div className="why-grid">

                    {features.map((item, index) => (

                        <motion.div
                            key={index}
                            className="why-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: .5,
                                delay: index * .08,
                            }}
                            viewport={{ once: true }}
                        >

                            <div className="why-icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.text}</p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;