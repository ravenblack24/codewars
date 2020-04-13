/**
Given a list of numbers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Example:
odd_or_even([0])          ==  "even"
odd_or_even([0, 1, 4])    ==  "odd"
odd_or_even([0, -1, -5])  ==  "even"

Test cases:

Test.describe('Fixed tests', _ => {
  Test.it('Edge tests', _ => {
    Test.assertEquals(oddOrEven([0]), 'even')
    Test.assertEquals(oddOrEven([1]), 'odd')
    Test.assertEquals(oddOrEven([]), 'even')
  });
  
  Test.it('Even tests', _ => {
    Test.assertEquals(oddOrEven([0, 1, 5]), 'even')
    Test.assertEquals(oddOrEven([0, 1, 3]), 'even')
    Test.assertEquals(oddOrEven([1023, 1, 2]), 'even')
  });
  
  Test.it('Negative Even tests', _ => {
    Test.assertEquals(oddOrEven([0, -1, -5]), 'even')
    Test.assertEquals(oddOrEven([0, -1, -3]), 'even')
    Test.assertEquals(oddOrEven([-1023, 1, -2]), 'even')
  });
  
  Test.it('Odd tests', _ => {
    Test.assertEquals(oddOrEven([0, 1, 2]), 'odd')
    Test.assertEquals(oddOrEven([0, 1, 4]), 'odd')
    Test.assertEquals(oddOrEven([1023, 1, 3]), 'odd')
  });
  
  Test.it('Negative Odd tests', _ => {
    Test.assertEquals(oddOrEven([0, -1, 2]), 'odd')
    Test.assertEquals(oddOrEven([0, 1, -4]), 'odd')
    Test.assertEquals(oddOrEven([-1023, -1, 3]), 'odd')
  });
});

Test.describe('Random tests', _ => {  
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randEven() {
    var num = rand(1,1000000);
    num = num % 2 == 0 ? num : num + 1;
    var sign = rand(0,9999999)%2?-1:1;
    return num * sign;
  }
  
  function generateEven() {
    var even = [];
    for(var i=0;i<10;i++)
      even.push(randEven());    
    return even;
  }
  Test.it('Even tests', _ => {
    for(var i=0;i<40;i++)
      Test.assertEquals(oddOrEven(generateEven()), 'even')
  });
  
  function randOdd() {
    var num = rand(1,1000000);
    num = num % 2 == 0 ? num + 1 : num;
    var sign = rand(0,9999999)%2?-1:1;
    return num * sign;
  }
  
  function generateOdd() {
    var odd = [randOdd()];
    for(var i=0;i<10;i++)
      odd.push(randOdd());
    return odd;
  }
  Test.it('Odd tests', _ => {
    for(var i=0;i<40;i++)
      Test.assertEquals(oddOrEven(generateOdd()), 'odd')
  });
  
  Test.it('Mixed tests', _ => {
    for(var i=0;i<40;i++) {
      var decision = rand(0,9999999)%2?'odd':'even';
      Test.assertEquals(oddOrEven(decision=='odd'?generateOdd():generateEven()), decision)
    }
  });
});
*/

function oddOrEven(array) {
  
   // Set 0 as initialValue to prevent failure of reduce on empty array
   let result = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

   return (result % 2 == 0)? "even" : "odd";
}
