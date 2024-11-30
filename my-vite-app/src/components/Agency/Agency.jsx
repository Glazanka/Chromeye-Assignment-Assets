import React, { useState } from "react";
import arrow_up from "../../../Icons/chromeye_assignment_arrowup_v1.svg";
import arrow_down from "../../../Icons/chromeye_assignment_arrowdown_v1.svg";
import "./Agency.scss";

const Agency = ({ agency }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="agency" className="grid-container">
      <h2 className="title text-center">{agency.title}</h2>
      <div className="grid-x grid-margin-x align-center-middle">
        {/* Image Section */}
        <div className="cell small-12 medium-4 show-for-small-only">
          <img
            src="https://s3.eu-west-2.amazonaws.com/chromeye.tasks/agencyservices-images/chromeye_assignment_webassets_v1.png"
            alt="agency"
          />
        </div>

        {/* Dropdown List Section */}
        <div className="cell medium-5 dropdown">
          {agency.items.map((item, index) => (
            <div
              className={`cell medium-12 ${openIndex === index ? "blue" : ""}`}
              key={index}
            >
              {/* Dropdown Header */}
              <div
                className="dropdown-header grid-x align-middle"
                onClick={() => toggleDropdown(index)}
              >
                <h3
                  className={`cell small-10 medium-11 ${
                    openIndex === index ? "blue" : ""
                  }`}
                >
                  {item.title}
                </h3>
                <span
                  className="cell small-2 medium-1 text-right"
                >
                  {openIndex === index ? (
                    <img className="arrow" src={arrow_up} alt="Arrow Up" />
                  ) : (
                    <img className="arrow" src={arrow_down} alt="Arrow Down" />
                  )}
                </span>
              </div>

              {/* Dropdown Content */}
              <div className={`dropdown-content ${openIndex === index ? "open-dropdown" : ""}`} >
                <p
                  className={`description ${
                    openIndex === index ? "blue" : ""
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section for Medium and Larger Screens */}
        <div className="cell medium-4 hide-for-small-only">
          <img
            src="https://s3.eu-west-2.amazonaws.com/chromeye.tasks/agencyservices-images/chromeye_assignment_webassets_v1.png"
            alt="agency"
            style={{
              maxWidth: "100%",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Agency;
