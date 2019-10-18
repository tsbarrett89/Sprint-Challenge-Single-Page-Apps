import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Welcome = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
      width: auto;
      margin: 3%;
    }
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Welcome>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to="/characters">
          <button>Characters</button>
        </Link>
      </Welcome>
    </section>
  );
}