let x = 25;
let y = 100;
console.log("x: ", x, "y: ", y);
// swap: with temp variable

let temp = x;

x = y;
y = temp;

console.log("x: ", x, "y: ", y);

console.log("\n");

// swap: without temp variable
let a = 12;
let b = 56;
console.log("a: ", a, "b: ", b);

a = a + b; // 12 + 56 = 68
b = a - b; // 68 - 56 = 12
a = a - b; // 68 - 12 = 56

console.log("a: ", a, "b: ", b);


// destructuring
let swapValues = [a, b] = [b, a];
console.log(swapValues);

