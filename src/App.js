import React, { Component } from "react";

import "./App.css";

import {connectNavigate as Navigate, 
  connectPokemonFront as PokemonFront, 
  connectPokemonnBack as PokemonBack, 
  connectPokemonInfo as PokemonInfo} from './components'

export default class App extends Component {
  render() {
    return (
      <div className="container">
      
        <h1 className="text-muted">Mini course React + Redux</h1>
        <div className="line">
          <Navigate/>
        </div>
        <div className="line">
          <PokemonFront />
          <PokemonBack />
          <PokemonInfo />
        </div>
      </div>
    );
  }
}
