import "./DoctorsTeam.css";
import docImg from "../../../media/dr-nk-modi.png";

function DoctorsTeam() {
    return (
        <section className="doctors-team" id="doctors">

            {/* Section Header */}
            <div className="doctors-team-header">

                <span className="doctors-section-label">
                    OUR MEDICAL TEAM
                </span>

                <h2>
                    Meet the Doctors
                    <span> Behind Your Care</span>
                </h2>

                <p>
                    Our doctors combine medical expertise with a
                    compassionate approach to provide personalized
                    care for every patient.
                </p>

            </div>


            {/* =========================
          DOCTOR 1
      ========================= */}

            <div className="doctor-showcase doctor-showcase-one">

                <div className="doctor-image-wrapper">

                    <div className="doctor-image-bg"></div>

                    <img
                        src={docImg}
                        alt="Dr. N. K. Modi"
                        className="doctor-image"
                    />

                    <div className="doctor-image-badge">
                        <span>MEDI</span>
                        <strong>HOSPITAL</strong>
                    </div>

                </div>


                <div className="doctor-info">

                    <span className="doctor-role">
                        Chief Medical Director
                    </span>

                    <h3>
                        Dr. N. K. Modi
                    </h3>

                    <div className="doctor-speciality">
                        <span></span>
                        General Physician & Clinical Cardiologist
                    </div>

                    <p className="doctor-description">
                        With extensive experience in patient care,
                        Dr. N. K. Modi is committed to providing
                        comprehensive medical attention with a
                        strong focus on accurate diagnosis,
                        personalized treatment, and long-term
                        well-being.
                    </p>


                    <div className="doctor-expertise">

                        <div className="expertise-item">
                            <span className="expertise-icon">✚</span>
                            <div>
                                <strong>General Medicine</strong>
                                <small>Comprehensive medical care</small>
                            </div>
                        </div>

                        <div className="expertise-item">
                            <span className="expertise-icon">♥</span>
                            <div>
                                <strong>Clinical Cardiology</strong>
                                <small>Heart & cardiovascular care</small>
                            </div>
                        </div>

                    </div>


                    <a
                        href="tel:+91-9241959991"
                        className="doctor-appointment-btn"
                    >
                        Book an Appointment
                        <span>→</span>
                    </a>

                </div>

            </div>


            {/* =========================
          DOCTOR 2
      ========================= */}

            <div className="doctor-showcase doctor-showcase-two">

                <div className="doctor-info">

                    <span className="doctor-role">
                        Chief Medical Director
                    </span>

                    <h3>
                        Dr. Purnima Kerketta
                    </h3>

                    <div className="doctor-speciality">
                        <span></span>
                        General Physician
                    </div>

                    <p className="doctor-description">
                        Dedicated to providing attentive and
                        compassionate medical care, Dr. Purnima
                        Kerketta focuses on understanding each
                        patient's needs and delivering thoughtful,
                        personalized healthcare.
                    </p>


                    <div className="doctor-expertise">

                        <div className="expertise-item">
                            <span className="expertise-icon">✚</span>
                            <div>
                                <strong>General Medicine</strong>
                                <small>Comprehensive medical care</small>
                            </div>
                        </div>

                        <div className="expertise-item">
                            <span className="expertise-icon">♡</span>
                            <div>
                                <strong>Patient-Centered Care</strong>
                                <small>Personalized medical attention</small>
                            </div>
                        </div>

                    </div>


                    <a
                        href="tel:+91-9241959991"
                        className="doctor-appointment-btn"
                    >
                        Book an Appointment
                        <span>→</span>
                    </a>

                </div>


                <div className="doctor-image-wrapper">

                    <div className="doctor-image-bg"></div>

                    <img
                        src={docImg}
                        alt="Dr. Purnima Kerketta"
                        className="doctor-image"
                    />

                    <div className="doctor-image-badge">
                        <span>MEDI</span>
                        <strong>HOSPITAL</strong>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default DoctorsTeam;