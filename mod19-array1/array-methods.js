/* Declare an Array & Syntax */

let array = [1, 2, 3, 4, 5];
console.log("given array is:", array);
console.log("Array length is: ", array.length);

// access/get array elements and store in a new variable
let data = array[2];
console.log("Data at index 2 is: ", data);

// set/change array elements into an array
array[3] = 100;
console.log("Array after update is: ", array);

// push pop shift unshift
console.log("push pop shift unshift");

// push
array.push(350);
console.log(array);

// pop
array.pop();
console.log(array);

// unshift
array.unshift(125);
console.log(array);

// shift
array.shift();
console.log(array);

// includes: returns true or false
let searchValue = array.includes(5);
console.log("search value is: ", searchValue);

let searchValue2 = array.includes(500);
console.log("search value 2 is: ", searchValue2);

// indexof: returns index
let valueIndex = array.indexOf(100);
console.log("value index is: ", valueIndex);

let searchIndex = array.indexOf(500);
console.log("search index is: ", searchIndex); // -1

// Array or not
let checkArray = typeof array;
console.log(checkArray);

// but
let checkArray2 = Array.isArray(array);
console.log(checkArray2);

// join
let joinArray = array.join("-"); // join array elements by "-"
console.log(joinArray);

let joinArray2 = array.join(" "); // join array elements by " "
console.log(joinArray2);

// slice: give the index numbers, start, before end
console.log(array);
let sliceArray = array.slice(2, 4);
console.log("slice array is: ", sliceArray);
console.log(array);


// splice
console.log(array);
let spliceArray = array.splice(2, 4, 500);
console.log("splice array is: ", spliceArray);
console.log(array);
