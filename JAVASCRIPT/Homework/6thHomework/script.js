let rowNumber = document.getElementById('rows');
let columnNumber = document.getElementById('columns');
let myButton = document.getElementById('button');
let myClearButton = document.getElementById('buttonClear');


function generateTable() {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
  
    for (let i = 0; i < rowNumber.value; i++) {
        let row = document.createElement('tr');
  
      for (let col = 0; col < columnNumber.value; col++) {
        let cell = document.createElement('td');
        let cellText = document.createTextNode(`cell in row ${i+1}, column ${col+1}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
        tableBody.appendChild(row);
    }
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
    table.setAttribute('border', '2');
    table.style.backgroundColor = 'antiquewhite'
  }

myButton.addEventListener('click', function(){
    generateTable();
})

myClearButton.addEventListener('click', function(){
    window. location. reload();
})