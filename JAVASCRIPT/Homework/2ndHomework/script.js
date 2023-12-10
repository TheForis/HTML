console.log('----------1st task-> FIND THE MAXIMUM BEETWEEN TWO NUMBERS ----------');

let compareNumber1 = (parseFloat(prompt('Please enter the first number to be compared')));
let compareNumber2 = (parseFloat(prompt('Please enter the second number to be compared')));
 
if (compareNumber1 > compareNumber2){
    console.log('The maximum number is:', compareNumber1);
}
else if (compareNumber1 < compareNumber2){
    console.log ('The maximum number is:', compareNumber2);
}
else if (compareNumber1 = compareNumber2){
    console.log ("The numbers are equal and they are:", compareNumber1);
}

console.log('----------2nd task-> FIND THE MAXIMUM BETWEEN THREE NUMBERS ----------');

let compareNumber3 = (parseFloat(prompt('Please enter the third number to be compared')));

if (compareNumber1 > compareNumber2 && compareNumber1 > compareNumber3){
    console.log('The maximum number is:', compareNumber1);
}
else if (compareNumber1 < compareNumber2 && compareNumber2 > compareNumber3){
    console.log ('The maximum number is:', compareNumber2);
}
else if (compareNumber3 > compareNumber1 && compareNumber3 > compareNumber2){
    console.log ('The maximum number is:', compareNumber3);
}



console.log('----------3rd task-> NEGATIVE/POSITIVE/ZERO NUMBER ----------')

function getNumberStats (number){
    if(number > 0){
        return 'Positive';

    }else if (number < 0){
        return 'Negative';
    }else if (number === 0) {
        return 'Zero';
    }
    return 'Invalid number';

}

let inputNumber = prompt('Please enter a number to check whether is Positive, Negative or Zero');
let parsedNumber = parseInt(inputNumber);
console.log(getNumberStats(parsedNumber));



console.log('----------4th task-> PRINTING THE WEEK DAY ----------')

let inputDay = prompt('Enter day of the week (1-7)');
let parsedInputDay = parseInt(inputDay);

switch (parsedInputDay) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;    
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;    
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;    
    case 7:
        console.log('Sunday');
        break;
        
    default:
        console.log('Invalid input number');
        break;
}


console.log('----------5th task-> CHECK IF THE INPUT IS NUMBER OR NOT ----------');

let inputType = (parseFloat(prompt('Please enter a value: (number or ...')));

if (inputType > 0){
    console.log('It\'s a number!');
}

else if (inputType <0){
    console.log('It\'s a negative number!');
}
else {
    console.log('It\'s a string!');
}





console.log('----------6th task-> GRADING STUDENTS ----------')
let scorePhysics = parseFloat (prompt('Please enter your Physics score 0-100'));
let scoreChemistry = parseFloat (prompt('Please enter your Chemistry score 0-100'));
let scoreBiology = parseFloat (prompt('Please enter your Biology score 0-100'));
let scoreMathematics = parseFloat (prompt('Please enter your Mathematics score 0-100'));
let scoreComputer = parseFloat (prompt('Please enter your Computer score 0-100'));



let scoredPoints = (scorePhysics+scoreChemistry+scoreBiology+scoreMathematics+scoreComputer ) / 5;


if (scoredPoints <= 40){
    console.log('Your grade is F');
}
else if (scoredPoints <= 59) {
    console.log('Your grade is E');
}
else if (scoredPoints <= 69) {
    console.log('Your grade is D');
}
else if(scoredPoints <= 79) {
    console.log('Your grade is C');
}
else if(scoredPoints <= 89) {
    console.log('Your grade is B');
}
else if(scoredPoints <= 100) {
    console.log('Your grade is A');
}
else if(scoredPoints > 100){
    console.log('Please enter a valid marks!');
}
 

console.log('--------------------------------------');
console.log('--------------------------------------');
console.log('--------------------------------------');
console.log('----------Exercise #1 from class ----------');

let userInputMoney = prompt('Please enter how much money you have');

if (userInputMoney <= 100){
    console.log('You better stay at home :(')
}
else if (userInputMoney > 100000){
    console.log('You\'ve got enough money for exploring another country!')
}
else if (userInputMoney > 10000){
    console.log('You\'ve got enough money for exploring the country!')
}
else if (userInputMoney > 1000){
    console.log('You\'ve got enough money to go out for dinner')
}
else if (userInputMoney > 500){
    console.log('You\'ve got enough money to buy a lot of chocolate')
}
else if (userInputMoney> 100){
    console.log('You\'ve got enough money for chocolate')
}


console.log('----------Homework from the presentation ----------');

let userInputYear = prompt('Please enter your birth year');
let parsedUserInputYear = parseInt(userInputYear);
let zodiacCalculator = (parsedUserInputYear - 4) % 12;

switch (zodiacCalculator){
    case 0:
        console.log('Your Chinese Zodiac Sign is: RAT');
        break;
    case 1:
        console.log('Your Chinese Zodiac Sign is: OX');
        break;
    case 2:
        console.log('Your Chinese Zodiac Sign is: TIGER');
        break;
    case 3:
        console.log('Your Chinese Zodiac Sign is: RABBIT');
        break;
    case 4:
        console.log('Your Chinese Zodiac Sign is: DRAGON');
        break;
    case 5:
        console.log('Your Chinese Zodiac Sign is: SNAKE');
        break;
    case 6:
        console.log('Your Chinese Zodiac Sign is: HORSE');
        break;
    case 7:
        console.log('Your Chinese Zodiac Sign is: GOAT');
        break;
    case 8:
        console.log('Your Chinese Zodiac Sign is: MONKEY');
        break;
    case 9:
        console.log('Your Chinese Zodiac Sign is: ROOSTER');
        break;
    case 10:
        console.log('Your Chinese Zodiac Sign is: DOG');
        break;
    case 11:
        console.log('Your Chinese Zodiac Sign is: PIG');
        break;
}