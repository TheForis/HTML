console.log('---------HOMEWORK #1---------');

function tellStory (name, age, mood, activity) {
   let story = `Meet ${name}. ${name} is ${age} years old. Today ${name} is feeling ${mood}. Tomorrow ${name} will be ${activity} for the whole day! Fin.`;
   
   return story;
    
}

let userName = prompt("Please enter your name:");
let userAge = prompt("Please enter your age:");
let userMood = prompt("Please enter your mood:");
let userActivity = prompt("Please enter what activity you've got tomorrow");
let storyResult = tellStory(userName, userAge, userMood, userActivity);
console.log(storyResult)





console.log('---------HOMEWORK #2---------');

const arrayNumbers = [5, 4, 6, 1, 7];

function sumArray(array) {
    let sum = 0;
    for (const el of array) {
    sum += el;
    }
    return sum;
}
console.log(`The sum of the array containing the numbers:${arrayNumbers} is ${sumArray(arrayNumbers)}`);



console.log('---------HOMEWORK #3---------');

let strings = ['Hello', 'to', 'all', 'Quinshift', 'students', '!'];
for(let text of strings){
    console.log(text);
    }
console.log('---------HOMEWORK #4---------');









console.log('---------HOMEWORK #5---------');






console.log('---------HOMEWORK #6---------');