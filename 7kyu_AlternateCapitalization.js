/**

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

Test cases:
describe("Basic tests", function(){
Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
Test.assertDeepEquals(capitalize("indexinglessons"),['InDeXiNgLeSsOnS', 'iNdExInGlEsSoNs']);
Test.assertDeepEquals(capitalize("codingisafunactivity"),['CoDiNgIsAfUnAcTiViTy', 'cOdInGiSaFuNaCtIvItY']);
});

describe("Random tests", function(){
 var letters = "abcdefghijklmnopqrstuvwxyz"
for (let i=0;i<100;i++){
  r  = Math.floor((Math.random() * 10) + 10);  
  if (r > 25){
  letters += letters;
  };
  s = letters.slice(1,r)  
  Test.assertDeepEquals(capitalize(s),capitalize521R(s),"It should work for random inputs too"); 
}
});

function capitalize521R(s){
  a = s.split('').map(function(c,i) {
    return !(i & 1) ? c.toUpperCase() : c.toLowerCase();
  }).join('');
  b = s.split('').map(function(c,i) {
    return i & 1 ? c.toUpperCase() : c.toLowerCase();
  }).join('');
  
  return [a,b];
};
*/

function capitalize(s){
  const even = s.split("").map((letter, i) => { return (i%2 == 0) ? letter.toUpperCase() : letter }).join("");
  const odd = s.split("").map((letter, i) => { return (i%2 !== 0) ? letter.toUpperCase(): letter }).join("");
  return [even, odd];
};
