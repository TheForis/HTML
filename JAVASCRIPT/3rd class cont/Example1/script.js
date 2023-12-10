console.log('----------------Control Structures----------------------');
// 1) Conditional statemets (if, else if, else)
// 2) Switch Statements
// 3) Looping structures
// Purpose: control the flow of the program ***

console.log ('')
console.log ('---------Switch statement----------');
//  useful when you have multiple conditions to check against SINGLE variable

// base syntax

let switchValue = '';
if (switchValue = "value1") {
    
}
switch (switchValue){
    case 'value1':
        // code to be executed if switchValue = 'value1'
        break;
    case 'value2':
        // code to be executed if switchValue = 'value2'
        break;
    case 'value3':
        // code to be executed if switchValue = 'value3'
        break;
        // As many cases as we need
    default:
        // Code to be executed if the switchValue doesn't match any case
        break;

}

console.log ('excersise from homework ');

let inputDay = prompt('Enter day of the week (1-7)');
let parsedInputDay = parseInt(inputDay);

switch (parsedInputDay) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;    
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;    
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;    
    case 7:
        console.log('Sunday')
        break;
        
    default:
        console.log('Invalid input value')
        break;
}

// 'fall through' scenario => rarel
switch (parsedInputDay) {
    case 1:       
    case 2:       
    case 3:      
    case 4:          
    case 5:
        console.log('Workday')
        break;
    case 6:    
    case 7:
        console.log('Weekend')
        break;
        
    default:
        console.log('Invalid day')
        break;
}


