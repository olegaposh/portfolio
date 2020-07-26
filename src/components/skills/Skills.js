import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import alex from "./alex.png"
import './Skills.css';

const Skills = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="text-center align-self-center">
        <img className="img-fluid mt-5" id="alex" src={alex} alt="Alex"/>
        </MDBCol>


        <MDBCol>
        <div class="skills">
          <br></br>
          <li>
            <h3>HTML5</h3><span class="bar"><span class="html"></span></span>
          </li>
          <li>
            <h3>CSS3</h3><span class="bar"><span class="css"></span></span>
          </li>
          <li>
            <h3>BOOTSTRAP</h3><span class="bar"><span class="bootstrap"></span></span>
          </li>
          <li>
            <h3>NODEJS</h3><span class="bar"><span class="nodejs"></span></span>
          </li>
          <li>
            <h3>JAVASCRIPT</h3><span class="bar"><span class="javascript"></span></span>
          </li>
          <li>
            <h3>MONGODB</h3><span class="bar"><span class="mongodb"></span></span>
          </li>
          <li>
            <h3>REACT</h3><span class="bar"><span class="react"></span></span>
          </li>
          <li>
            <h3>SQL</h3><span class="bar"><span class="sql"></span></span>
          </li>
        </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Skills;