"use strict";
// Specifying types in parameters of functions can be long-winded and very wordy. Type aliases are used to reduce this wordiness and asign a name to types
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeting = (user) => {
    console.log(`${user.name} says hello`);
};
const logDetailsAlias = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetingAlias = (user) => {
    console.log(`${user.name} says hello`);
};
