// classes - ES6 syntax

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }    

    // constructor function takes in parameters when an instance of the class is created, and assign the values to the properties of the class

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice("Harley", "Work on a website", 200);
const invTwo = new Invoice("Travis", "Transcription service", 500);

console.log(invOne);
console.log(invTwo);

// can create an array which only allows the addition of instances invoice object to the array

let invoices: Invoice[] = []; // initialise invoices array variable which only accept Invoice objects

invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

invoices.forEach((invoice) => {
    console.log(invoice.format());
    
})




