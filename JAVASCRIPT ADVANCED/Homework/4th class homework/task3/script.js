

let numberArray = [2,5,10,16,70];


let squareOfNumbers = (array) => {
    let resultArray = [];
    for (const number of array) {
        let squareResult = number * number;
        resultArray.push(squareResult);
        console.log(squareResult);
    }
    return resultArray;
}

let result = squareOfNumbers(numberArray);
console.log(result);