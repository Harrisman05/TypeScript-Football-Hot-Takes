// Generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Used to create resuable blocks of code which can be used with different types
// Creating Phone class
var Phone = /** @class */ (function () {
    function Phone(brand, model, hasTouchScreen, cost) {
        this.brand = brand;
        this.model = model;
        this.hasTouchscreen = hasTouchScreen;
        this.cost = cost;
    }
    return Phone;
}());
var harleyPhone = new Phone("apple", 13, true, 1200); // instantiating instance of phone class
// Creating function to add a random ID to an object
var addUid = function (obj) {
    var random_id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { random_id: random_id });
};
var idOne = addUid(harleyPhone); // adding ID to phone instance
console.log(idOne);
// Problem is that in the function, any object can be passed in, so the properties aren't known. So when the new object is returned, TypeScript doesn't know what properties were on the original, passed in object
console.log(idOne.brand); // -- error Property 'brand' does not exist on type 'object'
// So a generic type must be used, typically <T>. This will capture what properties are on the passed in object
var addUidGeneric = function (obj) {
    var random_id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { random_id: random_id });
};
var jasonPhone = new Phone("samsung", 44212, true, 800);
console.log(jasonPhone.brand); // property can now be accessed
// Another problem, now that the type is generic, any type can be passed into it. This doesn't make sense in terms of the purpose of this function
// For example, addingUidGeneric() ran with a string
var idThree = addUidGeneric('hello');
// use extends keyword to prevent this
var addUidGenericExtends = function (obj) {
    var random_id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { random_id: random_id });
};
var idFour = addUidGenericExtends("hello"); // error - as object type is enforced in function 
var mikePhone = new Phone("Nokia", 3332, false, 100);
var idFive = addUidGenericExtends(mikePhone);
// data1 variable created using Resource interface, data property allowed to be a string as string is passed as the generic. Array with numbers also shown below
var data1 = {
    uid: 1,
    resourceName: "Noel",
    data: 'hello I am data'
};
var data2 = {
    uid: 2,
    resourceName: "harley",
    data: [1123, 55, 312]
};
