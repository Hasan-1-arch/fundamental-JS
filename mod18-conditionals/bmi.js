 let weight  = 70;
 let height = 120;

 const BMI = weight / height ** 2;
 if(BMI < 18.5){
    console.log("You are underweight");
 }else if(BMI >= 18.5 && BMI <= 24.9 ){
    console.log("You are normal weight");
 }else if(BMI >= 25 && BMI <= 29.9){
    console.log("You are overweight");
 }else{
    console.log("You are obese");
 }
 