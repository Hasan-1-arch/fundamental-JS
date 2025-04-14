/* 
Checking if it's an Array
Instructions:

1. Create different variables, each containing either an array or a non-array value.

2. Now use isArray to check if each variable is an array.

3. Print a message to the console indicating whether each variable is an array or not.
*/

// 1. 
const name = "Robinhud"; 
const age = 35;
const isGraduate = true;
const favBooks = ["opekkha", "kathpencil", "Vutgas"];
const address = {
    street: "123 Main Street",
    city: "Dhaka",
    state: "Dhaka Division",
    postalCode: "1207",
    country: "Bangladesh"
  };

// 2
function checkArray(variableName){
    return Array.isArray(variableName);
}

const isArray = checkArray(favBooks);

// 3
if(isArray){
    console.log(isArray, "This variable is an array");
}else{
    console.log(isArray, "This variable is not an array");
}
  
