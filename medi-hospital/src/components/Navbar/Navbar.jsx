import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";
import hospitalInfo from "../../data/hospitalInfo";

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
                    <img src="/logo.png" alt="Medi Hospital Logo" />
                    <div>
                        <h2>{hospitalInfo.name}</h2>
                        <span><b>AAPKE SVAASTH KA PAHALA KADAM</b></span>
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

                <a
                    href={`tel:${hospitalInfo.phone[0]}`}
                    className="call-btn"
                >
                    <FaPhoneAlt />
                    Call Now
                </a>

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