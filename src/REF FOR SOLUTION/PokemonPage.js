import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container, Portal } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(data => {
      setPokemons(data)
      console.log(data)
    })
  },[])

  const handleSearch = (e)=>{
    setSearchQuery(e.target.value)
  }

  const pokemonToDisplay= pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const addPokemon = (newPokemon) => {
    setPokemons(
      [...pokemons, 
        newPokemon]
        )
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search seachQuery={searchQuery} onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemons={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;