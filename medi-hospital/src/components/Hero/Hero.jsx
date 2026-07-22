import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaPhoneAlt,
    FaHospital,
    FaHeartbeat,
    FaUserMd,
    FaProcedures,
} from "react-icons/fa";

import "./Hero.css";
import hospitalInfo from "../../data/hospitalInfo";

function Hero() {
    return (
        <section className="hero">

            {/* Background Blur */}
            <div className="hero-bg-circle hero-circle-1"></div>
            <div className="hero-bg-circle hero-circle-2"></div>

            <div className="container hero-container">

                {/* LEFT */}

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className="hero-badge">
                        <FaHeartbeat />
                        <span>{hospitalInfo.tagline}</span>
                    </div>

                    <h1>
                        Your Health,
                        <br />
                        Our Commitment.
                    </h1>

                    <p>
                        Medi Hospital provides compassionate healthcare with
                        experienced physicians, advanced diagnostic facilities,
                        critical care services and patient-focused treatment
                        in Dhanbad.
                    </p>

                    <div className="hero-buttons">

                        <Link to="/contact" className="primary-btn">
                            <FaPhoneAlt />
                            Contact Us
                        </Link>

                        <Link to="/services" className="secondary-btn">
                            <FaHospital />
                            Our Services
                        </Link>

                    </div>

                </motion.div>

                {/* RIGHT */}

                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                >

                    <div className="doctor-background"></div>

                    <motion.img
                        className="doctor-image"
                        src="/doctors/dr-nk-modi.png"
                        alt="Dr. N. K. Modi"
                        animate={{
                            y: -12
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    />

                    {/* Floating Cards */}

                    <motion.div
                        className="floating-card card-one"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    >
                        <FaUserMd />
                        <div>
                            <h4>Consultant</h4>
                            <p>Physician</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="floating-card card-two"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                    >
                        <FaHeartbeat />
                        <div>
                            <h4>Clinical</h4>
                            <p>Cardiologist</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="floating-card card-three"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ repeat: Infinity, duration: 3.5 }}
                    >
                        <FaProcedures />
                        <div>
                            <h4>20 Bedded</h4>
                            <p>ICU / HDU</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="floating-card card-four"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 3.8 }}
                    >
                        <FaHospital />
                        <div>
                            <h4>40,000+</h4>
                            <p>Patients Served</p>
                        </div>
                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}

export default Hero;