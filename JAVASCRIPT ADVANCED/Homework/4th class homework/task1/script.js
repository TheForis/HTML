let numberOfDigits = (num) =>  {
    if (num < 0 ){
        let result = ('' + num).length;
        let correctedResult = result - 1
        return correctedResult;
    }
    else{
    let result = ('' + num).length;
    return result;
    }
}

let evenOrOddNumber = (num) => {
    if (num % 2 === 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}


let positiveOrNegativeNumber = (num) => {
    if(num < 0) {
        return 'Negative';
    }
    else{
        return 'Positive';
    }
}


let numberChecker = (num) => {
    let digitsResult = numberOfDigits(num);
    let evenResult = evenOrOddNumber(num);
    let positiveResult = positiveOrNegativeNumber(num);
    return `The Number ${num} has ${digitsResult} digits, it is ${evenResult} and it\'s ${positiveResult} number!`
}



let userInput= prompt('Please enter a number to be checked!');
let parsedUserInput = parseInt(userInput);
let userResult = numberChecker(parsedUserInput);
console.log(userResult);

