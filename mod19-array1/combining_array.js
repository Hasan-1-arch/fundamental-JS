/* 
Combining Arrays
Instructions:

1. Create two arrays of your choice.
2. Use the concat method to combine the two arrays into a new array.
3. Print both the original arrays and the combined array using console.log().

*/

// 1
const touristPlace1 = ["Malaysia", "singapur", "Thailand", "Maldiv"];
const touristPlace2 = ["Bandarban", "khagrachori", "sundarban", "cox'sBazar"];

// 2
const combinePlaces = touristPlace1.concat(touristPlace2);

// 3
console.log("touristPlace1: ", touristPlace1);
console.log("touristPlace2: ", touristPlace2);

console.log("CombinePlaces: ", combinePlaces);