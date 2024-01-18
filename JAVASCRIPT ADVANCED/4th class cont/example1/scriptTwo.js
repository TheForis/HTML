let colorButton = document.getElementById('colorChangerButton');
let loginButton = document.getElementById('loginButton');


let greeting = function (name) {
    return `Hello ${name}!`
}

let hello = greeting('Sirma');
console.log(hello);


let randomNumber = function(){
    return Math.floor(Math.random()*100);
}

let myRandomNumber = randomNumber()
console.log(myRandomNumber);


colorButton.addEventListener('click', function(){
    colorButton.style.backgroundColor = 'red';
    colorButton.style.color = 'yellow'
})

let logMessageIntoConsole = function (){
    console.log('A button was clicked');
}

loginButton.addEventListener('click', logMessageIntoConsole)


