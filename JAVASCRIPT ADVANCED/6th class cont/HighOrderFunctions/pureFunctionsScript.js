num1 = 10;
num2 = 30;

// Impure function
function add() {
    return num1 + num2;
};



function pureAdd(a,b) {
    return a + b;
};
add(5,10)

let total = 0
function addToTotal(value) {
    total += value;
    return total;
}

console.log(addToTotal(10));
console.log(addToTotal(10));

let array =[1,2,3];

function addToArray(element) {
    array.push(element);
    return array;
}

addToArray(4);
console.log(array);

let newArray = addToArray(5);
console.log(array);

function addToArray2(array, element) {
    let newArray2 = [...array];
    console.log(newArray2);
    newArray2.push(element);
    return newArray2;

}

let newArray3 = addToArray2(array,6);

console.log(newArray3);

// impure

function changeHeading() {
    document.getElementById('sample').innerHTML = 'We changed the heading';
};

changeHeading();