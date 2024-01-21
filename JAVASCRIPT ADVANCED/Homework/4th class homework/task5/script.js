let input = document.getElementById('userInput');
let button = document.getElementById('button');
let result = document.getElementById('result');

// let splitSentence = (string) => string.split(' ');
// let joinSentence = (array) => array.join(' ');

let reverseSentence = (array) => {
    let result = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
        result += array[i];
        
    }
    return result;
}

button.addEventListener('click', ()=>{
    let userInput = input.value ;
    // let splitInput = splitSentence(userInput);
    // console.log(splitInput);
    let reversedUserSentence = reverseSentence(userInput);
    result.innerHTML = reversedUserSentence;
})


