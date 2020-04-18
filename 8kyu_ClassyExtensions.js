/**
Classy Extensions
Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.
Task
Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g.
'Mr Whiskers meows.'
The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

Test cases:

Test.describe('Fixed Tests', _ => {
  var cat = new Cat('Mr Whiskers');
  Test.assertEquals(cat.speak(),'Mr Whiskers meows.')
  cat = new Cat('Lamp');
  Test.assertEquals(cat.speak(),'Lamp meows.')
  cat = new Cat('$$Money Bags$$');
  Test.assertEquals(cat.speak(),'$$Money Bags$$ meows.')
});

var names = ['Mr Whiskers', 'Lamp', '$$Money Bags$$', 'meowmeow',
'mirou','milo','spots','dog','llama','code','wars',
'stripes','dug','barf'];
Test.describe('Random Tests', _ => {
  for(var i=0;i<50;i++){
    var name = names[Math.floor(Math.random()*names.length)];
    cat = new Cat(name);
    Test.assertEquals(cat.speak(),`${name} meows.`);
  }
});

Test.describe('Animal Test', _ => {
  var animal = new Animal('noise');
  Test.assertEquals(animal.speak(), 'noise makes a noise.');
});
*/

class Cat extends Animal {
  speak() {
     return this.name + " meows.";
  };
}
