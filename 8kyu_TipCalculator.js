/**
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.

--------------------------
Test cases

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

var bigRandomNum = getRandomNum(500, 2000);
var medRandomNum = getRandomNum(50, 100);
var smallRandomNum = getRandomNum(0, 15);

function answer(randomNum, percent) {
  return Math.ceil(randomNum * percent);
}

Test.describe("calculateTip", function(){
  Test.it ("returns 'Rating not recognised' when invalid rating", function(){
    Test.assertEquals(calculateTip(20, "hi"), 'Rating not recognised');
    Test.assertEquals(calculateTip(20, "dfsjkfh"), 'Rating not recognised');
    Test.assertEquals(calculateTip(20, "great!"), 'Rating not recognised');   
  });
  
    Test.it ("returns correct tip amount for whole amounts", function(){
    Test.assertEquals(calculateTip(10, "Terrible"), 0);
    Test.assertEquals(calculateTip(30, "poor"), 2);
    Test.assertEquals(calculateTip(20, "Excellent"), 4);
  });

  Test.it ("returns correct tip amount for amounts with decimals", function(){
    Test.assertEquals(calculateTip(26.95, "gOod"), 3);
    Test.assertEquals(calculateTip(107.65, "GReat"), 17);
    Test.assertEquals(calculateTip(684.99, "Poor"), 35);
  });
  
  Test.it ("should work with random amounts", function(){
    Test.assertEquals(calculateTip(bigRandomNum, "GREAT"), answer(bigRandomNum, 0.15));
    Test.assertEquals(calculateTip(medRandomNum, "good"), answer(medRandomNum, 0.10));
    Test.assertEquals(calculateTip(smallRandomNum, "excellent"), answer(smallRandomNum, 0.20));   
  });
});
*/

function calculateTip(amount, rating) {

  var ratingCase = rating.toUpperCase();

  var tipByRating = {
    "TERRIBLE": 0,
    "POOR" : 0.05,
    "GOOD" : 0.1,
    "GREAT" : 0.15,
    "EXCELLENT" : 0.2
  }

  if(tipByRating.hasOwnProperty(ratingCase)) {
     return Math.ceil(amount * tipByRating[ratingCase]);
  }
  return "Rating not recognised";
}
