/** 

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
Let's assume that all numbers in the input will be integer values.

Test cases:

Test.assertEquals(sumDigits(10), 1);
Test.assertEquals(sumDigits(99), 18);
Test.assertEquals(sumDigits(-32), 5);
Test.assertEquals(sumDigits(1234567890), 45);
Test.assertEquals(sumDigits(0), 0);
Test.assertEquals(sumDigits(666), 18);
Test.assertEquals(sumDigits(100000002), 3);
Test.assertEquals(sumDigits(800000009), 17);

*/

function sumDigits(number) {

  let sum = 0;
  // Return absolute values to discard negative symbols
  number = Math.abs(number);
  
  while(number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}
