let myInput = document.getElementById('myInput');
let myButton = document.getElementById('myButton');

function focusGreeting() {
    alert('Focus on input');
    
}
function blurGreeting() {
    alert('input lost focus');
    
}

function buttonClicked() {
    alert('button clicked');
    
}

function secondButtonClicked(){
    alert('Button clicked, but from the second function!');
}

// myInput.addEventListener('focus', focusGreeting);
myInput.addEventListener('blur', blurGreeting);

// myButton.addEventListener('click', buttonClicked);
// myButton.addEventListener('click', secondButtonClicked);

// myButton.addEventListener('click', function(){
//     alert('Hello from our event listener in the annonymus function!')
// })

// myButton.addEventListener('click', function(){
//     buttonClicked();
//     secondButtonClicked();
//     alert('Hello again from our event listener in the second annonymus function!')
// });

myButton.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
});

myButton.remove