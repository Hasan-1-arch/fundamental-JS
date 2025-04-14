// 36 inches to feet
// 100 miles to kilometers

// 12 inch = 1 feet
// 1 mile = 1.6 kilometers

const inch = 36;
const feet = inch / 12;
console.log(feet);

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

let result = Number(inchToFeet(136).toFixed(2));
console.log(result);

function mileToKm(miles){
    const km = miles * 1.6;
    return km;
}

const result2 = mileToKm(100);
console.log(result2);