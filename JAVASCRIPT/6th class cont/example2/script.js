let myButton = document.getElementById('myButton');
let mySecondButton = document.getElementById('mySecondButton');
let myDiv = document.getElementById('myDiv');




function btnClick() {
    alert('You clicked the button!')
    
}

myButton.onclick = btnClick;
mySecondButton.onclick = btnClick;

function greeting() {
    alert('Happy New Year');
    
}

function goodBye () {
    alert('Goodbye');
}

function hiGreeting() {
    alert('Hi!');
    
}

myDiv.onmouseover = greeting;

mySecondButton.onclick = greeting;
