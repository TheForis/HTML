// SYNCHRONO izvrshuvanje na kod

function first() {
    console.log('First thing!');
}

function second() {
    console.log('Second thing!');
}


first();
second();


// ASUNCHRONIOUS IZVRSHUVANJE  toest chekanje    function - hoisting! - gi nosi funkciite najgore sekogash

console.log('==================================');

setTimeout(() => {
    console.log('Hello after 5 seconds');
}, 5000);

// setInterval(() => {
//     console.log('This is printed every second');
// }, 100);


console.clear();

function greet(name){
    setTimeout(() => {
        alert(`Hello ${name}`)
    }, 2500);
}

// greet("Slave");
// console.log('This is printed before the function');

console.log(1);
console.log(2);
console.log(3);