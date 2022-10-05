// Specifying types in parameters of functions can be long-winded and very wordy. Type aliases are used to reduce this wordiness and asign a name to types

const logDetails = (uid: string|number, item: string|number) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greeting = (user: {name: string, uid: string|number}) => {
    console.log(`${user.name} says hello`);

}

// string|number union type is quite complicated and wordy. Type aliases can be made to make these union types reusable

type stringOrNum = string|number;
type objWithName = {name: string, uid: stringOrNum} 

const logDetailsAlias = (uid: stringOrNum, item: stringOrNum) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetingAlias = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}