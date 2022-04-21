function CarDecorator(constructor: Function){
    //console.log(constructor)
    //console.log("---decorator constructor invoked")
    constructor.prototype.date = new Date();
    constructor.prototype.giveMeDate = function(){
        alert(this.Date)
    }
}


@CarDecorator
class Car {
    brand: string;
    constructor(brand: string){
        this.brand = brand;
        //console.log("---class constructor invoked")
    }
}

@CarDecorator
class Vehicle {};

const vehicle = new Vehicle();
console.log("Vehicle date :", (<any>vehicle).date)

const car = new Car("ford");
console.log(car.brand)
console.log((<any>car).date);

//(<any>car).giveMeDate();