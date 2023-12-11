console.log('--------looping structures --------');



console.log('--------while loop--------');

// while (condition){
//     //code to be executed
// }

let counter = 1;
while (counter <= 5){
    console.log(counter);
    counter ++;
}


let students= ['Bob Bobsky', 'John Johnsky', 'Petko Petkovski'];

let studentCounter = 0;
while (studentCounter < students.length){
    console.log(`Student number ${studentCounter + 1}: ${students[studentCounter]}`);
    studentCounter ++;
}


let doWhileCounter = 0;

do{ 
    console.log(doWhileCounter)
    doWhileCounter++;
} while(doWhileCounter <5);

do{
    console.log(`Student number ${doWhileCounter + 1}: ${students[doWhileCounter]}`);
    doWhileCounter++
} while(doWhileCounter <= students.lenght)



for (let i=0; i<5; i++){
    console.log(i);
}

for (let i=5; i>=0; i--){
    console.log(i);
}


let cities = ['Skopje', 'Miami', 'Tokyo', 'Prilep'];

for (let i=0; i < cities.length; i++){
    let cityInfo = `city #${i +1}: ${cities[i]}`
    if (cities[i] === 'Miami'){
        cityInfo += "=> I would like to go there ;)"
    }
    else if(cities[i] === 'Skopje'){
        cityInfo += " => I'm living here!!"
    }
    console.log(cityInfo)
}


for (let city of cities) {
    console.log(city);
}


let numbers= [ 1, 23, 43 ,44, 50, 30, 40, 24]

for (let j=0; j<numbers.length; j++){
    if (numbers[j] === 40) {
        console.log(`Found 40 at index #${j}!`);
        break;
    }
    console.log(`The number ${numbers[j]} is not 40`);
}

for (let number of numbers){
    if(number %4 === 0){
        console.log(`The number ${number} is divisable by 4`);
        continue;
    }
    console.log(`The number ${number} is not divisable by 4`);
}