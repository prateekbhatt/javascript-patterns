var testModule = (function() {
    var privateVar;
    var privateFn = function() {
        // do something private
    }
    return {
        publicVar: 'Hello world!',
        publicFn: function() {
            console.log('This function is accessible to outside world!', this.publicVar);
        }
    }
})();

testModule.publicFn();