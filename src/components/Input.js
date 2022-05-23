import React from "react";

function Input(){
   const topkeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middlekeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottomkeys = ["Z", "X", "C", "V", "B", "N", "M"];
  return <div className="input">
    <div className="inputline1">{topkeys.map((key)=> {
       return <div>{key} </div> 
    }}}
   </div>
  <div className="inputline2">{middlekeys.map((key)=> {
       return <div>{key} </div> 
    }}}
     </div>
  <div className="inputline3">{bottomkeys.map((key)=> {
       return <div>{key} </div> 
    }}}
     </div>
    
    
    </div>;
}

export default Input;
