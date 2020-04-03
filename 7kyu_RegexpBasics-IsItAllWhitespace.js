/** 

Implement String#whitespace?(str) (Ruby), String.prototype.whitespace(str) (JavaScript), String::whitespace(str) (CoffeeScript), or whitespace(str) (Python), which should return true/True if given object consists exclusively of zero or more whitespace characters, false/False otherwise.

Test.describe("Basic tests",_=>{
Test.assertEquals("".whitespace(), true);
Test.assertEquals(" ".whitespace(), true);
Test.assertEquals("\n\r\n\r".whitespace(), true);
Test.assertEquals("a".whitespace(), false);
Test.assertEquals("w\n".whitespace(), false);
Test.assertEquals("\t".whitespace(), true);
Test.assertEquals(" a\n".whitespace(), false);
Test.assertEquals("\t \n\r\n  ".whitespace(), true);
Test.assertEquals("\n\r\n\r ".whitespace(), true);
Test.assertEquals("\n\r\n\r 3".whitespace(), false);
})

*/

String.prototype.whitespace=function(){
  return /^\s{0,}$/.test(this);
}
