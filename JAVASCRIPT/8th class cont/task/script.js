// // task 1

// let number = Number(0);
// let boolean = true;
// let text = 'hello';
// let object = [];
// let declareFuntion= function(){};

// console.log(typeof number ,typeof object, typeof boolean, typeof text, typeof declareFuntion);

// task 2

// let userInput1 = parseInt(2) 
// let userInput2 = 'text'
// let userInput3 =  ['array']
// let userInput4 = parseInt('text');
// let userInput5 = true

// console.log(`The type of ${userInput1} is ${typeof userInput1},The type of ${userInput2} is ${typeof userInput2},The type of ${userInput3} is ${typeof userInput3},The type of ${userInput4} is ${typeof userInput4},The type of ${userInput5} is ${typeof userInput5}`);

// // task 3\

// console.log('------------------------------')

// function differenceDoubler(num1, num2 = 13) {
//     if(num1 > num2){
//         let differenceResult = (num1 - num2) * 2;
//         console.log(`Output: ${differenceResult}`);
//     }
//     else {
//         let differenceResult2 = num2 - num1
//         console.log(`You\'ve entered ${num1} which is smaller than ${num2}! The output is ${num2} - ${num1} = ${differenceResult2}`)
//     }
    
// }

// let userNumberInput = prompt('Please enter a number');
// let userParsedInput = parseInt(userNumberInput);
// differenceDoubler(userNumberInput);


// task 4   


// function findTheCloserNumber(num1, num2, num3 = 100) {
//     let num1Result = Math.abs(num3 - num1);
//     let num2Result = Math.abs(num3- num2);   
//     if ( num1Result > num2Result){
//         console.log(`The number ${num2} is closer to ${num3}`)
//     }
//     else if ( num2Result > num1Result){
//         console.log(`The number ${num1} is closer to ${num3}`)
//     }
//     else if (num1Result = num2Result){
//         console.log(`The numbers ${num1} & ${num2} are equally close to ${num3}!`)
//     }
// }

// let userInput = prompt('Please enter the first number');
// let parsedUserInput = parseFloat(userInput);
// let userInput2 = prompt('Please enter the second number');
// let parsedUserInput2 = parseFloat(userInput2);

// findTheCloserNumber(parsedUserInput, parsedUserInput2);


// task 5

// function amountLeft(salary, rent, bills, ) {
//     let expenses = (rent + bills)
//     let amountLeft = (salary - expenses);
//     console.log(`Amount left on the account is $${amountLeft}, sum of the expenses are:$${expenses}`)
// }

// let bobSalary = 1000;
// let rent = 375;
// let bills= 250;

// amountLeft(bobSalary,rent,bills);

// task 6


// let studentName = 'Bob Bobsky'
// let subjects = ['Math', 'English', 'Science', 'Sport', 'Chemistry'];
// let bobGrades = [10, 6, 8, 9, 6];


// function sumArray(array) {
//     let sum = 0;
//     for (const el of array) {
//     sum += el;
//     }
//     return sum;
// }

// function passingGrade(grade){
//     if (grade < 8){
//         alert('You have failed the semester');
//     }
//     else if (grade >= 8){
//         alert('Congratulations You have passed the semester');
//     }
// }

// function logEverything(array1, array2, name) {
//     let result = [];
//     for (i=0; i<array1.length; i++){
//         result.push( `Student name:${name} Subject ${array1[i]} = ${array2[i]}`);
//     }
//     return result;
// }


// let summedGrades =sumArray(bobGrades);
// let passingGradeResult = summedGrades / bobGrades.length;

// passingGrade(passingGradeResult);
// logEverything(subjects,bobGrades);

// console.log(logEverything(subjects, bobGrades, studentName));

// task 7

// function isMiltiplied(num) {
//     if(num % 3 ===0 && num % 7 ===0){
//         console.log('FizzBuzz')
//     }
//     else if(num % 3 ===0){
//         console.log('Fizz');
//     }
//     else if(num % 7 ===0){
//         console.log('Buzz')
//     }
       
// }

// let userInput = Number(prompt('Please enter number'));
// isMiltiplied(userInput);

// task 8


// function sumArray(array) {
//         let sum = [];
//         for (const el of array) {
//         sum += el;
//         }
//         return sum;
//     }

// let testArray = ['Hello ', 'number', 5, ' and', ' number',6];

// console.log(sumArray(testArray));

// task 9    

let arrayTaskNine = [null ,undefined , ' ' ,Number('text'), 5 , false, '""', 'test', 10, 'things']

console.log(arrayTaskNine);

let filteredResult = arrayTaskNine.filter(Boolean);
console.log(filteredResult);





