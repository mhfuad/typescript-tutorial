function CarDecorator(constructor: Function){
    //console.log(constructor)
    //console.log("---decorator constructor invoked")
    constructor.prototype.date = new Date();
}


@CarDecorator
class Car {
    brand: string;
    constructor(brand: string){
        this.brand = brand;
        //console.log("---class constructor invoked")
    }
}

const car = new Car("ford");
console.log(car.brand)
console.log((<any>car).date)