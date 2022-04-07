"use strict";
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
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// 4 object & array
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//names.push(5) error
//names[0]= 'toad'; error
let numbers = [2, 3, 4, 5];
numbers.push(2);
//numbers.push("hi") //error
//numbers[0] = "oi" //error
let mixed = ["ken", 4, "bal", 3];
mixed.push(2);
mixed.push("hello");
//----------------------------------------object 
let ninja = {
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
let characters;
let ages;
let isLoggedIn;
character = "bal";
age = 30;
isLoggedIn = true;
//arrays
let ninjas;
//ninjas.push('oi') //error
ninjas = ['noman', 'salahuddin'];
let ninjass = [];
ninjas.push('oi');
//------union type
let mixedArray = [];
mixedArray.push('hello');
mixedArray.push(20);
mixedArray.push(true);
console.log(mixedArray);
let uid;
uid = 12;
uid = "oi";
///--------object
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
//ninjaTwo = { name: 'mario', age: 20, beltColor: 'black', skills: "bal"} error
//================= 6 Dynamic (any) type
let bage = 20;
bage = true;
console.log(bage);
bage = "hello";
console.log(bage);
bage = { name: "luigi" };
console.log(bage);
let mixedAny = [];
mixedAny.push(5);
mixedAny.push("oi");
mixedAny.push(false);
console.log(mixedAny);
let ninjaAny;
ninjaAny = { name: 'yoshi', age: 25 };
console.log(ninjaAny);
ninjaAny = { name: 25, age: "oi" };
console.log(ninjaAny);
//====8 function basics
let greets = () => {
    console.log('oi');
};
let greet;
greet = () => {
    console.log("hello, again");
};
const add = (a, b) => {
    console.log(a + b);
};
add(5, 4);
const added = (a, b, c) => {
    console.log(a + b);
};
added(5, 4);
const addes = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
addes(5, 4);
addes(5, 4, 3);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
const greeting = (user) => {
    console.log(`${user.name} says hello`);
};
const greetingAgain = (user) => {
    console.log(`${user.name} says hello`);
};
//=============10 Function signatures
//example 1
let greetings;
greetings = (name, gree) => {
    console.log(`${name} says ${gree}`);
};
//example 2
let calculatior;
calculatior = (numOne, numTow, action) => {
    if (action == 'add') {
        return numOne + numTow;
    }
    else {
        return numOne - numTow;
    }
};
//example 3
let logDetailsTow;
logDetailsTow = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age}`);
};
