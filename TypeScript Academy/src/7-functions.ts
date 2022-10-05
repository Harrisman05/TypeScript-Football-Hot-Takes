let greet = () => {
    console.log('hello');
}

// greet = "harley" TypeScript infers greet is a function type, so greet cannot change type

let salute: Function;

salute = () => {
    console.log("I am a variable of type Function");    
}

// Parameters as types

// after paramenter name, just add type after colon

const add = (a: number, b: number) => {
    console.log(a + b);
}

add(5,10);

// Optional parameters

// add ? to c parameter to make it optional
// c isn't given a default value, so it's assigned the value of undefined

const addOptional = (a: number, b:number, c?: number |string) => {
    console.log(a + b);
    console.log(c); // outputs undefined
}

addOptional(5,10);

// Default parameters

const addDefault = (a:number, b:number, c: number = 10) => {
    console.log(a + b + c);
}

// if c parameter isn't provided, it's assigned to 10

addDefault(5,10);

// return types

// types of return values from functions are inferred by TypeScript. Typescript can automatically infer this type and it doesn't need to be explicitly written

const minus = (a:number, b:number) => {
    return a - b;
}

const result = minus(90,50); // hover mouse over result variable name, it's type is inferred

// Void type

// If a function has no return statement, it's type is void

const voidFunction = (name:string) => {
    console.log(`Hello my name is ${name}`);
}

const voidType = voidFunction("harley"); // hover mouse over voidType name to see type of function



