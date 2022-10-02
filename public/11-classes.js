// classes - ES6 syntax
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // constructor function takes in parameters when an instance of the class is created, and assign the values to the properties of the class
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice("Harley", "Work on a website", 200);
var invTwo = new Invoice("Travis", "Transcription service", 500);
console.log(invOne);
console.log(invTwo);
