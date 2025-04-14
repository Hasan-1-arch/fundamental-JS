/* 
3. Array: 
    - Declaration & Syntax:
    - index start from 0
    - get Access, set, sort, reverse, swap
    - Array methods: length, push(), pop(), unshift(), shift(), splice(), slice(), concat(), includes(), indexof(), forEach(), map(), filter(), reduce(), find(), sort(), reverse(), join(), flat().
    - chain methods

*/

let arr = [45, 63, 25, 69, 85, 1, 36, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
console.log("Array: ", arr);
console.log("Type: ", typeof arr);
console.log("Exact type: ", Array.isArray(arr));

// get Access
const getArr = arr[7];
console.log("getArr: ", getArr);

// set
arr[1] = 3066;
console.log("arr: ", arr);

/* // delete
delete arr[10];
console.log("arr: ", arr); // <1 empty item> */

/* // sort()
const sortArr = arr.sort();
console.log("sortArr: ", sortArr);

// another sort()
const AscSortArr = arr.sort(function(a,b){return a - b}); // Ascending order
console.log("Ascending order: ", AscSortArr);
const descSortArr = arr.sort(function(a,b){return b - a}); // Descending order
console.log("Descending order: ", descSortArr);

// sort() using arrow function
const arrowSortArr = arr.sort((a,b) => a - b);
console.log("Arrow sort: ", arrowSortArr);

const arrowSortArr2 = arr.sort((a,b) => b - a);
console.log("Arrow sort: ", arrowSortArr2); */

// reverse()
console.log("arr: ", arr);
const reverseArr = arr.reverse();
console.log("reverseArr: ", reverseArr);

// Array methods:

/* // length
console.log("Array length: ", arr.length);

// push()
console.log("push: ", arr.push(500, 300, 120, 452,963));
console.log("arr: ", arr);

// pop()
console.log("Pop: ", arr.pop());
console.log("arr: ", arr);

// unshift()
console.log("unshift: ", arr.unshift(1000, 1200, 3000));
console.log("arr: ", arr);

// shift()
console.log("Shift: ", arr.shift());
console.log("arr: ", arr);

// splice(): immutable
console.log("arr: ", arr, arr.length);
console.log("Splice: ", arr.splice(1, 5, 50000));
console.log("arr: ", arr, arr.length);

// slice(): mutable
console.log("arr: ", arr, arr.length);
console.log("Slice: ", arr.slice(5, 8 ));
console.log("Arr: ", arr, arr.length);

// concat()
const firstName = "Rahul";
const lastName = "Dravid";
const fullName = firstName.concat(" ", lastName);
console.log("fullName: ", fullName);
const concatName = firstName + " " + lastName;
console.log("concatName: ", concatName);

// include()
if(arr.includes(45)){
    console.log("45 is present");
}

// indexof()
console.log("indexof: ", arr.indexOf(25));

// forEach()
arr.forEach((element, index) => {
    console.log("element: ", element, "index: ", index);
});

// map()
const mapArr = arr.map((data) => {
    console.log("data: ", data);
})

// filter()
arr.filter((data) => {
    data > 100 ? console.log("filterData: ", data) : null
})

const filterArr = arr.filter((data) => data % 2);
console.log("filterArr: ", filterArr);
console.log("arr: ", arr); */


// find(): always return the first element
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

for (let i = 0; i < inventory.length; i++) {
  function getItem(fruit) {
    // return fruit.name === 'bananas';
    return fruit.quantity > 0;
  }
}

const findInventory = inventory.find(getItem);
console.log(findInventory);

// join()
const newArr = [1, 2, 3, 4, 5];
console.log(newArr.split(","));