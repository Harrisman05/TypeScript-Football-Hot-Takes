// Access modifiers can be used to modify whether properties in a class are accessible or not.

// Public, private and readonly keywords are used
// properties are public by default

// private properties cannot be accessed from * outside * the class, but are accessible inside

// readonly properties cannot be changed inside or outside the class

class OrderDetails {

    readonly client: string;
    private client_id: number;
    private client_password: string;
    details: string;
    amount: number;


    constructor(c: string, ci: number, cp: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} - ID:${this.client_id}, owes ${this.amount} for completing ${this.details} `
    }

}

const order1 = new OrderDetails("harley", 2333, "jellyblob342", "creation of website", 140);

order1.client = "travis"; // -- client property cannot be changed as it is read only

order1.client_id = 4068 // -- client_id cannot be changed from outside the class as it is private

/* Class creation shorthand

If using access modifiers, the class can immediatley be instiated from the constructor function */

class OrderDetailsShorthand {

    constructor(
        readonly client: string,
        private client_id: number,
        private client_password: string,
        public details: string,
        public amount: number
    ){}
    
}