// Tuples
// The types of data inside a tuple once its been initialised are fixed
// arrays normally let you change these elements and their type
var normalArr = ["harley", 33, false];
normalArr[0] = true;
normalArr[1] = 0.4;
var tup = ["hello", 33, true];
// tup must be initialised with elements of the correct type
// tup[0] = 44 // illegal
tup[0] = "jason";
// Passing values from a tuple into a function using spread operator
// 
var CarInvoice = /** @class */ (function () {
    function CarInvoice(tyre, oil, window) {
        this.tyre_repair = tyre;
        this.oil_change = oil;
        this.window_replacement = window;
    }
    return CarInvoice;
}());
var toddCarRepairs = new CarInvoice(50, 10, 100);
var repairsTuple = [0, 0, 0]; // types need to be declared here, otherwise the spread operator won't work
repairsTuple[0] = toddCarRepairs.tyre_repair;
repairsTuple[1] = toddCarRepairs.oil_change;
repairsTuple[2] = toddCarRepairs.window_replacement;
function calcCarPayments(x, y, z) {
    return x + y + z;
}
var repairCosts = calcCarPayments.apply(void 0, repairsTuple);
console.log(repairCosts);
