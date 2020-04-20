import React, { Component } from "react";
import PokemonClass from "./PokemonClass";
import axios from "axios";

export class PokemonList extends Component {
  render() {
    return this.props.pokemons.map((pokemonList) => (
      <React.Fragment>
        <PokemonClass key={pokemonList.name} pokemonList={pokemonList.url} />
      </React.Fragment>
    ));
  }
}

export default PokemonList;
