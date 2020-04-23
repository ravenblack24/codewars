/**
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];
write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

[
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
]
Notes:

The original order should be preserved.
If there are no GitHub admin developers in a given language then return an empty array [].
The input array will always be valid and formatted as in the example above.
The strings representing whether someone is a GitHub admin will always be formatted as 'yes' and 'no' (all lower-case).
The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.

Test Cases:
// ========== FIXED TEST CASES =========
var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 20, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 21, language: 'C', githubAdmin: 'yes' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C', githubAdmin: 'yes' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'JavaScript', githubAdmin: 'no' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby', githubAdmin: 'yes' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP', githubAdmin: 'no' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' },
];



const testedLanguage1 = 'JavaScript';
console.log(`Tested language: `, `${testedLanguage1}`);
console.log(`List of developers: `, `${JSON.stringify(list1)}`);
const expected1 = findAdminSolution(list1, testedLanguage1);
const actual1 = findAdmin(list1, testedLanguage1);
Test.assertDeepEquals(actual1, expected1);


const testedLanguage2 = 'Ruby';
console.log(`Tested language: `, `${testedLanguage2}`);
console.log(`List of developers: `, `${JSON.stringify(list1)}`);
const expected2 = findAdminSolution(list1, testedLanguage2);
const actual2 = findAdmin(list1, testedLanguage2);
Test.assertDeepEquals(actual2, expected2);

const testedLanguage3 = 'Python';
console.log(`Tested language: `, `${testedLanguage3}`);
console.log(`List of developers: `, `${JSON.stringify(list1)}`);
const expected3 = findAdminSolution(list1, testedLanguage3);
const actual3 = findAdmin(list1, testedLanguage3);
Test.assertDeepEquals(actual3, expected3);

*/

function findAdmin(list, lang) {
 return list.filter((attendee) => {
    return attendee.language === lang && attendee.githubAdmin === "yes";
  });
}
