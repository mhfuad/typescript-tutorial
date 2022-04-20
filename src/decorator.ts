function CarDecorator(constructor: Function){
    console.log(constructor)
}
@CarDecorator
class Car {
    brand: string;
    constructor(brand: string){
        this.brand = brand;
    }
}

const car = new Car("ford");
console.log(car.brand)