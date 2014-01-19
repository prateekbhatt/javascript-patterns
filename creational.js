var newObject = {};

Object.defineProperty(newObject, "someKey", {
    value: "val from defineProperty; ES5 compatible approach that gives more control on the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(newObject.someKey);

var defineProp = function (obj, key, value) {
    var config = {};
    config.value = value;
    Object.defineProperty(obj, key, config);
};

defineProp(newObject, 'newKey', 'val from defineProp');

console.log(newObject.newKey);