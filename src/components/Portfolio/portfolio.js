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


                    {/* <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 grayscale" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://github.com/sharkattack182/react-employee/raw/master/public/imgs/Capture.PNG" className="d-block w-100 grayscale" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://github.com/sharkattack182/project-2/raw/master/public/imgs/pokedex.png" className="d-block w-100 grayscale" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div> */}
                </div>
            </div>
        </div>



    )
}

export default Portfolio;