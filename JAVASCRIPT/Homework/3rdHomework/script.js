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

console.log('--------------HOMEWORK----------')
console.log('----------HOMEWORK PART 1----------')

function typeChecker(value) {
    
    
}


console.log('--------------HOMEWORK ----------')
console.log('----------HOMEWORK PART 2----------')




console.log('--------------HOMEWORK----------')
console.log('----------HOMEWORK PART 3----------')
