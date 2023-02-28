class car{
    topSpeed = 0

    drive() {
    console.log("rantatata ranntatataa" + this.car.topSpeed)
    }
}
car1 = new car
car2 = new car
car3 = new car
car4 = new car
car1.topSpeed += 1
console.log(car1.topSpeed);
console.log(car2.topSpeed);
console.log(car3.topSpeed);
console.log(car4.topSpeed);
car3.drive();