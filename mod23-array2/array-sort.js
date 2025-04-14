/* 
    sort an array: 
    1. sort() method
    2. sort() method with a compare function
    3. sort() method with a compare function and a flag
*/

const arr = [78, 23, 1, 56, 34, 12, 90, 45];
console.log("given num Arr: ", arr);

const stringArr = ["elderberry",  "banana", "cherry", "apple","date",];
console.log("given string Arr: ", stringArr);


// 1. sort() method
let sortedArr = arr.sort();
// console.log(sortedArr);

let sortedStringArr = stringArr.sort();
// console.log(sortedStringArr);


// 2. sort() method with a compare function
// (*you can use arrow function instead of function)
const sortAsc = arr.sort(function(a,b){return a-b});
console.log("Ascending order: ", sortAsc);

const sortDesc = arr.sort(function(a,b){return b-a});
console.log("Descending order: ", sortDesc);

// use arrow function
const sortNum = arr.sort((a,b) => a-b);
console.log("Ascending order: ", sortNum);

// 3. sort() method with a compare function and a flag
const sortStr = stringArr.sort((a,b) => a.localeCompare(b));
console.log("Ascending order: ", sortStr);