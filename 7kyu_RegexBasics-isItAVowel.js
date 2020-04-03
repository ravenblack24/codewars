/**
Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and false otherwise.

Tests:
describe('vowel', () => {
  it('Basic tests', () => {
    Test.assertEquals(''.vowel(), false);
    Test.assertEquals('a'.vowel(), true);
    Test.assertEquals('E'.vowel(), true);
    Test.assertEquals('ou'.vowel(), false);
    Test.assertEquals('z'.vowel(), false);
    Test.assertEquals('lol'.vowel(), false);
  });
});
*/
String.prototype.vowel = function() {
  return /^(a|e|i|o|u){1}$/i.test(this);
};
