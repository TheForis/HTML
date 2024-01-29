console.log('Hello');

let resultContainer = document.getElementById('container');
let button = document.getElementById('button');


function performAsyncOperation(callback){
    console.log('Async operation started...');
    setTimeout(() => {
        const result = '_____<><_____';
        callback(result);
    }, 3000   );
    console.log('... Processing ...');
}


performAsyncOperation(callBackFunction);

function callBackFunction (stringItem){
    console.log(stringItem);
    resultContainer.innerHTML += stringItem
}

button.addEventListener('click', () =>{
    console.log('clicked');
    resultContainer.innerHTML += '_____><>_____'
})

let testArray = [1,2,3,4,5];
testArray.forEach( (data) => resultContainer.innerHTML += data);


