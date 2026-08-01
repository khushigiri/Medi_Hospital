import "./DoctorsHero.css";
import { FaUserMd } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DoctorsHero() {
    return (
        <section className="doctors-hero">

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <span className="hero-tag">
                    <FaUserMd />
                    Our Medical Experts
                </span>

                <h1>
                    Meet Our <span>Experienced Doctors</span>
                </h1>

                <p>
                    Dedicated healthcare professionals committed to providing
                    compassionate treatment, accurate diagnosis, and personalized care
                    for every patient.
                </p>

                <div className="hero-buttons">

                    <Link to="/contact" className="primary-btn">
                        Contact Hospital
                    </Link>

                    <Link to="/services" className="secondary-btn">
                        Explore Services
                    </Link>

                </div>

            </div>

        </section>
    );
}