import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="teal lighten-4" className="fixed-bottom footerSection font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Teresa Pierce</h5>
            <p>
              Full Stack Developer
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
                <a className="footerLinks" href="/portfolio">portfolio</a>
                <a className="footerLinks" href="/aboutme">about me</a>
                <a className="footerLinks" href="/contact">contact</a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Teresa Pierce
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;