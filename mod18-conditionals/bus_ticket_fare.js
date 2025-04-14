let regularTicketFare = 800;
const age = 10;
const passengerType = "children";
if(age < 10 && passengerType === "children"){
    console.log("Your Ticket is free");
}else if(passengerType === "student"){
    const discountPrice = regularTicketFare * 0.5;
    let ticketFare = regularTicketFare - discountPrice;
    console.log("Your bus fare is", ticketFare);
}else if(age >= 60 && passengerType === "senior citizens"){
    const discountPrice = regularTicketFare * 0.15;
    let ticketFare = regularTicketFare - discountPrice;
    console.log("Your bus fare is", ticketFare);
}else{
    console.log("Your bus fare is", regularTicketFare);
}