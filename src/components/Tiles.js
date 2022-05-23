import React, { useState } from "react";
import Character from "./Character";
import { tileDefault } from "./TilesGen";

function Tiles() {
  const [tiles, setTiles] = useState(tileDefault);
 return <div className ="tiles">
  <div className="tilerow"> 
    <Character inputVal={0} charPos ={0}/>
    <Character inputVal={0} charPos ={1}/>
    <Character inputVal={0} charPos ={2}/>
    <Character inputVal={0} charPos ={3}/>
    <Character inputVal={0} charPos ={4}/>
   </div>
    <div className="tilerow">
      <Character inputVal={1} charPos ={0}/>
    <Character inputVal={1} charPos ={1}/>
    <Character inputVal={1} charPos ={2}/>
    <Character inputVal={1} charPos ={3}/>
    <Character inputVal={1} charPos ={4}/>
     </div>
    <div className="tilerow">
      <Character inputVal={2} charPos ={0}/>
    <Character inputVal={2} charPos ={1}/>
    <Character inputVal={2} charPos ={2}/>
    <Character inputVal={2} charPos ={3}/>
    <Character inputVal={2} charPos ={4}/>
       </div>
    <div className="tilerow"> 
      <Character inputVal={3} charPos ={0}/>
    <Character inputVal={3} charPos ={1}/>
    <Character inputVal={3} charPos ={2}/>
    <Character inputVal={3} charPos ={3}/>
    <Character inputVal={3} charPos ={4}/>
      </div>
    <div className="tilerow"> 
      <Character inputVal={4} charPos ={0}/>
    <Character inputVal={4} charPos ={1}/>
    <Character inputVal={4} charPos ={2}/>
    <Character inputVal={4} charPos ={3}/>
    <Character inputVal={4} charPos ={4}/>
      </div>
    <div className="tilerow"> 
      <Character inputVal={5} charPos ={0}/>
    <Character inputVal={5} charPos ={1}/>
    <Character inputVal={5} charPos ={2}/>
    <Character inputVal={5} charPos ={3}/>
    <Character inputVal={5} charPos ={4}/>
      </div>
 </div>; 
}

export default Tiles;
