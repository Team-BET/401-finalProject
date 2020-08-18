import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import boatImage from "../asset/image/boatImage.jpg";
import { useAuth0 } from '@auth0/auth0-react';

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .jumbo p {
    color: #e25822;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    color: #e0300a;
  }
`;

export const Jumbotron = () => {
const { isAuthenticated, user} = useAuth0();
return(
  isAuthenticated &&(
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome {user.name}</h1>
        <p>Song Guessing Game</p>
      </Container>
    </Jumbo>
  </Styles>
)
)
}
