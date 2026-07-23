import "./About.css";
import aboutImg from "./about.png";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
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
            duration: 0.7,
        },
    },
};

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">

                {/* LEFT */}

                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={aboutImg}
                        alt="Medi Hospital"
                    />
                </motion.div>

                {/* RIGHT */}

                <motion.div
                    className="about-content"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >

                    <motion.span variants={item} className="section-tag">
                        ABOUT MEDI HOSPITAL
                    </motion.span>

                    <motion.h2 variants={item}>
                        Your Health,
                        <br />
                        Our First Priority
                    </motion.h2>

                    <motion.h4 variants={item}>
                        AAPKE SWAASTH KA PAHALA KADAM
                    </motion.h4>

                    <motion.p variants={item}>
                        Established with the vision of providing
                        accessible, affordable and compassionate
                        healthcare, Medi Hospital has proudly served
                        more than <strong>40,000 patients</strong> over the
                        last <strong>3 years</strong>.

                        <br /><br />

                        Led by <strong>Dr. N. K. Modi</strong>, who brings
                        over <strong>20 years of medical expertise</strong>,
                        our hospital is committed to delivering
                        quality treatment with a patient-first
                        approach. From preventive care to critical
                        care services, we strive to provide trusted
                        healthcare for every stage of life.

                    </motion.p>

                    <motion.div
                        variants={item}
                        className="stats"
                    >

                        <div>
                            <h3>40K+</h3>
                            <span>Patients</span>
                        </div>

                        <div>
                            <h3>3+</h3>
                            <span>Years</span>
                        </div>

                        <div>
                            <h3>Trusted</h3>
                            <span>Healthcare</span>
                        </div>

                        <div>
                            <h3>Patient</h3>
                            <span>First</span>
                        </div>

                    </motion.div>

                    <motion.div variants={item}>
                        <Link to="/about" className="about-btn">
                            Learn More
                            <FaArrowRight />
                        </Link>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}