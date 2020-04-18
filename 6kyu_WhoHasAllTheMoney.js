/**
You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money

Test cases:

describe("Who has the most money?", () => {
  it("Basic Tests", () => {
    const andy = new Student("Andy", 0, 0, 2);
    const stephen = new Student("Stephen", 0, 4, 0);
    const eric = new Student("Eric", 8, 1, 0);
    const david = new Student("David", 2, 0, 1);
    const phil = new Student("Phil", 0, 2, 1);
    const cam = new Student("Cameron", 2, 2, 0);
    const geoff = new Student("Geoff", 0, 3, 0);
    
    // "What happens if one student has the most money?"
    assert.strictEqual(mostMoney([andy, stephen, eric, david, phil]), "Eric");
    assert.strictEqual(mostMoney([cam, geoff, andy, stephen, eric, david, phil]), "Eric");
    
    // "What happens if there is only one student?"
    assert.strictEqual(mostMoney([andy]), "Andy");
    assert.strictEqual(mostMoney([stephen]), "Stephen");
    
    // "What happens if all students have the same amount of money?"
    assert.strictEqual(mostMoney([cam, geoff]), "all");
    assert.strictEqual(mostMoney([david, cam, geoff]), "all");
  });
  it("Random Tests", () => {
    const NAMES = "Mary Patricia Jennifer Linda Elizabeth Barbara Susan Jessica Sarah Karen Nancy Margaret Lisa Betty Dorothy Sandra Ashley Kimberly Donna Emily Michelle Carol Amanda Melissa Deborah James John Robert Michael William David Richard Joseph Thomas Charles Christopher Daniel Matthew Anthony Donald Mark Paul Steven Andrew Kenneth Joshua George Kevin Brian Edward".split(" ");
    const rand = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
    const rn = () => NAMES[Math.floor(Math.random() * NAMES.length)];
    for (let i = 0; i < 50; i++) {
      if (Math.random() < .3) {
        const [a, b, c] = [0, 0, 0].map(() => rand(0, 10));
        const students = Array.from({ length: rand(2, 5) }, () => new Student(rn(), a, b, c));
        assert.strictEqual(mostMoney(students), "all");
      } else {
        const students = Array.from({ length: rand(1, 10) }, () => new Student(rn(), rand(0, 10), rand(0, 10), rand(0, 10)));
        const totals = students.map(({ fives, tens, twenties }) => 5 * fives + 10 * tens + 20 * twenties);
        const most = Math.max(...totals);
        const i = totals.indexOf(most);
        let s = students[i];
        if (totals.filter(x => x == most).length > 1) {
          s = new Student(s.name, s.fives + rand(1, 3), s.tens + rand(1, 3), s.twenties);
          students[i] = s;
        }
        const exp = s.name;
        assert.strictEqual(mostMoney(students), exp);
      }
    }
  });
});
*/

function mostMoney(students) {
  let bank = [];
  
  students.forEach((student) => {
    let fives = student.fives * 5;
    let tens = student.tens * 10;
    let twenties = student.twenties * 20;
    let total = fives+tens+twenties;
    bank.push([student.name, total]);   
  })
  
  let savingArray = bank.map((element) => element[1]);
  let startingValue = savingArray[0];
  
  if(savingArray.every((element) => element == startingValue) && savingArray.length > 1) {
    return "all";
  }
  return bank[savingArray.indexOf(Math.max(...savingArray))][0];
}
