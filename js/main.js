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
    constructor(startingTurn, winner) {
        this.turn = startingTurn
        this.winner = winner
    }

    playGame() {
        let gameRunning = true;
        while (gameRunning) {
            this.announceTurn();
            this.takeTurn();
            gameRunning = false;
        }
    }

    announceTurn() {
        document.querySelector('p').textContent = `It is ${this.turn}'s turn. Please select the square which you want to place the ${this.turn} in.`
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
                // switching turn
                this.turn = 'O'
                return
            } else if (this.turn === 'O') {
                slot.classList.add('oh');
                // switching turn
                this.turn = 'X'
                return
            } 
            }
        }));

        // switch this.turn to opposite letter so other player can have their turn
        // this.turn === 'X' ? this.turn = 'O' : this.turn = 'X';
    }
}

// on click, players should be able to choose which slot

const ticTacToe = new Game('X');
ticTacToe.playGame()