import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';

import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <Route exact path="/" render={props => <WelcomePage {...props} />} />
      <Route path="/CharacterList" render={props => <CharacterList {...props} />} />
    </main>
  );
}
