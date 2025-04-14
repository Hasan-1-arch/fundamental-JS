// syntax:
/* 
if(condition){
    // block of code
}else if(condition){
    // block of code
}else{
    // fallback block of code}

*/

// Ternary Operator: ?
let value = 5;
value > 10 ? console.log("first") : console.log("second");

// Q1
let val;
if(val){
    console.log("Yes");
}else{
    console.log("No")
}

// Q2
let x = '5';
console.log(x===5);
console.log(x == 5);

// Q3
let a = 10;
let b = 5;
if(a > 5 && b < 10){
    console.log("Valid");
}

// Q4
let marks = 75;
let grade = marks >= 80 ? "A+" : marks >= 60 ?"A" : "Fall";
console.log(grade);

// Q5
let day = 3;
switch(day){
    case 1: console.log("Mon");
    case 2: console.log("Tue");
    default: console.log("other");
}