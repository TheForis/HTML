let header = document.getElementById('header');
let size = document.getElementById('textSize');
let color = document.getElementById('textColor');
let button = document.getElementById('button')


let headerColor = (element, color = 'black') => element.style.color = color;


let headerTextSize =(element, size = '24px') => {
    let finalSize = `${size}px`
    console.log(finalSize);
    element.style.fontSize = finalSize;
}

button.addEventListener('click', ()=>{
    headerColor (header, color.value);
    headerTextSize (header, size.value)
})