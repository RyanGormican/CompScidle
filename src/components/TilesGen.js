import tileSets from "../wordbank.txt";
import todaySets from "../todaybank.txt";
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
 await fetch(tileSets).then((response) => response.text()).then((result) =>{
  const tileArray = result.split("\n");
  tileSet = new Set(tileArray);
 });
 return { tileSet };
};

export const getWord = async () => {
 let todaySet;
 let todayWord;
 await fetch(todaySets).then((response) => response.text()).then((result) =>{
  const todaySet = result.split("\n");
  todayWord = todaySet[Math.floor(Math.random() * todaySets.length)]
  todaySet = new Set(todaySet);
 });
 return { todaySet, todayWord};
};
