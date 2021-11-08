
let secretNumber =  Math.trunc(Math.random()*100)+1;
let attempts = 5;

document.querySelector(".check").addEventListener("click", function(){
const guess = Number(document.querySelector(".guess").value);
document.querySelector(".number").textContent = guess;

    if(!guess)  {
        document.querySelector(".message").textContent = "You did not put any number";
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Bravoh!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body"). style.background = "green";
    } else if (guess > secretNumber) {
        if (attempts > 1 ) {
        document.querySelector(".message").textContent ="Too high mate";
        attempts--;
        document.querySelector(".attempts").textContent = attempts;
        } else { 
        document.querySelector(".message").textContent = "You lost";
        document.querySelector("body").style.background = "red";
        }
    } else if (guess < secretNumber) {
        if (attempts > 1) {
        document.querySelector(".message").textContent = "Too low mate";
        attempts--;
        document.querySelector(".attempts").textContent = attempts;
        } else {
        document.querySelector(".message").textContent = "You lost";
        document.querySelector("body").style.background ="red";
        document.querySelector(".result").textContent = "The secret number was: " + secretNumber;
        }
    } else
        document.querySelector(".message").textContent = "Wrong, try AGAIN!";
    });

    document.querySelector(".btn-again").addEventListener("click", function () {
    attempts = 5;
    secretNumber = Math.trunc(Math.random()*100) + 1;

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".attempts").textContent = attempts;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = " ";

    document.querySelector("body").style.background = "";
});
