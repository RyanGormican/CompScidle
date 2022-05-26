import React, {useCallback, useContext, useEffect } from "react";
import InputKey from "./InputKey";
import { Context } from "../App";
function Input(){
 const { setChar, deleteChar, setWord, removeTiles} = useContext(Context);
   const topkeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middlekeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomkeys = ["Z", "X", "C", "V", "B", "N", "M"];
   
   const grabInput = useCallback((event) => {
      if(event.key === "Enter"){
         setWord();
      }
      else if (event.key === "Backspace"){
         deleteChar();
      } 
      else
      {
      topkeys.forEach((key) => {
         if(event.key.toLowerCase() === key.toLowerCase()){
          setChar(key);
         }
           });
      middlekeys.forEach((key) => {
         if(event.key.toLowerCase() === key.toLowerCase()){
          setChar(key);
         }
           });
      bottomkeys.forEach((key) => {
         if(event.key.toLowerCase() === key.toLowerCase()){
          setChar(key);
         }
           });
      }
   })
   useEffect(() => {
      document.addEventListener("keydown",grabInput)
      return ( ) => { 
         document.removeEventListener("keydown",grabInput)
      };
   }, [grabInput]);
  return ( <div className="input" onKeyDown ={grabInput}>
    <div className="inputline1">{topkeys.map((inputkey) => {
       return <InputKey InputValue={inputkey} removed ={removeTiles.includes(inputkey)}/>;
    })}
   </div>
  <div className="inputline2">{middlekeys.map((inputkey) => {
       return <InputKey InputValue={inputkey} removed ={removeTiles.includes(inputkey)} />;
    })}
     </div>
  <div className="inputline3">
    <InputKey InputValue ={"ENTER"} specialInput />
     {bottomkeys.map((inputkey) => {
       return <InputKey InputValue={inputkey} removed ={removeTiles.includes(inputkey)} />;
    })}
        <InputKey InputValue ={"DELETE"} specialInput />
     </div>
    
    
    </div>

);
}
export default Input;
