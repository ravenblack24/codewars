/**
Description
 	Your task is to write a kata that will work out if you are safe to drive! You will be given some alcoholic drinks, a time when you stopped drinking and the time you would like to drive.
You will need to return the total units (to 2 decimal places) of the alcoholic drinks and a boolean value true if you are able to drive or false if you are still unable to drive.

Task
 	Create a method called drive that takes an array of drinks in the format [[strength, volume]] a time when you finished drinking and a time when you would like to drive.
eg. drive([[10.0,100]], "20:00", "21:00") and it must return [1.0, false]

Rules
 	1. On average it takes a person 1 hour for their body to remove 1 unit of alcohol.
2. Units of alcohol are calculated by strength (ABV) x volume (ml) / 1000 = units. More information can be found here
3. Data passed will be in the format ([[strength,volume]], finished, drive_time). Where finished is the time you stopped drinking and drive_time is the time you would like to drive.
4. If the finished >= drive_time then you can assume that it is the next day.
5. Times are passed as strings and are in 24 hour format.
6. Return total units to 2 decimal places rounded. For example 1.10 => 1.1 and 1.236 => 1.24
7. Return true if you are able to drive and false if you are not.

Example
alcohol = [[5.2,568],[5.2,568],[5.2,568],[12.0,175],[12.0,175],[12.0,175]];
drive(alcohol, "23:00", "08:15");
should return
[15.16, false]

Test cases
-------------
function drive_tester(drinks2, finished2, drive_time2) {
  total_units2 = 0;
  for(var gg=0; gg < drinks2.length;gg++){
    total_units2 += drinks2[gg][0].toPrecision() * drinks2[gg][1] / 1000;
  }
  fda2 = finished2.split(":");
  finished2 = new Date(1990,00,01,fda2[0],fda2[1]);
  dtt2 = drive_time2.split(":");
  drive_time2 = new Date(1990,00,01,dtt2[0],dtt2[1]);
  if (finished2 > drive_time2){drive_time2.setDate(drive_time2.getDate() + 1);}
  var time_when_can_drive2 = new Date(finished2.getTime() + (total_units2*60*60*1000));
  return [Number(total_units2.toFixed(2)),time_when_can_drive2 < drive_time2];
}

for (testsi = 1; testsi <= 250; testsi++) {
  var drinks_li = [];
  for (dr = 1; dr <= Math.floor(Math.random() * 10)+1; dr++) {
    drinks_li.push([parseFloat((Math.random() * 20).toFixed(2)), Math.floor(Math.random() * 500)+75]);
  }
  ft = String(Math.floor(Math.random() * 12)+10) + ":" + String(Math.floor(Math.random() * 49)+10);
  dt = String(Math.floor(Math.random() * 12)+10) + ":" + String(Math.floor(Math.random() * 49)+10);
  solution = drive_tester(drinks_li, ft, dt);
  Test.assertDeepEquals(drive(drinks_li, ft, dt), solution, "Expected '"+solution+"'");
}
*/

function drive(drinks, finished, drive_time) {
    const units = Number.parseFloat(drinks.reduce((sum, drink) => {
        return sum+= (drink[0] * drink[1]) / 1000;
    }, 0).toFixed(2));   
    const finishMins = convertToMins(finished.split(":"));
    const driveMins = convertToMins(drive_time.split(":")); 
    const timeToSober = (driveMins >= finishMins) ? (driveMins - finishMins)/60 : ((1440-finishMins) + driveMins)/60;
    
    return [units, timeToSober > units];   
}
    
function convertToMins(timeArray) {
    return (timeArray[0]*60) + Number.parseInt(timeArray[1]);
}
