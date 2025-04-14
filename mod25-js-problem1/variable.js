/* 
1. variable: 
    - let, const: -------- keyword 
    - number-------
    - string       |
    - boolean      |------ primitive data type(5)
    - undefined    |
    - null ---------
    - Array -------|
    - object-------|-----non-primitive data type(2)
*/

let num = 10;
console.log("num: ", num);
console.log("Type:", typeof num  + "\n");

let str = "Orange";
console.log("str: ", str);
console.log("Type: ", typeof str + "\n");

let isPassed = true;
console.log("isPassed: ", isPassed);
console.log("Type: ", typeof isPassed + "\n");

let arr = [45, 69, 85, 25, 36];
console.log("arr: ", arr);
console.log("Type: ", typeof arr);
console.log("Exact type: ", Array.isArray(arr) + "\n");

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
    },
    degree: ["BS", "MS", "PhD"],
    isGraduated: true,
    "id": 123,
};

console.log("Person Info: ", person);
console.log("Type: ", typeof person);

let value1 = undefined;
console.log("value1: ", value1);
console.log("Type: ", typeof value1 + "\n");

let value2 = null;
console.log("value2: ", value2);
console.log("Type: ", typeof value2 + "\n");

let value3 = NaN;
console.log("value3: ", value3);
console.log("Type: ", typeof value3);

// Q1: 
let a = 'hello';
let b = a;
b = 'world';
console.log(a);

// Q2: 
let obj1 = {age: 25};
let obj2 = obj1;
obj2.age = 30;
console.log(obj1.age);

// Q3:
const arrValue = [1,2];
arrValue.push(3);
console.log(arrValue);

