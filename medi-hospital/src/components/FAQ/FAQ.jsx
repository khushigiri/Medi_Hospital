import "./FAQ.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "What are the OPD consultation timings?",
        answer:
            "Our OPD is available throughout the week from 9:30 am to 12:30 pm and 4:30 pm to 6:30 pm on the evenings except sunday evenings. Still we would recommend you to call the hospital before visiting to avoid any inconvenience.",
    },
    {
        question: "Do I need to book an appointment in advance?",
        answer:
            "Walk-in patients are welcome, but booking an appointment helps reduce waiting time and ensures quicker consultation.",
    },
    {
        question: "Does Medi Hospital provide emergency services?",
        answer:
            "Yes. Our hospital is equipped to provide emergency medical care with experienced healthcare professionals available to assist patients.",
    },
    {
        question: "What payment methods are accepted?",
        answer:
            "We accept cash, UPI, debit cards, credit cards and other commonly used digital payment methods.",
    },
    {
        question: "What conditions does Dr. N. K. Modi treat?",
        answer:
            "Dr. N. K. Modi provides consultation and treatment for fever, cough, cold, infections, diabetes, hypertension, thyroid disorders, stomach problems, respiratory illnesses, seasonal diseases, and other common acute and chronic medical conditions.",
    },
    {
        question: "Can I consult Dr. N. K. Modi for preventive health check-ups?",
        answer:
            "Yes. Regular health check-ups help detect medical conditions at an early stage. Dr. N. K. Modi offers preventive consultations, lifestyle guidance, and routine health assessments to help patients maintain long-term health and well-being.",
    },
];

function FAQ() {
    const [active, setActive] = useState(0);

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">

            <div className="container">

                <motion.div
                    className="faq-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-tag">FAQ</span>

                    <h2>Frequently Asked Questions</h2>

                    <p>
                        Find answers to some of the most common questions about
                        appointments, facilities and healthcare services at Medi Hospital.
                    </p>
                </motion.div>

                <div className="faq-container">

                    {faqs.map((faq, index) => (

                        <motion.div
                            className={`faq-item ${active === index ? "active" : ""}`}
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * .08 }}
                            viewport={{ once: true }}
                        >

                            <div
                                className="faq-question"
                                onClick={() => toggle(index)}
                            >
                                <h3>{faq.question}</h3>

                                {active === index ? <FaMinus /> : <FaPlus />}
                            </div>

                            <div className="faq-answer">

                                <p>{faq.answer}</p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default FAQ;