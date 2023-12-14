let firstDiv = document.getElementById('first');

let allParagraphs = document.getElementsByTagName('p');

let allDivs = document.getElementsByTagName('div');
let lastDiv = allDivs[allDivs.length - 1];

console.log(lastDiv);

let children = lastDiv.children;
let thirdHeader = children[0];
let firstHeader = children[1];

console.log(thirdHeader.innerHTML);

let secondDivText = document.getElementsByClassName('second')[0].nextElementSibling;
console.log(secondDivText)
let paragraphText = document.getElementsByClassName('second')[0];
console.log(paragraphText.innerText);



// let secondDivText = paragraphText.
// console.log(secondDivText)