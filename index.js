let homeResult = document.getElementById("result-home")
let guestResult = document.getElementById("result-guest")
let headingGuest = document.getElementById("heading-guest")
let headingHome = document.getElementById("heading-home")
let timerDisplay = document.getElementById("timer");
let gameDuration = 10;
let resultG = 0;
let resultH = 0;
let timerInterval;
let homeButton1 = document.querySelector(".buttons1 :nth-child(1)").addEventListener('click', function(){
    resultH = resultH + 1;
    homeResult.innerText = resultH;
    winning();
});
let homeButton2 = document.querySelector(".buttons1 :nth-child(2)").addEventListener('click', function(){
    resultH = resultH + 2;
    homeResult.innerText = resultH;
    winning();
});
let homeButton3 = document.querySelector(".buttons1 :nth-child(3)").addEventListener('click', function(){
    resultH = resultH + 3;
    homeResult.innerText = resultH;
    winning();
});

let guestButton1 = document.querySelector(".buttons2 :nth-child(1)").addEventListener('click', function(){
    resultG = resultG + 1;
    guestResult.innerText = resultG;
    winning();
});
let guestButton2 = document.querySelector(".buttons2 :nth-child(2)").addEventListener('click', function(){
    resultG = resultG + 2;
    guestResult.innerText = resultG;
    winning();
});
let guestButton3 = document.querySelector(".buttons2 :nth-child(3)").addEventListener('click', function(){
    resultG = resultG + 3;
    guestResult.innerText = resultG;
    winning();
});

let newGame = document.getElementById("new-game").addEventListener('click', function(){
    resultG = 0;
    resultH = 0;
    homeResult.innerText = resultH;
    guestResult.innerText = resultG;
    clearInterval(timerInterval);  
    startTimer(gameDuration); 
})

function winning(){
     if(resultH > resultG){
        headingHome.classList.add("winning");
        headingGuest.classList.remove("winning");
    }
    else if(resultG === resultH){
        headingGuest.classList.remove("winning");
        headingHome.classList.remove("winning");
    }   
    else{
        headingGuest.classList.add("winning");
        headingHome.classList.remove("winning");
    }
}

function startTimer(duration) {
    let timeRemaining = duration;
    timerDisplay.innerText = timeRemaining;

    timerInterval = setInterval(function() {
        timeRemaining--;
        timerDisplay.innerText = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}
function endGame() {
    if (resultH > resultG) {
        alert("Home Team Wins!");
    } else if (resultG > resultH) {
        alert("Guest Team Wins!");
    } else {
        alert("It's a tie!");
    }
}