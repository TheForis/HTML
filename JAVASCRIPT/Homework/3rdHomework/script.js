console.log('----------SECOND EXERCISE----------');

function celsiusToFahrenheit(celsius) {
    result = celsius * 1.8 + 32;
    return result;
}

function fahrenheitToCelsius(fahrenheit) {
    result = (5/9) * (fahrenheit-32);
    return result;
}
console.log('----------CELSIUS TO FAHRENHEIT');

let celsiusValue = prompt('Please Enter Celsius to be converted to Fahrenheit:');
let celsiusToFahrenheitResult = celsiusToFahrenheit(celsiusValue);
console.log(`${celsiusValue}C equals to ${celsiusToFahrenheitResult}F`);


console.log('----------FAHRENHEIT TO CELSIUS----------');

let fahrenheitValue = prompt('Please Enter Fahrenheit to be converted to Celsius:');
let fahrenheitToCelsiusResult = fahrenheitToCelsius(fahrenheitValue);
console.log(`${fahrenheitValue}F equals to ${fahrenheitToCelsiusResult}C`);

console.log('----------THIRD EXERCISE----------')

function calculateAGE(birthYear, currentYear) {
    const date = new Date();
    let year = date.getFullYear ();
    result = year - birthYear;
    return result;
}

let userBirthYear = prompt('Please enter your birth year');
let currentAge = calculateAGE(userBirthYear,);
console.log(`Since you were born in ${userBirthYear} you must be ${currentAge} years old!`);

console.log('--------------HOMEWORK----------');
console.log('----------HOMEWORK PART 1----------');

function typeChecker(value) {
    result = typeof value;
    return result;
}

let objectValue = null;
let objectResult = typeChecker(objectValue);
console.log(`${objectValue} is a ${objectResult}`);

let booleanValue = false;
let booleanResult = typeChecker(booleanValue);
console.log(`${booleanValue} is a ${booleanResult}`);

let numberValue = 5;
let numberResult = typeChecker(numberValue);
console.log(`${numberValue} is a ${numberResult}`);

let stringValue = 'text';
let stringResult = typeChecker(stringValue);
console.log(`${stringValue} is a ${stringResult}`);

let undefinedValue = undefined;
let undefinedResult = typeChecker(undefinedValue);
console.log(`${undefinedValue} is a ${undefinedResult}`);



console.log('--------------HOMEWORK ----------');
console.log('----------HOMEWORK PART 2----------');

function humanToDog(humanAge) {
    result = humanAge * 7;
    return result;
}

function dogToHuman(dogAge) {
    result = dogAge / 7;
    return result;
}

let humanAge = 7;
let dogAge = 50;
let humanToDogConversion = humanToDog(humanAge)
let dogToHumanConversion = dogToHuman(dogAge)
console.log (`7 Human years equals to ${humanToDogConversion}years`)
console.log (`50 Dog years equals to ${dogToHumanConversion}years`)



console.log('--------------HOMEWORK----------');
console.log('----------HOMEWORK PART 3----------');

function atm(totalMoney, withdrawMoney) {
    let withdrawnMoney = totalMoney - withdrawMoney;

    if (withdrawnMoney < 0){
        console.log('You don\'t have enough money!');
    }
    else if(withdrawnMoney > 0){
        console.log(`You withdrew $${withdrawMoney} and now you have $${withdrawnMoney} left on your account!`);

    }
}

let totalMoney = 1000;
let withdrawMoneyUser = prompt('Please enter amount to withdraw! YOU HAVE $1000!');
atm(totalMoney, withdrawMoneyUser);

