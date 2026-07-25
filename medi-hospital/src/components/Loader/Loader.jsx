import "./Loader.css";
import { useEffect, useState } from "react";
import logo from "./logo.png";

function Loader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="loader">
            <img src={logo} alt="Medi Hospital" className="loader-logo" />

            <h2>Medi Hospital</h2>

            <div className="loader-bar">
                <span></span>
            </div>
        </div>
    );
}

export default Loader;