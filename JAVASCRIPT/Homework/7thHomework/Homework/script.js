let firstNameInput = document.getElementById('firstName').value;
let lastNameInput = document.getElementById('lastName').value;
let emailInput = document.getElementById('email').value;
let passwordInput = document.getElementById('password').value;
let button = document.getElementById('submitButton');
let resultButton = document.getElementById('resultButton');
let clearButton = document.getElementById('clearButton');
let list = document.getElementById('list');

const usersList = []
let usersFullList = []

function userCredentials (name, lastName, email, password){
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;

    this.user = function(){
        usersFullList.push(`User name: ${this.name},  Last name: ${this.lastName}, Email:${this.email}, password:${this.password}`)
    }
    this.userInfo = function(){
        usersList.push(`User name: ${this.name},  Last name: ${this.lastName}.`)
    }
}

function createUser(){
    let userInputs = document.getElementsByClassName('inputs');
    let users = []
    for (let i=0; i< userInputs.length; i++){
        users.push(userInputs[i].value);
    }
    let registerUser = new userCredentials(users[0],users[1],users[2],users[3])
    console.log(registerUser)
    registerUser.user();
    registerUser.userInfo();

}

function showUsersInHtml (users){
    for (i = 0; i < users.length; i++) {
        let li = document.createElement('li');
        li.innerText = users[i];
        list.appendChild(li);
    }
    console.log(users)
}

function clearHtml(inputs) {
    inputs.innerHTML = "";
}


button.addEventListener('click', function(){
   createUser();
})



resultButton.addEventListener('click', function(){
    showUsersInHtml(usersList);
})

clearButton.addEventListener('click', function(){
    clearHtml(list);
    console.clear();
})