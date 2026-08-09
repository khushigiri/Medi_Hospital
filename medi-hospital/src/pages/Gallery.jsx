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
                },
                {
                    src: receptionImg,
                    title: "Reception",
                },
                {
                    src: waitingAreaImg,
                    title: "Waiting Area",
                },
                {
                    src: genWardImg,
                    title: "General Ward",
                },
                {
                    src: cabinImg,
                    title: "Cabin",
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
                },
                {
                    src: docConsultImg,
                    title: "Doctor Consultation",
                },
                {
                    src: nursingTeamImg,
                    title: "Nursing Team",
                },
                {
                    src: techniciansAndSuppStaffImg,
                    title: "Technicians and Support Staff",
                },
                {
                    src: pharmaImg,
                    title: "Medi Pharma",
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
                },
                {
                    src: docConsultImg,
                    title: "Consultation",
                },
                {
                    src: nursingCareImg,
                    title: "Nursing Care",
                },
                {
                    src: patientSupportImg,
                    title: "Patient Support",
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
                },
                {
                    src: awarenessProgramImg,
                    title: "Awareness Program",
                },
                {
                    src: hospitalEventImg,
                    title: "Hospital Event",
                },
                {
                    src: specCelebrationImg,
                    title: "Special Celebration",
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
                },
                {
                    src: diagFacilityImg,
                    title: "Diagnostic Facility",
                },
                {
                    src: treatRoom,
                    title: "Treatment Room",
                },
                {
                    src: clinicalFacilityImg,
                    title: "Clinical Facility",
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
                            LIFE AT MEDI HOSPITAL
                        </span>

                        <h1>
                            Our <span>Gallery</span>
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
                            {selectedImage.title}
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