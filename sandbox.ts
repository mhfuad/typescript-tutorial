//let character = 'mario';
// console.log(character);

// const inputs = document.querySelectorAll('input');

// inputs.forEach(input => {
  //   console.log(input);
  // });
  

//type basice
let character = 'mario';
let age = 30;
let isBlackBelt = false;

character = 'luigi';
age = 40;
isBlackBelt = true;


const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(7.5));


// 4 object & array
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
//names.push(5) error
//names[0]= 'toad'; error


let numbers = [2,3,4,5]
numbers.push(2);
//numbers.push("hi") //error
//numbers[0] = "oi" //error


let mixed = ["ken", 4, "bal", 3]
mixed.push(2);
mixed.push("hello")


//----------------------------------------object 
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
}

ninja.age = 40;
ninja.name = "bal";
//ninja.age = "oi" //error
//ninja.skills = ["bal","fala"] //error

//ninja = "stirng" error

ninja = {
  name: 'yoshi',
  belt: "orange",
  age: 40
}

//error
// ninja = {
//   name: 'yoshi',
//   belt: "orange",
//   age: 40,
//   skills: ['oi', 1]
// }