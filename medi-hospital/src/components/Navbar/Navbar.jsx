import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
    FaBars,
    FaTimes,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

import "./Navbar.css";

import hospitalLogo from "../../media/logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={sticky ? "navbar sticky" : "navbar"}>
            <div className="container navbar-container">

                <Link to="/" className="logo">
                    <img src={hospitalLogo} alt="Medi Hospital Logo" />
                    <div>
                        <h2>Medi Hospital</h2>
                        <span><b>मेडी हॉस्पिटल</b></span>
                    </div>
                </Link>

                <nav className={menuOpen ? "nav-links active" : "nav-links"}>

                    <NavLink to="/" onClick={() => setMenuOpen(false)}>
                        Home
                    </NavLink>

                    <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                        About
                    </NavLink>

                    <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                        Services
                    </NavLink>

                    <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>
                        Doctors
                    </NavLink>

                    <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
                        Gallery
                    </NavLink>

                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </NavLink>

                </nav>

                <div className="nav-social-links">

                    <a
                        href="https://www.facebook.com/medihospitalpage/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Medi Hospital Facebook"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://www.instagram.com/hospital_medi?igsh=MWVtbW5pM2hlbTR0NQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Medi Hospital Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/medi-hospital-333747376/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Medi Hospital LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>

                </div>
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>
        </header>
    );
}

export default Navbar;