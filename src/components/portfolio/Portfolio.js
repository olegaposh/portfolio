import React from "react";
import "./Portfolio.css"
import EstatePage from "./EstateModal"
import CostModal from "./CostModal"
import CinemaModal from "./CinemaModal"
import BookModal from "./BookModal"

const Portfolio = (props) => {

  return (
    <>


      <div id="portfolio" class="container">
        <div className="row p-3">
          <div className="col-md-12">
            <h1 id="projects" className="text-center">PROJECTS</h1>
          </div>
        </div>
      </div>




      <div className="flexbox-container">

        <div className="flexbox-item">
          <img className="card-img-top" src="./Assets/real-estate.png" alt="Washburn Real Estate" />
          <h3 className="text-center p-3"><EstatePage /></h3>
        </div>

        <div className="flexbox-item">
          <img className="card-img-top" src="/Assets/cost-tracker.jpg" alt="Cost Tracker" />
          <h3 className="text-center p-3"><CostModal /></h3>
        </div>


        <div className="flexbox-item">
          <img className="card-img-top" src="./Assets/glasses.jpg" alt="Cinema Spirits" />
          <h3 className="text-center p-3"><CinemaModal /></h3>
        </div>


        <div className="flexbox-item">
          <img className="card-img-top" src="./Assets/book.jpeg" alt="Google Book Search" />
          <h3 className="text-center p-3"><BookModal /></h3>
        </div>

      </div>

    </>
  )
}

export default Portfolio;