import "./Footer.scss";
import React from "react";
const Footer = ({ footer }) => {
  if (!footer) return <div>Footer data is not available</div>;

  return (
    <section id="contact">
      <footer className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12">
            <div style={{ padding: "30px 10px" }} className="grid-x align-justify">
              <img
                src={footer.logo}
                alt="Chromeye Logo"
                className="cell small-6 medium-2"
                style={{ marginBottom: "10px" }}
              />
              <div className="cell medium-6 large-7"></div>
              <a style={{ height: '100%' }} href="#contact" className="button request-call cell small-10 medium-3 large-3 text-center">
                Request a Call
              </a>
            </div>
          </div>
          <div className="cell small-12 medium-4">
            <ul className="no-bullet">
              {footer.links_left.map((link, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <a className="links" href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "0.875rem", marginTop: "10px" }}>
              {footer.intro}
            </p>
          </div>

          {/* Center Section */}
          <div className="cell small-12 medium-4">
            <ul className="no-bullet">
              {footer.links_right.map((link, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <a className="links" href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="cell small-12 medium-4">
            <h3>Follow Us</h3>
            <div className="grid-x grid-margin-x">
              {footer.social_media.map((social, index) => (
                <a className="cell small-2 medium-4 large-2" href={social.url} key={index}>
                  <img
                    src={social.icon}
                    alt={social.name}

                  />
                </a>
              ))}
            </div>
            <h3>Contact</h3>
            <address style={{ fontStyle: "normal" }}>
              {footer.contact.address}
              <br />
              Phone: {footer.contact.phone}
              <br />
              Email:{" "}
              <a style={{ textDecoration: "underline" }} className="links" href={`mailto:${footer.contact.email}`}>
                {footer.contact.email}
              </a>
            </address>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
