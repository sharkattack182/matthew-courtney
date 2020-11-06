import React from "react";
import './contact.css';


function Contact() {
    return (


        <div className="container-custom">
            <div className="contact">
                <h1 className="heading">Contact Me</h1>
                <p><i class="fas fa-map-marker-alt"></i> 1327 Beacon Ridge Rd apt 1427</p>
                <p><i class="fas fa-phone"></i><a href="tel:6072064901"> (607) 206 4901</a></p>
                <p><i class="far fa-envelope"></i> matthewdc182@gmail.com</p>
                <div className="buttonz">
                    <a href="https://www.linkedin.com/in/matthew-courtney-2854811b5/" id="btn" className="button button-outline button-white">LinkedIn</a>
                    <a href="https://github.com/sharkattack182" id="btn" className="button button-outline button-white">GitHub</a>
                </div>



            </div>
        </div>

    )
}

export default Contact;