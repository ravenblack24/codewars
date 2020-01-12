/**

Description:
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

-----------
Test cases

Test.assertEquals(squareDigits(3212), 9414);
Test.assertEquals(squareDigits(2112), 4114);
var randomInt = Math.floor((Math.random() * 1000) + 1)
Test.assertEquals(squareDigits(randomInt), 
  (function (num){
    var strOfNum = num.toString();
    var returnString = "";
    for(var i = 0; i < strOfNum.length; i++){
      returnString += Math.pow(parseInt(strOfNum[i]), 2).toString();
    }
    return parseInt(returnString); 
  })(randomInt));

*/

function squareDigits(num){
  // convert to String and split into array
  var numArray = num.toString().split("");
  var result ="";
  
  for(var i = 0; i<numArray.length; i++) {
    result += Math.pow(numArray[i], 2);
  }
  // convert back to Integer
  return parseInt(result); 
}
