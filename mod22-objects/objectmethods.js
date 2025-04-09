/* 
    Object methods: 
    1. Object.keys()
    2. Object.values()
    3. Object.assign()
    4. Object.entries()
    5. Object.freeze()
    6. Object.seal()
    7. Object.isFrozen()
    8. Object.isSealed()
*/

let student = {
    name: "John", // string
    age: 20, // number
    city: "New York",
    address: { // another object
        street: "123 Main St",
        city: "New York",
        country: "USA",
        state: "NY",
        zip: "10001"

    },
    subjects: ["Math", "Science", "English"], // array
    isGraduated: false, // boolean
    GPA: 3.5, 
    "stdent ID": 12345, // string (special case)

}

console.log("keys: ", Object.keys(student));
console.log("Values: ", Object.values(student));

// Nested object: 
let address = student.address.city;
console.log("Address: ", address);

// Delete object:
let deletedProperty = delete student.GPA;
console.log("Deleted property: ", deletedProperty);
console.log(student);

console.log("---------------");
// Loop: 
for(let key in student){
    console.log(key, ":", student[key]);
}