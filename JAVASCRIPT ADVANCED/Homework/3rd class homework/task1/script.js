console.log('test');
let button = document.getElementById('button');
let userInput = document.getElementById('checker');
let container = document.getElementById('container');
let result = document.getElementById('result');

function checker(input, array){
    for (let i= 0 ; i < array.length ; i++) {
        if (input == array[i]) {
            console.log('Found');
            result.innerHTML = `The movie:${input} can be rented!`;
            result.style.color = "green";
            break;

        }
        else {
            console.log('Not found');
            result.innerHTML = `The movie:${input} can't be rented`;
            result.style.color = "red"

        }
    }
}

let movieContainer = ['interstellar', 'godfather','home alone', 'the departed', 'barbie', 'oppenheimer', 'spiderman', 'batman'];


button.addEventListener('click', function(){
    let input= userInput.value;
    let parsedInput = input.toLowerCase();
    console.log(parsedInput);
    checker(parsedInput, movieContainer);
})