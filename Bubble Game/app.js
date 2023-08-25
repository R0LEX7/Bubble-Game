
let gameStarted = false; // A flag to track whether the game has started

let gameStart = () => {
  if (!gameStarted) {
    gameStarted = true;

    var timer = 30;
    var score = 0;
    var hitNumber;
  
    var incrementScore = () => {
      score += 10;
      document.querySelector("#score").innerHTML = score;
    };
  
    var updateHit = () => {
      var rn = Math.floor(Math.random() * 10);
      document.querySelector("#hit-val").innerHTML = rn;
      hitNumber = rn;
    };
  
    updateHit();
  
    var makeBubble = () => {
      var cluster = "";
  
      for (var i = 0; i <= 219; i++) {
        var n = Math.floor(Math.random() * 10);
        cluster += `<div class="bubble">${n}</div>`;
      }
  
      var bubble = document.querySelector(".panel-bottom");
  
      bubble.innerHTML = cluster;
    };
  
    makeBubble();
  
    var setTimer = () => {
      var timeInterval = setInterval(() => {
        if (timer > 0) {
          timer--;
          document.querySelector("#time-val").innerHTML = timer;
          document.querySelector(".btn").classList.add("disabled");
        } else {
          clearInterval(timeInterval);
  
          document.querySelector(
            ".panel-bottom"
          ).innerHTML = `<div class = "game-over"><h1>Game Over!!</h1>
          <p>To Start the Game, Click on Start Button</p>
          <h2>Your Score: ${score}</h2></div>`;
        }
      }, 1000);
    };
  
    setTimer();
  
    document.querySelector(".panel-bottom").addEventListener("click", (e) => {
      var clickedNumber = Number(e.target.textContent);
      if (clickedNumber === hitNumber) {
        incrementScore();
        makeBubble();
        updateHit();
      }
    });

    // Disable the "Start" button
    document.querySelector(".btn").classList.add("disabled");
  }
};

// Add an event listener to the "Start" button
document.querySelector(".btn").addEventListener("click", gameStart);

// Function to enable the "Start" button when the game is over
const enableStartButton = () => {
  gameStarted = false;
  document.querySelector(".btn").classList.remove("disabled");
};


document.querySelector(".panel-bottom").innerHTML = `<div class="game-over"><h1>Game Over!!</h1></div>`;
enableStartButton();
