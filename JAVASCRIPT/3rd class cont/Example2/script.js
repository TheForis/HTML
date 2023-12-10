console.log('--------Functions---------');

console.log('');
console.log('------Function Declaration------');
// function declaration

function functionName (parametar1, parametar2){
    // Function body
    // code goes here..
}
//function => keyword for declaring function
//functionName => the name of the fucntion (what the function does)
// parametars => values that are used within he fucntion (in the function body)

// Fucntion without parameters
function greet(){
    console.log('Hello from Qinshit Academy');
}

// console.log('Hello Todor, Qinshift academy wishes you happy holidays!');
// console.log('Hello Sirma, Qinshift academy wishes you happy holidays!');
// console.log('Hello Slavko, Qinshift academy wishes you happy holidays!');
// console.log('Hello Boris, Qinshift academy wishes you happy holidays!');
// console.log('Hello Sasho, Qinshift academy wishes you happy holidays!');
// How to solve this problem???

function greetStudent(studentName){
    console.log(`Hello ${studentName}, Qinshift Academy wishes you happy holidays`);
}

console.log('');
greet();
greet();
greet();
console.log('');


let nameFromStudent = prompt('name')
greetStudent(nameFromStudent);
greetStudent('Bob Bobsky');
greetStudent('Sirma');
greetStudent('Slavko');

console.log('-------Function that returns a value-------------');

function sum(number1, number2) {
    let result = number1 + number2;
    return result;
    console.log (`Result is: ${result}`)
    
}

let result = sum(5,10);
console.log (`Result is: ${result}`)

function getNumberStats (number){
    // SWITCH SAMO SO VREDNOSTI
    // switch (number) {
    //     case number > 1 :
    //         return 'Positive';

    //     case number < 0:
    //         return 'Negative'; 
        
    //     case number === 0:
    //         return "Zero";

    //     default:
    //         return 'Invalid number!';
    // }

    if(number > 0){
        return 'Positive';

    }else if (number < 0){
        return 'Negative';
    }else if (number === 0) {
        return 'Zero';
    }
    return 'Invalid number';

}

let inputNumber = prompt('Please enter a number');
let parsedNumber = parseInt(inputNumber);

getNumberStats(parsedNumber);
console.log(getNumberStats(parsedNumber));

let numberStats = getNumberStats(parsedNumber);
console.log(numberStats)
console.log (`The number ${parsedNumber} is ${numberStats}`)


function testReturn(){
    // console.log('Return a value');
    return 100;
}

testReturn();

let testReturnValue = testReturn();
console.log(testReturnValue);


function logNumbers(num1, num2, num3) {
    console.log(`Number 1: ${num1}`);
    console.log(`Number 2: ${num2}`);
    console.log(`Number 3: ${num3}`);
    console.log('');
}
logNumbers(10,20,30);
logNumbers();
logNumbers(10,20);
logNumbers(10,'',30);
logNumbers(10,20,30,40); //Extras are ignored




function logData(data1, data2 = 1000, data3 = "some random default value"){
    console.log(`Data 1: ${data1}`);
    console.log(`Data 2: ${data2}`);
    console.log(`Data 3: ${data3}`);
    console.log('');
}
logData(23,50,100);
logData(23,100);
logData();


console.log(parseInt(2.44));
console.log(parseFloat(2.4488));

let parsedNumber2 = Number("234.54");
console.log(parsedNumber2);


console.log(Boolean(""));
console.log(Boolean(" "));

console.log(!!"");
console.log(!!"test");

console.log('-------------------------');

console.log(Number('2304.2321'));
console.log(+'2304.2321');