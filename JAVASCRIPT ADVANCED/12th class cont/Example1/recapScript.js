const color = ['red', [128,135,70], '#f11222']

const[redColor, [red, green, blue], secondColor] = color
console.log(red);

let person = {
    firstName: 'John',
    lastName: 'Doe'
}

Object.freeze(person)
person.firstName = 'Johnny'
console.log(person.firstName);

const newPerson = {...person, age: 30, city: 'Skopje'}
console.log(newPerson);