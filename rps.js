const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=> {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=> {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = ()=>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber =  Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                //calling the compare hands function
                compareHands(this.textContent, computerChoice);
                //upadate images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;
                
            });
        });
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerChoice === computerChoice) {
          winner.textContent = "It is a tie";
          return;
        }
        //Check for Rock
        if (playerChoice === "rock") {
          if (computerChoice === "scissors") {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
          }
        }
        //Check for Paper
        if (playerChoice === "paper") {
          if (computerChoice === "scissors") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
          }
        }
        //Check for Scissors
        if (playerChoice === "scissors") {
          if (computerChoice === "rock") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "Player Wins";
            pScore++;
            updateScore();
            return;
          }
        }
      };


    startGame();
    playMatch();
};

game();