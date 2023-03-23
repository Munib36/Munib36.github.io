class Car{
    constructor(name, speed, color){
        this.name = name;
        this.speed = speed;
        this.color = color;
    }
    drive(){
        console.log(`you drive the ${this.name}`)
    }
}

const car1 = new Car("lambo", 220, "green")
const car2 = new Car("fiat", 40, "white")
const car3 = new Car("challenger", 90, "red")
const car4 = new Car("hyundai", 70, "black")

const cars = [car1, car2, car3, car4]

function startrace(cars) {

}
for(const car of cars){
    car.drive()
}