/**
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"

Test Cases:
const words = ['Nouns', 'Time', 'Person', 'Year', 'Way', 'Day', 'Thing',
               'Man', 'World', 'Life', 'Hand', 'Part', 'Child', 'Eye',
               'Woman', 'Place', 'Work', 'Week', 'Case', 'Point', 'Able',
               'Government', 'Company', 'Number', 'Group', 'Other', 'Same',
               'Fact', 'Verbs', 'Be', 'Have', 'Do', 'Say', 'Get', 'Make',
               'Go', 'Know', 'Take', 'See', 'Come', 'Think', 'Look', 'Want',
               'Give', 'Use', 'Find', 'Tell', 'Ask', 'Work', 'Seem', 'Feel',
               'Try', 'Leave', 'Call', 'Adjectives', 'Good', 'New', 'First',
               'Last', 'Long', 'Great', 'Little', 'Own', 'Problem', 'Old',
               'Right', 'Big', 'High', 'Different', 'Small', 'Large', 'Bad',
               'Next', 'Early', 'Young', 'Important', 'Few', 'Public'];

describe("Break camelCase", function() {
  it("Basic Tests", function() {
    Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
    Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
  });

  it("Random tests", function() {
    let count = 100;
    while(count > 0) {
      let builder = []
      let n = 1 + Math.floor(Math.random() * 4);
      for(let i=0; i<n; i++)
        builder.push(words[Math.floor(Math.random() * 78)]);
      builder = builder.join('');
      let first = builder[0].toLowerCase();
      const str_in = first + builder.slice(1,);
      //console.log(`str_in = ${str_in}`);
      const expected = str_in.replace( /([A-Z])/g , " $1");
      Test.assertEquals(solution(str_in), expected, 'Unexpected result')
      count--;
    }
  });
});
*/

function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');  
}
