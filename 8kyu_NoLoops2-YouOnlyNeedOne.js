/**
* No Loops Allowed *

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

Test cases
-------------------

Test.describe("Basic tests",_=>{
Test.assertEquals(check([66, 101], 66), true);
Test.assertEquals(check([78, 117, 110, 99, 104, 117, 107, 115], 8), false);
Test.assertEquals(check([101, 45, 75, 105, 99, 107], 107), true);
Test.assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
Test.assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
Test.assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);
Test.assertEquals(check([66, ,'codewars', 11, 'alex loves pushups'], 'alex loves pushups'), true);
Test.assertEquals(check(['come', 'on', 110, '2500', 10, '!', 7, 15], 'Come'), false);
Test.assertEquals(check(['when\'s', 'the', 'next', 'Katathon?', 9, 7], 'Katathon?'), true);
Test.assertEquals(check([8, 7, 5, 'bored', 'of', 'writing', 'tests', 115], 45), false);
Test.assertEquals(check(['anyone', 'want', 'to', 'hire', 'me?'], 'me?'), true);
})

Test.describe("For loop test",_=>{
Test.assertEquals(check.toString().indexOf('for'),-1, 'You used "for"!! Shame on you!!')
})

Test.describe("While loop test",_=>{
Test.assertEquals(check.toString().indexOf('while'),-1, 'You used "while"!! Start again!!')
})

Test.describe("Random tests",_=>{
  const randint=(a,b)=>~~(Math.random()*(b-a+1))+a;
  var nums=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (var i=0;i<40;i++){
    var limit=(nums[randint(0,nums.length-1)]);
    var a=[],len=randint(1,20);
    var x = Number(nums[randint(0,nums.length-1)]);
    var contains = false;
    for (var k=0;k<len;k++) {
      var num = nums[randint(0,nums.length-1)];
      contains = contains ? contains : num === x;
      a.push(num);
    }
    
    Test.it(`Testing for ${a, x}`,_=>{
      Test.assertEquals(check(a, x), contains,"It should work for random inputs too");
    })
  }
})

*/

function check(a,x){
return a.includes(x);
};
