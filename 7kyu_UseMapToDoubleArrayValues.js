/**

Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
}
For example:

var someNumbers = [1,2,10,57];

double(someNumbers); // should return [2,4,20,114]

Test Cases:
var test1 = [1,2,3,4,5];
var test2 = [71,-548,12.3,31415];

Test.assertSimilar(double(test1), [2,4,6,8,10]);
Test.assertSimilar(double(test2), [142,-1096,24.6,62830]);

var array = [];

for (var tests=3; tests <= 30; tests++)
{
  for (var i=0; i < 20; i++)
  {
    var sign = Math.random() > 0.5 ? 1 : -1;
    array.push(Math.floor(Math.random() * 10000) % 10000 * sign);
  }
  Test.assertSimilar(double(array), Tester.double(array));
  Test.expect(Tester.mapCalled() >= tests, "Your solution must use Array's map() function");
  array = [];
}
*/

function double(array) {
    return array.map((num) => num * 2 );
}
