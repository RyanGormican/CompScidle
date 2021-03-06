import React, { useContext }  from "react";
import { Context } from "../App";

function GameState() {
 const { gameState, tileAt, theWord} = useContext(Context);
  return (
    <div className="gameState">
    <h3>{gameState.guessWord ? "You guessed it right!" : "You didn't guess the word!"}</h3>
    <h1> The word was: {theWord}</h1>
{gameState.guessWord && (<h3> It was guessed in {tileAt.tileattemp} attempts</h3>
)}
    </div>
  );
}

export default GameState;
