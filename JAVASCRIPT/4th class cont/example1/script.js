function calculateAge(birthDate) {
    const date = new Date ();
    let currentDate = date.getFullYear ();
    let result = currentDate - birthDate;
    return result;
}

function printAge (age){
    console.log(`You are ${age} years old`)
}


let userInput = prompt('Please enter your birthYear');
let parsedInput = Number(userInput);
let ageResult = calculateAge (userInput);
if (!Number.isNaN(parsedInput)){
    let age = calculateAge(parsedInput);
    printAge(age);
}
