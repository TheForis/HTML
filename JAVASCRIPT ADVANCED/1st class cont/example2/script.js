console.log('Functions');

function sayHello() {
    console.log('Hello');
    
}

sayHello()

function greet(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}`);
    return `First name: ${firstName}, Last name: ${lastName} !`
}

greet('Pink','Panter')

let greetStudent = greet("Green", 'Panther');

console.log(greetStudent);

function getPI(){
    return Math.PI
}

let pi= getPI();
console.log(pi);



function multiply(num1, num2,num3) {
    return num1*num2*num3;
    
}

let multiplyResult = multiply(5,5,2);
console.log(multiplyResult);







function getAverage(array) {
    let sum =0;

    for (const number of array) {
        sum += number;
    }
    let average = sum / array.length;
    return `The average of the array is ${average}!`;
}

let testArray = [1,2,3,4,5,6,7,8,9,10];



let students =[
    {id:1, firstName: 'Elena', lastName: 'Mitevska'},
    {id:2, firstName: 'Stefan', lastName: 'Tomikj'},
    {id:3, firstName: 'Antonio', lastName: 'Kazhikj'},
    {id:4, firstName: 'Dimitar', lastName: 'Nikolov'},
]

function printStudent (array) {
    for (const student of array) {
        console.log(`Student # ${student.id}. ${student.firstName} ${student.lastName}`)
        
    }
    
}

printStudent(students);

console.clear()

let numbersArray = [1232, 2344,3434,3434,2342]

let sum1 =0;

for (const number of numbersArray) {
    sum1 += number;
}
let average = sum1 / numbersArray.length;
console.log(average);

numbersArray.push = [1,455,65,456];

let average2 = getAverage(numbersArray);
console.log(average2);

numbersArray.push(2,54,600)

let average3 = getAverage(numbersArray)
console.log(average3);

