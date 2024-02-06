const resultContainer = document.getElementById('resultContainer');
const hResult = document.getElementById('resultTitle');


// function success (data) {
//     console.log('Resource FOUND',data);
// }

// function fail (error) {
//     console.log('Resource NOT FOUND',error);
// }




// function fetchResource (url, successCallBack, failureCallback){
//     fetch (url)
//     .then(response => response.json())
//     .then(result => {
//         //  console.log(result)
//         successCallBack(result);


// })
// .catch(error => {
//     // console.log(error)
//     failureCallback(error);



// })
// }


// fetchResource('https://jsonplaceholder.typicode.com/users', users => {
//     console.log('Users found', users);
//     resultContainer.innerHTML = users.map(data => data.name)
//     fetchResource('https://jsonplaceholder.typicode.com/todos', todos =>{
//         console.log('To Do\'s FOUND', todos);
//     },fail)
//     fetchResource('https://jsonplaceholder.typicode.com/posts', posts => {
//         console.log('Post\'s FOUND',posts);
//     },fail)

//     },fail)


    // PROMISES
// --------------------------------------------------

const randomNumberPromise =  new Promise((resolve, reject) =>{ 
    const num = parseInt( Math.random()*100);
    console.log(num);
    hResult.innerHTML += ` is ${num}`
    if(num >= 50){
        resolve('Promise is FULFILED');
    } else {
        reject('Promise FAILED!');
    }
})

function handleResolve (value){
    console.log(value);
    resultContainer.innerHTML = value
}

function handleReject (value){
    console.error(value);

    resultContainer.innerHTML = value;
}

randomNumberPromise.then(handleResolve,handleReject);




