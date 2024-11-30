import React, { useState, useEffect } from "react";
import logo from '../../assets/chromeye_logo_v1.svg';
import './Nav.scss';

const Nav = ({ menu }) => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="top-bar sticky-navbar">
      <div style={{ width: "100%" }} className="grid-x align-center-middle">
        {/* Logo */}
        <div className="cell small-3 medium-2">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="cell small-4 hide-for-medium"></div>
        {/* Hamburger Button */}
        <div className="cell small-3  show-for-small-only hamburger-container">
          <button
            className={`hamburger-button ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
            <span className="hamburger-icon"></span>
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`cell small-12 medium-7 menu-container ${menuOpen ? "open" : ""
            } hide-for-small-only`}
        >
          <ul className="menu grid-x align-center-middle">
            {menu.map((item, index) => (
              <li key={index}>
                <a
                  className={`nav-links ${activeSection === item.url.slice(1) ? "active" : ""
                    }`}
                  href={item.url}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Small screen menu */}
        {menuOpen && (
          <div className="menu-container-small">
            <ul className="menu">
              {menu.map((item, index) => (
                <li key={index}>
                  <a
                    className={`nav-links ${activeSection === item.url.slice(1) ? "active" : ""
                      }`}
                    href={item.url}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
