import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import "./Contact.css"


const Contact = () => {
    return (
        <>
            <MDBContainer fluid id="contact">

                <MDBRow className="py-5 my-5"></MDBRow>

                <MDBRow id="contact" className="text-center">

                    <MDBCol></MDBCol>

                    <MDBCol>
                        <MDBIcon id="email" size="4x" icon="envelope" />
                        <p className="p-3">oleg.poshiv@gmail.com</p>
                    </MDBCol>

                    <MDBCol>
                        <MDBIcon id="phone" size="4x" icon="phone" />
                        <p className="p-3">(602) 810-6489</p>
                    </MDBCol>

                    <MDBCol></MDBCol>

                </MDBRow>
                <MDBRow className="py-5 my-5"></MDBRow>
            </MDBContainer>
        </>
    );
}

export default Contact;