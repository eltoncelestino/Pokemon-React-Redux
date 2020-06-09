// Componente que vai disparar o evento

import React, { Component } from "react";
import Card from "./Card";

import "./Navigate.css";

import { alterarId } from "../store/actions/pokemonActionCreator";

// o connect vai conectar o navigate com o estado geral, que foi disponibilizado no index.js
import { connect } from "react-redux";

class Navigate extends Component {


  next() {
    const id = this.props.id + 1 > 649 ? this.props.id : this.props.id + 1
    this.props.alterarPokemonId(id)
  }

  previous() {
    const id = this.props.id - 1 < 1 ? this.props.id : this.props.id - 1
    this.props.alterarPokemonId(id)
  }

  sum10() {
    const id = this.props.id + 10 > 649 ? 649 : this.props.id + 10
    this.props.alterarPokemonId(id)
  }

  sub10() {
    const id = this.props.id - 10 < 1 ? 1 : this.props.id - 10
    this.props.alterarPokemonId(id)
  }

  render() {
    return (
      <Card title="ID Pokémon" yellow>
        <div className="navigate">
          <button className="btn btn-outline-dark" onClick={() => this.sub10()}>
            -10
          </button>
          <button
            className="btn btn-outline-dark"
            onClick={() => this.previous()}
          >
            Previous
          </button>
          <button className="btn btn-outline-dark" onClick={() => this.next()}>
            Next
          </button>
          <button className="btn btn-outline-dark" onClick={() => this.sum10()}>
            +10
          </button>

          <input value={this.props.id} readOnly />
        </div>
      </Card>
    );
  }
}

// mapeando o estado geral do storeConfig, para o props
function mapStateToProps(state) {
  return {
    id: state.pokemonId.id
  };
}

// dispatch = despacho
function mapActionCreatorToProps(dispatch) {
  return {
    alterarPokemonId(novoId) {
      const action = alterarId(novoId)
      dispatch(action)
    }
  }
}

// connect retorna uma outra função
// para essa outra função é necessário passar outro parâmetro, que é o componente que quer grudar
const connectNavigate = connect(mapStateToProps, mapActionCreatorToProps)(Navigate);

export {connectNavigate}