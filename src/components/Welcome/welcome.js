import React from "react";
import './body.css';

function Body() {
    return (
        <div className="site-main">
            <div className="site-main-inner">
                <div className="home-section">
                    <div className="home-section-inner">
                        <div className="home-heading">
                            Hi, I'm Matt,
                </div>

                        <h2 className="home-subheading">
                            a freelance software engineer specialized in<br />
                    both <strong>front-end and back-end</strong>.</h2>


                        <div className="home-buttons">
                            <a href="/portfolio/" className="button button-outline button-white">Portfolio</a>
                            <a href="/contact/" className="button button-outline button-white">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Body;       