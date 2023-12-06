let result = 2 / 'hello';
console.log(result);
console.log('Type of result is:', typeof result);

console.log(result===NaN); //Not to be used
console.log(result==NaN); //Not to be used

console.log(isNaN(result));

let randomText = 'Hello World';
console.log(isNaN(randomText));
console.log(!isNaN(randomText));

console.log('-----------------');

const myNum1 = 5;
const myNum2 = '5';
const myNum3 = 'foo';
const myResult1 = myNum1 * myNum2;
const myResult2 = myNum1 * myNum3;
const myResult3 = myNum2 + myNum3;
console.log('myNum1:', myNum1, 'type:', typeof myNum1);
console.log('myNum2:', myNum2, 'type:', typeof myNum2);
console.log('myNum3:', myNum3, 'type:', typeof myNum3);
console.log('myResult1:', myResult1, 'type:', typeof myResult1);
console.log('myResult2:', myResult2, 'type:', typeof myResult2);
console.log('myResult3:', myResult3, 'type:', typeof myResult3);




let infinityValue = Infinity ;
console.log(infinityValue);
console.log(typeof(infinityValue));