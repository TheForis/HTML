let reminderTitle = document.getElementById('title');
let reminderPriority = document.getElementById('priority');
let reminderColor = document.getElementById('color');
let reminderDescription = document.getElementById('description');
let tableBody = document.getElementById('tableBody');

let saveReminderButton = document.getElementById('saveButton');
let showRemindersButton = document.getElementById('showAllButton');


let reminderContainer = []


function Reminder (title, priority, color, description){
    this.title = title;
    this.priority = priority;
    this.color = color;
    this.description = description;

}

function printInfo(array){
    if (array == 0){
        alert('There are no reminders')
    }
    else {
    for(let i=0; i < array.length; i++){
        let row = document.createElement('tr');
        
        for (let cells = 0; cells < 3; cells++ ){
            if (cells == 0){
                let cell = document.createElement('td');
                let cellText = document.createTextNode(array[i].title);
                cell.appendChild(cellText);
                row.appendChild(cell);
                cell.style.color = array[i].color
            }
            else if (cells == 1){
                let cell = document.createElement('td');
                let cellText = document.createTextNode(array[i].priority);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (cells == 2){
                let cell = document.createElement('td');
                let cellText = document.createTextNode(array[i].description);
                cell.appendChild(cellText);
                row.appendChild(cell);
        }

        }
        tableBody.appendChild(row);
    }



}
}

saveReminderButton.addEventListener('click', function(){
    if (reminderTitle.value == '' || reminderDescription.value == '' || reminderPriority.value == '' ){
        alert('Please fill out every field!')
    }
    else {
    let reminder = new Reminder (reminderTitle.value, reminderPriority.value, reminderColor.value, reminderDescription.value);
    reminderContainer.push(reminder);
    }




    reminderTitle.value = '';
    reminderPriority.value = '';
    reminderColor.value = '#000000';
    reminderDescription.value = '';

})


showRemindersButton.addEventListener('click', function(){
    tableBody.innerHTML = ''
    printInfo(reminderContainer);
})
