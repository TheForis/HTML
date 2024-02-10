
function Person(id, firstName, lastName, age){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age= age;
    
    this.getFullName = function(){
        // console.log(`${this.firstName} ${this.lastName}`);
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person (1, 'Dino', 'Nikolovski', 28);

function Employee(id, firstName, lastName, age, division){
    Object.setPrototypeOf(this, new Person(id, firstName, lastName, age));
    this.division = division;
    this.work = function(){
        console.log(`The employee ${this.firstName} with id:"${this.id}" is working in ${this.division} division.`);
    }
}
console.log(Employee);

const boris = new Employee(2,'Boris', 'Krstovski', 32, 'cleaning')
console.log(boris);
boris.work()

let employee1 = new Employee(3,'Ema','Cvetkovska', 30, 'HR');
let employee2 = new Employee(4,'Bejtula','Zekiri', 35, 'Finance');

function Manager (id, firstName, lastName, age, division, team){
    Object.setPrototypeOf(this, new Employee(id, firstName, lastName, age, division));
    this.team = team;
    this.assignTask = function(task){
        console.log(`The manager ${this.getFullName()} from ${this.division} assigned ${task} to ${this.team}`);
    }
}

let manager = new Manager (0, 'Davor', 'Puzhovski', 20, 'development', 'code sprinters')

manager.assignTask('LUPENJE PORTOKALI');