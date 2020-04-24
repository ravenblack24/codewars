/**

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

1) adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value). The value of the question property should be the following string:

Hi, could you please provide your <property name>.

2) and returns only the developers with missing details:

[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
Notes:

At most only one of the values will be null.
Preserve the order of the original list.
Return an empty array [] if there is no developer with missing details.
The input array will always be valid and formatted as in the example above.

Test Cases:
var list1 = [
  { firstName: null, lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' }
];

var list2 = [
  { firstName: 'Kseniya', lastName: 'T.', country: null, continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Amar', lastName: null, country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
];

var list3 = [
  { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: null, age: 41, language: 'Clojure' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: null, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: null, continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

var list4 = [
  { firstName: 'Paulo', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' }
];

console.log('List of developers: ', JSON.stringify(list1));
Test.assertDeepEquals(askForMissingDetails(list1), askForMissingDetailsSolution(list1));

console.log('List of developers: ', JSON.stringify(list2));
Test.assertDeepEquals(askForMissingDetails(list2), askForMissingDetailsSolution(list2));

console.log('List of developers: ', JSON.stringify(list3));
Test.assertDeepEquals(askForMissingDetails(list3), askForMissingDetailsSolution(list3));

console.log('List of developers: ', JSON.stringify(list4));
Test.assertDeepEquals(askForMissingDetails(list4), askForMissingDetailsSolution(list4));

*/

function askForMissingDetails(list) {
  
  return list.filter((item) => {
 
    if(Object.values(item).includes(null)) {
    
       let index = Object.values(item).indexOf(null);
       const keys = Object.keys(item);
       item.question = `Hi, could you please provide your ${keys[index]}.`
       return item;
    }
    
  }, []);
}
