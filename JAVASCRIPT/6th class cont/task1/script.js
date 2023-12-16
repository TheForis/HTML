// let myName = prompt('Please enter Your name');
let myButton = document.getElementById('nameButton');

function greeting() {
    let myName = prompt('Please enter Your name');
    alert(`Hello ${myName}`);
}


myButton.addEventListener('click', function(){
   greeting();
};