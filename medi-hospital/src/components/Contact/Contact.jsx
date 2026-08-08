import "./Contact.css";
import { motion } from "framer-motion";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaPaperPlane,
} from "react-icons/fa";

function Contact() {
    return (
        <section className="contact-section" id="contact">

            <div className="container">

                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                >

                    <span className="section-tag">
                        CONTACT US
                    </span>

                    <h2>
                        Get in Touch with Medi Hospital
                    </h2>

                    <p>
                        Whether you need medical consultation, have questions about our
                        services, or wish to book an appointment, we're here to help.
                        Reach out to us and our team will assist you promptly.
                    </p>

                </motion.div>

                <div className="contact-wrapper">

                    {/* LEFT */}

                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                    >

                        <div className="info-card">
                            <FaPhoneAlt />
                            <div>
                                <h4>Phone</h4>
                                <p>+91 92419 59991</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <FaEnvelope />
                            <div>
                                <h4>Email</h4>
                                <p>medihospital01@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <FaMapMarkerAlt />
                            <div>
                                <h4>Address</h4>
                                <p>
                                    8 Lane, Bhiphore Hirak Rd, opposite SB International Hotel, Sugiadih, Tapowan colony, Dhanbad, Jharkhand 826010
                                </p>
                            </div>
                        </div>

                        <div className="info-card">
                            <FaClock />
                            <div>
                                <h4>Doctor OPD</h4>
                                <p>
                                    Morning : 09:30 AM - 12:30 PM
                                    <br />
                                    Evening : 04:30 PM - 06:30 PM
                                    <br />
                                    (Sunday Evening: No OPD)
                                </p>
                            </div>
                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        className="contact-form"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                    >

                        <form>

                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                            />

                            <textarea
                                rows="5"
                                placeholder="Your Message"
                            ></textarea>

                            <button type="submit">

                                <FaPaperPlane />

                                Send Inquiry

                            </button>

                        </form>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}

export default Contact;