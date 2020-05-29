/**
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
your function should return true.

Notes:

The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
The input array will always be valid and formatted as in the example above.

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
  { firstName: 'Jakub', lastName: 'I.', country: 'Slovakia', continent: 'Europe', age: 28, language: 'Java' },
  { firstName: 'Luka', lastName: 'J.', country: 'Slovenia', continent: 'Europe', age: 29, language: 'Clojure' }
];

var list5 = [
  { firstName: 'Mehdi', lastName: 'H.', country: 'Tunisia', continent: 'Africa', age: 42, language: 'Python' },
  { firstName: 'Yusuf', lastName: 'N.', country: 'Turkey', continent: 'Europe', age: 22, language: 'Python' },
];

*/
function isSameLanguage(list) {
 return list.every((element) => element.language == list[0].language);
}
