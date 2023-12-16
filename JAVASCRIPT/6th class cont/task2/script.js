let myButton = document.getElementById('button');
let myParagraph = document.getElementById('paragraph')

console.log(myParagraph.innerText)

myButton.addEventListener('click', function(){
    myParagraph.style.backgroundColor = "green";
});