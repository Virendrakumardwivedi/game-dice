
// function game(){

const firstRandomNumber = Math.floor(Math.random() * 6) + 1;


const firstDiceImage = "assets/dice" + firstRandomNumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

// Generate a random number between 1 and 6
const secondRandomNumber = Math.floor(Math.random() * 6) + 1;

const secondDiceImage = "assets/dice" + secondRandomNumber + ".png";

document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

const thirdRandomNumber = Math.floor(Math.random() * 6) + 1;

//Image of the dice1 to dice6
const thirdDiceImage = "assets/dice" + thirdRandomNumber + ".png";

document.querySelectorAll("img")[2].setAttribute("src", thirdDiceImage);

// }


document.querySelector("button").addEventListener("click", function(){
    location.reload();
});
//winning logic 

if(
    firstRandomNumber > secondRandomNumber && firstRandomNumber > thirdRandomNumber
){
    document.querySelector('h1').innerHTML="Player 1 Wins!";
    
}else if(
    secondRandomNumber > firstRandomNumber && secondRandomNumber > thirdRandomNumber
){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if(
    thirdRandomNumber>firstRandomNumber && thirdRandomNumber>secondRandomNumber
){
    document.querySelector("h1").innerHTML ="Player 3 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

if(firstDiceImage > secondDiceImage && firstDiceImage>thirdDiceImage && secondDiceImage>thirdDiceImage){
    document.querySelector("#member-1").style.backgroundColor="green"
    document.querySelector("#member-2").style.backgroundColor="yellow"
    document.querySelector("#member-3").style.backgroundColor="red"
}
else if(secondDiceImage > firstDiceImage && secondDiceImage>thirdDiceImage && thirdDiceImage>firstDiceImage){
    document.querySelector("#member-2").style.backgroundColor="green"
    document.querySelector("#member-3").style.backgroundColor="yellow"
    document.querySelector("#member-1").style.backgroundColor="red"
}
else if(thirdDiceImage>firstDiceImage && thirdDiceImage>secondDiceImage && firstDiceImage>secondDiceImage ){
    document.querySelector("#member-3").style.backgroundColor="green"
    document.querySelector("#member-1").style.backgroundColor="yellow"
    document.querySelector("#member-2").style.backgroundColor="red"
}
else if(firstDiceImage ==secondDiceImage && firstDiceImage===thirdDiceImage && secondDiceImage===thirdDiceImage && thirdDiceImage===firstDiceImage){
    document.querySelector("#member-1").style.backgroundColor="blue"
    document.querySelector("#member-2").style.backgroundColor="blue"
    document.querySelector("#member-3").style.backgroundColor="blue"
}
