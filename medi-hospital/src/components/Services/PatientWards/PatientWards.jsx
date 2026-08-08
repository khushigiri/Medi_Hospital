import "./PatientWards.css";

import {
    FaFemale,
    FaMale,
    FaHeartbeat,
    FaProcedures,
    FaBed,
    FaCrown,
} from "react-icons/fa";

import femaleWard from "../../../media/femaleWard.jpeg";
import maleWard from "../../../media/maleWard.jpeg";
import hdu from "../../../media/hdu.jpeg";
import icu from "../../../media/icu.jpeg";
import singleCabin from "../../../media/singleCabin.jpeg";
import deluxeCabin from "../../../media/deluxeCabin.jpeg";

const wards = [
    {
        title: "Female General Ward",
        icon: <FaFemale />,
        image: femaleWard,
        description:
            "Comfortable shared accommodation with dedicated nursing care designed exclusively for female patients.",
        chips: ["24×7 Care", "Shared Ward", "Nursing"],
    },
    {
        title: "Male General Ward",
        icon: <FaMale />,
        image: maleWard,
        description:
            "Well-maintained shared ward providing compassionate healthcare and continuous medical supervision.",
        chips: ["Clean", "Doctors", "Comfort"],
    },
    {
        title: "High Dependency Unit (HDU)",
        icon: <FaHeartbeat />,
        image: hdu,
        description:
            "Advanced monitoring and specialized medical support for patients requiring close observation.",
        chips: ["Monitoring", "Critical Care", "Specialists"],
    },
    {
        title: "Intensive Care Unit (ICU)",
        icon: <FaProcedures />,
        image: icu,
        description:
            "State-of-the-art intensive care facilities equipped for emergency and life-support management.",
        chips: ["Ventilator", "24×7 ICU", "Emergency"],
    },
    {
        title: "Single Cabin",
        icon: <FaBed />,
        image: singleCabin,
        description:
            "Private room offering peace, comfort and privacy for a relaxing recovery experience.",
        chips: ["Private", "Attached Bath", "Peaceful"],
    },
    {
        title: "Deluxe Cabin",
        icon: <FaCrown />,
        image: deluxeCabin,
        description:
            "Premium accommodation with elegant interiors and personalized patient care.",
        chips: ["Luxury", "Spacious", "Premium"],
    },
];

export default function PatientWards() {
    return (
        <section className="wards">

            <div className="section-title">

                <span>PATIENT ACCOMMODATION</span>

                <h2>Comfortable & Modern Patient Wards</h2>

                <p>
                    Every ward is thoughtfully designed to provide a safe, hygienic and
                    healing environment with modern medical facilities and compassionate
                    healthcare professionals.
                </p>

            </div>

            <div className="wards-grid">

                {wards.map((ward, index) => (

                    <div className="ward-card" key={index}>

                        <div className="image-box">

                            <img src={ward.image} alt={ward.title} />

                            <div className="image-overlay"></div>

                            <div className="ward-icon">
                                {ward.icon}
                            </div>

                        </div>

                        <div className="ward-content">

                            <h3>{ward.title}</h3>

                            <p>{ward.description}</p>

                            <div className="chips">

                                {ward.chips.map((chip, i) => (

                                    <span key={i}>
                                        {chip}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}