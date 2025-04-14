/* 
Function parameter, function return
Has return & Has parameter
No return & Has parameter
Has return & No parameter
No return & No parameter

*/

function sum(num1, num2) {
  let add = num1 + num2;
  return add;
}

const result = sum(5, 6);
console.log("result: ", result);


// 1: has return & has parameter
function calculateArea(length, width){
    let area = length * width;
    return area;
}

const area = calculateArea(5, 3);
console.log("area: ", area);


// 2: no return & has parameter
function greetUser(name){
    console.log(`${name}! you are welcome! you can do it`);
}

let selectedName = greetUser("Fuad Hasan");

// 3: has return & no parameter
function getCurrentYear(){
    let currentYear = new Date().getFullYear();
    return currentYear;
}
console.log("Current year:", getCurrentYear());

// 4: no return & no parameter
function showWelcomeMessage(){
    console.log("Welcome to our website");
}

showWelcomeMessage();
