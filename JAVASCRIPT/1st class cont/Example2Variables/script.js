let myName; 
myName = "Aneta";

let name = 'John';

// console.log (myName);

console.log(name);

name = 'Bob';

console.log(name);

let firstName = "Jill";


name = 73;

console.log(name);

const conversionRate = 62;
console.log("Conversion rate:", conversionRate );



// conversionRate = 70;
let lastName = 'Wayne';
for (let i = 0; i < 10; i++) {
    let lastName = 'Wayne';  // Local - access
    console.log(lastName);
   
}

console.log(lastName);  //Global - access


console.log('-------------------------------');


let myNumber;
console.log(myNumber);
console.log(typeof myNumber);
myNumber = 10;
console.log(myNumber);

let numberWithNullValue = null;
console.log(numberWithNullValue);

console.log(typeof numberWithNullValue);


console.log( 5 == "5");
console.log( 5 === "5");

let textWithNewLine = "This is the first line of the text. \nThis text goes in the new line";
console.log(textWithNewLine)