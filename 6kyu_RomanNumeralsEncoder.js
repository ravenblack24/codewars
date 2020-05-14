/**
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

Test cases
------------
describe("solution", () => {
  it ("should handle small numbers", () => {
    Test.assertEquals(solution(1), 'I', '1 should, "I"')
    Test.assertEquals(solution(2), 'II', '2 should, "II"')
    Test.assertEquals(solution(3), 'III', '3 should, "III"')
    Test.assertEquals(solution(4), 'IV', '4 should, "IV"')
    Test.assertEquals(solution(5), 'V', '5 should, "V"')
    Test.assertEquals(solution(9), 'IX', '9 should, "IX"')
    Test.assertEquals(solution(10), 'X', '10 should, "X"')
    Test.assertEquals(solution(11), 'XI')
    Test.assertEquals(solution(19), 'XIX')
    Test.assertEquals(solution(22), 'XXII')
    Test.assertEquals(solution(15), 'XV')
  });
  
  it ("should handle large numbers", () => {
    Test.assertEquals(solution(1000), 'M', '1000 should, "M"')
    Test.assertEquals(solution(1001), 'MI', '1001 should, "MI"')
    Test.assertEquals(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
    Test.assertEquals(solution(2007), 'MMVII', '2007 should, "MMVII"')
    Test.assertEquals(solution(2008), 'MMVIII', '2008 should, "MMVIII"')
  });
  
  it ("random tests", () => {
    var Roman = {
        map: [
            1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC',
            50, 'L', 40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I',
        ],
        toRoman: function(n) {
            var value = '';
            for (var idx = 0; n > 0 && idx < this.map.length; idx += 2) {
                while (n >= this.map[idx]) {
                    value += this.map[idx + 1];
                    n -= this.map[idx];
                }
            }
            return value;
        }
    }
    
    for(let i=0; i<100; i++) {
      var n=1+Math.random()*3888|0;
      Test.assertEquals(solution(n), Roman.toRoman(n));
    }
  });
});

*/

function solution(number){
  const numerals = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ];
  const decimals = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var num = number;
  var result = "";
  
  for(let i = 0; i<decimals.length; i++) {
     if (num/decimals[i] > 0) {
          let occurences = Math.floor(num/decimals[i]);        
          result = result.concat((numerals[i]).repeat(occurences));
          num -= decimals[i] * occurences;
     }
  }
  return result; 
}
