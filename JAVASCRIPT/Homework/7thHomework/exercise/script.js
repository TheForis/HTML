let studentName = document.getElementById('firstName');
let studentLastName = document.getElementById('lastName');
let studentAge = document.getElementById('studentAge');
let saveButton = document.getElementById('saveButton');
let showList = document.getElementById('showListButton');
let resetList = document.getElementById('resetButton');
let studentList = document.getElementById('studentList');


let studentListFinal= [];

function registerStudents(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    listResult = `Name:${this.name}; Last name:${this.lastName};  age:${this.age}`;
    studentListFinal.push(listResult);
    console.log(listResult);
    
    
}




function showFinalList(array){
    
    for (i = 0; i < array.length; ++i) {
        let li = document.createElement('li');
        li.innerText = studentListFinal[i];
        studentList.appendChild(li);
    }
};




studentName.addEventListener('focus', function(){
    studentName.value='';
})

studentLastName.addEventListener('focus', function(){
    studentLastName.value='';
})

studentAge.addEventListener('focus', function(){
    studentAge.value='';
})



saveButton.addEventListener('click', function(){
    registerStudents(studentName.value, studentLastName.value, studentAge.value);

})

showList.addEventListener('click', function(){
    showFinalList(studentListFinal);
    console.log(studentListFinal);
})

resetList.addEventListener('click', function(){
    
    window. location. reload();
})

resetList.addEventListener('mouseover',function(){
    this.textContent = 'Cannot make it work to clear only this part and not reload';
})

