let arr = [1, 2, 3, 4, 5, 6, 7];
let oddNum = [];
let avgOddSum = 0;
let evenNum = [];
let avgEvenSum = 0;
for(let num of arr){
    console.log(num);
    if(num % 2 !== 0){
        oddNum.push(num);
        avgOddSum += num;
    }else{
        evenNum.push(num);
        avgEvenSum += num;
    }
}
console.log("oddNum: ", oddNum, "AvgOddSum: ", avgOddSum);
console.log("evenNum: ", evenNum, "AvgEvenSum: ", avgEvenSum);