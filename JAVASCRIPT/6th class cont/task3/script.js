let myButton = document.getElementById('button');
let paragraph = document.getElementById('result');

myButton.addEventListener('click',function(){
    let userInputs = document.getElementsByClassName('inputs');
    let valueResult = [];
    for (let i=0; i< userInputs.length; i++){
        valueResult.push(userInputs[i].value);
    }
    console.log(valueResult);
    paragraph.innerText += valueResult.join('  ');
    console.log(paragraph)
})


