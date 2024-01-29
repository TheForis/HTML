let resultP = document.getElementById('paragraph');


const numbers = [2,5,-5,8,10,-17,15,7,3,12,17,34,53];
console.log(numbers);

// const squareNumbers = numbers.map((num) => num * num)
// console.log(squareNumbers);

//  forEach


// numbers.forEach(num => console.log(num));

numbers.forEach((num) => num = num * num);
console.log(numbers);


const users = [{id:1, name: 'Alice', age:28, occupation:'Software engineer'},{id:2, name: 'Bob', age:35, occupation:'Data Scientist'},{id:3, name: 'Jane', age:31, occupation:'Q&A specialist'}];

users.forEach(user => {
    resultP.innerHTML += `<p>${user.name} - ${user.age} years old is ${user.occupation}! <p> `
    console.log(`${user.name} - ${user.age} years old is ${user.occupation} `);
})



const userNames = users.map((user) => user.name);
console.log(userNames);

// FILTER

const evenNumbers = numbers.filter(num => num %2 === 0);
console.log(evenNumbers);

const positiveNumbers = numbers.filter(num => num > 0);
console.log(positiveNumbers);

const olderUsers = users.filter(users => users.age > 30);
console.log(olderUsers);


// REDUCE
let initialValue = 0;

let reduceTest = numbers.reduce((accumulator, current) => accumulator + current, initialValue);
console.log(reduceTest);



let MultiplyTest = numbers.reduce((accumulator, current) => accumulator * current, 1);
console.log(MultiplyTest);

let personAge = users.reduce((acc, user) => 
    acc + user.age, 0) / users.length;

console.log(personAge);


const positiveNums = numbers.filter(num => num>0).reduce((acc,curr) => acc+curr,0);
console.log(positiveNums);



const numbersToSort = [2,5,-5,8,10,-17,15,7,3,12,50,200,-10,35,17,34,53];
console.log(numbersToSort);

numbersToSort.sort((a,b)=> a-b);

let sortedArray = numbersToSort.toSorted((a,b)=> b - a);
console.log(sortedArray);


console.log(numbersToSort);

const students =['Sasho','Boris','Slavko','Sirma','Marija','Vladimir']

console.log(students);
students.push('Elena')

console.log(students);


// students.sort((a,b) => a.localeCompare(b,'en'));
// console.log(students);

let resultInclude = students.includes('Sasho');
console.log(resultInclude);


let resultFind = users.find(user => user.age == 35);
console.log(resultFind);

const findStudent = students.find(student => student === 'Sirma');
console.log(findStudent);


// /Reverse

const array = [1,2,3,4,5];
console.log(array);
let newArrayTest = array.toReversed();
console.log(newArrayTest);

let newArray = array.slice();
let newTestArray = [...array];

console.log(newArray);
newArray.reverse();
console.log(newArray);


const originalString = 'Hello, World';
const reversedString = originalString.split('').reverse().join('');
console.log(reversedString);



// index OF dosta se koristi

const indexOfStudent = students.indexOf('Elena');
console.log(indexOfStudent);


const indexOfUser = users.findIndex(user => user.name.toLocaleLowerCase() === 'jane');
console.log(indexOfUser);
