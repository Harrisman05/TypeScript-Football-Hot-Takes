// TypeScript can interact with the DOM, for the most part it is the same
var anchor = document.querySelector('a');
// TypeScript doesn't have access to HTML properties cannot log the code below
// console.log(anchor.href);
// Solutions to this
// Doing a check at runtime
if (anchor) {
    console.log(anchor);
}
// Adding ! to the end of the querySelector to inform TypeScript there will definitely be an anchor element to query
var anchor2 = document.querySelector('a');
anchor2.href;
// anchor2 has intelisense and prompts the properties of anchor2
// Targetting form
var form = document.querySelector('form');
// Intelisense informs that a HTLMFormElement is being targetted
var formClassName = document.querySelector('new-item-form');
// Intelisense can't tell what type of element this is as it's a class name
// type casting can be used to cast a specific type to a class name
var formClassNameCasted = document.querySelector('new-item-form');
// Intelisense now works
// inputs 
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
/* adding event listener to console log all the values in the field when the form is submitted
    - e: Event, e parameter is of type Event, built into TypeScript
    - e.preventDefault stops the form from submitting
    - all fields value are logged out using value property

*/
formClassNameCasted.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value);
    console.log(toFrom.value);
    console.log(details.value);
    console.log(amount.valueAsNumber);
});
