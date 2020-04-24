/**
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];
your function should return the following object (the order of properties does not matter):

{ vegetarian: 2, standard: 1, vegan: 1 }
Notes:

The order of the meals count in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

Test Cases:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];


var list2 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'standard' },
  { firstName: 'Noel', lastName: 'O.', country: 'Albania', continent: 'Europe', age: 23, language: 'Python', 
    meal: 'gluten-intolerant' },
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby', 
    meal: 'gluten-intolerant' },
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
    meal: 'diabetic' },
  { firstName: 'Nareh', lastName: 'Q.', country: 'Armenia', continent: 'Europe', age: 30, language: 'Clojure', 
    meal: 'standard' },
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript', 
    meal: 'standard' },
];

console.log('List of developers: ', JSON.stringify(list1));
Test.assertDeepEquals(orderFood(list1), orderFoodSolution(list1));

console.log('List of developers: ', JSON.stringify(list2));
Test.assertDeepEquals(orderFood(list2), orderFoodSolution(list2));
*/
function orderFood(list) {
  const result = {};
  
  list.forEach((attendee) => {
    return (result[attendee.meal]) ? result[attendee.meal]++ : result[attendee.meal] = 1;
  });
  
  return result;
}
