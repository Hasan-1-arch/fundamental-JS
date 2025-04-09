// Declare: ----------------------

// declare with double quotes
let name = "John";
console.log("name with double quotes", name);

// declare with single quotes
let lastName = 'Doe';
console.log("name with single quotes",lastName);

// declare with backtick (template literals)
let phrase = `Hello ${name} ${lastName}`;
console.log("phrase with backtick", phrase);


// string length: ----------------------
let fullName = "john Doe";
console.log("string length: ", fullName.length);

// Access letter by index: ----------------------
let firstName = "Rahimuzzaman";
console.log(firstName[5]);

// set new letter by index: ----------------------
let fruitsName = "apple";
console.log(fruitsName.indexOf("e"));
fruitsName[4] = "o";
console.log(fruitsName); // can not set because string immutable

// get letter by index: ----------------------
let newFruit = "mango";
let result1 = newFruit[2];
console.log(result1);