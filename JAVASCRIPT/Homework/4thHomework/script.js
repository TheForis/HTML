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

let strings = ['Hello', ' to', ' all', ' Quinshift', ' students', '!'];
function sumStrings(array){
    let result = '';
    for (let i=0; i<array.length; i++){
        result = result + array[i];
    }
    return result;
}
 console.log(sumStrings(strings));


 
console.log('---------HOMEWORK #4---------');

for (let i=1; i<=20; i++){
    if (i % 2 === 0){
        console.log(i,);
        console.log('\n');
        
        
    }
    else{
        console.log(i , ' ');  
    } 
}



console.log('---------HOMEWORK #5---------');

function minMaxSum(array) {
    let index=0;
    let max = -Infinity;
    let min = Infinity;
    
    while (index < array.length){
        if (array[index] > max){
            max = array[index];
        }
        if (array[index]< min){
            min = array [index]
        }
        index++;
    }
    let result = (max + min);
    console.log(`Output:Max: ${max}, Min: ${min}, Sum:${result}`)
}

let minMaxArray = [3, 5, 6, 8, 11, 59 , 32 , 2];
minMaxSum(minMaxArray);




console.log('---------HOMEWORK #6---------');

function sumName(firstName, last) {
    let nameCounter = 0
    let result= []
    while (nameCounter < firstName.length){
        result = [(`${nameCounter + 1}. ${firstName[nameCounter]} ${last[nameCounter]}`)];
        nameCounter++;
        
    console.log(result)
    }
}

let firstNameArray = ['Bob', 'Jill', 'Ane', 'Tose'];
let lastNameArray = ['Gregory', 'Wurtz', 'Stankovska', 'Pelivanov'];

sumName(firstNameArray, lastNameArray);


