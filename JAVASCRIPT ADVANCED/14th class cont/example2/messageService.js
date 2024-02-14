export{words, getRandomWord};

let words = {
    helloVariants: ['Hi','Hello','Hey','What\'s up'],
    goodyeVariants: ['Bye','Goodbye','Cheers','See you soon']
}
function getRandomWord (wordArray){
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}