// Passing values with types into functions

// JavaScript - passing in values to the function - without defining type

const circ = (diameter) => {
    return diameter * Math.PI;
}

console.log(circ('hello'));

// TypeScript - in this function, we can pass in any data type into the circ function, and no error is shown. NAN pops up in the console as 

// Declaring type value must be in parameter

const circStrict = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circStrict(5));

// This check is done before complilation, so errors can be found more quickly
