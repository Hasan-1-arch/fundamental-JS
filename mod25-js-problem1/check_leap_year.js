const year = 2028;
if(year % 4 === 0 && year % 100 !== 0){
    console.log("Leap year");
}else if(year % 400 === 0 ){
    console.log("Leap year");
}else{
    console.log("Not leap year");
}