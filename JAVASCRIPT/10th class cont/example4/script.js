let button = document.getElementById('getData');
let paragraph = document.getElementById('paragraph');

function fetchRequest(){
    fetch('https://swapi.dev/api/people/2/')
    .then(response => {;
        return response.json();     
    })
    .then(data => {
        console.log(data);
        paragraph.innerHTML = `${data.name} \n ${data.height}cm  ${data.skin_color}`
    })
    .catch(error => {
        console.log('error, please try again later');
    })
}

button.addEventListener('click', fetchRequest);