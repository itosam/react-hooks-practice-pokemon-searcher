import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  const pokemonCard = pokemons.map(pokemon => <
    PokemonCard
    name={pokemon.name}
    hp={pokemon.hp}
    sprites={pokemon.sprites} 
    />)

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCard}
    </Card.Group>
  );
}

export default PokemonCollection;