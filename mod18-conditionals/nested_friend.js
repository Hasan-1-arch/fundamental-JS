const yourScore = 85;
const friendScore = 80;
if(yourScore > 80){
    console.log("inside your friend score");
    if(friendScore > 80){
        console.log("you can go for a lunch");
    }else if(friendScore <= 80 || friendScore >= 60){
        console.log("good luck, next time");
    }else if(friendScore <= 60 || friendScore >= 40){
        console.log("keep you friend's message unseen");
    }else if(friendScore <= 40){
        console.log("Block your friend");
    }
}else if(yourScore <= 80){
    console.log("you can go to home and sleep and act sad");
}