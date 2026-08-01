import "./Facilities.css";

import cardiacImg from "../../../media/cardiac.jpeg";
import labImg from "../../../media/lab.jpeg";
import imagingImg from "../../../media/imaging.jpeg";
import emergencyImg from "../../../media/emergency.jpeg";

import {
    FaHeartbeat,
    FaFlask,
    FaXRay,
    FaAmbulance,
    FaCheckCircle,
} from "react-icons/fa";

const facilities = [
    {
        title: "Cardiac Diagnostics",
        icon: <FaHeartbeat />,
        image: cardiacImg,
        description:
            "Our cardiac diagnostic unit is equipped with advanced technology to help doctors accurately evaluate heart health and detect cardiovascular conditions at an early stage.",
        features: [
            "Electrocardiogram (ECG)",
            "2D Echocardiography",
            "Treadmill Test (TMT)",
            "Experienced Cardiology Team",
        ],
    },
    {
        title: "Laboratory Services",
        icon: <FaFlask />,
        image: labImg,
        description:
            "Our laboratory delivers reliable diagnostic reports using modern equipment with a strong focus on precision, hygiene, and timely reporting.",
        features: [
            "Complete Blood Tests",
            "Urine Analysis",
            "Stool Examination",
            "Fast & Accurate Reports",
        ],
    },
    {
        title: "Imaging Services",
        icon: <FaXRay />,
        image: imagingImg,
        description:
            "We provide advanced imaging services that support quick diagnosis and effective treatment planning for a wide range of medical conditions.",
        features: [
            "Digital X-Ray",
            "Ultrasound (USG)",
            "High Resolution Imaging",
            "Quick Report Delivery",
        ],
    },
    {
        title: "Emergency & Support",
        icon: <FaAmbulance />,
        image: emergencyImg,
        description:
            "Round-the-clock emergency and support services ensure immediate medical attention whenever patients need urgent care.",
        features: [
            "24×7 Emergency Care",
            "Ambulance Service",
            "OPD Consultation",
            "Pharmacy",
        ],
    },
];

export default function Facilities() {
    return (
        <section className="facilities-section">

            <div className="section-header">

                <span>Facilities & Diagnostics</span>

                <h2>Modern Healthcare Infrastructure</h2>

                <p>
                    Combining advanced diagnostic technology with compassionate patient
                    care to deliver accurate, timely, and reliable healthcare services.
                </p>

            </div>

            <div className="facility-wrapper">

                {facilities.map((facility, index) => (

                    <div
                        className={`facility-row ${index % 2 !== 0 ? "reverse" : ""
                            }`}
                        key={index}
                    >

                        <div className="facility-image">

                            <img
                                src={facility.image}
                                alt={facility.title}
                            />

                        </div>

                        <div className="facility-content">

                            <div className="facility-title">

                                <span className="icon">

                                    {facility.icon}

                                </span>

                                <h3>{facility.title}</h3>

                            </div>

                            <p>{facility.description}</p>

                            <ul>

                                {facility.features.map((item, i) => (

                                    <li key={i}>

                                        <FaCheckCircle />

                                        {item}

                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}