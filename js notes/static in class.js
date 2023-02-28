class Car{

    static numberOfCars = 0;

    constructor(model, speed){
        this.model = model;
        Car.numberOfCars += 1;
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Ford Focus");

log(car1.model)
log(car2.model)
log(Car.numberOfCars)

function log(x){
    console.log(x)
}