import React from "react";
import './portfolio.css';
import img1 from './imgs/equippe.png'
import img2 from './imgs/employee.png'
import img3 from './imgs/pokedex.png'

function Portfolio() {
    return (
        <div className="container-custom">
            <div className="portfolio">
                <h1 className="heading">Portfolio</h1>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="image image1"></div>
                            <div className="content">
                                <div className="header">EquiPPE</div>
                                <div className="meta">Matthew Courtney</div>
                                <div className="description">This was the final project for my bootcamp. Our team decided to create a functioning shopping cart for an ecommerce site. I was responsible for building and maintaining the repository as well as delegating tasks and responsibilities.
                                I also created and integrated teh database using sequelize and defined all of the server side routes using express. Finally I styled the UI using HTML CSS and Javascript.</div>
                                <a href="https://vast-ravine-19894.herokuapp.com/" target="_blank"><button type="button"
                                    class="btn btn-info zoom"><i class="fas fa-link"></i></button></a>
                                <a href="https://github.com/sharkattack182/project-3" target="_blank"><button type="button"
                                    class="btn btn-info zoom"><i class="fab fa-github"></i></button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">

                        <div className="card">
                            <div className="image image2"></div>
                            <div className="content">
                                <div className="header">Classmate Tracker</div>
                                <div className="meta">Matthew Courtney</div>
                                <div className="description">The classmate tracker is an app developed using react.js. The idea was to dynamically create a table of classmates using a JSON object. I then wrote the logic to add the ability to search and filter all of the results. I was very
                                pleased with the functionability as well as the way the design came out.</div>
                                <a href="https://powerful-lowlands-68943.herokuapp.com/" target="_blank"><button type="button"
                                    class="btn btn-info zoom"><i class="fas fa-link"></i></button></a>
                                <a href="https://github.com/sharkattack182/react-employee" target="_blank"><button type="button"
                                    class="btn btn-info zoom"><i class="fab fa-github"></i></button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 card3">
                        <div className="card">
                            <div className="image image3"></div>
                            <div className="content">
                                <div className="header">Pokedex</div>
                                <div className="meta">By Matt</div>
                                <div className="description">The pokedex project was an excersize in express. The app is styled very basically with bootstrap, CSS and HTML. For this project we used a web based API called Pokemon API. Once we found this we used an axios call to render the data we then built our own API routes to allow a user to add pokemon to their own pokedex. We just used jquery to then parce out all of
                                the information we wanted to display.</div>
                                <a href="https://vast-escarpment-44555.herokuapp.com/" target="_blank"><button type="button"
                                    class="btn btn-info zoom"><i class="fas fa-link"></i></button></a>
                                <a href="https://github.com/sharkattack182/react-employee" target="_blank"><button type="button"
                                    class="btn btn-info zoom"><i class="fab fa-github"></i></button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="port">These are a few projects from my bootcamp. I currently have a few other projects in the works. To see my other work please check out my GitHub at the link below.</p>
                <a href="https://github.com/sharkattack182" id="btn" className="button button-outline button-white">GitHub</a>
            </div>
        </div>



    )
}

export default Portfolio;