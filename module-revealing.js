var revealingModule = (function () {
    var name = 'John Resig';
    var age = 40;
    function updatePerson() {
        name = 'John Resig Updated';
    }
    function setPerson() {
        name = 'John Resig Set'
    }
    function getPerson() {
        return name
    }

    return {
        set: setPerson,
        get: getPerson
    }
})();
console.log(revealingModule.get());