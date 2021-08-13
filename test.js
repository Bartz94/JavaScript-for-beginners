
var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {console.log(speed * time);};
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
}

var myCar = new Car(70, Bart);
var myCar2 = new Car(40, czyzio);
var myCar3 = new Car(90, dyzio);
var myCar4 = new Car(20, pyzio);

myCar.drive(30, 5);

