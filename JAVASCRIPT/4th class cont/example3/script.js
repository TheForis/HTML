console.log('');
console.log('-----------------Creating an Array----------');

let emptyArray =[];
console.log(emptyArray);
console.log((typeof emptyArray));
console.log(emptyArray.lenght);

let fruits = ['Orange', 'Apple', 'Pear', 'Strawberry'];
console.log(fruits);
console.log(fruits.length);

let days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]
console.log(days);
console.log(days.length);

let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(digits);


// DON'T DO THIS
let mix = [1, 2, 3, true, 'Wow is this possible?', false, null, 500, 'Yes it is, it\'s JavaScript ;)'];
console.log(mix);

console.log('');
console.log('-----ACCESSING ITEMS IN ARRAY---------');
// by index -> every item has its own index!!!

console.log(days[2]);
console.log(days[0]);
console.log(days[1]);

let someDay = days[5];
console.log(someDay);
console.log (days[10]);
console.log(days[days.length - 1]);

console.log(fruits);
console.log('--------changing items values---------');

console.log();
fruits [2] = 'Peach';

console.log(fruits);

days[3]= 'Someday';
console.log(days);

console.clear();


console.log('-------- Adding items ---------');
// fruits[fruits.length] = 'mellon';
// fruits[fruits.length] = 'watermellon';
// console.log(fruits);        DONT DO THIS

console.log(fruits);
fruits.push ('Fig','Mellon');
console.log(fruits);
fruits.push ('Raspberry', 'Banana', 'Papaya');
console.log(fruits);

fruits.unshift('Kiwi',);
console.log(fruits[0]);
console.log(fruits);
console.log(fruits[0]);

fruits.unshift('Olive', 'Hazelnut');
console.log(fruits);



console.log('-------- Deleting items ---------');


fruits.pop();
console.log(fruits)

let lastItem = fruits.pop();
console.log(lastItem);
console.log(`the item ${lastItem} has been removed`);
console.log(fruits);





fruits.shift();
console.log(fruits);
let firstItem = fruits.shift();

console.log(`the item ${firstItem} has been removed`);
console.log(fruits);



console.log(days);
let removedDays= days.splice(2, 2);
console.log('We remove days with splice');
console.log(days);
console.log(removedDays);


days.splice(1);
console.log(days);