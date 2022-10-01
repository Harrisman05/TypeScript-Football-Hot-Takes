"use strict";
let greet = () => {
    console.log('hello');
};
// greet = "harley" TypeScript infers greet is a function type, so greet cannot change type
let salute;
salute = () => {
    console.log("I am a variable of type Function");
};
// Parameters as types
const add = (a, b) => {
    console.log(a + b);
};
add(5, 10);
// Optional parameters
const addOp;
