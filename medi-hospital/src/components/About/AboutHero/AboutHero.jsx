import "./AboutHero.css";
import { motion } from "framer-motion";
import {
    FaUserMd,
    FaUsers,
    FaAward,
    FaHeartbeat,
    FaHeart,
    FaHandsHelping,
    FaUserShield,
    FaStethoscope,
    FaHospitalUser,
    FaLeaf,
} from "react-icons/fa";

export default function About() {
    return (
        <>
            {/* ================= ABOUT HERO ================= */}

            <section className="about-hero">

                <div className="about-overlay"></div>

                <motion.div
                    className="about-hero-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span>WELCOME TO MEDI HOSPITAL</span>

                    <h1>About Medi Hospital</h1>

                    <p>
                        Delivering compassionate, affordable, and trusted
                        healthcare with excellence, experience, and a
                        patient-first approach.
                    </p>

                </motion.div>

            </section>


            {/* Next Section */}

            {/* ================= WHO WE ARE ================= */}

            <section className="about-intro">

                <motion.div
                    className="about-intro-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >

                    <span className="section-tag">
                        ABOUT MEDI HOSPITAL
                    </span>

                    <h2>
                        Caring Beyond Treatment
                    </h2>

                    <p className="about-description">
                        Established with the vision of providing accessible,
                        affordable, and compassionate healthcare, Medi Hospital
                        has proudly served more than <strong>40,000 patients </strong>
                        over the past <strong>3 years</strong>.
                    </p>

                    <p className="about-description">
                        Led by <strong>Dr. N. K. Modi</strong>, who brings over
                        <strong> 20 years of medical expertise</strong>, our
                        hospital is committed to delivering quality treatment
                        with a patient-first approach. From preventive healthcare
                        to specialized clinics, we strive to provide trusted
                        medical care for every stage of life.
                    </p>

                </motion.div>

                <motion.div
                    className="about-highlights"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >

                    <div className="highlight-card">
                        <FaUsers />
                        <h3>40,000+</h3>
                        <p>Patients Treated</p>
                    </div>

                    <div className="highlight-card">
                        <FaAward />
                        <h3>3+</h3>
                        <p>Years of Trusted Care</p>
                    </div>

                    <div className="highlight-card">
                        <FaUserMd />
                        <h3>20+</h3>
                        <p>Years of Expertise</p>
                    </div>

                    <div className="highlight-card">
                        <FaHeartbeat />
                        <h3>Patient First</h3>
                        <p>Compassionate Healthcare</p>
                    </div>

                </motion.div>

            </section>

            {/* ================= VISION & MISSION ================= */}

            <section className="vision-section">

                <motion.div
                    className="vision-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="section-tag">
                        OUR PURPOSE
                    </span>

                    <h2>
                        Vision & Mission
                    </h2>

                    <p>
                        Guided by compassion, integrity, and excellence, our vision and
                        mission shape every step we take towards delivering quality
                        healthcare for our community.
                    </p>
                </motion.div>

                <div className="vision-grid">

                    {/* Vision */}

                    <motion.div
                        className="vision-card"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >

                        <span className="card-title">
                            OUR VISION
                        </span>

                        <h3>
                            Building a Healthier Tomorrow
                        </h3>

                        <p>
                            To become one of the most trusted healthcare providers by
                            delivering accessible, affordable, and patient-centered
                            medical care while continually improving the quality of
                            healthcare services for every individual and family.
                        </p>

                    </motion.div>


                    {/* Mission */}

                    <motion.div
                        className="vision-card"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >

                        <span className="card-title">
                            OUR MISSION
                        </span>

                        <h3>
                            Caring with Excellence
                        </h3>

                        <p>
                            To provide comprehensive healthcare with compassion,
                            integrity, and clinical excellence while ensuring every
                            patient receives personalized treatment in a safe,
                            respectful, and supportive environment.
                        </p>

                    </motion.div>

                </div>

            </section>

            {/* ================= CORE VALUES ================= */}

            {/* ================= CORE VALUES ================= */}

            <section className="values-section">

                <motion.div
                    className="values-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="section-tag">
                        OUR CORE VALUES
                    </span>

                    <h2>
                        The Principles That Guide Our Care
                    </h2>

                    <p>
                        Our values shape every decision we make, ensuring compassionate,
                        ethical, and patient-centered healthcare for every individual who
                        trusts Medi Hospital.
                    </p>

                </motion.div>


                <div className="values-wrapper">

                    <motion.div
                        className="value-row"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .5 }}
                        viewport={{ once: true }}
                    >
                        <div className="value-icon">
                            <FaHeart />
                        </div>

                        <div className="value-content">
                            <h3>Compassion</h3>

                            <p>
                                We care for every patient with empathy, kindness, and
                                respect, ensuring they feel valued throughout their
                                healthcare journey.
                            </p>
                        </div>
                    </motion.div>



                    <motion.div
                        className="value-row"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .55 }}
                        viewport={{ once: true }}
                    >
                        <div className="value-icon">
                            <FaUserShield />
                        </div>

                        <div className="value-content">
                            <h3>Integrity</h3>

                            <p>
                                We uphold honesty, transparency, and ethical medical
                                practices while earning the trust of our patients.
                            </p>
                        </div>
                    </motion.div>



                    <motion.div
                        className="value-row"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                    >
                        <div className="value-icon">
                            <FaStethoscope />
                        </div>

                        <div className="value-content">
                            <h3>Excellence</h3>

                            <p>
                                We continuously strive to deliver the highest standards
                                of medical care through experience, innovation, and
                                continuous improvement.
                            </p>
                        </div>
                    </motion.div>



                    <motion.div
                        className="value-row"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .65 }}
                        viewport={{ once: true }}
                    >
                        <div className="value-icon">
                            <FaHospitalUser />
                        </div>

                        <div className="value-content">
                            <h3>Patient First</h3>

                            <p>
                                Every decision we make is centered around providing
                                personalized, respectful, and compassionate care.
                            </p>
                        </div>
                    </motion.div>



                    <motion.div
                        className="value-row"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                    >
                        <div className="value-icon">
                            <FaHandsHelping />
                        </div>

                        <div className="value-content">
                            <h3>Teamwork</h3>

                            <p>
                                Collaboration among healthcare professionals helps us
                                provide seamless and comprehensive treatment.
                            </p>
                        </div>
                    </motion.div>



                    <motion.div
                        className="value-row"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .75 }}
                        viewport={{ once: true }}
                    >
                        <div className="value-icon">
                            <FaLeaf />
                        </div>

                        <div className="value-content">
                            <h3>Wellness</h3>

                            <p>
                                We promote healthier communities through preventive care,
                                awareness, education, and healthier lifestyles.
                            </p>
                        </div>
                    </motion.div>

                </div>

            </section>

            {/* ================= OUR FACILITIES ================= */}

            <section className="facilities-section">

                <motion.div
                    className="facilities-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span className="section-tag">
                        OUR FACILITIES
                    </span>

                    <h2>
                        Modern Healthcare Facilities Designed for Your Comfort
                    </h2>

                    <p>
                        Medi Hospital combines experienced medical professionals with
                        modern infrastructure to ensure safe, comfortable, and quality
                        healthcare for every patient.
                    </p>
                </motion.div>

                <div className="facilities-grid">

                    <motion.div
                        className="facility-card"
                        whileHover={{ y: -8 }}
                    >
                        <h3>24×7 Emergency Care</h3>

                        <p>
                            Immediate medical attention with experienced doctors and
                            trained emergency staff available around the clock.
                        </p>
                    </motion.div>

                    <motion.div
                        className="facility-card"
                        whileHover={{ y: -8 }}
                    >
                        <h3>ICU & HDU</h3>

                        <p>
                            Well-equipped Intensive Care and High Dependency Units for
                            critically ill patients requiring continuous monitoring.
                        </p>
                    </motion.div>

                    <motion.div
                        className="facility-card"
                        whileHover={{ y: -8 }}
                    >
                        <h3>Advanced Diagnostics</h3>

                        <p>
                            Accurate laboratory investigations and diagnostic services
                            supporting timely medical decisions.
                        </p>
                    </motion.div>

                    <motion.div
                        className="facility-card"
                        whileHover={{ y: -8 }}
                    >
                        <h3>Comfortable Patient Rooms</h3>

                        <p>
                            Clean, spacious, and hygienic rooms designed to promote
                            recovery and provide a comfortable stay.
                        </p>
                    </motion.div>

                    <motion.div
                        className="facility-card"
                        whileHover={{ y: -8 }}
                    >
                        <h3>Experienced Medical Team</h3>

                        <p>
                            Skilled doctors, nurses, and healthcare professionals working
                            together to deliver comprehensive patient care.
                        </p>
                    </motion.div>

                    <motion.div
                        className="facility-card"
                        whileHover={{ y: -8 }}
                    >
                        <h3>Patient-Centered Care</h3>

                        <p>
                            Every service is delivered with compassion, transparency,
                            dignity, and a commitment to patient satisfaction.
                        </p>
                    </motion.div>

                </div>

            </section>

        </>
    );
}