/**
Task
 	Your task is to make a simple class called GuessWho. The computer will try and guess your character, your job is to return back to the computer a list of possible characters so that it can guess successfully. You will need at least one method in the class called guess, this is where the computer posts the guess.

Rules
 	1.  The computer will give you the character in the initialization of the class

2.  The computer will post the guess to the method guess

3.  The computers guess will either be a name of a character or one of these characteristics ["Male","Female","Glasses","Brown eyes","Bald","White hair","Small mouth","Mustache","Brown hair","Big mouth","Small nose","Blue eyes","Hat","Long hair","Black hair","Earrings","Blonde hair","Ginger hair","Beard","Big nose"]

4.  If the computer passes a characteristic that your character has then return all the characters that have that characteristic.

5.  If the computer passes a characteristic that your character does not have then return all characters that do not have that characteristic.

6.  Update your character list

7.  Keep a tally of the amount of turns the computer has had.

8.  All characters and characteristic are capitalized

Character Characteristics - pre-loaded into initial solution
characteristic = [["Jean-Claude",["Male","Glasses","Brown eyes","Bald","White hair","Small mouth","Small nose"]],
                  ["Pierre",["Male","Mustache","Brown eyes","Brown hair","Big mouth","Small nose"]],
                  ["Jean",["Male","White hair","Big nose","Big mouth","Blue eyes"]],
                  ["Amelie",["Female","Hat","Brown hair","Small mouth","Long hair","Brown eyes","Small nose"]],
                  ["Mirabelle",["Female","Black hair","Earrings","Small mouth","Brown eyes","Big nose"]],
                  ["Isabelle",["Female","Blonde hair","Glasses","Hat","Small mouth","Small nose","Brown eyes"]],
                  ["Antonin",["Male","Brown eyes","Black hair","Small nose","Big mouth"]],
                  ["Bernard",["Male","Brown eyes","Brown hair","Small nose","Hat"]],
                  ["Owen",["Male","Blue eyes","Blonde hair","Small nose","Small mouth"]],
                  ["Dylan",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Bald","Beard"]],
                  ["Herbert",["Male","Brown eyes","Blonde hair","Big nose","Small mouth","Bald"]],
                  ["Christine",["Female","Blue eyes","Blonde hair","Small nose","Small mouth","Long hair"]],
                  ["Luc",["Male","Brown eyes","White hair","Small nose","Small mouth","Glasses"]],
                  ["Cecilian",["Male","Brown eyes","Ginger hair","Small nose","Small mouth"]],
                  ["Lionel",["Male","Brown eyes","Brown hair","Big nose","Big mouth","Mustache"]],
                  ["Benoit",["Male","Brown eyes","Brown hair","Small mouth","Small nose","Mustache","Beard"]],
                  ["Robert",["Male","Blue eyes","Brown hair","Big nose","Big mouth"]],
                  ["Charline",["Female","Brown hair","White hair","Small nose","Big mouth"]],
                  ["Renaud",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Mustache"]],
                  ["Michel",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Beard"]],
                  ["Pierre-Louis",["Male","Blue eyes","Brown hair","Small nose","Small mouth","Bald","Glasses"]],
                  ["Etienne",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Glasses"]],
                  ["Henri",["Male","Brown eyes","White hair","Small nose","Big mouth","Hat"]],
                  ["Damien",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Hat"]]]
Returns
Return ["Correct! in n turns"]. Where n is the amount of turns the computer has taken, if the computer guesses the correct character.

Return array of possible characters if a computer doesn't guess the correct character or characteristic.

Return array of possible characters if a computer doesn't guess the correct characteristic.

Example
Game set up with the character Amelie

game = new GuessWho("Amelie")
The computer guesses the characteristic Female

game.guess("Female")
Amelia is female so you should return all the characters that are female.

["Amelie", "Mirabelle", "Isabelle", "Christine", "Charline"]

Test Cases
-------------
function GuessWho2 (character){
  this.character = character;
  this.goes = 0;
  this.characteristic = [["Jean-Claude",["Male","Glasses","Brown eyes","Bald","White hair","Small mouth","Small nose"]],
                         ["Pierre",["Male","Mustache","Brown eyes","Brown hair","Big mouth","Small nose"]],
                         ["Jean",["Male","White hair","Big nose","Big mouth","Blue eyes"]],
                         ["Amelie",["Female","Hat","Brown hair","Small mouth","Long hair","Brown eyes","Small nose"]],
                         ["Mirabelle",["Female","Black hair","Earrings","Small mouth","Brown eyes","Big nose"]],
                         ["Isabelle",["Female","Blonde hair","Glasses","Hat","Small mouth","Small nose","Brown eyes"]],
                         ["Antonin",["Male","Brown eyes","Black hair","Small nose","Big mouth"]],
                         ["Bernard",["Male","Brown eyes","Brown hair","Small nose","Hat"]],
                         ["Owen",["Male","Blue eyes","Blonde hair","Small nose","Small mouth"]],
                         ["Dylan",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Bald","Beard"]],
                         ["Herbert",["Male","Brown eyes","Blonde hair","Big nose","Small mouth","Bald"]],
                         ["Christine",["Female","Blue eyes","Blonde hair","Small nose","Small mouth","Long hair"]],
                         ["Luc",["Male","Brown eyes","White hair","Small nose","Small mouth","Glasses"]],
                         ["Cecilian",["Male","Brown eyes","Ginger hair","Small nose","Small mouth"]],
                         ["Lionel",["Male","Brown eyes","Brown hair","Big nose","Big mouth","Mustache"]],
                         ["Benoit",["Male","Brown eyes","Brown hair","Small mouth","Small nose","Mustache","Beard"]],
                         ["Robert",["Male","Blue eyes","Brown hair","Big nose","Big mouth"]],
                         ["Charline",["Female","Brown hair","White hair","Small nose","Big mouth"]],
                         ["Renaud",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Mustache"]],
                         ["Michel",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Beard"]],
                         ["Pierre-Louis",["Male","Blue eyes","Brown hair","Small nose","Small mouth","Bald","Glasses"]],
                         ["Etienne",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Glasses"]],
                         ["Henri",["Male","Brown eyes","White hair","Small nose","Big mouth","Hat"]],
                         ["Damien",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Hat"]]];
}

GuessWho2.prototype.guess = function (guess){
  this.goes ++;
  for (myvari=0;myvari<this.characteristic.length;myvari++){
    if (this.characteristic[myvari][0] === this.character){character_index = myvari;break;}else{character_index = null;}
  }
  var character_guess = -1;
  for (myvari=0;myvari<this.characteristic.length;myvari++){if (guess === this.characteristic[myvari][0]){character_guess = myvari;}}
  if (character_guess !== -1){
    if (guess === this.character){return ["Correct! in "+this.goes.toString()+" turns"];}
    this.characteristic.splice(character_guess,1);
    return return_array2(this.characteristic);
  }
  has_it = !this.characteristic[character_index][1].includes(guess);
  that = this;
  for (myvari=this.characteristic.length-1;myvari>=0;myvari--){
    if (this.characteristic[myvari][1].includes(guess) === has_it){this.characteristic.splice(myvari,1);}
  }
  return return_array2(this.characteristic);
};

function return_array2(characters){
  var return_array = [];
  for (myvaria=0;myvaria<characters.length;myvaria++){
    return_array.push(characters[myvaria][0]);
  }
  return return_array;
}

function GuessWhoGuesser (){
  this.char_options = ["Male","Female","Glasses","Brown eyes","Bald","White hair","Small mouth",
                       "Mustache","Brown hair","Big mouth","Small nose","Blue eyes","Hat","Long hair",
                       "Black hair","Earrings","Blonde hair","Ginger hair","Beard","Big nose"];
  this.characteristic = ["Jean-Claude","Pierre","Jean","Amelie",
                         "Mirabelle","Isabelle","Antonin","Bernard",
                         "Owen","Dylan","Herbert","Christine",
                         "Luc","Cecilian","Lionel","Benoit",
                         "Robert","Charline","Renaud","Michel",
                         "Pierre-Louis","Etienne","Henri","Damien"];
  this.guess_character = this.characteristic[Math.floor(Math.random() * this.characteristic.length)];
  this.game1 = new GuessWho2(this.guess_character);
  this.game2 = new GuessWho(this.guess_character);
}


GuessWhoGuesser.prototype.play = function (){
  var guess = [];
  var game_result = [];
  var game_result2 = [];
  for(myvar=0;myvar<=20;myvar++){
    if (game_result.length != 1){
      guess_it = this.char_options[Math.floor(Math.random() * (this.char_options.length - 1))];
      this.char_options.splice(this.char_options.indexOf(guess_it),1);
    } else {
      guess_it = game_result[0];
    }
    game_result = this.game1.guess(guess_it);
    game_answer = this.game2.guess(guess_it);
    Test.assertDeepEquals(game_answer, game_result,"Expected: " + game_result);
    if (guess_it === this.guess_character){break;}
  }
};

for(rtests=0;rtests<=50;rtests++){
  guesser = new GuessWhoGuesser();
  guesser.play();
}

*/

class GuessWho {
  constructor(character){
      this._characteristic = [["Jean-Claude",["Male","Glasses","Brown eyes","Bald","White hair","Small mouth","Small nose"]],
                           ["Pierre",["Male","Mustache","Brown eyes","Brown hair","Big mouth","Small nose"]],
                           ["Jean",["Male","White hair","Big nose","Big mouth","Blue eyes"]],
                           ["Amelie",["Female","Hat","Brown hair","Small mouth","Long hair","Brown eyes","Small nose"]],
                           ["Mirabelle",["Female","Black hair","Earrings","Small mouth","Brown eyes","Big nose"]],
                           ["Isabelle",["Female","Blonde hair","Glasses","Hat","Small mouth","Small nose","Brown eyes"]],
                           ["Antonin",["Male","Brown eyes","Black hair","Small nose","Big mouth"]],
                           ["Bernard",["Male","Brown eyes","Brown hair","Small nose","Hat"]],
                           ["Owen",["Male","Blue eyes","Blonde hair","Small nose","Small mouth"]],
                           ["Dylan",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Bald","Beard"]],
                           ["Herbert",["Male","Brown eyes","Blonde hair","Big nose","Small mouth","Bald"]],
                           ["Christine",["Female","Blue eyes","Blonde hair","Small nose","Small mouth","Long hair"]],
                           ["Luc",["Male","Brown eyes","White hair","Small nose","Small mouth","Glasses"]],
                           ["Cecilian",["Male","Brown eyes","Ginger hair","Small nose","Small mouth"]],
                           ["Lionel",["Male","Brown eyes","Brown hair","Big nose","Big mouth","Mustache"]],
                           ["Benoit",["Male","Brown eyes","Brown hair","Small mouth","Small nose","Mustache","Beard"]],
                           ["Robert",["Male","Blue eyes","Brown hair","Big nose","Big mouth"]],
                           ["Charline",["Female","Brown hair","White hair","Small nose","Big mouth"]],
                           ["Renaud",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Mustache"]],
                           ["Michel",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Beard"]],
                           ["Pierre-Louis",["Male","Blue eyes","Brown hair","Small nose","Small mouth","Bald","Glasses"]],
                           ["Etienne",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Glasses"]],
                           ["Henri",["Male","Brown eyes","White hair","Small nose","Big mouth","Hat"]],
                           ["Damien",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Hat"]]];                
      this._answer = this._characteristic.find(element => element.includes(character));
      this._rounds = 0;
  }
}

GuessWho.prototype.guess = function (guess){
  this._rounds++;
  var result = [];

  // check if guess matches answer
  if(this._answer[0] == guess) {
      return ["Correct! in "+this._rounds+" turns"];
  } else {
      const indexOf = this._characteristic.findIndex(element => element.includes(guess));
      if(indexOf > -1) {
          this._characteristic.splice(indexOf, 1);
      }
  }
  
  // If answer attribute contains guess, filter accordingly
  if(this._answer[1].includes(guess)) {
      result = this.filterCharacteristics(guess, true);
  } else {
      result = this.filterCharacteristics(guess, false);
  }
  return result;
};

GuessWho.prototype.filterCharacteristics = function (searchTerm, include){
  let characterArray = [];
  let returnArray = [];
  this._characteristic.forEach((item) => {
    if(item[1].includes(searchTerm) === include) {
        characterArray.push(item);
        returnArray.push(item[0]);
    }   
  });
  
  // Update characteristic array to reflect matches
  this._characteristic = characterArray;
  // return character matches
  return returnArray;
}
