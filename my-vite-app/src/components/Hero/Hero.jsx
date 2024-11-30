import "./Hero.scss";
import React from "react";
const Hero = ({ hero }) => {
    return (
        <section className="hero">
            <div className="grid-container">
                {/* medium to large build */}
                <div className="grid-x align-center-middle show-for-medium">
                    <div className="cell medium-6">
                        <div className="grid-x">
                            <h1 className="bold title">{hero.title}</h1>
                            <p>{hero.description}</p>
                            <a href={hero.buttonUrl} className="button">
                                {hero.buttonLabel}
                            </a>
                        </div>
                    </div>
                    <img className="cell medium-6" src={hero.image} alt="Hero" />
                </div>
                {/* small build */}
                <div className="grid-x align-center-middle hide-for-medium">
                    <div className="cell">
                        <div className="grid-x align-center-middle">
                            <h1 className="bold text-center title">{hero.title}</h1>
                            <p className="text-center">{hero.description}</p>
                            <a href={hero.buttonUrl} className="button">
                                {hero.buttonLabel}
                            </a>
                        </div>
                    </div>
                    <img className="cell" src={hero.image} alt="Hero" />
                </div>
            </div>
        </section>
    );
};

export default Hero;