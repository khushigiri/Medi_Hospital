import "./FloatingButtons.css";

import {
    FaPhoneAlt,
    FaWhatsapp,
    FaMapMarkerAlt,
} from "react-icons/fa";

function FloatingButtons() {
    return (
        <div className="floating-buttons">

            <a href="tel:9241959991">
                <FaPhoneAlt />
            </a>

            <a
                href="https://wa.me/919241959991"
                target="_blank"
                rel="noreferrer"
            >
                <FaWhatsapp />
            </a>

            <a
                href="https://maps.app.goo.gl/36DA1RgVFunhxFGq7"
                target="_blank"
                rel="noreferrer"
            >
                <FaMapMarkerAlt />
            </a>

        </div>
    );
}

export default FloatingButtons;