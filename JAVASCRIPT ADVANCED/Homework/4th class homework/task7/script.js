let input = document.getElementById('userInput');
let button = document.getElementById('button');
let result = document.getElementById('result');

let vowelChecker = (input) => {
    let result = 0;

    for (let i = 0; i < input.length; i++) {
        if(input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u'){
            result++
        }
    }
    return result;
}


button.addEventListener('click', () => {
    let userInput = input.value;
    let parsedInput = userInput.toLowerCase();
    let vowelResult = vowelChecker(parsedInput);
    result.innerHTML = `The Word/Sentence contains ${vowelResult} vowels.`;

})