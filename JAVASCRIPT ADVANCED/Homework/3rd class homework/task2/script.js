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
        console.log(array);
        
    }}
}

saveReminderButton.addEventListener('click', function(){
    let reminder = new Reminder (reminderTitle.value, reminderPriority.value, reminderColor.value, reminderDescription.value);
    reminderContainer.push(reminder);

console.log(reminderContainer);
})


showRemindersButton.addEventListener('click', function(){
    printInfo(reminderContainer);
})
