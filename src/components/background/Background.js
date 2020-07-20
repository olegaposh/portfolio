import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Background.css"

const Background = () => {

    return (
        
        <MDBContainer fluid className="background">
            <MDBRow>
                <MDBCol size="8" className="text-center middle">
                <h2>Tomorrow may bring uncertainty, but reliable web solutions will always be at your side</h2>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
        
    
    )
}

export default Background;