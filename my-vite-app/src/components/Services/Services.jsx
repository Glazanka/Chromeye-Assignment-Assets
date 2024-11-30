import './Services.scss';
import React from 'react';
const Services = ({ services }) => {
  return (
    <section id="services" className="grid-container align-center-middle">
      <div className="grid-x align-center-middle grid-margin-y">
        <h2 className='bold cell text-center title'>{services.title}</h2>
        <p className='text-center cell description'>{services.description}</p>
        <div className="grid-x grid-margin-x">
          {services.items.map((item, index) => (
            <div className="cell small-12 medium-6 large-3" key={index}>
              <div className="grid-y align-center-middle text-center container">
                <img className='cell small-2' style={{ width: "100px" }} src={item.icon} alt={item.title} />
                <h3 className='bold cell small-2 '>{item.title}</h3>
                {index < 2 ? (
                  <img
                    className="sub_icons cell small-2"
                    src="../../../Icons/chromeye_assignment_minus_v1.svg"
                    alt="Minus Icon"
                  />
                ) : (
                  <img
                    className="sub_icons cell small-2"
                    src="../../../Icons/chromeye_assignment_plus_v1.svg"
                    alt="Plus Icon"
                  />
                )}
                <p className='cell small-2'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
