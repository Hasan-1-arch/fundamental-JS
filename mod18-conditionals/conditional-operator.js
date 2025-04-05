/* 
    Conditional Short Hand Operator: 
    > : greater than
    < : less than
    >= : greater than or equal to
    <= : less than or equal to
    = : equal to 
    == : equal to value
    !== : not equal to
    === : strictly equal to value & type
    && : logical and
    || : logical or
    ! : logical not
    ? : ternary operator
*/

// only number: 
console.log(50 > 20);

// who is taller:
let rafsan = 6;
let rafiq = 5;
let isTaller = rafsan > rafiq;
console.log("rafsan is taller", isTaller);

let a = 10; // number
let b = 10; // number
let c = "10"; // string
console.log("a is equal to b", a == b);
console.log("a is equal to c", a == c); // is equal to value
console.log("a is strictly equal to c", a === c); // is equal to value & type
console.log("a is strictly equal to b", a === b); // is equal to value & type

// string: 
let firstName = "Rafsan";
let middleName = "Rafsan";
let lastName = "Rafiq";
let anotherName = "Rafsan";
let anotherLastName = "rafiq";
console.log(firstName == lastName);
console.log(firstName == middleName); // equal to value
console.log(firstName === anotherName); // equal to value & type
console.log(lastName === anotherLastName); // case sensitive: r vs R

