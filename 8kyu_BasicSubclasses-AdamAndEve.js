/**
According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

Test cases:

Test.describe("GodTest", function() {
    Test.it("Adam should be a Man", function() {
      let humans = God.create()
      Test.assertEquals(humans[0] instanceof Man, true, 'Expected Adam to be a Man');
    });   
    Test.it("Eva should be a Woman", function() {
      let humans = God.create()
      Test.assertEquals(humans[1] instanceof Woman, true, 'Expected Eva to be a Woman');
    });    
    Test.it("Adam should be a Human", function() {
      let humans = God.create()
      Test.assertEquals(humans[0] instanceof Human, true, 'Expected Adam to be a Human');
    });   
    Test.it("Eva should be a Human", function() {
      let humans = God.create()
      Test.assertEquals(humans[1] instanceof Human, true, 'Expected Eva to be a Human');
    });    
    Test.it("Array should only contain two items", function() {
      let humans = God.create()
      Test.assertEquals(humans.length, 2, 'Expected there to only be two humans in array');
    });  
});

*/

class God{
/**
 * @returns Human[]
 */
  static create(){
      let man = new Man();
      let woman = new Woman();
      return [man, woman];
  }
}

class Human {}
class Man extends Human {}
class Woman extends Human {}

Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;

Woman.prototype = Object.create(Human.prototype);
Woman.prototype.constructor = Woman;
