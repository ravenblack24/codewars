/**

Given time in 24-hour format, convert it to words.

For example:
13:00 = one o'clock 
13:09 = nine minutes past one 
13:15 = quarter past one 
13:29 = twenty nine minutes past one
13:30 = half past one 
13:31 = twenty nine minutes to two
13:45 = quarter to two 
00:48 = twelve minutes to one
00:08 = eight minutes past midnight
12:00 = twelve o'clock
00:00 = midnight

Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'. 

Test cases:

const _ = require('lodash')

describe("Basic tests", function(){
Test.assertEquals(solve("13:00"),"one o'clock");
Test.assertEquals(solve("13:09"),"nine minutes past one");
Test.assertEquals(solve("13:15"),"quarter past one");
Test.assertEquals(solve("13:29"),"twenty nine minutes past one");
Test.assertEquals(solve("13:30"),"half past one");
Test.assertEquals(solve("13:31"),"twenty nine minutes to two");
Test.assertEquals(solve("13:45"),"quarter to two");
Test.assertEquals(solve("13:59"),"one minute to two");
Test.assertEquals(solve("00:48"),"twelve minutes to one");
Test.assertEquals(solve("00:08"),"eight minutes past midnight");
Test.assertEquals(solve("12:00"),"twelve o'clock");
Test.assertEquals(solve("00:00"),"midnight");
Test.assertEquals(solve("19:01"),"one minute past seven");
Test.assertEquals(solve("07:01"),"one minute past seven");
Test.assertEquals(solve("01:59"),"one minute to two");
Test.assertEquals(solve("12:01"),"one minute past twelve");
Test.assertEquals(solve("00:01"),"one minute past midnight");
Test.assertEquals(solve("11:31"),"twenty nine minutes to twelve");
Test.assertEquals(solve("23:31"),"twenty nine minutes to midnight");
Test.assertEquals(solve("00:01"),"one minute past midnight");
Test.assertEquals(solve("11:45"),"quarter to twelve");
Test.assertEquals(solve("11:59"),"one minute to twelve");
Test.assertEquals(solve("23:45"),"quarter to midnight");
Test.assertEquals(solve("23:59"),"one minute to midnight");
Test.assertEquals(solve("01:45"),"quarter to two");
Test.assertEquals(solve("00:01"),"one minute past midnight");
});

describe("Random tests", function(){
var a = ['11','23','00'], b = ['00',_.random(30,59).toString(),'15','45','59'];
for (var i = 0; i < 40; i++) {    
    var h = _.random(0,23), m = _.random(0,59), t = ''
    if (h == 0) t+='00'
    else if (h < 10) t += '0'+ h.toString()
    else t += h.toString()
    t+=':'
    if (m == 0) t+='00'
    else if (m < 10) t += '0'+ m.toString()
    else t += m.toString()      
    var exp = ui89(t)
    Test.assertEquals(solve(t), exp);   
    for (var j = 0; j < 2; ++j){
      t = a[_.random(0,a.length-1)] + ':' + b[_.random(0,b.length-1)];
      var exp = ui89(t)
      Test.assertEquals(solve(t), exp); 
    }       
  }
});

function ui89(time) {
    var words = ["midnight","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen",
        "fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty one","twenty two","twenty three",
        "twenty four","twenty five","twenty six","twenty seven","twenty eight","twenty nine"];
    var [h,m] = time.split(":").map(e=>parseInt(e)), k = h;
    h = h > 12 ? h % 12 : h;
    if (m==0)  return words[h] + (h == 0 ? '' : " o'clock");
    else if (m<15)  return (words[m] + (m == 1 ? " minute past " : " minutes past ") + words[h]);
    else if (m==15) return "quarter past " + words[h];
    else if (m<30) return words[m] + " minutes past " + words[h];
    else if (m==30) return ("half past " + words[h]);
    else if (m==45) return ("quarter to " + (k == 11 ? words[h+1] : words[(h+1)%12]));
    else if (m==59) return ("one minute to " + (k == 11 ? words[h+1] : words[(h+1)%12]));
    else return (words[60-m] + " minutes to " + (k == 11 ? words[h+1] : words[(h+1)%12]));
}
*/

function solve(time) {  
    const hour = Number(time.slice(0,2));
    const minutes = Number(time.slice(3));
    
    // retain hours less than or equal to 12 in existing format, plus times after 23:30 (to manage midnight scenarios)
    if (hour <= 12 || (hour == 23 && minutes >30)) {
      return returnMinutes(minutes, hour);
    }
    
    // convert hour to 12-hour format to use convertToWord function
    let twelveHour = Number(hour - 12);
    return returnMinutes(minutes, twelveHour);
}

function returnMinutes(minutes, hour) {
// manage all special cases: midnight, o'clock, quarter past/to, minute past/to
  const nextHour = Number(hour+1);
  switch(minutes) {
    case 00:
      return (hour == 00) ? "midnight" : convertToWord(hour) + " o'clock";
    case 01:
      return (hour == 00) ? "one minute past midnight" : "one minute past " + convertToWord(hour);
    case 15:
      return (hour == 00) ? "quarter past midnight" : "quarter past " + convertToWord(hour);
    case 30:
      return (hour == 00) ? "half past midnight" : "half past " + convertToWord(hour);
    case 45:
      return (hour ==23) ? "quarter to midnight" : "quarter to " + convertToWord(nextHour);
    case 59:
      return (hour == 23) ? "one minute to midnight" : "one minute to " + convertToWord(nextHour);    
    default:
      return minutesPastOrTo(minutes, hour);  
  }
}

function minutesPastOrTo(minutes, hour) {
// manage all other 'mins past hour' or 'mins to hour' scenarios
  if (minutes > 01 && minutes <30)
  {
    let myString = convertToWord(minutes) + " minutes past ";
    return (hour == 00) ? myString + "midnight" : myString + convertToWord(hour);
  }
  else {
    let myString = convertToWord(60-minutes) + " minutes to ";
    let nxtHr = (hour == 12) ? 01 : Number(hour+1);
    return (hour == 23) ? myString + "midnight" : myString + convertToWord(nxtHr);
  }
}

function convertToWord(time) {
// get word equivalent of numbers
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
                "nine", "ten", "eleven","twelve","thirteen","fourteen", "fifteen", "sixteen",
                "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two",
                "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven",
                "twenty eight", "twenty nine"];

  return numbers[time];
}
