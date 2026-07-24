import "./Footer.css";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHeartbeat,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            <div className="container footer-container">

                {/* About */}

                <div className="footer-column">

                    <div className="footer-logo">

                        <FaHeartbeat />

                        <h2>Medi Hospital</h2>

                    </div>

                    <p>
                        Providing ethical, affordable and compassionate healthcare with
                        transparency and excellence. Trusted by thousands of families for
                        quality medical services.
                    </p>

                    <div className="social-icons">

                        <a
                            href="https://www.facebook.com/share/1HKsCBjgau/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://www.instagram.com/hospital_medi?igsh=MWVtbW5pM2hlbTR0NQ=="
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/medi-hospital-333747376/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedinIn />
                        </a>

                    </div>

                </div>

                {/* Quick Links */}

                <div className="footer-column">

                    <h3>Quick Links</h3>

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#why-us">Why Choose Us</a>
                    <a href="#doctor">Doctor</a>
                    <a href="#contact">Contact</a>

                </div>

                {/* Services */}

                <div className="footer-column">

                    <h3>Our Services</h3>

                    <a href="#services">General Medicine</a>
                    <a href="#services">Routine Health Check-up</a>
                    <a href="#services">Emergency Care</a>
                    <a href="#services">Diabetes & Hypertension</a>
                    <a href="#services">Inpatient Care</a>
                    <a href="#services">Pharmacy</a>

                </div>

                {/* Contact */}

                <div className="footer-column">

                    <h3>Contact Info</h3>

                    <div className="footer-contact">

                        <FaPhoneAlt />

                        <span>+91 92419 59991</span>

                    </div>

                    <div className="footer-contact">

                        <FaEnvelope />

                        <span>medihospital01@gmail.com</span>

                    </div>

                    <div className="footer-contact">

                        <FaMapMarkerAlt />

                        <span>8 LANE, Bhiphore Hirak Rd, Tapowan colony, Dhanbad, Jharkhand - 826010</span>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 Medi Hospital. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;