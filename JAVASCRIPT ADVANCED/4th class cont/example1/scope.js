let a ='hello'

function greet(){
    return 'Hello world'
}

let greetArrow = () => 'Hello World';


function sumArrayOfNumbersBlock (array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        
        sum += array[i]
        
    }
    console.log(sum);
}

sumArrayOfNumbersBlock([1,2,3,4,5,6]);

let two = 2;

function addFive(number){
    console.log(two + number);

    function addTen (number){
        console.log(number + 10);
    }
    addTen(number);
}

addFive(2);