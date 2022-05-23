import React from "react";

function Tiles() {
  const [tiles, setTiles] = useState(tileDefault);
 return <div className ="tiles">
  <div className="tilerow"> </div>
    <div className="tilerow"> </div>
    <div className="tilerow"> </div>
    <div className="tilerow"> </div>
    <div className="tilerow"> </div>
    <div className="tilerow"> </div>
 </div>; 
}

export default Tiles;
