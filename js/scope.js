var name = 'Rachel';
var age = 30;
var count = 100;

function Man(name, age) {
  var count = 0;
  this.name = name;
  this.age = age;
  this.display = function () {
    count++;
    var func1 = function () {
      console.log('func1:', this.name);
    };
    func1();

    console.log('display:', this.name);
    return count;
  }
}

var man = new Man('Joe', 40);
var currentCount = man.display(); // func1: Rachel // display: Joe
console.log('currentCount1:', currentCount); // currentCount1: 1

Man('Alice', 50); 
currentCount = display(); // func1: Alice // display: Alice
console.log('currentCount2:', currentCount); // currentCount2: 1

currentCount = man.display(); // func1: Alice // display: Joe
console.log('currentCount3:', currentCount); // currentCount3: 2

currentCount = display(); //  func1: Alice // display: Alice
console.log('currentCount4:', currentCount); // currentCount4: 2