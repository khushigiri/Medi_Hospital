import "./ScrollToTop.css";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggle = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggle);

        return () => window.removeEventListener("scroll", toggle);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`scroll-btn ${visible ? "show" : ""}`}
            onClick={scrollTop}
        >
            <FaArrowUp />
        </button>
    );
}

export default ScrollToTop;