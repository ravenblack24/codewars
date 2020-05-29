/**
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [  
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];
Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:

[ 
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' }
];
Notes:

The input array will always be valid and formatted as in the example above.
The array does not include developers coding in the same language and sharing the same name.

Test Cases:
var list1 = [
  { firstName: 'Kseniya', lastName: 'A.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

var list2 = [
  { firstName: 'Paulo', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' }
];

var list3 = [  
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];

var list4 = [  
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];



console.log('List of developers: ', JSON.stringify(list1));
Test.assertDeepEquals(sortByLanguage(JSON.parse(JSON.stringify(list1))), sortByLanguageSolution(list1));

console.log('List of developers: ', JSON.stringify(list2));
Test.assertDeepEquals(sortByLanguage(JSON.parse(JSON.stringify(list2))), sortByLanguageSolution(list2));

console.log('List of developers: ', JSON.stringify(list3));
Test.assertDeepEquals(sortByLanguage(JSON.parse(JSON.stringify(list3))), sortByLanguageSolution(list3));

console.log('List of developers: ', JSON.stringify(list4));
Test.assertDeepEquals(sortByLanguage(JSON.parse(JSON.stringify(list4))), sortByLanguageSolution(list4));


*/
function sortByLanguage(list) {
  return list.sort((item1,item2 ) => {
    if(item1["language"] < item2["language"]) {
      return -1;
    }
    if(item1["language"]>item2["language"]) {
      return 1;
    }
    else {
      if(item1["firstName"] < item2["firstName"]) {
      return -1;
    }
    if(item1["firstName"]>item2["firstName"]) {
      return 1;
    }
      return 0;
    }
  } );
}
