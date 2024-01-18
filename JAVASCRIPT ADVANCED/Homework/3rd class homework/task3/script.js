let button = document.getElementById('button');
let printName = document.getElementById('name');
let container = document.getElementById('container')

function printInfo (){
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
    let tableRow = document.createElement('tr');

    let columnInfo = ["Height", "Weight", "Eye Color", "Hair Color"];

    for (let i=0; i<4; i++){
        let column = document.createElement('th');
        let cell = document.createElement('td');
        let columnText = document.createTextNode(columnInfo[i]);
        
        tableRow.appendChild(cell);
        cell.setAttribute('id', i)
        column.appendChild(columnText);

        tableBody.appendChild(column);
    }
    tableBody.appendChild(tableRow);
    table.appendChild(tableBody);

    container.appendChild(table);

    table.setAttribute('border', '2');
    table.style.width = '350px';
    table.style.height = '200px';

}





button.addEventListener('click', function(){
    button.disabled = true
    fetch("https://swapi.dev/api/people/1")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){
        console.log(response);
        printName.innerText = response.name;
        printInfo();

        let height = document.getElementById('0');
        let weight = document.getElementById('1');
        let eyeColor = document.getElementById('2');
        let hairColor = document.getElementById('3');

        
        height.innerText = response.height;
        weight.innerText = response.mass;
        eyeColor.innerText = response.eye_color;
        hairColor.innerText = response.hair_color;
        
    })
    .catch(function(error){
        console.error(error);
    })


})