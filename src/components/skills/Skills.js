import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import alex from "./alex.png"
import './Skills.css';
import { MDBIcon } from "mdbreact";

const Skills = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="text-center align-self-center">
        <img className="img-fluid mt-5" id="alex" src={alex} alt="Alex"/>
        <br></br>
        <a href="https://github.com/olegaposh"><MDBIcon className="p-3" id="github" size="4x" fab icon="github" /></a>
        <a href="https://www.linkedin.com/in/alexposhivailo"><MDBIcon className="p-3" id="linkedin" size="4x" fab icon="linkedin" /></a>
        <a href="/Assets/Resume.pdf"><MDBIcon className="p-3" id="resume" size="4x" icon="file-alt" /></a>
        </MDBCol>


        <MDBCol>
        <div className="skills">
          <br></br>
          <li>
            <h3>HTML5</h3><span className="bar"><span class="html"></span></span>
          </li>
          <li>
            <h3>CSS3</h3><span className="bar"><span class="css"></span></span>
          </li>
          <li>
            <h3>BOOTSTRAP</h3><span className="bar"><span class="bootstrap"></span></span>
          </li>
          <li>
            <h3>NODEJS</h3><span className="bar"><span class="nodejs"></span></span>
          </li>
          <li>
            <h3>JAVASCRIPT</h3><span className="bar"><span class="javascript"></span></span>
          </li>
          <li>
            <h3>MONGODB</h3><span className="bar"><span class="mongodb"></span></span>
          </li>
          <li>
            <h3>REACT</h3><span className="bar"><span class="react"></span></span>
          </li>
          <li>
            <h3>SQL</h3><span className="bar"><span class="sql"></span></span>
          </li>
        </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Skills;