var Singleton = (function() {

    // private methods and variables
    var privateVar = 'Holy';
    var showPrivate = function () {
        console.log(privateVar)
    }

    var instantiated; // stores an instance of the singleton

    function init () {
        return {
            publicVar: 'Cow',
            publicFunction: function() {
                showPrivate();
            }
        }
    }


    // return getInstance public method, which would be used to create a singleton instance
    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    }
})();

var newSingleton = Singleton.getInstance();
newSingleton.publicFunction()
console.log(newSingleton.publicVar);