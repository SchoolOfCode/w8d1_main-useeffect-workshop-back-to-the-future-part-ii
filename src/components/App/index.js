import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "../PokemonViewer";

function App() {
   const [id, setId] = useState();

   function handleClick() {
      // TODO: Set id to be random number between 1 and 151
      //create function that "picks" random number (math.random)
      const randomID = Math.floor(Math.random() * 151);
      console.log(randomID);
      // return that number(id)
      setId(randomID);
   }

   return (
      <div className="App">
         {/* TODO: call handleClick when button clicked */}
         <button>Get Random Pokemon</button>
         {/* TODO: hand down id as a prop */}
         <PokemonViewer id={id} />
      </div>
   );
}

export default App;
