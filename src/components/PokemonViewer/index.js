import React, { useState, useEffect } from "react";

function PokemonViewer({ id }) {
   // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
   // HINT: you will need useState and useEffect!

   const [pokemon, setPokemon] = useState([]);

   //in useEffect function fetching data[done]
   //to fetch data need to make a const to fetch data and await data.[done]

   // this will change pokemon state
   //useEffect runs when id is changed.
   useEffect(() => {
      async function fetchPokemon() {
         const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
         );
         const data = await response.json();
         setPokemon(data);
      }
      fetchPokemon();
   }, [id, pokemon]);

   console.log(pokemon);

   return pokemon ? (
      <div className="pokemon-viewer">
         <p>display pokemon with id {id} here!</p>
         <p className="pokemon">{pokemon.name}</p>
         <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
   ) : (
      <></>
   );
}
// {console.log(pokemon.sprites.front_default)}

// <img src={pokemon.sprites.front_default} alt="pokemon" />

export default PokemonViewer;
