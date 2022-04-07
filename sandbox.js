//let character = 'mario';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//   console.log(input);
// });
//type basice
var character = 'mario';
var age = 30;
var isBlackBelt = false;
character = 'luigi';
age = 40;
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// 4 object & array
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//names.push(5) error
//names[0]= 'toad'; error
var numbers = [2, 3, 4, 5];
numbers.push(2);
//numbers.push("hi") //error
//numbers[0] = "oi" //error
var mixed = ["ken", 4, "bal", 3];
mixed.push(2);
mixed.push("hello");
//----------------------------------------object 
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = "bal";
//ninja.age = "oi" //error
//ninja.skills = ["bal","fala"] //error
//ninja = "stirng" error
ninja = {
    name: 'yoshi',
    belt: "orange",
    age: 40
};
//error
// ninja = {
//   name: 'yoshi',
//   belt: "orange",
//   age: 40,
//   skills: ['oi', 1]
// }
//=== 5 Explicit type
var characters;
var ages;
var isLoggedIn;
character = "bal";
age = 30;
isLoggedIn = true;
//arrays
var ninjas;
//ninjas.push('oi') //error
ninjas = ['noman', 'salahuddin'];
var ninjass = [];
ninjas.push('oi');
//------union type
var mixedArray = [];
mixedArray.push('hello');
mixedArray.push(20);
mixedArray.push(true);
console.log(mixedArray);
var uid;
uid = 12;
uid = "oi";
///--------object
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
//ninjaTwo = { name: 'mario', age: 20, beltColor: 'black', skills: "bal"} error
//================= 6 Dynamic (any) type
var bage = 20;
bage = true;
console.log(bage);
bage = "hello";
console.log(bage);
bage = { name: "luigi" };
console.log(bage);
var mixedAny = [];
mixedAny.push(5);
mixedAny.push("oi");
mixedAny.push(false);
console.log(mixedAny);
var ninjaAny;
ninjaAny = { name: 'yoshi', age: 25 };
console.log(ninjaAny);
ninjaAny = { name: 25, age: "oi" };
console.log(ninjaAny);
