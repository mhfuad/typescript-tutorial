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




//=== 5 Explicit type


let characters: string;
let ages: number;
let isLoggedIn: boolean;

character = "bal";
age = 30;
isLoggedIn = true;

//arrays
let ninjas: string[];
//ninjas.push('oi') //error
ninjas = ['noman', 'salahuddin'];


let ninjass: string[] = [];
ninjas.push('oi')


//------union type
let mixedArray: (string|number|boolean)[] = [];
mixedArray.push('hello');
mixedArray.push(20);
mixedArray.push(true);
console.log(mixedArray);

let uid: string|number;
uid = 12;
uid = "oi"

///--------object
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30};

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
}

ninjaTwo = { name: 'mario', age: 20, beltColor: 'black'}
//ninjaTwo = { name: 'mario', age: 20, beltColor: 'black', skills: "bal"} error