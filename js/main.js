
class Game {
    constructor(currentTurn, winner) {
        this.turn = currentTurn
        this.winner = winner
        // variables for each slot
        this.slot1 = document.querySelector('.slot1');
        this.slot2 = document.querySelector('.slot2');
        this.slot3 = document.querySelector('.slot3');
        this.slot4 = document.querySelector('.slot4');
        this.slot5 = document.querySelector('.slot5');
        this.slot6 = document.querySelector('.slot6');
        this.slot7 = document.querySelector('.slot7');
        this.slot8 = document.querySelector('.slot8');
        this.slot9 = document.querySelector('.slot9');
    }

    playGame() {
        let gameRunning = true;
        // game loop runs while game is running
        while (gameRunning) {
            this.announceTurn();
            this.takeTurn();
            gameRunning = this.assessGameProgress();
        }
    }

    announceTurn() {
        document.querySelector('p').textContent = `It is ${this.turn}'s turn. Please select the square in which you want to place the ${this.turn}.`
    }

    announceWinner() {
        document.querySelector('p').textContent = `${this.winner} has won the game!`
        console.log(`${this.winner} has won the game!`);
        // *** TO DO: add styling for the winning combo (change the color or something)
    }

    takeTurn() {
        // create array of squares
        let allSlots = document.querySelectorAll('.square');

        // add event listeners to each slot to listen for a click
        allSlots.forEach(slot => slot.addEventListener('click', () => {
            // if the slot is not already chosen
            if(!slot.classList.contains('ex') && !slot.classList.contains('oh')) {
                
                // if it is X's turn, on the click add the X styling
                if(this.turn === 'X') {
                    slot.classList.add('ex');
                    
                    // switch turn from X to O
                    this.turn = 'O'
                    this.announceTurn();
                    return
                // if it is O's turn, on the click add the O styling
                } else if (this.turn === 'O') {
                    slot.classList.add('oh');
                    // switch turn from O to X
                    this.turn = 'X'
                    this.announceTurn();
                    return
                } 
                }
        }));
    }

    // **assess whether there is a winner in each round
    assessGameProgress() {
        const winningCombos = [
            [this.slot1, this.slot2, this.slot3],
            [this.slot4, this.slot5, this.slot6],
            [this.slot7, this.slot8, this.slot9],
            [this.slot1, this.slot5, this.slot9],
            [this.slot3, this.slot5, this.slot7],
            [this.slot1, this.slot4, this.slot7],
            [this.slot2, this.slot5, this.slot8],
            [this.slot3, this.slot6, this.slot9]
        ]
        
        winningCombos.forEach(combo => {
            // ***CODE THIS if every slot in each winning combination slot contains either the ex class or if every slot contains the oh class, announce the winner and set gameRunning to false

            // if every slot in the current winning combo contains a class of ex, then X wins, we announce the winner, and return false for gameRunning
            if(combo.every(slot => slot.classList.contains('ex'))) {
                this.winner = 'X'
                this.announceWinner();
                return false;
            
            // if O wins, we do the same
            } else if (combo.every(slot => slot.classList.contains('oh'))) {
                this.winner = 'O'
                this.announceWinner();
                return false;
            }
        })
        return false;
    }
}

// instantiate the ticTacToeGame
const ticTacToe = new Game('X');
ticTacToe.playGame()

/*
NEXT STEPS:
- finish Game.assessGameProgress() so that it can identify the winner!
- add styling for winning combination
*/