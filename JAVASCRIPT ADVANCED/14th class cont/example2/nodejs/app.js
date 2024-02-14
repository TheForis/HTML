let colors = require('colors');


console.log('Hello world!'.green);
// console.log(global);

let getRandomNumber = ()=>{
    return Math.floor(Math.random() * 100);
}
let displayNumber = (num) =>{
    if(num % 2 === 0) {
        console.log(`The ${num} is even`.green);
    }else{
        console.log(`The ${num} is odd`.red);
    }
}
let randomnumber = getRandomNumber();
displayNumber(randomnumber);