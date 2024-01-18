function getStudentName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let firstStudent = getStudentName('John', 'Wayne');
console.log(firstStudent);



function getStudentDetails(firstName, lastName, academy = "DevOps Academy") {
    // return `The student ${firstName} ${lastName} is studying ${academy} at Qinshift`;
    return `The student ${getStudentName(firstName,lastName)} is studying ${academy} at Qinshift!`
}

let firstStudentDetailed = getStudentDetails('John', 'Wayne', 'Programming');
console.log(firstStudentDetailed);


function getStudentDetailsSecond(firstName, lastName, academy){
    function getStudentFullName(firstName,lastName) {
        return `${firstName} ${lastName}`
    }
    return `The student ${getStudentFullName(firstName, lastName)} is studying ${academy}`;
}


let test1 = getStudentDetailsSecond('Jill','Watne', ' programming')
console.log(test1);

