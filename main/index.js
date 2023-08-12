let computerGuess;
let userGuess = [];
let userGuessUpdate  = document.getElementById("textOutput")
let userNumberUpdate = document.getElementById("inputbox");
let audio = new Audio("../sound/gsound.wav");
const init = () =>{
    computerGuess = Math.floor(Math.random() * 100);

    document.getElementById("gamearea").style.display ="none";
    document.getElementById("newGameButton").style.display ="none";
//    console.log(computerGuess); 
}



const startGame=() =>{
    audio.play();
    document.getElementById("welcomeScreen").style.display ="none";
    document.getElementById("gamearea").style.display ="block";
};

// Reload the page 
// const newGameBegine =()=>{
    // Reload the page 
const newGameBegine = () => {
    window.location.reload();
}

// }

// New start 
 const startNewGame = () =>{
    document.getElementById("newGameButton").style.display ="inline";
    userNumberUpdate.setAttribute("disabled",true);
 }

// main logic of the website
const compareGuess =()=>{
const userNumber = Number(document.getElementById("inputbox").value);
userGuess = [...userGuess , userNumber];
document.getElementById("guess").innerHTML = userGuess;


// checking the value is low or high
if(userGuess.length < maxGuess){ 
if(userNumber > computerGuess){
     userGuessUpdate.innerHTML = "Your Guess is high 😲";
     userNumberUpdate.value = "";
 }
else if(userNumber < computerGuess){
userGuessUpdate.innerHTML = "Your Guess is low 😞";
userNumberUpdate.value = "";
}
else{
userGuessUpdate.innerHTML = "Your Guess is matched 😊"
userNumberUpdate.value = "";
startNewGame();
}
}

else{
    if(userNumber > computerGuess){
        userGuessUpdate.innerHTML = `You loose! Correct number is ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame();
    }
   else if(userNumber < computerGuess){
   userGuessUpdate.innerHTML = `You loose! Correct number is ${computerGuess}`;
   userNumberUpdate.value = "";
   startNewGame();
   }
   else{
   userGuessUpdate.innerHTML = "Your Guess is matched 😊"
   userNumberUpdate.value = "";
   startNewGame();
   }  
}
document.getElementById("attempts").innerHTML = userGuess.length;

}





const easymode =() =>{
    audio.play();
    maxGuess = 10;
    startGame();
};

const hardmode =()=>{
    audio.play();
    maxGuess=5;
    startGame();
}
