// variables for each slot
const slot1 = document.querySelector('.slot1');
const slot2 = document.querySelector('.slot2');
const slot3 = document.querySelector('.slot3');
const slot4 = document.querySelector('.slot4');
const slot5 = document.querySelector('.slot5');
const slot6 = document.querySelector('.slot6');
const slot7 = document.querySelector('.slot7');
const slot8 = document.querySelector('.slot8');
const slot9 = document.querySelector('.slot9');

class Game {
    constructor(currentTurn, winner) {
        this.turn = currentTurn
        this.winner = winner
    }

    playGame() {
        let gameRunning = true;
        while (gameRunning) {
            this.announceTurn();
            this.takeTurn();
            this.assessGameProgress(gameRunning);
            gameRunning = false;
        }
    }

    announceTurn() {
        document.querySelector('p').textContent = `It is ${this.turn}'s turn. Please select the square in which you want to place the ${this.turn}.`
    }

    announceWinner() {
        document.querySelector('p').textContent = `${this.winner} has won the game!`
        console.log(`${this.winner} has won the game!`)
    }

    takeTurn() {
        // create array of squares
        let allSlots = document.querySelectorAll('.square');

        // add event listeners to each slot to listen for a click
        allSlots.forEach(slot => slot.addEventListener('click', () => {
            // if the slot is not already chosen
            if(!slot.classList.contains('ex') && !slot.classList.contains('oh')) {
            
            
            if(this.turn === 'X') {
                slot.classList.add('ex');
                // switching turn from X to O
                this.turn = 'O'
                this.announceTurn(); // announcing turn has switched
                return
            } else if (this.turn === 'O') {
                slot.classList.add('oh');
                // switching turn from O to X
                this.turn = 'X'
                this.announceTurn();
                return
            } 
            }
        }));
    }

    // assess whether there is a winner in each round
    assessGameProgress(gameRunning) {
        const winningCombos = [
            [slot1, slot2, slot3],
            [slot4, slot5, slot6],
            [slot7, slot8, slot9],
            [slot1, slot5, slot9],
            [slot3, slot5, slot7],
            [slot1, slot4, slot7],
            [slot2, slot5, slot8],
            [slot3, slot6, slot9]
        ]
        
        winningCombos.forEach(combo => {
            // if every slot in each winning combination slot contains either the ex class or if every slot contains the oh class, announce the winner and set gameRunning to false
            if(combo.every(slot => slot.classList.contains('ex'))) {
                this.winner = 'X'
                gameRunning = false;
                this.announceWinner();
            } else if (combo.every(slot => slot.classList.contains('oh'))) {
                this.winner = 'O'
                gameRunning = false;
                this.announceWinner();
            }
        })
        gameRunning = false;
    }
}

// instantiate the ticTacToeGame
const ticTacToe = new Game('X');
ticTacToe.playGame()