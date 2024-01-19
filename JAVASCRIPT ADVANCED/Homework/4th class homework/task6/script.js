let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => `Hello ${name}`, -Infinity, ['hi', 28, -93, true], {}, 'name: "Bob" ', 'age',23, {}, undefined, 14, null, 159, 0, -11];


let cleanArray = (array => {
    let result =[];
    for (let i=0; i<array.length ; i++) {
        if (typeof array[i] === 'number'){
            if(array[i] > 0){
            result.push(array[i]);
            }
        }
    }
    return result;

})

let multiplyNumbers = (array)=> {
    let result =[];
    for (let i = 0; i < array.length; i++) {
        let multiplyResult = array[i] * 2 ;
        result.push(multiplyResult);
        
    }
    return result;
}

let result = multiplyNumbers(cleanArray(array));

console.log(result);


  