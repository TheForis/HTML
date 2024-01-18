let getWeatherInfo = () => {
    return ` The weather today is very cold. Please stay at home!`
}

let todayWeather = getWeatherInfo()
console.log(todayWeather);

let multiplyNumber = (num1, num2) => {
    return num1 * num2
}

let multiply = multiplyNumber(2,2);
console.log(multiply);

let multiplyNumbers = (num1, num2) => num1 * num2;

let numbers = multiplyNumbers(5,6);
console.log(numbers);


let displayMessage = (greeting, name, timeOfTheDay) => `${greeting} ${name}, it is ${timeOfTheDay}.`;

let greetPerson = displayMessage('Hello dear', 'Aneta', 'evening');
console.log(greetPerson);

let greetUser = userName => `Hello ${userName}`;

let message = () => 'This message has been created via arrow function!'


let msgButton = document.getElementById('displayMsgBtn');

msgButton.addEventListener('click', () => {
    let container = document.getElementById('myElement');
    // let logistics = message();
    container.innerHTML = message();
    console.log('Button clicked');
});


