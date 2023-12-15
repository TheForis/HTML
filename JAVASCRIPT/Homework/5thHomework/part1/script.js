let allHeaders = document.getElementsByTagName('h1');
console.log(`h1 lenght ${allHeaders.length}`);
console.log(allHeaders[0].innerHTML);
allHeaders[0].innerText = 'First header changed';
allHeaders[1].innerText = 'Second header changed';


let allParagraphs = document.getElementsByTagName('p');
allParagraphs[0].innerText = 'This was really changed!';
allParagraphs[1].innerText = 'This was really really really changed in JavaScript!';




function sumArray(array) {
    let sum = 0;
    for (const el of array) {
    sum += el;
    }
    return sum;
}


let numberArray = [2, 4 , 5];
let resultFromArray= sumArray(numberArray);
console.log(resultFromArray);

console.log(numberArray)

let showArrayInHtml = document.getElementById('fullArray');
showArrayInHtml.innerText = `The entered array is: ${numberArray}`;

let showArraySum = document.getElementById('sumResult');
showArraySum.innerText += resultFromArray;

let showEquasion= document.getElementById('equasion');
showEquasion.innerText = `${numberArray[0]}+${numberArray[1]}+${numberArray[2]} = ${resultFromArray} `