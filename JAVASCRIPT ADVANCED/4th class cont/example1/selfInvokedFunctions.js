(() => {
    let fruits = ['apple', 'banana', 'orange']
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);       
    }
})();


(message => console.log(message))('This message is passed as an argument to the self invoked function');


