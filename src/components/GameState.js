import React, { useContext }  from "react";
import { Context } from "../App";

function GameState() {
 const { gameState, tileAt, theWord} = useContext(Context);
  return (
    <div className="gameState">
    <h3>{gameState.guessWord ? "You guessed Right!" : "You guessed Wrong!"}</h3>
    <h1> The Word was: {theWord}</h1>
{gameState.guessWord && (<h3> It was guessed in {tileAt.tileattemp} attemps</h3>
)}
    </div>
  );
}

export default GameState;
