function numberCount(number, array) {
    let counter = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === number){
            counter++;
        }
    }
    return counter;
}
let input = parseInt(prompt("Enter a number:"));
let testArray = [2, 5, 6, 3, 5, 5, 2, 5, 7, 8, 2, 5];
console.log(`There are ${numberCount(input, testArray)} occurences of ${input} in the array!`);


function sum(array){
    let result = '';
    for (let i=0; i<array.length; i++){
        result = result + array[i];
    }
    return result;
}

let newArray= ['hello', ' from', ' inside', ' the', ' array']
console.log(sum(newArray))
