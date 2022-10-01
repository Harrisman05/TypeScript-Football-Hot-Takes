// arrays

/* All elements in array must be of the same type as well, error
pops up if you try to push another value of a different datatype. */

let names = ['harley', 'jason', 'yoshi'];

names.push("Mary");
// names.push(2); -- error here

let numbers = [1,4,55,66,2];

numbers.push(11);
// numbers.push("harley"); -- error here

// mixed types in array - these can be declared to 

let mixed = ["harley", 33, "jason", 84];

mixed.push("yoshi");
mixed.push(64);

// objects

// the values in these 3 properties cannot be changed, as the type has been set by TypeScript 

let harley = {
    firstName: "Harley",
    age: 25,
    isLearning: true
}

harley.age = 55; // legal change
// harley.isLearning = 44; -- illegal change, isLearning property must be boolean datatype

// harley variable re-declared -- it must be an object with the same property names as before, containing values of the same type

harley = {
    firstName: "harley",
    age: 38,
    isLearning: false
}

