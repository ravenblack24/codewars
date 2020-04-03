/**
Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0


Test Cases:
const { assert } = require("chai");

function testing(inp, exp) {
  it(`Testing for "${inp}", expecting: ${exp}`, function() {
    assert.strictEqual(sumOfABeach(inp), exp);
  });
}

describe("Fixed tests", function() {
  describe("Sample tests", function() {
    testing("SanD", 1);
    testing("sunshine", 1);
    testing("sunsunsunsun", 4);
    testing("123FISH321", 1);
  });

  describe("Longer tests", function() {
    testing("weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn", 4);
    testing("sAnDsandwaTerwatErfishFishsunsunsandwater", 10);
    testing("joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef ", 0);
    testing("jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f", 10);
    testing(
      "saNdsandwaterwAterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwater",
      100
    );
  });

  describe("Sliced words", function() {
    testing("sununsu", 1);
    testing("sandandndsansa", 1);
    testing("wateratertererwatewatwa", 1);
    testing("fishishshfisfi", 1);
  });
});

describe("Random tests", function() {
  const words = "abcdefghijklmnopqrstuvwxyz1234567890"
    .split("")
    .concat("water", "sand", "fish", "sun", "water", "sand", "fish", "sun", "water", "sand", "fish", "sun");
  for (let i = 0; i < 100; i++) {
    const str = Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => words[Math.floor(Math.random() * words.length)])
      .join("")
      .split("")
      .map(c => (Math.random() >= 0.5 ? c : c.toUpperCase()))
      .join("");
    const exp = (str.match(/sand|water|fish|sun/gi) || []).length;
    testing(str, exp);
  }
});

*/

function sumOfABeach(beach) {
  let regex = /(sand|water|fish|sun)/ig;
  const matches = beach.match(regex);
  return (matches === null) ? 0 : matches.length;
}
