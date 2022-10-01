"use strict";
//  TypeScript needs to be compiled down into JavaScript so that the browser can understand it; the browser cannot understand TypeScript natively
// Use terminal command "tsc sandbox.ts" to compile code
// Use terminal command "tsc sandbox.ts -w" to auto-compile code everytime there a change made in the ts file
const myName = "Harley";
console.log(myName);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(element => {
    console.log(element);
});
////////////////////
/* The main difference between TypeScript and JavaScript is that TS uses strict typing. This means if a variable is declared as a certain type in TS, it cannot be changed later. This results in less errors down the road. JavaScript is dynamically typed, meaning that variable types can be changed */
// Strict typing in TypeScript
let someName = "jason";
let randomNumber = 90;
let hasMasteredSpanish = false;
// someName = 77 - not allowed as type is being changed from string to number
