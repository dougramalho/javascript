function Car(model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function(){
    return this.model + " has done " + this.miles + " miles";
}

var civic = new Car("Honda civic", 2009, 20000);
var mondeo = new Car("Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());

//Above, a single instance of toString() will now be shared between all of the Car objects.

