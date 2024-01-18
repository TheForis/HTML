function generateNumbersDivByThree (){
    let result = []
    for(let i=0; i < 1000; i++){
        if(i % 3 ===0){
            result.push (i);
        }
    }
    console.log(result)
    return result;
}

generateNumbersDivByThree()


function generateEvenNumbers(){
    let result = []
    for (let i=0; i<1000 ; i++){
        if(i % 4 === 0 && i % 2 === 0 ){
            result.push (i);
        }
    }
    console.log(result);
    return result;
}

generateEvenNumbers()

function generateNumberThatEndByOne (){
    let result = []
    for(let i=0; i < 1000; i++){
        if(i %10 ===1){
            result.push (i)
        }
    }
    console.log(result);
    return result;
}

generateNumberThatEndByOne()

function showStrings(array){
    let result =[];
    for(let i=0; i < array.length; i++){
        if(typeof array[i] === 'string'){
            result.push(array[i])
        }
    }
    return result;

}

function showNumbers(array) {
    let result =[];
    for(let i=0; i<array.length; i++){
        if(typeof array[i]=== "number"){
            result.push(array[i]);
        }
    }
    return result;
    
}

function cleanFalsy(array) {
    let result = [];
    for(let i=0 ; i < array.length; i++){
        if(array[i]){
            result.push(array[i]);
        }
    }
    
    return result;
    
}



let testArray = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

let showStringsFromArray = showStrings(testArray);
console.log(showStringsFromArray);


let showNumbersFromArray = showNumbers(testArray);
console.log(showNumbersFromArray);

let cleanArray = cleanFalsy(testArray);
console.log(cleanArray);



let filteredResult = testArray.filter(Boolean);
console.log(filteredResult);