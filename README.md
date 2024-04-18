# Tic Tac Toe
A fun game of tic tac toe built using html, CSS, JavaScript, and teamwork!

## NEXT STEPS:
- finish styling of the Xs
- finish Game.assessGameProgress() so that it can identify the winner!
- add styling for winning combination

## Bug Fixes
### April 18, 2024
We worked on a bug where the assessGameProgress method was not working. In the end, the issue was that it was running before the player even chose a slot. Instead, the method needed to be called within the takeTurn method so that it would assess the game progress after each individual move instead. Previously, it was being called in the game loop (the while loop within the playGame method). Then, we returned assessGameProgress so that we could get a true or false value indicating whether the game should continue (true) or end (false). Then, we set takeTurn equal to gameRunning so that it could handle the game state.