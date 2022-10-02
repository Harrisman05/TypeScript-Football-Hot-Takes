// TypeScript can interact with the DOM, for the most part it is the same

const anchor = document.querySelector('a');

// TypeScript doesn't have access to HTML properties cannot log the code below

// console.log(anchor.href);

// Solutions to this

    // Doing a check at runtime

if (anchor) {
    console.log(anchor);
}

    // Adding ! to the end of the querySelector to inform TypeScript there will definitely be an anchor element to query

let anchor2 = document.querySelector('a')!;
anchor2.href;
// anchor2 has intelisense and prompts the properties of anchor2

// Targetting form

let form = document.querySelector('form')!;
// Intelisense informs that a HTLMFormElement is being targetted

let formClassName = document.querySelector('new-item-form');
// Intelisense can't tell what type of element this is as it's a class name

// type casting can be used to cast a specific type to a class name

let formClassNameCasted = document.querySelector('new-item-form') as HTMLFormElement;

// Intelisense now works

// inputs 

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

/* adding event listener to console log all the values in the field when the form is submitted
    - e: Event, e parameter is of type Event, built into TypeScript
    - e.preventDefault stops the form from submitting
    - all fields value are logged out using value property

*/

form.addEventListener('submit', (e: Event) => {

    e.preventDefault();

    console.log(type.value);
    console.log(toFrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);

}
);

