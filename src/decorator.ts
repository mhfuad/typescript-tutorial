function CarDecorator(constructor: Function){
    //console.log(constructor)
    //console.log("---decorator constructor invoked")
    constructor.prototype.date = new Date();
    constructor.prototype.giveMeDate = function(){
        alert(this.Date)
    }
}

function OtherDecorator(name: string){
    if(name === "Mike"){

    }else{
        
    }
    return function(constructor: Function){
        constructor.prototype.other = name
    }
}

@OtherDecorator("Mike")
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
console.log((<any>car).date);
console.log((<any>car).other);

//(<any>car).giveMeDate();