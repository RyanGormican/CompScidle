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
export const getTileSet = async () => {
 let tileSet;
 await fetch(tileSet).then((response) => response.text()).then((result) =>{
  const tileArray = result.split("\n");
  tileSet = new Set(tileArray);
 });
 return { tileSet };
};

export const getWord = async () => {
 let todaySet;
 let todayWord;
 await fetch(todaySet).then((response) => response.text()).then((result) =>{
  const todaySet = result.split("\n");
  todayWord = todaySet[Math.floor(Math.random() * todaySet.length)]
  tileSet = new Set(tileArray);
 });
 return { tileSet , todaySet };
};
