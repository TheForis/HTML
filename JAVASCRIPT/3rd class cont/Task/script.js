let num1 = parseInt(prompt('enter first number'));
let numb2 = parseInt(prompt('enter second number'))


function sum(number1, number2) {
    let result = number1 + number2;
    return result;   
}
let result = sum(num1,numb2);
console.log (`Result is: ${result}`)




function substract(number1, number2) {
    let result = number1 - number2;
    return result;  
}
let result2 = substract(10,5);
console.log (`Result is: ${result2}`)





function multiply(number1, number2) {
    let result = number1 * number2;
    return result;  
}
let result3 = multiply(5,10);
console.log (`Result is: ${result3}`)




function divide(number1, number2) {
    let result = number1 / number2;
    return result;    
}
let result4 = divide(20,5);
console.log (`Result is: ${result4}`)
