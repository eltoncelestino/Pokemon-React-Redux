// Componente que vai disparar o evento

import React, { Component } from "react";
import Card from "./Card";

import {connect} from 'react-redux'

class PokemonFront extends Component {
  render() {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
    return (
      <Card title="Front" alt={this.props.id} green>
      <img src={url} alt={1}/>
      </Card>
    )
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
const connectPokemonFront = connect(mapStateToProps)(PokemonFront)

export {connectPokemonFront}