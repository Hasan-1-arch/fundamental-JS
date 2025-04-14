/* --------------------------------------------------------------------
    1. Write a JavaScript code to reverse the array colors without using the reverse method.
    Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

    2. Write a JavaScript code to get the even numbers from an array using any looping technique. 
    Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

    3. Use a for...of loop to concatenate all the elements of an array into a single string. 
    var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

    4. Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
    Input: const statement = 'I am a hard working person'
--------------------------------------------------------------------
*/

/* // Solutions: 
 // 1. Reverse the array
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
console.log("colors: ", colors);
console.log("length: ", colors.length);

let reversedColors = [];
for(let color of colors){
    reversedColors.unshift(color);
}console.log("reversed colors: ", reversedColors);

let reversedColors2 = [];
for(let i=colors.length-1; i>=0; i--){
    reversedColors2.push(colors[i]);
}console.log("reversed colors: ", reversedColors2); */


/* // 2. 
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];
for(let num of numbers){
    if(num % 2 === 0){
        evenNumbers.push(num);
    }
}
console.log("even numbers: ", evenNumbers); */


// 3. 
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

// way 1
let singleString = "";
for(let num of numbers){
    singleString += num;
}
console.log("single string 1: ", singleString);
console.log("Type: ", typeof singleString);

// way 2
console.log("single string 2: ", numbers.join(''));

// 4. 
// way 1
const statement = 'I am a hard working person';
console.log(statement.split(" ").reverse().join(" "));

// way 2
let sentence = statement.split(" ");
console.log("sentence: ", sentence);
let reverseString = "";
for(let i = sentence.length-1; i>=0; i--){
    reverseString += sentence[i] + " ";
}
console.log("reverse string: ", reverseString);

// 5. sort: Ascending, Descending
const persons = ['rakib', 'nokib', 'sakib', 'akib', 'Pakib', 'anis', 'Anis'];

let sortedAscending = persons.sort(function(a,b){return a - b});
let sortedDescending = persons.sort(function(a,b){return b - a});

console.log(persons.sort());
console.log("sorted ascending: ", sortedAscending);
console.log("sorted descending: ", sortedDescending);
