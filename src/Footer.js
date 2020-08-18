import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = (props) => {
  return (
    <MDBFooter color="gray" className="font-small pt-4 mt-4 footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;

// import React from "react";
// import styled from "styled-components";

// const Styles = styled.div`
//   .footer {
//     position: relative;
//     height: 80px;
//     clear: both;
//     padding-top: 20px;
//     background-color: #222;
//     color: #ffff;
//     text-align: center;
//   }
// `;
// export const Footer = (props) => (
//   <Styles>
//     <footer class="footer">
//       <p>
//         &copy; Copyright 2020 Blandine Dasilveira | Eyob Tamir | Thomas Tilahun
//       </p>
//     </footer>
//   </Styles>
// );
