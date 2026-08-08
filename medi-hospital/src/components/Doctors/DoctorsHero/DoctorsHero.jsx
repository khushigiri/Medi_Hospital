import "./DoctorsHero.css";
import doctorsWithPatientsImg from "../../../media/doctorsWithPatients.png";
function DoctorsHero() {
    return (
        <section className="doctors-hero">

            {/* Doctor consultation image */}
            <div className="doctors-hero-image">
                <img
                    src={doctorsWithPatientsImg}
                    alt="Doctor consulting with patients"
                />
            </div>

            {/* Soft blend between content and image */}
            <div className="doctors-hero-blend"></div>

            {/* Hero content */}
            <div className="doctors-hero-content">

                <span className="doctors-hero-tag">
                    OUR MEDICAL EXPERTS
                </span>

                <h1>
                    Expert Doctors.
                    <br />
                    <span>Compassionate Care.</span>
                </h1>

                <p>
                    Meet our experienced team of doctors dedicated to
                    providing trusted medical care with expertise,
                    compassion, and personalized attention.
                </p>

                <div className="doctors-hero-actions">

                    <a
                        href="#doctors"
                        className="doctors-primary-btn"
                    >
                        Meet Our Doctors
                        <span>→</span>
                    </a>

                    <a
                        href="/contact"
                        className="doctors-secondary-btn"
                    >
                        Book an Appointment
                    </a>

                </div>

            </div>

        </section>
    );
}

export default DoctorsHero;