import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = (props) => {
  return (
    <MDBFooter color="white" className="font-small ">
      <MDBContainer fluid className="text-center text-md-left ">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">
              <strong>GUESS THE SONG FROM THE LYRICS</strong>
            </h5>
            <p className="footer-paragraph">
              music brings harmony to the world!
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title"></h5>
            <ul>
              <p className="contact-us">Contact Us - LinkedIn</p>
              <li className="list-unstyled">
                <a
                  className="list-unstyled"
                  href="https://www.linkedin.com/in/blandine-dasilveira-1514a1163/"
                >
                  Blandine Dasilveira
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  className="list-unstyled"
                  href="https://www.linkedin.com/in/eyob-tamir-8396b4197/"
                >
                  Eyob Tamir
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  className="list-unstyled"
                  href="https://www.linkedin.com/in/thomas-tilahun/"
                >
                  Thomas Tilahun
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-copyright text-center py-3">
        <MDBContainer className="buttom" fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="site" href="https://www.mdbootstrap.com">
            {" "}
            bet-guessing-game.com{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
