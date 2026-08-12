import React, { useState, useRef } from "react";
import "./ContactPage.css";

import emailjs from "@emailjs/browser";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaArrowRight,
    FaPaperPlane,
} from "react-icons/fa";

import contactImg from "../../../media/contactImage.png";

const ContactPage = () => {

    const form = useRef();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setStatus("sending");

        emailjs
            .sendForm(
                "service_14aakor",
                "template_2e4uwt9",
                form.current,
                {
                    publicKey: "H6CxHqVQvkd5HMGL8",
                }
            )
            .then(
                () => {
                    setStatus("success");

                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                    });
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setStatus("error");
                }
            );
    };

    return (
        <main className="contact-page">

            {/* ================= HERO ================= */}
            <section className="contact-hero">

                <div className="contact-hero-content">

                    <span className="contact-eyebrow">
                        GET IN TOUCH
                    </span>

                    <h1>
                        We’d Love To <br />
                        <span>Hear From You</span>
                    </h1>

                    <p>
                        Have a question, feedback, or need assistance?
                        <br />
                        Our team is just a message away.
                    </p>

                    <div className="contact-features">

                        <div className="contact-feature">
                            <div className="feature-icon">🎧</div>
                            <span>Quick Support</span>
                        </div>

                        <div className="contact-feature">
                            <div className="feature-icon">👥</div>
                            <span>Friendly Team</span>
                        </div>

                        <div className="contact-feature">
                            <div className="feature-icon">🛡️</div>
                            <span>Trusted Care</span>
                        </div>

                    </div>

                </div>


                <div className="contact-hero-image">

                    <img
                        src={contactImg}
                        alt="Contact Medi Hospital"
                    />

                </div>

            </section>


            {/* ================= CONTACT INTRO ================= */}
            <section className="contact-intro">

                <div className="contact-section-heading">

                    <span className="section-tag">
                        CONTACT MEDI HOSPITAL
                    </span>

                    <h2>
                        Let's Start a <span>Conversation</span>
                    </h2>

                    <p>
                        Whether you have a healthcare enquiry, need assistance,
                        or simply want to reach us, we're just a message away.
                    </p>

                </div>


                {/* ================= CONTACT CONTENT ================= */}
                <div className="contact-main">


                    {/* ---------- LEFT INFORMATION ---------- */}
                    <div className="contact-info">

                        <div className="contact-info-header">

                            <span>REACH US</span>

                            <h3>
                                We're always <strong>happy to help.</strong>
                            </h3>

                        </div>


                        {/* Address */}
                        <div className="contact-info-card">

                            <div className="contact-info-icon">
                                <FaMapMarkerAlt />
                            </div>

                            <div>

                                <span>OUR LOCATION</span>

                                <h4>
                                    Visit Medi Hospital
                                </h4>

                                <p>
                                    8 LANE, Bhiphore Hirak Rd, opposite SB
                                    International Hotel, Sugiadih, Tapowan
                                    colony, Dhanbad, Jharkhand-826010
                                </p>

                            </div>

                        </div>


                        {/* Phone */}
                        <div className="contact-info-card">

                            <div className="contact-info-icon">
                                <FaPhoneAlt />
                            </div>

                            <div>

                                <span>CALL US</span>

                                <h4>
                                    24×7 Assistance
                                </h4>

                                <a href="tel:+919241959991">
                                    +91 92419 59991
                                </a>

                            </div>

                        </div>


                        {/* Email */}
                        <div className="contact-info-card">

                            <div className="contact-info-icon">
                                <FaEnvelope />
                            </div>

                            <div>

                                <span>EMAIL US</span>

                                <h4>
                                    Send Us a Message
                                </h4>

                                <a href="mailto:medihospital01@gmail.com">
                                    medihospital01@gmail.com
                                </a>

                            </div>

                        </div>


                        {/* Hours */}
                        <div className="contact-info-card">

                            <div className="contact-info-icon">
                                <FaClock />
                            </div>

                            <div>

                                <span>WORKING HOURS</span>

                                <h4>
                                    We're Available
                                </h4>

                                <p>
                                    24×7 Emergency Services
                                </p>

                            </div>

                        </div>


                        {/* ---------- SOCIAL MEDIA ---------- */}
                        <div className="contact-social">

                            <div className="contact-social-title">

                                <span>
                                    CONNECT WITH US
                                </span>

                                <h4>
                                    Follow Medi Hospital
                                </h4>

                            </div>


                            <div className="social-links">

                                <a
                                    href="https://www.facebook.com/share/1HKsCBjgau/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="social-link facebook"
                                >
                                    <FaFacebookF />

                                    <div>
                                        <strong>
                                            Facebook
                                        </strong>

                                        <span>
                                            @MediHospital
                                        </span>
                                    </div>

                                    <FaArrowRight className="social-arrow" />

                                </a>


                                <a
                                    href="https://www.instagram.com/hospital_medi?igsh=MWVtbW5pM2hlbTR0NQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="social-link instagram"
                                >
                                    <FaInstagram />

                                    <div>
                                        <strong>
                                            Instagram
                                        </strong>

                                        <span>
                                            @MediHospital
                                        </span>
                                    </div>

                                    <FaArrowRight className="social-arrow" />

                                </a>


                                <a
                                    href="https://www.linkedin.com/in/medi-hospital-333747376/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="social-link linkedin"
                                >
                                    <FaLinkedinIn />

                                    <div>
                                        <strong>
                                            LinkedIn
                                        </strong>

                                        <span>
                                            Medi Hospital
                                        </span>
                                    </div>

                                    <FaArrowRight className="social-arrow" />

                                </a>

                            </div>

                        </div>

                    </div>


                    {/* ---------- RIGHT FORM ---------- */}
                    <div className="contact-form-wrapper">

                        <div className="contact-form-top">

                            <div>

                                <span>
                                    SEND AN ENQUIRY
                                </span>

                                <h3>
                                    How can we <em>help?</em>
                                </h3>

                            </div>

                            <div className="form-icon">
                                <FaPaperPlane />
                            </div>

                        </div>


                        <form
                            ref={form}
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="form-row">

                                <div className="form-group">

                                    <label htmlFor="name">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                <div className="form-group">

                                    <label htmlFor="email">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>


                            <div className="form-row">

                                <div className="form-group">

                                    <label htmlFor="phone">
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                <div className="form-group">

                                    <label htmlFor="subject">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="What is this regarding?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />

                                </div>

                            </div>


                            <div className="form-group">

                                <label htmlFor="message">
                                    Your Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>

                            </div>


                            <button
                                type="submit"
                                className="contact-submit"
                                disabled={status === "sending"}
                            >

                                <span>
                                    {status === "sending"
                                        ? "Sending..."
                                        : "Send Message"}
                                </span>

                                <FaArrowRight />

                            </button>


                            {/* Success / Error Message */}

                            {status === "success" && (
                                <p className="form-success">
                                    Your enquiry has been sent successfully.
                                    Our team will get back to you soon.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="form-error">
                                    Something went wrong while sending your
                                    enquiry. Please try again.
                                </p>
                            )}

                        </form>

                    </div>

                </div>

            </section>


            {/* ================= LOCATION ================= */}
            <section className="contact-location">

                <div className="location-content">

                    <span className="section-tag">
                        FIND US
                    </span>

                    <h2>
                        Visit <span>Medi Hospital</span>
                    </h2>

                    <p>
                        We're conveniently located in Dhanbad and are ready
                        to provide compassionate healthcare whenever you need us.
                    </p>

                    <a
                        href="https://maps.app.goo.gl/6Kqq2UcjM6tmRYGq6?g_st=aw"
                        className="location-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Get Directions
                        <FaArrowRight />
                    </a>

                </div>


                <div className="location-map">

                    <iframe
                        title="Medi Hospital Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8112482452993!2d86.4637477!3d23.8253101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bb41f0966b77%3A0x245f41978b22d97f!2sMedi%20Hospital!5e0!3m2!1sen!2sin!4v1786529303954!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>

                </div>

            </section>


            {/* ================= EMERGENCY CTA ================= */}
            <section className="contact-emergency">

                <div className="emergency-content">

                    <div className="emergency-icon">
                        <FaPhoneAlt />
                    </div>

                    <div>

                        <span>
                            NEED IMMEDIATE HELP?
                        </span>

                        <h2>
                            Our Emergency Team is Available
                            <strong> 24×7</strong>
                        </h2>

                        <p>
                            For urgent medical assistance, contact our
                            emergency team immediately.
                        </p>

                    </div>

                    <a
                        href="tel:+919241959991"
                        className="emergency-button"
                    >
                        <FaPhoneAlt />
                        Call Emergency
                    </a>

                </div>

            </section>

        </main>
    );
};

export default ContactPage;