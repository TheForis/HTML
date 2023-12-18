function animalSpeak(animalType,animalBreed){
    if (animalType === cat){
        console.log(`The ${animalType} of breed ${animalBreed} meows.`);
    }
    if (animalType === dog){
        console.log(`The ${animalType} of breed ${animalBreed} barks.`);
    }

    if (animalType === tiger){
        console.log(`The ${animalType} of breed ${animalBreed} roars.`);
    }

}

let cat = {
    type: 'cat',
    breed: 'Ragdoll',

    speak: function(){
        // console.log('The cat meows');
        console.log(`The animal of ${this.type} and of breed ${this.breed} meows`);
    }
}

cat.speak();

console.log(cat.breed);


let person = new Object();
person.name = 'Petko';
person.age = 25;
person.getInfo = function(){
    console.log(`this person's name is ${this.name} and their's age is ${this.age}`)
}
person.getInfo();
console.log(person);


let personTwo = {};
personTwo['height'] = 185;
personTwo['gender'] = 'male';
personTwo['Hobbies'] = ['hiking', 'swimming', 'gaming'];
personTwo.age = 20

console.log(personTwo);

console.log(` personTwo: gender -  ${personTwo.hasOwnProperty('gender')}`);
console.log(` personTwo: gender -  ${personTwo.hasOwnProperty('salary')}`);

let car = {
    make: 'Honda',
    model: 'Civic',
    fuel: 'Gasoline',
    productionYear: 2020,

    move: function(){
        console.log('The car is moving');
    },
    start: function(){
        console.log('The car starts');
    },
    stop: function(){
        console.log('The car stops');
    }

}

console.log(car);
delete car.productionYear;

car.model= 'Jazz';
car['fuel'] = 'diesel';


// CONSTRUCTOR - GENERATOR NA OBJEKTI

function VehicleCreator(vehicleType, vehicleMake, vehicleModel, yearOfProduction, VehicleFuel){
    this.type = vehicleType;
    this.make = vehicleMake;
    this.model = vehicleModel;
    this.year = yearOfProduction;
    this.fuel = VehicleFuel;
    
    this.getInfo = function(){
        return `The vehicle of type ${this.type} and make ${this.make} and model ${this.model} which is produced in ${this.year} uses ${this.fuel}.`
    }

    this.getVehicle = function(){
        console.log(this);
    }
}

let fico = new VehicleCreator('car', 'Fiat', '500', 1983, 'gasoline');

console.log(fico.getInfo());

let pegla = new VehicleCreator('car', 'Fiat', '128P' ,  1978, 'gasoline');

console.log(pegla.getInfo());

pegla.getVehicle();

let firstName = 'Bob';
let person2 = {firstName: 'Jill'};
function printName (){
    console.log(this.firstName);
}

printName();
person2.printName = printName;
printName();
person2.printName();