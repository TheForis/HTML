
console.log('-----Start-------------')
console.log('-----First task-------------')


const phonePrice = 119.95 ;
const tax = 0.05 ;
const taxPerPhone = phonePrice * tax
let phoneQuantity = 30;

let total = (phonePrice + taxPerPhone ) * phoneQuantity;
console.log ('Total phone price:$', total);

console.log('-----Second task-------------')

const secondsInMinute = 60;
let minute = prompt('Please enter Minutes to convert to seconds!');
let minuteToSecondResult = minute * secondsInMinute;
console.log ('Total Seconds in given minutes:', minuteToSecondResult);

console.log('-----Third task-------------');

let userNumber = prompt('Please enter a number to be incremented!');

userNumber++ ;

console.log('Incremented Number Result:', userNumber);


console.log('-----Forth task-------------');

let triangleBase = prompt('Please enter triangle Base in cm');
let triangleHeight = prompt('Please enter triangle Height in cm');

let triangleArea = (triangleBase/2) * triangleHeight;

console.log ('Triangle Area equals to:', triangleArea, 'cm');

console.log('-----Fifth task-------------');

let RectangleL = prompt ('Please Enter Rectangle Length');
let RectangleW = prompt ('Please Enter Rectangle Width');
let RectangleSum = (parseInt(RectangleL)+parseInt(RectangleW));

let rectanglePerimeter = RectangleSum * 2;

console.log('The rectangle perimeter is:', rectanglePerimeter);


console.log('-----Sixth task-------------');

let circleRadius = prompt('Please enter the radius of the circle:');
const pi = 3.14;
let circleArea = pi * circleRadius * circleRadius;

console.log('The circle area is:', circleArea);

console.log('-----End-------------');
// console.log('-----Test HTML input to console result-------------');

// function assignLet() {
//     const phonePriceTest = 119.95 ;
//     const taxTest = 0.05 ;
//     const taxPerPhoneTest = phonePriceTest * taxTest
//     let phoneNumber = document.getElementById("siteNumber").value;
//     let totalTest = (phonePriceTest + taxPerPhoneTest ) * phoneNumber;
//     console.log ('Total phone price:$', totalTest);
//     }

