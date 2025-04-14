/* --------------------------------------------------------------------
    1. Write a JavaScript code to reverse the array colors without using the reverse method.
    Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']
    output: ['orange', 'yellow', 'green', 'blue', 'red']

    2. Write a JavaScript code to get the even numbers from an array using any looping technique. 
    Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
    output: [12, 98, 76, 46]

    3. Use a for...of loop to concatenate all the elements of an array into a single string. 
    var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
    Output: 'TomTimTinTik'

    4. Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
    Input: const statement = 'I am a hard working person'
    Output: 'person working hard a am I'
--------------------------------------------------------------------
*/

 // Solutions: 
 // 1. Reverse the array
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
console.log("colors: ", colors);
console.log("Array length: ", colors.length);

/* let reversedColors = [];
for(let color of colors){
    reversedColors.unshift(color);
}console.log("reversed colors 1: ", reversedColors); */

/* let reversedColors2 = [];
for(let i=colors.length-1; i>=0; i--){
    reversedColors2.push(colors[i]);
}console.log("reversed colors 2: ", reversedColors2);  */

let reversedColors3 = colors.reverse();
console.log("reversed colors 3: ", reversedColors3)


 // 2. Even Numbers using loop
const numbers1 = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];
for(let num of numbers1){
    if(num % 2 === 0){
        evenNumbers.push(num);
    }
}
console.log("even numbers: ", evenNumbers);


// 3. single String
var numbers2 = ['Tom', 'Tim', 'Tin', 'Tik'];

// way 1
let singleString = "";
for(let num of numbers2){
    singleString += num;
}
console.log("single string 1: ", singleString);
console.log("Type: ", typeof singleString);

// way 2
// console.log("single string 2: ", numbers2.join(''));



// 4. Reverse Word position
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
