import tileSet from "./wordbank.txt";
import todaySet from "./todaybank.txt";
export const tileDefault = [
["","","","",""],
["","","","",""],
["","","","",""],
["","","","",""],
["","","","",""],
["","","","",""],
];
const getTileSet = async () => {
 let tileSet;
 await fetch(tileSet).then((response) => response.text()).then((result) =>{
  const tileArray = result.split("\n");
  tileSet = new Set(tileArray);
 });
 return { tileSet };
};
