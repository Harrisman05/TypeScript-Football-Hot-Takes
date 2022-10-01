"use strict";
/* TypeScript infers variable type based on the value type in a variable. What if we want to declare an empty variable?
Explicit typing is used to do this. Initialising a variable and explicitly giving it a type */
// explicit types
let someString; // someString variable explicity given string type
let age;
let isLoggedIn;
// someString = 33; -- illegal
someString = "hello there"; // legal
// arrays
let arr = []; // empty array should be initialsed to allow array methods to be accessible
// initialse an empty array that only allows strings to be pushed to it
arr.push("harley", "gavin");
console.log(arr);
// union types - allows multi-typed variables
// Uses | syntax 
// Parenthesis needed for explicit types allowed in array
let mixed = [];
mixed.push("hello");
mixed.push(20);
// mixed.push(false); -- illegal
console.log(mixed);
// no parenthesis need for string of 
let identification;
identification = "1234252423";
identification = 1234252423;
// objects
// less specific, could be an array with any properties
let harleyObj;
harleyObj = { firstName: 'harley', age: 25 };
console.log(harleyObj);
// more specific explicit typing
let harleySpecificObj;
harleySpecificObj = {
    firstName: "harley",
    age: 25
};
console.log(harleySpecificObj);
