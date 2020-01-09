/**
Description:
Your job is to figure out the index of which vowel is missing from a given string.

A has an index of 0,

E has an index of 1,

I has an index of 2,

O has an index of 3,

U has an index of 4.

Example: "John Doe hs 7 red pples under his bsket" => 0;

Example: "Bb Smith sent us six neatly arranged range bicycles" => 3;

There is no need for string validation and every sentence given will contain all vowles but one. (Also, you won't need to worry about capitals)

----------------
Test case

Test.assertEquals(absentVowel("John Doe hs seven red pples under his bsket"), 0);
Test.assertEquals(absentVowel("Bb Smith sent us three neatly arranged range bicycles"), 3);
Test.assertEquals(absentVowel("Crn is a crp which can be used t make crn syrup"), 3);
Test.assertEquals(absentVowel("Vowls appar in vry word in th nglish languag"), 1);
Test.assertEquals(absentVowel("Rain falls arond s and flows nderneath the bridge we are standing on"), 4);
Test.assertEquals(absentVowel("Leap year only comes once every four years"), 2);

*/

function absentVowel(x){

var mapping = {
  "a" : 0,
  "e" : 1,
  "i" : 2,
  "o" : 3,
  "u" : 4
}

var vowelList = Object.keys(mapping);

for(var i = 0; i<vowelList.length; i++)
{
  if(x.search(vowelList[i]) === -1) {
    return mapping[vowelList[i]];
  }
}

}
