let pass = 50;
let score = prompt('Please enter your score 0-100');
let hasPassed = score >= pass;
console.log(hasPassed);

let pass1 = 50;
let score1 = 90;
let hasPassed1 = !(score1 >= pass1);
console.log(hasPassed1);

console.log('----Logical AND');


console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('Logical OR');

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('Comparison');
console.log(!true);
console.log(!false);

let comparison1 = 5<10;
let comparison2 = 10!='10';
let comparison3 = 10!=='10';
console.log(comparison1);
console.log(comparison2);
console.log(comparison3);

console.log(comparison1 && comparison2);
console.log(comparison2 || comparison3);
console.log(!(comparison2 || comparison3));

console.log('Truthy Falsy');

console.log(false && (5==6));
console.log('cat' && 50);
console.log('cat' && 0);
console.log(0 && 'cat');


console.log(false || (5==6));
console.log('cat' || 50);
console.log('cat' || 0);
console.log(0 || 'cat');

if(hasPassed >true) {
    alert('Congratulations');

}