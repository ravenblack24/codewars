/**
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
your function should return true as there is at least one developer from the required 5 geographic zones.

Notes:

The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.

Test Cases:
var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Clojure' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

var list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

var list3 = [
  { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
  { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
];

var list4 = [
  { firstName: 'Alexander', lastName: 'F.', country: 'Russia', continent: 'Europe', age: 89, language: 'Java' },
  { firstName: 'Fatima', lastName: 'K.', country: 'Saudi Arabia', continent: 'Asia', age: 21, language: 'Clojure' },
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Nikola', lastName: 'H.', country: 'Serbia', continent: 'Europe', age: 29, language: 'Python' },
  { firstName: 'Jakub', lastName: 'I.', country: 'Slovakia', continent: 'Asia', age: 28, language: 'Java' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Americas', age: 89, language: 'JavaScript' },
  { firstName: 'Luka', lastName: 'J.', country: 'Slovenia', continent: 'Oceania', age: 29, language: 'Clojure' },
  { firstName: 'Mariam', lastName: 'B.', country: 'Egypt', continent: 'Africa', age: 89, language: 'Python' },
];

var list5 = [
  { firstName: 'Mehdi', lastName: 'H.', country: 'Tunisia', continent: 'Africa', age: 42, language: 'Python' },
  { firstName: 'Yusuf', lastName: 'N.', country: 'Turkey', continent: 'Europe', age: 22, language: 'Python' },
];

console.log('List of developers: ', JSON.stringify(list1));
Test.assertEquals(allContinents(list1), allContinentsSolution(list1));

console.log('List of developers: ', JSON.stringify(list2));
Test.assertEquals(allContinents(list2), allContinentsSolution(list2));

console.log('List of developers: ', JSON.stringify(list3));
Test.assertEquals(allContinents(list3), allContinentsSolution(list3));

console.log('List of developers: ', JSON.stringify(list4));
Test.assertEquals(allContinents(list4), allContinentsSolution(list4));

console.log('List of developers: ', JSON.stringify(list5));
Test.assertEquals(allContinents(list5), allContinentsSolution(list5));
*/

function allContinents(list) {
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];  
 
  const devContinents = list.map((dev) => {
      return dev.continent;
  })

  return continents.every((location) => devContinents.includes(location)) 
}
