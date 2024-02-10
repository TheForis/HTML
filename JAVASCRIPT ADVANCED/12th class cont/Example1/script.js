
// // const me = {};

// // me.name = 'Bob'
// // console.log(me);

// let nums = [1,2,3];

// let greeting = 'Hello Skopje';
// console.log(Object.getPrototypeOf(greeting));
// let bob = {
//     name: 'Bob',
//     sayHello: function () {
//         console.log(`${this.name} says ello moto`);
//     }
// }

// function Person (name) {
//     this.name = name;

// }
// const me = new Person('Boris');

// me.age = 50;
// const you = new Person('Ilija');

// console.log(Person.prototype);

// Person.lastName = 'Stankovska';

// console.log(you.__proto__);
// console.log(Person.prototype === you.__proto__); // __proto__ e referenca do konstruktor funkcijata
// console.log(Person.prototype === Person.__proto__);  // Person prototip = 


function User(name, email) {
    this.name= name;
    this.email = email;
    this.isOnline = false;
    this.login = function(){
        console.log(`${this.name} has logged in!`);
    }
}

let bob = new User ('Bob', 'bobmail@gmail.com');
// let jill = Object.create(User)
let jill = new User('Jill', 'jillmail@mail.com');
jill.isPremium = true;
bob.isAdmin = true;
console.log(jill);
console.log(bob);

const vehicle = {
    type: 'Generic Vehicle',
    start: function() {
        console.log(`${this.type} is starting`);
    }
}

const toyotaCamry = {
    type: 'Toyota',
    model: 'Camry'
}

// car.__proto__ = vehicle; // DO NOT USE- BAD WAY

// car.start()
console.log(vehicle);

// better way
Object.setPrototypeOf(toyotaCamry, vehicle)
toyotaCamry.start()

const apriliaShiver = {
    type: 'Aprilia',
    model: 'Shiver'
}
Object.setPrototypeOf(apriliaShiver,vehicle);
apriliaShiver.start();



vehicle.stop = function (){
    console.log(`${this.type} is stopping`);
}

toyotaCamry.stop();


Object.getPrototypeOf(vehicle).outOfGas = function(){
    console.log(`${this.type} is running low on gas`);
}

apriliaShiver.outOfGas()

Object.defineProperty(toyotaCamry , 'color', {
    value:'red'
})

function Pet(name,sound){
    this.name = name;
    this.sound = sound;
}
// Pet.speak = function(){
//     console.log(`the pet${this.name} says ${this.sound}`);
// }
console.log(Pet.prototype);
Pet.prototype.speak = function(){
    console.log(`The pet:${this.name} says ${this.sound}`);
}
let pet = new Pet ('Bella', 'Meow')
console.log(pet);
pet.speak();

