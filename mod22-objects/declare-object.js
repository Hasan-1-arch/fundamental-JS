/* 
    objects: 
    1. declare object
    2. access object
    3. modify object
    4. delete object
    5. nested object
*/

// declare object
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

// access object
console.log(student.name); // dot notation
console.log(student["name"]); // bracket notation

// modify object
student.age = 35;
console.log(student.age);
console.log(student);

// delete object property
delete student.isGraduated;
console.log(student);

// nested object
let stdAddress = student.address.street + "," + student.address.city  + "," + student.address.state + student.address.zip + "," +  student.address.country;
console.log(stdAddress);