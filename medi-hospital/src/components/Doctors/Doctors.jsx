import "./Doctors.css";
import doctorImg from "./dr-nk-modi.png";

import { motion } from "framer-motion";

import {
    FaAward,
    FaCheckCircle,
    FaArrowRight,
} from "react-icons/fa";

function Doctor() {
    return (
        <section className="doctor-section" id="doctor">

            <div className="container doctor-container">

                <motion.div
                    className="doctor-image"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                >

                    <div className="doctor-bg"></div>

                    <img src={doctorImg} alt="Dr. N. K. Modi" />

                    <div className="experience-card">

                        <FaAward />

                        <div>

                            <h3>20+</h3>
                            <span>Years Experience</span>

                        </div>

                    </div>

                </motion.div>

                <motion.div
                    className="doctor-content"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                >

                    <span className="section-tag">
                        OUR DOCTOR
                    </span>

                    <h2>
                        Meet Dr. N. K. Modi
                    </h2>

                    <h4>
                        Chief Medical Director
                    </h4>

                    <p>
                        With over <strong>20 years of medical experience</strong>,
                        Dr. N. K. Modi has dedicated his career to providing
                        ethical, affordable and patient-centered healthcare.
                        His commitment to evidence-based treatment and transparent
                        communication has earned the trust of thousands of families.
                    </p>

                    <div className="doctor-features">

                        <div>
                            <FaCheckCircle />
                            General Physician
                        </div>

                        <div>
                            <FaCheckCircle />
                            Evidence-Based Treatment
                        </div>

                        <div>
                            <FaCheckCircle />
                            Transparent & Ethical Care
                        </div>

                        <div>
                            <FaCheckCircle />
                            Patient-First Approach
                        </div>

                        <div>
                            <FaCheckCircle />
                            Preventive Healthcare
                        </div>

                        <div>
                            <FaCheckCircle />
                            Trusted by 40,000+ Patients
                        </div>

                    </div>

                    <a href="#contact" className="doctor-btn">

                        Book Consultation

                        <FaArrowRight />

                    </a>

                </motion.div>

            </div>

        </section>
    );
}

export default Doctor;