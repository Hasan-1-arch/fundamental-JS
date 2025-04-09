/* 
    loops: 
    1. for-of loop: use in arrays
    2. for-in loop: use in objects
    3. while loop: (general) use when you don't know how many times you want to loop
    4. do-while loop: (general) use when you want to loop at least once
    5. for loop: (general) use whenever you want, special cases in object properties.
    6. nested loop: (general) part of for loop
    7. break and continue: loop methods
*/

let givenArr = [20, 50, 80, 100];

// for-of loop:
console.log("for-of loop");
for(let num of givenArr){
    console.log(num);
}

let givenObj = {
    name: "John",
    age: 20,
    city: "New York"
}

// for-in loop:
console.log("for-in loop");
for(let key in givenObj){
    console.log(key, givenObj[key]);
}

// while loop:
console.log("while loop");
let i = 0;
while(i < givenArr.length){
    console.log(givenArr[i]);
    i++;
}

// do-while loop:
console.log("do-while loop");
let j = 0;
do{
    console.log(givenArr[j]); // 20,50, 80, 100
    j++; // 1, 2, 3, 4
}while(j < givenArr.length); // 4 < 4 false --> exit

// for loop:
console.log("for loop"); 
for(let i=0; i<givenArr.length; i++){
    console.log(givenArr[i]);
}