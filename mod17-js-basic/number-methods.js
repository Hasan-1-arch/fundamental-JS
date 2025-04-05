/* 
    parseInt(): convert string to number
    parseFloat(): convert string to number
    Number(): convert string to number
    toFixed(): measure number after decimal point
    toString(): convert number to string
    infinity: 
    NaN: not a number
*/

// parseInt()
const num = parseInt("145");
console.log(num);

// parseFloat()
const num2 = parseFloat("85.6");
console.log(num2);

// Different Case: 
const firstName = "John";
console.log(parseInt(firstName)); // NaN

const isPassed = true;
console.log(parseInt(isPassed)); // NaN

const value1 = null;
console.log(parseInt(value1)); // NaN

const value2 = undefined;
console.log(parseInt(value2)); // NaN

// Number(): convert string to number
const fruitPrice = "63.6"; // string-number
console.log(Number(fruitPrice)); 

// Magic Sum: use toFixed()
let a = 0.1;
let b = 0.2;
let sum = a + b;
console.log(sum);
console.log(sum.toFixed(2));
console.log(parseFloat(sum.toFixed(2))); // return string-number

// toString(): convert number to string
const value = 100;
console.log(value.toString());

// infinity: 
console.log(1 / 0);
console.log(-1 / 0);