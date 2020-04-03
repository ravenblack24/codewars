/**
In this Kata, you will be given a string and two indexes. Your task is to reverse the portion of that string between those two indices inclusive.

solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.
Input will be lowercase and uppercase letters only.

Tests
--------
Test Cases:
const R = require ('ramda')
const _ = require ('lodash')

describe("Basic tests", function(){
Test.assertEquals(solve("codewars",1,5),"cawedors");
Test.assertEquals(solve("codingIsFun",2,100),"conuFsIgnid");
Test.assertEquals(solve("FunctionalProgramming", 2,15),"FuargorPlanoitcnmming");
Test.assertEquals(solve("abcdefghijklmnopqrstuvwxyz",0,20),"utsrqponmlkjihgfedcbavwxyz");
Test.assertEquals(solve("abcdefghijklmnopqrstuvwxyz",5,20),"abcdeutsrqponmlkjihgfvwxyz");
});

describe("Random tests", function(){
var s = "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJIKLMNOPQRSTUVWXYZ"
for (var i = 0; i < 100; i++){
   var a = _.random(0,10);
   var b = _.random(20,100);
   var expe = y53(s,a,b);
   Test.assertEquals(solve(s,a,b), expe);
}
});


function y53(st,a,b){
    return a == 0 ? R.reverse(R.take(b+1,st)) + R.drop(b+1,st) : R.take(a,st) + R.reverse(R.drop(a,R.take(b+1,st))) + R.drop(b+1,st);
}
*/

function solve(st,a,b){

  let start = st.slice(0,a);
  let reverse = st.slice(a, b+1).split("").reverse().join('');
  let end = st.slice(b+1);
  
  return(start+reverse+end);
}
