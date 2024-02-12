class Academy{
    constructor(name, students, subjects, startDate, endDate){
        this.name = name;
        this.students = students;
        this.subjects = subjects;
        this.startDate = startDate;
        this.endDate = endDate;
        this.numberOfClasses = this.subjects.length * 10;
    }
    printStudents(){
        console.log(this.students);
    }
    printSubjects(){
        console.log(this.subjects);
    }
}





class Subject{
    constructor(title,isElective,academy,students){
        this.title = title;
        this.numOfClasses = 10;
        this.isElective = isElective;
        this.academy = academy
        this.students = students

    }
    overrideClasses(number){
        number > 2 ? this.numOfClasses = number : console.log('Enter number larger than 3');
    }
}

class Student{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects= [];
        this.academy = null;
        this.currentSubject = null;
    }
    start
}
let students =['Boris','Sahso','Sirma']
let math = new Subject ('Mathemathics', true, 'Qinshift',students)
console.log(math);
math.overrideClasses(15)
console.log(math);