import { createStore, combineReducers } from "redux";

import pokemonIdReducer from './reducers/pokemonIdReducer'

// criando os reducers, que são funções que vão trabalhar sobre o estado geral
const reducers = combineReducers(
  {
    pokemonId: pokemonIdReducer
  } // reducers
)

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
