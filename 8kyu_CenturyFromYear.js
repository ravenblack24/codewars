/**
Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)

------------
Test cases

Test.describe('Basic Tests', function(){
  Test.it('Sample Tests', function(){
    Test.assertEquals(century(1705), 18, 'Testing for year 1705');
    Test.assertEquals(century(1900), 19, 'Testing for year 1900');
    Test.assertEquals(century(1601), 17, 'Testing for year 1601');
    Test.assertEquals(century(2000), 20, 'Testing for year 2000');
    Test.assertEquals(century(89), 1, 'Testing for year 89');
  });

  Test.it('Random Tests', function(){
  
    function gC(y){
      return Math.ceil(y / 100);
    }
  
    for (let i = 0; i < 200; i++){
      let year = Math.ceil(Math.random() * 999999);
      Test.assertEquals(century(year), gC(year), 'Testing for year ' + year);
    }
  });
});

*/

function century(year) {

  var century = Math.floor(year/100);
  var remainder = year % 100;
  
  return (remainder > 0) ? century + 1 : century;
}
