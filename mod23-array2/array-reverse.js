/* 
    reverse an array in 3 ways 
*/
const arr = [56, 45, 34, 23, 12, 1];

// use reverse function
// console.log(arr.reverse());

/* // for of loop: use unshift method
let reversed = [];
for(let num of arr){
    console.log(num);
    reversed.unshift(num);
}
console.log(reversed); */

console.log("arr length: ", arr.length);

// for loop: use push method
let rev_num = [];
for(let i=arr.length-1; i >= 0; i--){
    console.log(arr[i]);
    rev_num.push(arr[i]);
}
console.log(rev_num);