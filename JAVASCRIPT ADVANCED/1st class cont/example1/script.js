// array

let numberArray = [1,2,30];
console.log(numberArray)
console.log(numberArray[2])
console.log(typeof numberArray)





let objetArray= [
    {id:1, firstName:'Bob', lastName:'Bobsky'},
    {id:1, firstName:'Boba', lastName:'Bobsky'},
]

console.table(objetArray)
console.log(objetArray[1].firstName + ' ' + objetArray[1].lastName );

function sum(num1, num2){
    return num1+num2
}

function substract(num1, num2){
    return num1-num2
}

let functionsArray = [
    sum,
    substract
    
]

let whileTestArray = [2,23,42,50,6];
let counter = 0;
while (counter < whileTestArray.length){
    console.log(whileTestArray[counter]);
    console.log(`The counter is now at ${counter}`)
    counter++;
}

// let input = '';
// do {
//     input = prompt('Enter Name')
// }while(input === '' );

let students = ['Sirma', 'Slavko', 'Boris', 'Saso', 'Valdimir', 'Marija']

for( let i=0; i < students.length; i++){
    console.log(`Students #${i+1}. Student ${students[i]}`)
    // console.log(`Students #${students.indexOf(students) + 1}. Student ${students[i]}`)
}
