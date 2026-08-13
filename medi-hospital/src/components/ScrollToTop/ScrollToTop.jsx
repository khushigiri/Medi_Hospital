import "./ScrollToTop.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const { pathname } = useLocation();

    // Show/hide scroll button
    useEffect(() => {
        const toggle = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggle);

        return () => window.removeEventListener("scroll", toggle);
    }, []);

    // Scroll to top whenever the page/route changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    // Scroll button
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
            aria-label="Scroll to top"
        >
            <FaArrowUp />
        </button>
    );
}

export default ScrollToTop;