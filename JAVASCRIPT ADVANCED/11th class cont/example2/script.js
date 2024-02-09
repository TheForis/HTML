// (async function getUsers (){
//     let response = await fetch('https://dummyjson.com/users');
//     let data = await response.json()
//     console.log(data);
//     let userArray = (data.users)
//     console.log(userArray);
//     let user = userArray[0]
//     console.log(user);
//     // let id = userArray[0].id
//     // let firstName = userArray[0].firstName
//     // let lastName = userArray[0].lastName
//     // console.log(id, firstName, lastName);
    
//     const{ id, firstName, lastName } = user
//     console.log(id,firstName,lastName);
//     const{userFirstName,userLastName,age} = user;

//     console.log(userFirstName,userLastName,age);

//     let latitude = user.address.coordinates.lat
//     let longtitude = user.address.coordinates.lng

//     console.log(latitude,longtitude);

//     // const {lat,lng} = user.address.coordinates
//     // console.log(lat, lng);

//     const {city, coordinates:{ lat, lng}} = user.address
//     console.log(city, lat, lng);

//     // function getUserFullName(user){
//     //     console.log(`${user.firstName} ${user.lastName}`);
//     //     return `${user.firstName} ${user.lastName}`
//     // }
//     // getUserFullName(user)

//     function getUserFullName({firstName, lastName}){
//         return `${firstName} ${lastName} `
//     }
//     let userFullName = getUserFullName(user);
//     console.log(userFullName);




//     let newUser = userArray.find(data => data.id === 5)
//     console.log(newUser);

// })()

const testArray = [100,300,5_000,400,10_000];

const firstNum = testArray[0]
const secondNum = testArray[1]
const thirdNum = testArray[2]

console.log(firstNum,secondNum,thirdNum);


const [itemOne, itemTwo, itemThree] = testArray;

console.log(itemOne,itemTwo,itemThree);


const [firstDiv, , thirdDiv] = document.getElementsByClassName('arrayDemo');

const testArrayTwo = ['First string', 'Second string'];
const [firstString, secondString, thirdString] = testArrayTwo
console.log(firstString);
console.log(thirdString);
firstDiv.innerText = firstString;


// Spread operator (...)

console.log(Math.max(123,23,343,1000));
let numbers = [123,23,343,1000];
let max = Math.max(...numbers);
console.log(max);

const dogs = ['Bax','Ax', 'Chapo'];
const cats =['Zuza', 'Missy', 'Alice'];

let allPets = [...dogs, ...cats, 'Speedy'];
console.log(allPets.join());

const dogsCopy = [...dogs];
console.log(dogsCopy);
dogs.push(...dogsCopy)
console.log(dogs);

const dog = {
    name: 'Aks',
    beed: 'Pug'
}
const dogDescription = {
    group: 'Toy',
    origin: 'China'
}
const owner = {
    fullName: 'Ilija Mitev'
}

const dogInfo ={...dog,...dogDescription,...owner, isHappy: false }
console.log(dogInfo);


const students = ['Bob', 'Jill', 'John', 'Jogh', 'Steve'];

const [bob,jill, ...restStudents] = students;
console.log(restStudents);

function sum (...numbers){
    result = numbers + numbers
    return result;
}

