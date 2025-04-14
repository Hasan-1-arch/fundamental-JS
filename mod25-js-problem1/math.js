/* Math methods:  */

// min()
const givenArr = [5, 3, 9, 1, 6, -99];
let min = Math.min.apply(null, givenArr);
console.log(min);

// spread operator
const minNumber = Math.min(...givenArr);
console.log(minNumber);

// max()
const givenNum = [2, 8, 4, 10, 7];
let max = Math.max.apply(null, givenNum);
console.log(max);

// spread operator
const maxNum = Math.max(...givenNum);
console.log(maxNum);

// Math.PI
let pi = Math.PI;
console.log(pi.toFixed(4));

// Math.abs()
let givenArr1 = [-4, 3, -2, 7, -1];
let absNum = [];
for(let num of givenArr1){
    let abs = Math.abs(num);
    absNum.push(abs);
}
console.log(absNum);

// using map
const absoluteNum = givenArr1.map((num) => Math.abs(num));
console.log("absoluteNum: ", absoluteNum);

// Math.random()
const randomNum = [4.3, 5.5, 6.7];
const roundNum = randomNum.map((num) => Math.round(num) );
console.log(roundNum);

// Math.ceil()
const floatNum = [2.1, 3.5, 6.2];
const ceilNum = floatNum.map((num) => Math.ceil(num) ); 
console.log("ceilNum: ", ceilNum);

// Math.floor()
const floatNum2 = [2.9, 3.7, 6.1];
const floorNum = floatNum2.map((num) => Math.floor(num) );
console.log("floorNum: ", floorNum);

// Math.random(): 0 to 10
console.log(Math.round(Math.random()*10));


// Random integer between 1 and 10
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log("Random number (1–10):", randomInt); // Output: varies (1–10)
