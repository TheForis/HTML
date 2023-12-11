let globalNumber = 2000;

function printGlobalNumber() {
    globalNumber = 1000;
    console.log(globalNumber);
    
}

console.log (globalNumber);
printGlobalNumber();

// local scope  EXAMPLE 1
function localScope(number) {
    let localNumber = 100;
    let result = localNumber + number;
    console.log (result);
    
}

// console.log(localNumber); -ERROR
function localScope2(number) {
    
}


localScope(50);

// EXAMPLE 2

let greeting = 'Hello from Qinshift Academy';
function printGreeting() {
    let greeting = 'Happy holidays!';
    console.log(greeting);
}

console.log (greeting)

printGreeting();

// Example 3

function outerFunction() {
    let outerVariable = 'I \m from the outer function';

    // Never do this
    function innerFunction() {
        let innerVariable = 'I\'m from the inner function';
        console.log(outerVariable);
        console.log(innerVariable);
        
    }

    // console.log(innerVariable);
    innerFunction();
}

outerFunction();

// Block Scope example

if(50<100){
    let blockNumber = 50+100;
    // var blockNumber = 50+100;  DONT USE VAR
    console.log(blockNumber);
}


console.log(blockNumber)
