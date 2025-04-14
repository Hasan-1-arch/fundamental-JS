/* 
Loop: 
    - for loop, while loop, do-while loop
    - for in loop, for of loop
    - nested loop
    - break, continue
*/

const sampleArr = [45, 2, 1, 9, 36, 5, 10];
let divisibleBy3 = [];
for(let num of sampleArr){
    console.log(num);
    if(num % 3 === 0){
        divisibleBy3.push(num);
    }
}
console.log(divisibleBy3);

for(let i=0; i < sampleArr.length; i++){
    console.log(i, ":", sampleArr[i]);
    if(sampleArr[i] % 2 === 0){
        console.log(sampleArr[i], "is even");
    }else{
        console.log(sampleArr[i], "is odd");
        if(sampleArr[i] === 1){
            continue;
        }else if(sampleArr[i] === 9){
            break;
        }else{
            console.log(sampleArr[i], "is not 1 or 9");
        }
    }
}

/* // infinite loop: 
let num = 5;
while(num > 0){

    console.log(num);
    num++;
} */

// do-while loop: write a program to print 1 to 10
let num = 1;
do{
    console.log(num);
    num++;
}while(num <= 10);

const obj = {
    name: "John",
    age: 30,
    country: "USA"
};
for(let key in obj){
    console.log(key, ":", obj[key]);
}
