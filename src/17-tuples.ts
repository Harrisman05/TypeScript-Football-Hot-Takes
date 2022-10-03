// Tuples

// The types of data inside a tuple once its been initialised are fixed

// arrays normally let you change these elements and their type

let normalArr = ["harley", 33, false];
normalArr[0] = true;
normalArr[1] = 0.4

let tup: [string, number, boolean] = ["hello", 33, true];

// tup must be initialised with elements of the correct type

// tup[0] = 44 // illegal
tup[0] = "jason";

// Passing values from a tuple into a function using spread operator

// 

class CarInvoice {
    tyre_repair: number
    oil_change: number
    window_replacement: number

    constructor(tyre: number, oil:number, window:number) {
        this.tyre_repair = tyre;
        this.oil_change = oil;
        this.window_replacement = window;
    }
}

const toddCarRepairs = new CarInvoice(50, 10, 100);

let repairsTuple: [number, number, number] = [0,0,0]; // types need to be declared here, otherwise the spread operator won't work

repairsTuple[0] = toddCarRepairs.tyre_repair;
repairsTuple[1] = toddCarRepairs.oil_change;
repairsTuple[2] = toddCarRepairs.window_replacement;

function calcCarPayments (x:number, y:number, z:number): number {
    return x + y + z;
}

const repairCosts = calcCarPayments(...repairsTuple);

console.log(repairCosts); // 160 total in console




