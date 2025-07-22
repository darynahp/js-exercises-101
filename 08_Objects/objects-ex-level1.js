// 1. Create an empty object called dog

let dog = {};

// 1. Print the the dog object on the console

// console.log(dog);

// 1. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return _woof woof_

dog.name = 'Adel'
dog.legs = 4
dog.color = 'blackred'
dog.age = 13
dog.bark = function() {
  return 'woof woof';
}

// console.log(dog);

// 1. Get name, legs, color, age and bark value from the dog object

// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.color);
// console.log(dog.age);
// console.log(dog.bark());

// 1. Set new properties the dog object: breed, getDogInfo

dog.breed = 'dachshund'
dog.getDogInfo = function() {
   return `${this.name}, ${this.legs} legs, ${this.color}, ${this.age} years old, says ${this.bark()}, breed: ${this.breed}`;
}
console.log(dog.getDogInfo());