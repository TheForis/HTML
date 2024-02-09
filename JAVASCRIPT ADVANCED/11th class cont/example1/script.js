const dog = {
    name: 'Sharko',
    color: 'Mixed',
    owner: {
        name: 'Boris'
    },

    bark:function () {
         console.log(`The dog named ${this.name} says:BARK BARK BARK!!!`)},

    getThis: this,
    printThisAnonymous: ()=>{
        console.log(this);
    },
    printThis: function(){
        console.log(this);
    }
}


dog.bark();
console.log(dog.getThis);
dog.printThisAnonymous();
dog.printThis();


function Person(firstName, lastName) {
    this.firstName = firstName === undefined ? 'Unnamed' : firstName;
    this.lastName = !lastName ? '"Unkown last name"' : lastName
    this.getFullName = function (){ 
        return this.firstName +' '+ this.lastName}
}

let boris = new Person('Boris', 'Krstovski')
let john = new Person('John', 'Johnny');
console.log(boris.getFullName());


// console.log(boris.getThis);
// boris.printThisAnonymous();
// boris.printThis();

function globalOjectFunction() {
    console.log(this);
}

globalOjectFunction();

console.log(window.document);

console.clear();
// object methods
// ** CREATE

let person ={
    firstName: 'Bob',
    'lastName': 'Bobsky',
    geet: function(){
        console.log('Hello!');
    }
}
console.log(person);
let newPerson = Object.create(person);
newPerson.firstName = "Boris"
console.log(newPerson);

let emptyObject = Object.create(null);
console.log(emptyObject);

/**ASSIGN */

let bobAdress = {
    street: 'Bobsky st.',
    city: 'Skopje',
}

Object.assign(person, bobAdress)
// console.log(bobInfo);
console.log(person);

let barnie ={
    name:'Barnie',
    age: 1,
    bark: function(){
        console.log('BARNIE THE BAD DOG');
    }
}

let barnieKeys = Object.keys(barnie);
console.log(barnieKeys);

let barnieValues = Object.values(barnie)
console.log(barnieValues);

let barnieEntries = Object.entries(barnie);
console.log(barnieEntries);

console.log(barnie);
// Object.freeze(barnie);  se zamrznuva i nishto nemozhesh da smenish
barnie.name = 'Chapo';
console.log(barnie.name);
barnie.isHappy = true;
console.log(barnie);
// seal - se menjaat vekje postoechkite propertinja
Object.seal(barnie);
barnie.name = 'small Barnie'
console.log(barnie);

// DESTRUKTUIRANJE


