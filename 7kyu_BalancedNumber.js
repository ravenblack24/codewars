/**
Definition
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

Task
Given a number, Find if it is Balanced or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

Number passed is always Positive .

Return the result as String

Input >> Output Examples
(balanced-num 7) ==> return "Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digit (0)

and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced

(balanced-num 295591) ==> return "Not Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digits (11)

and the sum of all digits to the right of the middle digits (10) are Not equal , then It's Not Balanced

Note : The middle digit(s) are 55 .

(balanced-num 959) ==> return "Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digits (9)

and the sum of all digits to the right of the middle digits (9) are equal , then It's Balanced

Note : The middle digit is 5 .

(balanced-num 27102983) ==> return "Not Balanced"
Explanation:
Since , The sum of all digits to the left of the middle digits (10)

and the sum of all digits to the right of the middle digits (20) are Not equal , then It's Not Balanced

Note : The middle digit(s) are 02 .

Test cases
--------------
describe("Check less than thousand", function()
{
    it("Check balanced number", function()
    {
        Test.assertEquals(balancedNum(7), "Balanced")
        Test.assertEquals(balancedNum(959), "Balanced")
        Test.assertEquals(balancedNum(13), "Balanced")
        Test.assertEquals(balancedNum(432), "Not Balanced")
        Test.assertEquals(balancedNum(424), "Balanced")
    })
    it("Check Larger number", function()
    {
        Test.assertEquals(balancedNum(1024), "Not Balanced")
        Test.assertEquals(balancedNum(66545), "Not Balanced")
        Test.assertEquals(balancedNum(295591), "Not Balanced")
        Test.assertEquals(balancedNum(1230987), "Not Balanced")
        Test.assertEquals(balancedNum(56239814), "Balanced")
    })
    it("Random tests", function()
    {
        var solution = number =>
        {
            var s = (number+"").split("").map(c=>c.charCodeAt(0)-"0".charCodeAt(0))
            var len = ~~(s.length / 2) - (s.length % 2 ? 0 : 1)
            return s.slice(0,len).reduce((v,t)=>t+v,0) == s.slice(s.length-len).reduce((v,t)=>t+v,0) ? "Balanced" : "Not Balanced"
        }
        for (let i = 0; i < 100; i++)
        {
            n = ~~(Math.random() * 99999999 + 1)
            Test.assertEquals(balancedNum(n), solution(n))
        }
    })
})

*/

function balancedNum(number)
{
  var input = number.toString();
  var inputLength = input.length;
  
  switch(inputLength) {
     case 1:
     case 2:
        return "Balanced";
     case 3:
     case 4:
        return (input.endsWith(input.charAt(0)) ? "Balanced" : "Not Balanced");
     default:
        return checkBalance(input, inputLength); 
     }
  }
  
  function checkBalance(input,inputLength)
  {
    
    var midpointCalc = Math.floor(inputLength/2);    
    var leftSide = input.slice(0,midpointCalc).split('').map(Number);
    var rightSide = input.slice(midpointCalc+1).split('').map(Number);

    var reducer = (accumulator, currentValue) => accumulator+currentValue;
    
    if(inputLength % 2 == 0)
    {
       leftSide = input.slice(0, Math.floor(inputLength/2)-1).split('').map(Number);    
    }
    
    var left = leftSide.reduce(reducer);
    var right = rightSide.reduce(reducer);
   
    return (left == right ? "Balanced" : "Not Balanced" );
    
   }
