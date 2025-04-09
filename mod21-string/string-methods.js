/* 
String methods:
    1. length
    2. toLowerCase()
    3. toUpperCase()
    4. trim()
    5. slice()
    6. split()
    7. join()
    8. replace()
    9. charAt()
    10. charCodeAt()
    11. indexOf()
    12. includes()
    12. concat()
*/


// string length: ----------------------
let firstName = " john";
let lastName = "Doe ";
let fullName = firstName + " " + lastName; // concatenation
console.log("Check string length: ", fullName.length);


// toLowerCase(): ----------------------
console.log("Check toLoweCase: ", fullName.toLowerCase());

// toUpperCase(): ----------------------
console.log("Check toUpperCase: ", fullName.toUpperCase());

// trim(): ----------------------
console.log("FullName: ", fullName);
console.log("Check trim: ", fullName.trim());

// slice(): ----------------------
console.log("FullName: ", fullName);
console.log("Check Slice", firstName.slice(1, 5));

// splice(): ---------------------
console.log()

// split(): ----------------------  
let myStatus = "I am a hardworking Student";
console.log("Check Split: ", myStatus.split(''));
/* 
    - split() return an array
    - case1: split(): string -> array
    - case2(by empty string): split(""): string -> 
        array, split by space with individual index letter.
    - case3(by gap): split(" "): string -> array, split  
                    by space with word. 
*/

// join(): ----------------------
let joinName = ["Rahim", "Uzzaman"];
console.log("Check Join: ", joinName.join());

let currentStatus = "I am a web developer";
console.log(currentStatus.split(" "));
console.log(currentStatus.split(" ").join("-"));

let num = [12, 58, 96, 25, 78, 65];
console.log(num)
console.log("split num(): ", num.join()); // array -> string
console.log("split num(): ", num.join().split("").join("")); // 
/* 
    join(): 
    1. convert an array(string element) to string
    2. join by space(" "), (","), ("-"), so on
*/


// reverse: 3 different ways to reverse
/* 
    1. using for-of loop
    2. using for loop by index
    3. split("").reverse(). join("")
 */
// 1 way
    let myName = "Rahim Uzzaman";
    let reverse = "";
    for(let letter of myName){
        console.log(letter); // r, a
        reverse = letter + reverse; 
        // r + "" = r, 
        // a + r = ar,
        // h + ar = har
        // i + har = ihar
        // m + ihar = mimhar
    }
    console.log("1st way: ", reverse);

// 2nd way: 
    let rev = "";
    for(let i=0; i<myName.length; i++){
        const letter = myName[i];
        rev = letter + rev;
    }
    console.log("2nd way: ", rev);

// 3rd way:
    let rev2 = myName.split("").reverse().join("");
    console.log(rev2);