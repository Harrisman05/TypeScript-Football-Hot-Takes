// Function Signature

// Specifies the general structure of function, what arguments it takes in and what it return

let salutation: Function;

// function signature 1

let salutationSignature: (param1: string, param2: string) => void

// this variable can hold a function which has 2 parameters and has no return statement (so it returns as type void)

salutationSignature = (name: string, message: string) => {
    console.log(`${name} says ${greeting}`);
}

// salutationSignature must follow same structure as signature

// Function signature 2

let calc: (param1: number, param2: number, param3: string) => number

calc = (a: number, b: number, name: string):number => {
    const sum = a + b;
    console.log(`${name} has calculated that a + b = ${sum}`);
    return sum;
}

// Function signatures 3

let loginDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number}

loginDetails = (personObj: person) => {
    console.log(`${personObj.name} has the age of ${personObj.age}`);
}