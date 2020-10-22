import React from "react";
import "./sidebar.css"
import headshot from "./IMG_5813.png"

function Sidebar() {
    return (
        <aside className="site-sidebar">
            <div className="site-sidebar-inner h-card">
                <a href="/" rel="me" class="person u-url">
                    <div className="person-avatar u-photo">
                        <img src={headshot} alt="#" className= "avatar"/>
                    </div>
                    <div className="person-content">
                        <h1 className="person-title p-name">Matthew Courtney</h1>
                        <h2 className="person-subtitle p-job-title p-note">Full Stack Web Developer</h2>
                    </div>
                </a>
                <nav className="block main-navigation">
                    <div className="navigation-extend-bar">
                        <div className="social-icons">
                            <a rel="me" href="mailto:matthewdc182@gmail.com" className="button button-icon u-email" title="mail:matthewdc182@gmail.com">
                                <i className="fa fa-envelope"></i>
                            </a>
                            <a rel="me" href="https://www.linkedin.com/in/matthew-courtney-2854811b5/" className="button button-icon" title="linkedin: matthew-courtney">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a rel="me" href="https://github.com/sharkattack182" className="button button-icon" title="github: sharkattack182">
                                <i className="fa fa-github"></i>
                            </a>
                        </div>
                        <a href="#" className="navigation-extend-button js-extend-main-navigation">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                    <div className="navigation-extendable">
                        <ul>
                            <li>
                                <a href="/portfolio/">Portfolio</a>
                            </li>
                            <li>
                                <a href="/contact/">Contact</a>
                            </li>
                            <li>
                                <a href="/resume/">Resume</a>
                            </li>
                        </ul>
                    </div>
                    <div className="block block-social">
                        <div className="block-title">Get in touch</div>
                        <div className="block-content">
                            <div className="social-icons">
                                <a rel="me" href="mailto:matthewdc182@gmail.com" className="button button-icon u-email" title="mail:matthewdc182@gmail.com">
                                    <i className="fa fa-envelope"></i>
                                </a>
                                <a rel="me" href="https://www.linkedin.com/in/matthew-courtney-2854811b5/" className="button button-icon" title="linkedin: matthew-courtney">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                                <a rel="me" href="https://github.com/sharkattack182" className="button button-icon" title="github: sharkattack182">
                                    <i className="fa fa-github-square"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </aside >

    )
}

export default Sidebar;