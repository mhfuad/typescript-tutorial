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


//================= 6 Dynamic (any) type
let bage: any = 20;
bage = true;
console.log(bage)
bage = "hello";
console.log(bage)
bage = { name: "luigi"};
console.log(bage)


let mixedAny: any[] = [];
mixedAny.push(5)
mixedAny.push("oi")
mixedAny.push(false)
console.log(mixedAny);

let ninjaAny: { name: any, age: any};
ninjaAny = { name: 'yoshi', age: 25}
console.log(ninjaAny)

ninjaAny = {name:25, age:"oi"}
console.log(ninjaAny);



//====8 function basics

let greets = () => {
  console.log('oi')
}

let greet: Function;

greet = () => {
  console.log("hello, again")
}

const add = (a: number, b:number) => {
  console.log(a + b);
}

add( 5,4)

const added = (a: number, b:number, c?: number | string) => {
  console.log(a + b);
}

added( 5,4)

const addes = (a: number, b:number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c)
}

addes( 5,4)
addes(5,4,3)

const minus = (a: number, b: number) : number => {
  return a + b;
}

let result = minus(10, 7);
