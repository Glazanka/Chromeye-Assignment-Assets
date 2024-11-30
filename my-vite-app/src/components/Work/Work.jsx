import './Work.scss';
import React from 'react';
const Work = ({ portfolio }) => {
  return (
    <section id="vlog" className="grid-container">
      <div className="grid-x align-center-middle">
        <h2 className="bold cell text-center title">{portfolio.title}</h2>
        <p className="description cell">{portfolio.description}</p>
        <div className="grid-x grid-margin-x grid-margin-y">
          {portfolio.items.map((item, index) => (
            <div className="cell small-12 grid-x grid-margin-x" key={index}>
              {/* Small Screen Layout */}
              <div className="show-for-small-only grid-x grid-margin-y">
                <h3 className="cell text-left title">{item.title}</h3>
                <div className="seperator"></div>
                <p className="cell text-left">{item.description}</p>
                <div className="cell small-12">
                  <div className="grid-x align-center-middle text-left">
                    <a href={item.buttonUrl} className="button cell small-4">
                      {item.buttonLabel}
                    </a>
                  </div>
                </div>
                <img className="cell" src={item.image} alt={item.title} />
              </div>

              {/* Medium and Large Screen Layout */}
              <div className="hide-for-small-only grid-x grid-margin-x align-center-middle">
                {index % 2 === 0 ? (
                  <>
                    {/* Text Aligned to Right */}
                    <div className="cell medium-6 large-6 text-right">
                      <div className="grid-x">
                        <h3 className="cell title">{item.title}</h3>
                        <div className="cell">
                          <div className="grid-x align-right">
                            <div className="seperator"></div>
                          </div>
                        </div>
                        <p className="cell">{item.description}</p>
                        <div className="cell">
                          <div className="grid-x align-right">
                            <a href={item.buttonUrl} className="button cell small-4">
                              {item.buttonLabel}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Image */}
                    <div className="cell medium-6 large-6">
                      <img className="cell" src={item.image} alt={item.title} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image */}
                    <div className="cell medium-6 large-6">
                      <img className="cell" src={item.image} alt={item.title} />
                    </div>
                    {/* Text Aligned to Left */}
                    <div className="cell medium-6 large-6 text-left">
                      <h3 className="cell title">{item.title}</h3>
                      <div className="seperator"></div>
                      <p className="cell">{item.description}</p>
                      <div className="grid-x">
                        <a href={item.buttonUrl} className="button cell small-4">
                          {item.buttonLabel}
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="seperator cell small-11 medium-4"></div>
      </div>
    </section>
  );
};

export default Work;
