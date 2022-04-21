var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function CarDecorator(constructor) {
    //console.log(constructor)
    //console.log("---decorator constructor invoked")
    constructor.prototype.date = new Date();
    constructor.prototype.giveMeDate = function () {
        alert(this.Date);
    };
}
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
        //console.log("---class constructor invoked")
    }
    Car = __decorate([
        CarDecorator,
        __metadata("design:paramtypes", [String])
    ], Car);
    return Car;
}());
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle = __decorate([
        CarDecorator
    ], Vehicle);
    return Vehicle;
}());
;
var vehicle = new Vehicle();
console.log("Vehicle date :", vehicle.date);
var car = new Car("ford");
console.log(car.brand);
console.log(car.date);
//(<any>car).giveMeDate();
