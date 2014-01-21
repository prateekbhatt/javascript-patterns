// A car 'class'
function Car (model) {
    this.model = model;
    this.color = 'silver';
    this.year = 2012;
}

// Add the 'getInfo' method to the prototype object
Car.prototype.getInfo = function () {
    return this.model + ' ' + this.year;
}

// Instantiate an object using the Car constructor defined above
var myCar = new Car('tesla');
myCar.year = 2014;
console.log(myCar.getInfo());

// A single instance of getInfo is shared betweem all of the Car objects