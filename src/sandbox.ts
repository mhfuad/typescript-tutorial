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


//==============9 type aliases
type StringOrNumber = string | number;
type objectWithNumber = {name: string, uid: StringOrNumber}

const logDetails = (uid: StringOrNumber, item: string) => {
  console.log(`${item} has uid of ${uid}`)
}

const greeting = (user: objectWithNumber) => {
  console.log(`${user.name} says hello`);
}

const greetingAgain = (user: objectWithNumber) => {
  console.log(`${user.name} says hello`);
}


//=============10 Function signatures

//example 1
let greetings: (a: string, b: string) => void;
greetings = (name: string, gree: string) => {
  console.log(`${name} says ${gree}`)
}

//example 2
let calculatior : (a: number, b: number, c: string) => number;
calculatior = (numOne: number, numTow: number, action: string) => {
  if(action == 'add'){
    return numOne + numTow;
  }else{
    return numOne - numTow;
  }
}

//example 3
let logDetailsTow: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetailsTow = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age}`)
}


//=== DOM & type casting

// const anchor = document.querySelector('a');

// if(anchor){
//   console.log(anchor.href);
// }

const anchor = document.querySelector('a')!;

console.log(anchor.href);

const formTow = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    toform.value,
    details.value,
    amount.valueAsNumber
  )
})

//==12 classes

import { Invoice } from './classes/Invoice.js'


const invOne = new Invoice('mario', 'Work on mario website', 250);
const invTwo = new Invoice('luigi', 'Work on luigi website', 300);

//console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format)
})
