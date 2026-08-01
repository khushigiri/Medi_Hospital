import "./TreatmentProcess.css";
import {
    FaCalendarCheck,
    FaUserMd,
    FaStethoscope,
    FaHeartbeat,
    FaSmile,
} from "react-icons/fa";

const steps = [
    {
        icon: <FaCalendarCheck />,
        title: "Book Appointment",
        description:
            "Schedule your visit through phone, online booking, or at the hospital reception.",
    },
    {
        icon: <FaUserMd />,
        title: "Doctor Consultation",
        description:
            "Consult our experienced specialists for a detailed medical evaluation and guidance.",
    },
    {
        icon: <FaStethoscope />,
        title: "Diagnosis & Tests",
        description:
            "Undergo the required investigations including ECG, X-Ray, Ultrasound, Blood Tests and more.",
    },
    {
        icon: <FaHeartbeat />,
        title: "Treatment",
        description:
            "Receive personalized treatment with continuous monitoring and compassionate medical care.",
    },
    {
        icon: <FaSmile />,
        title: "Recovery & Follow-up",
        description:
            "Regular follow-up consultations ensure a smooth recovery and long-term wellness.",
    },
];

export default function TreatmentProcess() {
    return (
        <section className="process-section">

            <div className="process-header">
                <span>Your Healthcare Journey</span>

                <h2>Treatment Process</h2>

                <p>
                    From your first appointment to complete recovery, our dedicated
                    healthcare team ensures every step is seamless and patient-focused.
                </p>
            </div>

            <div className="process-wrapper">

                {steps.map((step, index) => (
                    <div className="process-item" key={index}>

                        <div className="step-circle">
                            {step.icon}
                        </div>

                        {index !== steps.length - 1 && (
                            <div className="step-line"></div>
                        )}

                        <h3>{step.title}</h3>

                        <p>{step.description}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}