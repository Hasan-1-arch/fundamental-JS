/* 
Declare an array
Instructions:

1. Create an array of books containing different book.

2. Use the includes method to check if the array contains a javascript book.

3. Print a message to the console indicating whether the element is present in the array or not.

*/

// 1. 
const books = ["opekha", "oditiya", "Himu", "KathPencil", "VutGas"];

// 2. 
const searchBook = books.includes("javascript");

// 3.
if(searchBook){
    console.log(searchBook, "The element is present in the array");
}else{
    console.log(searchBook, "The element is not present in the array");
}
