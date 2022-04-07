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
