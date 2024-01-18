let callBtn = document.getElementById("callBtn");
let result = document.getElementById("result");

function printAcademy(resultElement, academy) {
    let resultTitle = resultElement.getElementsByTagName("h1")[0];
    resultTitle.innerText = `${academy} Academy`
}

function printStudents(resultElement, students) {
    let resultList = resultElement.getElementsByTagName("ul")[0];
    resultList.innerHTML = "";
    for (let student of students) {
        resultList.innerHTML += `<li>${student}</li>`
    }
}

callBtn.addEventListener("click", function() {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (response) {
        console.log("Success from good way!")
        console.log(response);
        printAcademy(result, response.academy);
        printStudents(result, response.students);
    })
    .catch(function (error) {
        console.error(error);
    })
})
