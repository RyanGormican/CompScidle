# CompScidle
CompScidle is a clone of the popular New York Times game "Wordle" using the React Framework.  The user has 6 attempts to guess a 5 letter word using the keyboard onscreen or by typing on the keyboard. Words are pulled from a .txt file all centered around program and computer science-related terminology. 

Components -

Character.js - handles the logic behind display of character tiles. This is to showcase blackout of letters already used and to process the letters available in the attempted words (Green - correct letter, Yellow - wrong spot, Grey - wrong letter and spot )

Gamestate.js - Displays a message to the user if they have guessed the word correctly or not. Replaces the keyboard after the game is finished.

Input.js- Processes the creation of the on-screen keyboard as well as serving as a wrapper for specific keys.

InputKey.js - Uses the information for Input.js to process the input of the key (i.e ENTER - tries to process the word, DELETE - removes a letter,  a key - inputs the letter).

Tiles.js - Processes the state of the board using processing determined by InputKey

TilesGen.js -  holds generative functionality for pieces of the game. It generates an empty board, a word to guess, and a set of words. The set of words is used to determine whether a word guessed is a valid word.
