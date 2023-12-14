let ourHeader = document.getElementById("myTitle");
console.log(`Our header text: ${ourHeader.innerHTML}`);

ourHeader.style.border = '1px solid black';
ourHeader.style.backgroundColor = 'red';
ourHeader.innerText += ' This is text from JS';

console.log('================================');

let ourParagraphs = document.getElementsByClassName('myParagraph');
console.log(`Our paragraphs lenght : ${ourParagraphs.length}`);
console.log(`our first paragraph first element: ${ourParagraphs[0].innerHTML}`);
ourParagraphs[0].innerText += ' But what if i want to change????';

let paragraphs = document.getElementsByTagName('p');
console.log(`parapgraphs lenght ${paragraphs.length}`);

console.log('================================');
console.log('================================');
console.log('================================');

let firstDivWithClass = document.querySelector('.myDiv');
console.log(firstDivWithClass);

let ourDivs = document.querySelectorAll('.myDiv');

console.log(ourDivs[1]);
console.log(ourDivs[0]);
console.log(ourDivs);


console.log ('=========siblings===========');
let header = document.getElementsByTagName('h1')[0];
console.log(header);

let nextSibling = header.nextElementSibling;
console.log(nextSibling);



let children = document.getElementById('main').children;
console.log(children);