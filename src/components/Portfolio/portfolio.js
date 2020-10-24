import React from "react";
import './portfolio.css';
import img1 from './imgs/equippe.png'
import img2 from './imgs/employee.png'
import img3 from './imgs/pokedex.png'

function Portfolio() {
    return (
        <div className="container-custom">
            <div className="portfolio">
                <h1>Portfolio</h1>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="image image1"></div>
                            <div className="content">
                                <div className="header">Cool Title</div>
                                <div className="meta">By Matt</div>
                                <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maiores expedita exercitationem rerum, voluptate laudantium nostrum ratione aliquam adipisci, vitae soluta repellat cupiditate, inventore ipsa distinctio quidem assumenda voluptates eligendi.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">

                        <div className="card">
                            <div className="image image2"></div>
                            <div className="content">
                                <div className="header">Cool Title</div>
                                <div className="meta">By Matt</div>
                                <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maiores expedita exercitationem rerum, voluptate laudantium nostrum ratione aliquam adipisci, vitae soluta repellat cupiditate, inventore ipsa distinctio quidem assumenda voluptates eligendi.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card">
                            <div className="image image3"></div>
                            <div className="content">
                                <div className="header">Cool Title</div>
                                <div className="meta">By Matt</div>
                                <div className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis maiores expedita exercitationem rerum, voluptate laudantium nostrum ratione aliquam adipisci, vitae soluta repellat cupiditate, inventore ipsa distinctio quidem assumenda voluptates eligendi.</div>
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