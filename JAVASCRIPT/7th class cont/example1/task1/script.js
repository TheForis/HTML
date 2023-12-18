let person = {
    gender: 'male',
    age: 32,
    height: 185,
    hobby: 'drinking',
    workingOut: false,

    speak: function(){
        console.log(`This person is ${this.gender}. He/She is ${this.age} years old. He/She is ${this.height} cm tall. Her/His hobbies are ${this.hobby}. Does She/He work out? ${this.workingOut}.`);
    }
}

person.gender= 'female';
person.age = 55;

console.log(person);
person.speak();



let secondPerson= new Object();
secondPerson.name = 'Trale';
secondPerson.age = 45;
secondPerson.hobby = 'drinking';
secondPerson.speak = function(){
    console.log('Hello')
}

secondPerson.hobby = 'running';

secondPerson.speak();
console.log(secondPerson);
delete secondPerson.age;


person.personHobby = function(){
    console.log(`This person hobby is ${this.hobby}.`);
}

person.personHobby();


function studentRegistry (firstName, lastName, age) {
    this.first
    
}