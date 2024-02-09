const beersButton = document.getElementById('beersBtn');
const beerBarButton = document.getElementById('beerBarBtn');
const randomBeerButton = document.getElementById('randomBeerBtn');
const landingPage = document.getElementById('landingPageDiv');
const nextButton = document.getElementById('nextBtn');
const previousButton = document.getElementById('prevBtn');
const resultPage = document.getElementById('resultPage');



let allBeers = [];


const getDataFromApi = (url, renderFunction) => {
    fetch(url)
    .then(response=> response.json())
    .then(result =>{
        console.log(result);
        renderFunction(result);
    })
}

(async function () {
    const beerResult = [];
    for (let i = 0; i < 5; i++) {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${[i+1]}&per_page=80`);
        const result = await response.json();
        beerResult.push(...result)
    }
    let allBeers = beerResult
    console.log(allBeers);
})()



function documentRender (result){
    let names = []
    for (let i = 0; i < result.length; i++) {
        names.push(result[i].name)
        
    }
    // resultPage.innerHTML = names
    return names;
}

function displayBox (result){
    console.log(result);
    
}

beersButton.addEventListener('click', ()=> {
    landingPage.remove();
    resultPage.style.visibility = 'visible';
    getDataFromApi('https://api.punkapi.com/v2/beers?page=1&per_page=10', displayBox)
    nextButton.style.visibility = 'visible' 
})

