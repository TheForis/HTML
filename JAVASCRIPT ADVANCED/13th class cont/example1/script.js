let vehicleObjects = [];
class Vehicle {
    constructor(id,name, model, price){
        this.id= id;
        this.name = name;
        this.model = model;
        this.price = price;
    }
    printVehicle(){
        console.log(`id ${this.id}; Name: ${this.name} model:${this.model} price: ${this.price}`);
    }
}


class WheeledVehicle extends Vehicle {
    constructor(id,name, model, price, wheels){
        super(id,name,model,price);
        this.wheels = wheels;
    }
    printWheeledVehicle (){
        console.log(`Name: ${this.name} -> Has ${this.wheels} wheels`);
    }
    drive(){
        console.log(`${this.name} drives on ${this.wheels} wheels!`);
    }
}



const apriliaShiver = new WheeledVehicle (13,'Aprilia','Shiver 750', 7500, 2)
apriliaShiver.printVehicle()
apriliaShiver.printWheeledVehicle()
apriliaShiver.drive()

vehicleObjects.push(apriliaShiver);
console.log(vehicleObjects);

class Car extends WheeledVehicle {
    constructor(id,name, model, price, doors, airConditioning){
        super(id,name,model,price,4)
        this.doors = doors;
        this.airConditioning = airConditioning
        if(airConditioning){
            this.price += 400;
        }

    }
    buyCar(money){
        money > this.price ? console.log('So zdravje da si ja vozish'): console.log('Nemash Dovolno') ;
    }
    static addAC(car){
        if(!car instanceof Car){
        throw new Error 
        }
        if(!this.airConditioning){
            car.airConditioning = true;
            car.price += 400;
        }
        else{ console.log('Vekje imash AC');}
    }
}


const audiA3 = new Car(10,'Audi', 'A3', 33_000, 5, true )
console.log(audiA3);

const mustang = new Car(77,'Ford','Mustang',80_000,3,false)

let ficho = new Car(1,'Zastava', '750', 3500,2,true)
audiA3.buyCar(50000);

ficho.buyCar(3600)
console.log(ficho);
Car.addAC(ficho)
console.log(ficho);

ficho.buyCar(3600)
Car.addAC(mustang)
console.log(apriliaShiver instanceof Car);
console.log(mustang instanceof Car);

class ElectricCar extends Car {
    constructor(id,name, model, price, doors, airConditioning, owner){
        super(id,name,model,price,doors, airConditioning);
        this.owner =owner;
    }
    get owner(){
        console.log(`Hello the tesla owner`);
        return this._owner;
    }
    set owner(ownerValue){
        console.log(`Hello from owner SETTER ${ownerValue}`);
        this._owner = ownerValue;
    }

}

const tesla = new ElectricCar(24,'Tesla','Model T', 45_000, 4, true, 'John Doe');
const nissan = new ElectricCar(25,'Nissan','Leaf', 35_000, 2, true, 'Jane Doe');