let score = 70;
// let score = 110
if (score < 100){
    console.log('You lost the game!');

}

let points = 55;
// let points = 85;
if(points> 60){
    console.log('You passed the exam!');
}
else {
    console.log('You\'ve failed the exam');
}


let scoredPoints = prompt('Enter your score')
// let scoredPoints = 82;
if (scoredPoints <= 60){
    console.log('You failed');
}
else if (scoredPoints <= 70) {
    console.log('Your grade is D');
}
else if(scoredPoints <= 80) {
    console.log('Your grade is C');
}
else if(scoredPoints <= 90) {
    console.log('Your grade is B');
}
else {
    console.log('Your grade is A');
}
 
console.log(typeof scoredPoints)

const parsedUserInput = (parseFloat(prompt("enter your number")))
console.log(parsedUserInput)
console.log(typeof parsedUserInput)
