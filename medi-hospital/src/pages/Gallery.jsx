import Loader from "../components/Loader/Loader";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FloatingButtons from "../components/FloatingButtons/FloatingButtons";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import { useState } from "react";
import "./Gallery.css";

import hospitalImg from "../media/hospital.png";
import receptionImg from "../media/reception.jpeg";
import waitingAreaImg from "../media/waitingArea.png";
import genWardImg from "../media/genWard.png";
import cabinImg from "../media/cabin.png";
import docConsultImg from "../media/doctorsWithPatients.png";
import medTeamImg from "../media/medicalTeam.png";
import nursingTeamImg from "../media/nursingStaff.png";
import pharmaImg from "../media/mediPharma.png";
import techniciansAndSuppStaffImg from "../media/techniciansAndSupportStaff.png";
import patientCareImg from "../media/patientCare.png";
import nursingCareImg from "../media/nursingCare.png";
import patientSupportImg from "../media/patientSupport.png";
import awarenessProgramImg from "../media/awarenessProgram.png";
import hospitalEventImg from "../media/hospitalEvent.png";
import healthCampImg from "../media/healthCamp.png";
import specCelebrationImg from "../media/specialCelebration.png";
import medEquipImg from "../media/medicalEquipment.png";
import diagFacilityImg from "../media/diagnosticFacility.png";
import treatRoom from "../media/treatmentRoom.png";
import clinicalFacilityImg from "../media/clinicalFacility.png";

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const gallerySections = [
        {
            id: "infrastructure",
            title: "Hospital & Infrastructure",
            subtitle: "A space designed around comfort, care and healing.",
            images: [
                {
                    src: hospitalImg,
                    title: "Our Hospital",
                    description: "A welcoming healthcare environment designed for comfort and quality care.",
                },
                {
                    src: receptionImg,
                    title: "Reception",
                    description: "A warm and welcoming first point of contact for every patient and visitor.",
                },
                {
                    src: waitingAreaImg,
                    title: "Waiting Area",
                    description: "A comfortable and peaceful space for patients and their families.",
                },
                {
                    src: genWardImg,
                    title: "General Ward",
                    description: "A clean and comfortable setting supporting safe and attentive patient care.",
                },
                {
                    src: cabinImg,
                    title: "Cabin",
                    description: "A private and comfortable space designed for focused patient care and recovery.",
                },
            ],
        },

        {
            id: "team",
            title: "Our Doctors & Medical Team",
            subtitle: "Dedicated professionals working together for better care.",
            images: [
                {
                    src: medTeamImg,
                    title: "Our Medical Team",
                    description: "A dedicated team of healthcare professionals committed to patient well-being.",
                },
                {
                    src: docConsultImg,
                    title: "Doctor Consultation",
                    description: "Personalized consultations focused on understanding and addressing patient needs.",
                },
                {
                    src: nursingTeamImg,
                    title: "Nursing Team",
                    description: "Compassionate nursing professionals providing attentive care throughout the journey.",
                },
                {
                    src: techniciansAndSuppStaffImg,
                    title: "Technicians and Support Staff",
                    description: "Skilled support teams helping ensure smooth and efficient hospital services.",
                },
                {
                    src: pharmaImg,
                    title: "Medi Pharma",
                    description: "Convenient access to essential medicines and pharmaceutical support.",
                },
            ],
        },

        {
            id: "care",
            title: "Patient Care",
            subtitle: "Compassionate care at every step of the patient's journey.",
            images: [
                {
                    src: patientCareImg,
                    title: "Patient Care",
                    description: "Patient-focused care delivered with compassion, attention and understanding.",
                },
                {
                    src: docConsultImg,
                    title: "Consultation",
                    description: "Thoughtful medical guidance helping patients make informed healthcare decisions.",
                },
                {
                    src: nursingCareImg,
                    title: "Nursing Care",
                    description: "Dedicated nursing support focused on comfort, safety and recovery.",
                },
                {
                    src: patientSupportImg,
                    title: "Patient Support",
                    description: "Helping patients and families feel supported, informed and cared for.",
                },
            ],
        },

        {
            id: "events",
            title: "Events & Activities",
            subtitle: "Creating awareness, encouraging wellness and serving our community.",
            images: [
                {
                    src: healthCampImg,
                    title: "Health Camp",
                    description: "Community-focused healthcare initiatives promoting early care and wellness.",
                },
                {
                    src: awarenessProgramImg,
                    title: "Awareness Program",
                    description: "Educational initiatives encouraging greater awareness about health and prevention.",
                },
                {
                    src: hospitalEventImg,
                    title: "Hospital Event",
                    description: "Meaningful moments that bring our healthcare community together.",
                },
                {
                    src: specCelebrationImg,
                    title: "Special Celebration",
                    description: "Celebrating important moments and creating memorable experiences together.",
                },
            ],
        },

        {
            id: "facilities",
            title: "Modern Facilities",
            subtitle: "Thoughtfully equipped spaces supporting quality healthcare.",
            images: [
                {
                    src: medEquipImg,
                    title: "Medical Equipment",
                    description: "Essential medical equipment supporting accurate and efficient patient care.",
                },
                {
                    src: diagFacilityImg,
                    title: "Diagnostic Facility",
                    description: "A well-equipped environment supporting reliable diagnostic services.",
                },
                {
                    src: treatRoom,
                    title: "Treatment Room",
                    description: "A clean and organized space designed for safe and focused treatment.",
                },
                {
                    src: clinicalFacilityImg,
                    title: "Clinical Facility",
                    description: "Purpose-built clinical spaces supporting professional and quality healthcare.",
                },
            ],
        },
    ];

    return (
        <>
            <Loader />
            <Navbar />

            <main className="gallery-page">

                {/* ================= HERO ================= */}
                <section className="gallery-hero">

                    <div className="gallery-hero-bg"></div>

                    <div className="gallery-hero-content">

                        <span className="gallery-eyebrow">
                            OUR GALLERY
                        </span>

                        <h1>
                            Moments of <span>Care</span>
                        </h1>

                        <p>
                            Take a glimpse into our hospital, our people and the
                            moments that make compassionate healthcare possible.
                        </p>

                        <div className="gallery-hero-line"></div>

                    </div>

                </section>


                {/* ================= GALLERY SECTIONS ================= */}
                <section className="gallery-content">

                    {gallerySections.map((section) => (
                        <div className="gallery-section" key={section.id}>

                            <div className="gallery-section-heading">

                                <div>
                                    <span className="gallery-section-label">
                                        MEDI HOSPITAL
                                    </span>

                                    <h2>{section.title}</h2>

                                    <p>{section.subtitle}</p>
                                </div>

                            </div>


                            {/* MASONRY GRID */}
                            <div className="gallery-grid">

                                {section.images.map((image, index) => (
                                    <div
                                        className={`gallery-item gallery-item-${index + 1}`}
                                        key={image.src}
                                        onClick={() => setSelectedImage(image)}
                                    >

                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            loading="lazy"
                                        />

                                        <div className="gallery-image-overlay">

                                            <div className="gallery-image-info">
                                                <span>{image.title}</span>
                                                <p>{image.description}</p>
                                            </div>

                                            <div className="gallery-expand">
                                                <span>+</span>
                                            </div>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </section>

            </main>


            {/* ================= LIGHTBOX ================= */}
            {selectedImage && (
                <div
                    className="gallery-lightbox"
                    onClick={() => setSelectedImage(null)}
                >

                    <button
                        className="gallery-lightbox-close"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close image"
                    >
                        ×
                    </button>

                    <div
                        className="gallery-lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                        />

                        <div className="gallery-lightbox-caption">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.description}</p>
                        </div>

                    </div>

                </div>
            )}


            <Footer />
            <FloatingButtons />
            <ScrollToTop />
        </>
    );
}

export default Gallery;