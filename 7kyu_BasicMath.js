/**

Description:
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"

--------------
Test cases:

Test.describe("Let's go...", function() {
Test.it("Basic (fixed) tests", function() {
  Test.assertEquals(calculate("1plus2plus3plus4"), '10');
  Test.assertEquals(calculate('1minus2minus3minus4'), '-8');
	Test.assertEquals(calculate('1plus2plus3minus4'), '2');
	Test.assertEquals(calculate('1minus2plus3minus4'), '-2');
	Test.assertEquals(calculate('1plus2minus3plus4minus5'), '-1');
})

//set-up for random testing
var calculateTest = testStr => testStr.match(/\d+|minus\d+|plus\d+/g).map(s => s.replace(/minus/g, '-').replace(/plus/g, '')).map(x => parseInt(x)).reduce((a, b) => a + b)+'';
var operators = ['plus','minus','plus','minus','minus','plus'];
var randNum = range => ((Math.floor(Math.random() * range) + 1).toString());
var selectRandomFrom = arr => arr[Math.floor(Math.random() * arr.length)];
var testStringSmall = () => randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000);
var testStringMedium = () => randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000);
var testStringBig = () => randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000)+selectRandomFrom(operators)+randNum(1000);

Test.it("Random tests", function() {
  for(var i = 0; i < 15; i++) {
    var s=testStringSmall();
    Test.assertEquals(calculate(s), calculateTest(s), 'Should work with random values:');
  }
  
  for(var i = 0; i < 15; i++) {
    var s=testStringMedium();
    Test.assertEquals(calculate(s), calculateTest(s), 'Should work with random values:');
  }
  
  for(var i = 0; i < 15; i++) {
    var s=testStringBig();
    Test.assertEquals(calculate(s), calculateTest(s), 'Should work with random values:');
  }

})


});

*/

function calculate(str) {
  const regexPlus = /plus/gi;
  const regexMinus = /minus/gi;

  return eval(str.replace(regexPlus, "+").replace(regexMinus, "-")).toString();
}
