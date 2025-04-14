const person = {
    name: "Rahul",
    age: 25,
    isMarried: false,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    },
    friends: ["John", "Jane", "Bob"],
}

// get: 
let personName = person.name; // dot notation
console.log(personName);

let personAge = person["age"]; // bracket notation
console.log(personAge);

// set:
console.log(Object.keys(person));
console.log(Object.values(person));

// delete:
const objItem = delete person.isMarried;
console.log("objItem delete: ", objItem);
console.log("person: ", person);

// add new property:
person["phone"] = "123-456-7890";
console.log("person: ", person);