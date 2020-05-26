/**

Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.

The Board:

https://raw.githubusercontent.com/adrianeyre/codewars/master/Ruby/Authored/snakesandladdersboard.jpg

Rules
 	1.  There are two players and both start off the board on square 0.

2.  Player 1 starts and alternates with player 2.

3.  You follow the numbers up the board in order 1=>100

4.  If the value of both die are the same then that player will have another go.

5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.
Returns
 	Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

Return Game over! if a player has won and another player tries to play.

Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.

Test cases

function SnakesLadders2() {
  this._playerSquare = [];
  this._playerSquare[0] = 0;
  this._playerSquare[1] = 0;
  this._player = 0;
  this._won = false;
  this._trap = [[2,38],[7,14],[8,31],[15,26],[21,42],[28,84],[36,44],[51,67],[71,91],[78,98],[87,94],
                    [16,6],[46,25],[49,11],[62,19],[64,60],[74,53],[89,68],[92,88],[95,75],[99,80]];
};

SnakesLadders2.prototype.play = function(die1, die2) {
  if (this._won){return "Game over!"};
  roll = die1 + die2;
  if (roll + this._playerSquare[this._player] <= 100){
    this._playerSquare[this._player] += roll;
    if (this._playerSquare[this._player] === 100){this._won = true; return "Player " + parseInt(this._player+1) + " Wins!"};
  } else {
    this._playerSquare[this._player] = 100 - ((this._playerSquare[this._player] + roll) - 100);
  }
  for (t = 0; t < this._trap.length; t++) {
    if (this._playerSquare[this._player] === this._trap[t][0]){this._playerSquare[this._player] = this._trap[t][1]};
  }
  message = "Player " + parseInt(this._player+1) + " is on square " + parseInt(this._playerSquare[this._player]);
  if (die1!=die2) {if (this._player===0){this._player=1}else{this._player=0}};
  return message;
}

for (i = 1; i < 6; i++) {
  var tgame = new SnakesLadders2();
  var game = new SnakesLadders();
  for (games = 1; games < 51; games++) {
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    solution = tgame.play(x,y);
    Test.assertEquals(game.play(x,y), solution, "Should return: "+solution);
  }
}
*/

function SnakesLadders() {
  this._board = {
                  2: 38, // ladder
                  7: 14, // ladder
                  8: 31, // ladder
                  15: 26, // ladder
                  16: 6, // snake
                  21: 42, // ladder
                  28: 84, // ladder
                  36: 44, // ladder
                  46: 25, // snake
                  49: 11, // snake
                  51: 67, // ladder
                  62: 19, // snake
                  64: 60, // snake
                  74: 53, // snake
                  89: 68, // snake
                  92: 88, // snake
                  95: 75, // snake
                  99: 80, // snake
                  71: 91, // ladder
                  78: 98, // ladder
                  87: 94, // ladder
                };
  this._playerOnePosition = 0;
  this._playerTwoPosition = 0;
  this._turn = 1;  // 1 == playerOne, 2 == playerTwo
};

SnakesLadders.prototype.play = function(die1, die2) {

  if(this._playerOnePosition == 100 || this._playerTwoPosition == 100) {
    return "Game over!";
  }

  const turn = this._turn;  
  var playerPosition;
  
  switch(turn) {
    case 1:
        playerPosition = this._playerOnePosition;
        break;
    case 2:
        playerPosition = this._playerTwoPosition;
        break;
  }
  
   let move = this.move(playerPosition, die1 + die2, turn);
  
   if(move == 100) {
      return `Player ${turn} Wins!`;
   }
 
   if(die1 != die2) {
      this.updateTurn();
   }  
   return `Player ${turn} is on square ${move}`;
}

SnakesLadders.prototype.move = function (playerPosition, moveTotal, turn) {
      let move = playerPosition+moveTotal;
      let position;
      
      if(playerPosition+moveTotal <= 100) {
          position = this.checkSpace(move);
      } else {
          position = this.checkSpace(100-(move-100));
      }
      
      switch(turn) {
          case 1:
               this._playerOnePosition = position;
               break;
          case 2:
               this._playerTwoPosition = position;
              break;
      }
      return position;
}

SnakesLadders.prototype.checkSpace = function (playerPosition) {
    return (this._board[playerPosition]) ? playerPosition = this._board[playerPosition] : playerPosition;
}

SnakesLadders.prototype.updateTurn = function () {
    return (this._turn == 1) ? this._turn = 2: this._turn = 1;
}
