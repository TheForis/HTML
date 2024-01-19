let button = document.getElementById('button');
let paragraph = document.getElementById('result');
let userInput = document.getElementById('number');


(()=>{
    
    
    button.addEventListener('click', ()=>{
    let number = userInput.value;
    let result = factorialNumber(number);

    paragraph.innerHTML = ' ' + result;
    
})}
)()


let factorialNumber = (number) => {
    result = 1
    for (let i = 1; i <= number ; i++){
        result = result * i;
    }
    return result;
};