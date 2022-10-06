"use strict";
// Function Signature
// Specifies the general structure of function, what arguments it takes in and what it return
let salutation;
// function signature 1
let salutationSignature;
// this variable can hold a function which has 2 parameters and has no return statement (so it returns as type void)
salutationSignature = (name, message) => {
    console.log(`${name} says ${greeting}`);
};
// salutationSignature must follow same structure as signature
// Function signature 2
let calc;
calc = (a, b, name) => {
    const sum = a + b;
    console.log(`${name} has calculated that a + b = ${sum}`);
    return sum;
};
// Function signatures 3
let loginDetails;
loginDetails = (personObj) => {
    console.log(`${personObj.name} has the age of ${personObj.age}`);
};
