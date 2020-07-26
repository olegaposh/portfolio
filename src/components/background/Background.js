import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Background.css"

const Background = () => {

    return (
        
        <MDBContainer fluid className="background d-flex align-items-center justify-content-center">
            <MDBRow>
                <MDBCol>
                <p className="message">Tomorrow may bring uncertainty, but reliable web solutions will always be at your side</p>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
        
    
    )
}

export default Background;