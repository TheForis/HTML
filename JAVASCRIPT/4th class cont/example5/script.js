

let tenNumbers = [1, 23, 234, 532, 12, 452, 564_4, 450_5, 4352_450, 212];

function findLargestValue(array) {
    let index = 0;
    let max = -Infinity; //array

    while (index < array.length){
        if(array[index] > max){
            max = array[index];
        }
        index++;
    }
    console.log(`The largest number is ${max}`);
}

findLargestValue(tenNumbers);