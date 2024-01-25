

let add =(first, second) => first + second;

function subtract ( first, second){
    return first - second;
}

const substructFunction = subtract;

function multiply ( first, second){
    return first * second;

}

const multiplyFunction = multiply;


function divide ( first, second){
    if(second === 0){
        return ' Cannnot divide by zero';
    }
    return first / second;

}

const divideFunction = divide;

const operations = [add,subtract, multiply,divide];

console.table(operations);
console.log(operations[2](20,6));


// Using function as an argument

function operation (func,firstNumber,secondNumber){
    return func(firstNumber,secondNumber);
}

let operationResult =operation(divide,10,5)
console.log(operationResult);

// Returning a function from another function

const greetingGenerator = (language) => {
    switch (language.toLowerCase()) {
        case 'english':
            return (name) => console.log(`Hello ${name}`);
        case 'spanish':    
            return (name) => console.log(`Hola ${name}`);
        case 'french':    
            return (name) => console.log(`Bonjour ${name}`);
        default:
            console.log('Unsupported language');
            return null;
    }
}

const greetInEnglish = greetingGenerator('english');
const greetInSpanish = greetingGenerator('spanish');
const greetInFrench = greetingGenerator('french');

greetInSpanish('Pablo');


// A function with properties and a method

const taskHandler = (taskName) => {
    return `Task ${taskName} completed!`;
}

taskHandler.defaultTask = 'Learn coding';
taskHandler.description = 'This is a task handler function';

let defaultTaskResult = taskHandler(taskHandler.defaultTask);
console.log(defaultTaskResult);
// Adding method to the functioon

taskHandler.customTaskResult = (taskName,customAction) => {
    return `The result for the task ${taskName}: ${customAction}.`;
}

const customResult = taskHandler.customTaskResult('Coding', (() => {
    return 'still in progress';
})());
console.log(customResult);