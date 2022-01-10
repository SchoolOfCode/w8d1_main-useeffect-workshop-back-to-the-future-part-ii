import React, { useState, useEffect } from "react";

function PokemonViewer({ id }) {
   // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
   // HINT: you will need useState and useEffect!

   const [pokemon, setPokemon] = useState("pokemon");

   //in useEffect function fetching data[done]
   //to fetch data need to make a const to fetch data and await data.[done]

   // this will change pokemon state
   //useEffect runs when id is changed.
   useEffect(() => {
      fetchPokemon(id);
      async function fetchPokemon(id) {
         const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
         const response = await data.json();
         setPokemon(response);
      }
   }, [id]);

   console.log(pokemon);

   return pokemon ? (
      <div className="pokemon-viewer">
         <p>display pokemon with id {id} here!</p>
         <p className="pokemon">{pokemon.name}</p>
      </div>
   ) : (
      <></>
   );
}
// {console.log(pokemon.sprites.front_default)}

// <img src={pokemon.sprites.front_default} alt="pokemon" />

export default PokemonViewer;
