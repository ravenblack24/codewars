/**
Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

Test.assertEquals("".isLetter(), false);
Test.assertEquals("a".isLetter(), true);
Test.assertEquals("X".isLetter(), true);
Test.assertEquals("7".isLetter(), false);
Test.assertEquals("*".isLetter(), false);
Test.assertEquals("ab".isLetter(), false);
Test.assertEquals("a\n".isLetter(), false);

*/
String.prototype.isLetter = function() {
  return /^[a-z]{1}$/ig.test(this);
}
