/* 
    - show 1 to 10 using the while loop
    - sum of 1 to 10 numbers
    - show all even / odd numbers

*/

/* let i = 1;
let sum = 0;
while(i <= 10){
    console.log("show number 1 to 10: ", i);
    sum += i;
    i++;
}
console.log("sum of 1 to 10 numbers: ", sum); */

// even & odd: 

let i = 1;
let evenNum = [];
let oddNum = [];
while(i <= 10){
    if(i%2 ===0){
        evenNum.push(i);
    }else{
        oddNum.push(i);}
    i++;
}
console.log("even numbers: ", evenNum);
console.log("odd numbers: ", oddNum);

