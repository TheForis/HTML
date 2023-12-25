let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let phoneNumber = document.getElementById('phoneNumber');
let saveButton = document.getElementById('saveButton');
let tableBody = document.getElementById('tableBody');
let table = document.getElementById('table');

function phoneBookConstructor (name, lastName, phoneNumber){
    this.name = name;
    this.lastName = lastName;
    this.number = phoneNumber;

}

function tableAdd(array) {
    
    for (let i = 0; i < 1; i++) {
        let row = document.createElement('tr');
  
    for (let col = 0; col < array.length; col++) {
        let cell = document.createElement('td');
        let cellText = document.createTextNode(`Hello${array[i]}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
        tableBody.appendChild(row);
    }
  
  }

saveButton.addEventListener('click', function(){
    let newContact = new phoneBookConstructor(firstName.value, lastName.value, phoneNumber.value);
    console.log(newContact)
    tableAdd(newContact);
})