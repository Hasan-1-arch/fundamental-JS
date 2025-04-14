const num1 = 30;
const num2 = 200;

if(num1 > num2){
    const result = num1 * 2;
    console.log("result is double of num1", result);
}else{
    const result = num1 + num2;
    console.log("result is sum of num1 and num2", result);
}

// using ternary operator
let result = num1 > num2 
            ? console.log(num1 * 2) 
            : console.log(num1 + num2);