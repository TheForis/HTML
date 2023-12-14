function weightInChickens(input) {
    const chickensWeight = 0.5 ;
    result = input / chickensWeight;
    return result;
}

let userInput= prompt('Please enter your weight');
let parsedInput = parseInt(userInput);
let chickenWeightCalculator = weightInChickens(parsedInput);

// console.log(chickenWeightCalculator);

let paragraphInput = document.getElementById('htmlNumber');
let paragraphResult = document.getElementById('htmlResult');
paragraphInput.innerText += userInput
paragraphResult.innerText += chickenWeightCalculator
paragraphResult.innerText += 'kokoski'