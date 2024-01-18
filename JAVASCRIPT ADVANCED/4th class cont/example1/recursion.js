function sumToNumber (num){
    if ( num ==0){
        return 0;
    }
    return num + sumToNumber(num-1)
}

const sumResult = sumToNumber(9671);
console.log(sumResult);



function factoriel (n){
    if (n === 0) {
        return 1;
    }
    return n* factoriel(n-1);
}

const sumFac = factoriel (9671);
console.log(sumFac);


// function fibonaci (n){
//     if (n === 0) {
//         return ;
//     }
//     let result = ((n-1)+(n-2));
//     return result + (n-1);
// }

// let fibonaciResult = fibonaci (500)
// console.log(fibonaciResult);