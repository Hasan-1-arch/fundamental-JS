/* Learn Later About Date and Time in JS */
// new Date()
const currentDate = new Date();
console.log("currentDate: ", currentDate);

const date = new Date('2062-10-19');
console.log("date: ", date);

const day = date.getDay();
console.log("day: ", day);

const specificDate = new Date(2091, 0, 26);
console.log("specificDate: ", specificDate);

specificDate.setMonth(11);
console.log("specificDate: ", specificDate);

console.log(specificDate.toLocaleDateString('en-US')); // mm/dd/yyyy
console.log(specificDate.toLocaleDateString('en-GB')); // dd/mm/yyyy


// date to seconds
/* unix epoc:  */

// time zone: UTC+/-

// daylight saving time

// moment.js: use for date time compare
/* Learn Later About Date and Time in JS */
