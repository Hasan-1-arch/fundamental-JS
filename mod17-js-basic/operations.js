/* 
    Arithmetic Operators: +, -, *, /, %
    Assignment Operators: =, +=, -=, *=, /=, %=
    Comparison Operators: ==, !=, >, <, >=, <=
    Logical Operators: &&, ||
    Unary Operators: ++, --
    Ternary Operator: ?
    shorthand Operators: +=, -=, *=, /=, %=, &&=, ||=, ??=,
    concatenation Operator: +
*/

// Arithmetic Operators: +, -, *, /, %

let mangoPrice = 135;
let bananaPrice = 100;
let orangePrice = 120;

// Addition: +
let totalPrice = mangoPrice + bananaPrice + orangePrice;
console.log("Total Price: " + totalPrice);

// Average: 
let avgCost = (mangoPrice + bananaPrice + orangePrice) / 3;
console.log("Average Cost: " + avgCost.toFixed(2));

// Subtraction: -
const budget = 1000;
let remainingBalance = budget - (mangoPrice + bananaPrice + orangePrice);
console.log("Remaining Balance: " + remainingBalance);

// Multiplication: *
let mangoQuantity = 5;
let totalMangoCost = mangoPrice * mangoQuantity;
console.log("Total Mango Cost: " + totalMangoCost);

// Division: /
let orangeQuantity = 3;
let totalOrangeCost = orangePrice / orangeQuantity;
console.log("One Orange Cost: " + totalOrangeCost);

// Modulus: %
let num1 = 5;
let num2 = 2;
let remainder = num1 % num2;
console.log("Remainder: " + remainder);


// Exponent: **(to the power of)
let num = 2;
let square = num **2;
console.log("Square: " + square);

let qube = num **3;
console.log("Qube: " + qube);

// concatenation: +
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);

// concatenate between number and string

// Addition: concatenation works only for Addition
let sum = 1 + "2";
console.log("Addition: " + sum); // 12

// Subtraction
let value = "5" - 2;
console.log("subtraction: " + value); // 3

// Multiplication
let value1 = "5" * 2;
console.log("Multiplication: " + value1); // 10

// Division
let value2 = "5" / 2;
console.log("Division: " + value2); // 2.5

// Modulus
let value3 = "5" % 2;
console.log("Modulus: " + value3); // 1

// Exponent
let value4 = "5" ** 2;
console.log("Exponent: " + value4); // 25