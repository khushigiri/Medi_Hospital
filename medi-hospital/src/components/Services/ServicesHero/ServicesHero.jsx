import "./ServicesHero.css";
import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";

function ServicesHero() {
    return (
        <section className="services-hero">
            <div className="services-overlay"></div>

            <div className="container services-hero-content">

                <motion.span
                    className="services-tag"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Comprehensive Healthcare Services
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Expert Medical Care <br />
                    For Every Stage of Life
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    From routine consultations to advanced diagnostics,
                    emergency care, pharmacy services, and specialized
                    treatments, Medi Hospital is committed to delivering
                    compassionate healthcare with modern medical facilities.
                </motion.p>

            </div>

            <motion.div
                className="floating-icon"
                animate={{
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                }}
            >
                <FaHeartbeat />
            </motion.div>

        </section>
    );
}

export default ServicesHero;