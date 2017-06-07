var newObject1 = {};

var newObject2 = Object.create(Object.prototype);

var newObject3 = new Object();

newObject1.someKey = "Hello world";
newObject2["someKey"] = "Hello world";


//ECMAScript 5 only compatible approaches
Object.defineProperty(newObject3, "someKey", {
    value: "for more control of the propertys behaviour",
    writable: true,
    enumerable: true,
    configurable: true
});

var defineProp = function(obj, key, value){
    var config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    };
    Object.defineProperty(obj, key, config);
};

//to use, we then create a new empty "person" object
var person = Object.create(Object.prototype);
defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

Object.defineProperties(newObject3, {
    "someKey": {
        value: "Hello world",
        writable: true
    },
    "anotherKey": {
        value: "Foo bar",
        writable: false
    }
});

//These methods can even be used for inheritance as follows

var driver = Object.create(person);
defineProp(driver, "topSpeed", "100mph");
