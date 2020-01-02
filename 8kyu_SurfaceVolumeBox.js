/**
Write a function that returns the total surface area and volume of a box as an array: [area, volume]

----------
Test cases

Test.describe("Basic tests",_=>{
Test.assertSimilar(getSize(4, 2, 6), [88, 48]);
Test.assertSimilar(getSize(1, 1, 1), [6, 1]);
Test.assertSimilar(getSize(1, 2, 1), [10,2]);
Test.assertSimilar(getSize(1, 2, 2), [16, 4]);
Test.assertSimilar(getSize(10, 10, 10), [600, 1000]);
Test.assertEquals(getSize(4, 2, 6)[0], 88);
Test.assertEquals(getSize(4, 2, 6)[1], 48);
})


Test.describe("Basic tests",_=>{
//function to generate a random int between a and b, included
function randInt(a,b) {
  return Math.floor(Math.random()*(b-a+1)+a)
}
//your testing, working function here with another name like getSol
function getSol(w, h, d) {
	var area = 2 *(w * h) + 2 * (h * d) + 2 * (w * d);
	var volume = w * h * d;
	var sizes = [area, volume];
	return sizes;
}
for (var i=0;i<40;i++){
  var w=randInt(1,100),h=randInt(1,100),d=randInt(1,100);
  //above I generated 3 valid inputs: try to thing how to
  //spice up things a bit and generate a given number of wrong
  //input tests ;)
  Test.it(`Testing for ${w}, ${h} and ${d}`,_=>{
  Test.assertSimilar(getSize(w, h, d),getSol(w, h, d),"It should work for random inputs too")
  })
}
})

*/

function getSize(width, height, depth) {
  
  const surfaceArea = 
    2*(height * width) +
    2*(height * depth) + 
    2*(width * depth);
    
  const volume = width*height*depth;
  
  return [surfaceArea, volume];
}
