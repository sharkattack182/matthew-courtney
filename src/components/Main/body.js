import React from "react";
import './body.css';

function Body() {
    return (
        <div class="site-main">
            <div class="site-main-inner">
                <div class="home-section">
                    <div class="home-section-inner">
                        <div class="home-heading">
                            Hi, I'm Matt,
                </div>

                        <h2 class="home-subheading">
                            a freelance software engineer specialized in<br />
                    both <strong>front-end and back-end</strong>.</h2>


                        <div class="home-buttons">
                            <a href="/portfolio/" className="button button-outline button-white">Portfolio</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Body;       