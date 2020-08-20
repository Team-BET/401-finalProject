import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBPopover,
} from "mdbreact";

import blandineImage from "./asset/image/blandine.jpg";
import eyobImage from "./asset/image/eyob.jpg";
import thomasImage from "./asset/image/thomas.jpg";

export const About = () => (
  <div>
    <h2 class="aboutus">About Us</h2>
    <p class="betMem">BET Members</p>

    <MDBRow>
      <MDBCol>
        <MDBPopover placement="right" popover clickable id="popper7">
          <MDBBtn color="elegant">
            <img src={blandineImage} className="img-fluid" alt="" />
          </MDBBtn>

          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={blandineImage} />
            <MDBCardBody cascade>
              <MDBCardTitle className="about-name">
                Blandine Dasilveira
              </MDBCardTitle>
              <MDBCardText className="about-body">
                Aspiring full stack developer. Currently have experience in
                HTML5, CSS, Javascript, NodeJS, ExpressJS, React{" "}
              </MDBCardText>
              <MDBBtn rounded color="danger">
                {" "}
                <a href="https://github.com/Blandine12">Blandine Github</a>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBPopover>
      </MDBCol>

      <MDBCol>
        <MDBPopover placement="right" popover clickable id="popper7">
          <MDBBtn color="elegant">
            <img src={eyobImage} className="img-fluid" alt="" />
          </MDBBtn>

          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={eyobImage} />
            <MDBCardBody cascade>
              <MDBCardTitle className="about-name">Eyob Tamir</MDBCardTitle>
              <MDBCardText className="about-body">
                Aspiring full stack developer. Currently have experience in
                HTML5, CSS, Javascript, NodeJS, ExpressJS, React{" "}
              </MDBCardText>
              <MDBBtn rounded color="danger">
                <a href="https://github.com/Eyob1984"> Eyob Github</a>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBPopover>
      </MDBCol>

      <MDBCol>
        <MDBPopover placement="right" popover clickable id="popper7">
          <MDBBtn color="elegant">
            <img src={thomasImage} className="img-fluid" alt="" />
          </MDBBtn>

          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src={thomasImage} />
            <MDBCardBody cascade>
              <MDBCardTitle className="about-name">Thomas Tilahun</MDBCardTitle>
              <MDBCardText className="about-body">
                Full Stack Software developer with a background of computer
                Hardware, Networking and Graphics Design.{" "}
              </MDBCardText>
              <MDBBtn rounded color="danger">
                {" "}
                <a href="https://github.com/Thomas720">Thomas Github</a>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBPopover>
      </MDBCol>
    </MDBRow>
  </div>
);
