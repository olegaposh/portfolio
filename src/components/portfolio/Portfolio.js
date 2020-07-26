import React from "react";
import "./Portfolio.css"


const Portfolio = () => {

    return (
        <>
        
        
        <div id="portfolio" class="container">
          <div className="row p-3">
            <div className="col-md-12">
              <h1 className="text-center">PROJECTS</h1>
            </div>
          </div>
        </div>
          
        
      
      
        <div className="flexbox-container">
          <a href="https://my-cost-tracker.herokuapp.com/">
            <div className="flexbox-item">
              <img className="card-img-top" src="/Assets/cost-tracker.jpg"alt="Cost Tracker"/>
              <h3 className="text-center p-4">My Cost Tracker</h3>
            </div>
          </a>
          <a href="https://olegaposh.github.io/Cinema_Spirits/">
            <div class="flexbox-item">
              <img class="card-img-top" src="./Assets/glasses.jpg" alt="Cinema Spirits"/>
              <h3 class="text-center p-4">Cinema Spirits</h3>
            </div>
          </a>
          <a href="https://olegaposh.github.io/weather_dashboard/">
            <div class="flexbox-item">
              <img class="card-img-top" src="./Assets/blur-cars.jpg" alt="Weather Dashboard"/>
              <h3 class="text-center p-4">Weather Dashboard</h3>
            </div>
          </a>
          <a href="https://drive.google.com/file/d/19kfTMwu4aMieNpZM1Uya59m9noV9lR1d/view">
            <div class="flexbox-item">
              <img class="card-img-top" src="./Assets/employee.png" alt="Employee Management System"/>
              <h3 class="text-center p-4">Employee Management System</h3>
            </div>
          </a>
        </div>
        
    </>
    )
}

export default Portfolio;