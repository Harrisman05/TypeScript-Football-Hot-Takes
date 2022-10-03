// Generics

// Used to create resuable blocks of code which can be used with different types

// Creating Phone class

class Phone {
    brand: string
    model: number
    hasTouchscreen: boolean
    cost: number

    constructor(brand: string, model: number, hasTouchScreen: boolean, cost: number) {
        this.brand = brand;
        this.model = model;
        this.hasTouchscreen = hasTouchScreen;
        this.cost = cost;
    }
}

const harleyPhone = new Phone("apple",13,true,1200); // instantiating instance of phone class

// Creating function to add a random ID to an object

const addUid = (obj: object): object => {
    const random_id = Math.floor(Math.random() * 100);
    return {...obj, random_id}
}

let idOne = addUid(harleyPhone); // adding ID to phone instance

console.log(idOne);

// Problem is that in the function, any object can be passed in, so the properties aren't known. So when the new object is returned, TypeScript doesn't know what properties were on the original, passed in object

console.log(idOne.brand); // -- error Property 'brand' does not exist on type 'object'

// So a generic type must be used, typically <T>. This will capture what properties are on the passed in object

const addUidGeneric = <T>(obj: T) => {
    const random_id = Math.floor(Math.random() * 100);
    return {...obj, random_id}
}

let jasonPhone = new Phone("samsung",44212,true,800);

console.log(jasonPhone.brand); // property can now be accessed

// Another problem, now that the type is generic, any type can be passed into it. This doesn't make sense in terms of the purpose of this function
// For example, addingUidGeneric() ran with a string

let idThree = addUidGeneric('hello'); 

// use extends keyword to prevent this

const addUidGenericExtends = <T extends object>(obj: T) => {
    const random_id = Math.floor(Math.random() * 100);
    return {...obj, random_id}
}

const idFour = addUidGenericExtends("hello"); // error - as object type is enforced in function 

const mikePhone = new Phone("Nokia", 3332, false, 100);

const idFive = addUidGenericExtends(mikePhone);

// Other usecase for generic

// When an object is created using the resource interface, we want the data property to be any data type, so T is used to allow for this flexibility

interface Resource<T> {
    resourceName: string;
    uid: number;
    data: T;
}

// data1 variable created using Resource interface, data property allowed to be a string as string is passed as the generic. Array with numbers also shown below

const data1: Resource<string> = { 
    uid: 1,
    resourceName: "Noel",
    data: 'hello I am data' 
}

const data2: Resource<number[]> = { 
    uid: 2,
    resourceName: "harley",
    data: [1123,55,312]
}

