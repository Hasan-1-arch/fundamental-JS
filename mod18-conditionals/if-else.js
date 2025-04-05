/* 
    Js-conditional-tasks
*/

let a = 112;
let b = 55;

if (a > b) {
  console.log("a is greater than b");
} else if (a === 8) {
  console.log("b is equal to 8");
} else {
  console.log("b is greater than a");
}

// Free Drinks:
let burgerPrice = 1000;
if (burgerPrice > 500) {
  console.log("burger with free coke");
} else {
  console.log("pay for coke 30 tk please");
}

// BMI Calculator:
let height = 1.75;
let weight = 70;

const BMI = weight / height ** 2;
console.log("Your BMI is", Number(BMI.toFixed(2)));
if (BMI < 18.5) {
  console.log("You are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You are overweight.");
} else {
  console.log("You are obese.");
}

// Grade Calculator:
let stdMarks = 50;
if (stdMarks > 90 && stdMarks <= 100) {
  console.log("Grade A+");
} else if (stdMarks >= 80 && stdMarks <= 89) {
  console.log("Grade A");
} else if (stdMarks >= 70 && stdMarks <= 79) {
  console.log("Grade B");
} else if (stdMarks >= 60 && stdMarks <= 69) {
  console.log("Grade C");
} else if (stdMarks >= 50 && stdMarks <= 59) {
  console.log("Grade D");
} else if (stdMarks >= 0 && stdMarks <= 49) {
  console.log("Grade F");
} else {
  console.log("Invalid Marks, please try again.");
}

// nested-friend:
let youScore = 80;
let friendScore = 60;
if (youScore === 80) {
  if (friendScore >= 80) {
    console.log("go for a lunch");
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log("good luck, next time");
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log("keep you friend's message unseen");
  } else if (friendScore < 40) {
    console.log("Block your friend");
  }
} else {
  console.log("go to home and sleep and act sad");
}

// 5 ternary numbers:
let num1 = 300;
let num2 = 40000;
let result;
if (num1 > num2) {
  result = num1 * 2;
  console.log("result is double of num1", result);
} else {
  result = num1 + num2;
  console.log("result is sum of num1 and num2", result);
}

// same get result using ternary operator?
num1 > num2
  ? console.log("result is double of num1", num1 * 2)
  : console.log("result is sum of num1 and num2", result);


// bus fare calculator: 
let age = 60;
let isStudent = false;
const regularFare = 800;
let fare;

if(age < 10){
    console.log("You are a child, get free ticket fare");
}else if(isStudent){
    console.log("child - You are a student, Get 50% discount");
    fare = regularFare - regularFare * 0.5;
    console.log("Student - Your bus fare is", fare);

}else if(age >= 60){
    console.log("You are a senior citizen, Get 15% discount");
    fare = regularFare - regularFare * 0.15;
    console.log("senior citizen - Your bus fare is", fare);

}else{
    console.log("Others - pay the regular fare of 800 tk")
    fare = regularFare;
    console.log("Your bus fare is", fare);
}
