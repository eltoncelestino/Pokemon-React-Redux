// Componente que vai disparar o evento

import React, { Component } from "react";
import axios from "axios";

import Card from "./Card";

import "./PokemonInfo.css";

import {connect} from 'react-redux'

class PokemonInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", height: "", order: "", weight: "" };
  }

  componentDidMount() {
    this.loadPokemon();
  }

  componentDidUpdate(propsPrevious){
    if(propsPrevious.id !== this.props.id)
      this.loadPokemon()
  }

  loadPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`;

    axios
      .get(url)
      .then(result => {
        this.setState({
          name: result.data.name,
          height: result.data.height,
          order: result.data.order,
          weight: result.data.weight
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="info">
        <Card title="Pokémon Information" blue>
          <strong>{this.state.name}</strong>
          <br /> Height: {this.state.height}
          <br /> Weight: {this.state.weight}
          <br /> Order: {this.state.order}
        </Card>
      </div>
    );
  }
}

// mapeando o estado geral do storeConfig, para o props
function mapStateToProps(state) {
  return {
    id: state.pokemonId.id
  }
}

// connect retorna uma outra função
// para essa outra função é necessário passar outro parâmetro, que é o componente que quer grudar
const connectPokemonInfo = connect(mapStateToProps)(PokemonInfo)

export {connectPokemonInfo}