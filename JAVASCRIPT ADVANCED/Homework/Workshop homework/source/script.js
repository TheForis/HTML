const beersButton = document.getElementById('beersBtn');
const beerBarButton = document.getElementById('beerBarBtn');
const randomBeerButton = document.getElementById('randomBeerBtn');
const landingPage = document.getElementById('landingPageDiv');
const nextButton = document.getElementById('nextBtn');
const previousButton = document.getElementById('prevBtn');
const resultPage = document.getElementById('resultPage');
const showNumberOfResults = document.getElementById('floatingSelectPageSize');
const sortSelect = document.getElementById('floatingSelectSort');
const formSelectors = document.getElementsByClassName('form-floating')[0];
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchBeerInput');
const paginationHtmlPrint = document.getElementById('paginationTag');



let allBeers = [];

let numberOfPage = 1;
let showNumberResults = 10;
let moreDetailsId = 0;
let endPageResult = endPage(showNumberResults);
let paginationEndResult = 0;
let realTimeResultContainer = [];

let dataIsAscending = false;


const getDataFromApi = (page, numOfResults = 10, renderFunction) => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${numOfResults}`)
    .then(response=> response.json())
    .then(result =>{
        // console.log(result);
        let endPageNumber = parseInt(endPage(result.length));
        let paginationResult = pagination(page,endPageNumber);
        paginationEndResult = paginationResult;
        renderFunction(result, paginationResult);
        realTimeResultContainer = result;
        

    })
    .catch(error => console.log(error));
}

(async function () {
    for (let i = 0; i < 5; i++) {
        const response = await fetch(`https://api.punkapi.com/v2/beers?page=${[i+1]}&per_page=80`);
        const result = await response.json();
        allBeers.push(...result)
    }

})()

async function getRandomBeer(renderFunction){
    let response = await fetch('https://api.punkapi.com/v2/beers/random');
    let result = await response.json();
    renderFunction(result[0]);
}


function documentRender (result, pagination){
    for (let i = 0; i < result.length; i++) {
        resultPage.innerHTML += `<div class="card" style="width: 18rem; height:33rem;">
        <img src=${result[i].image_url} class="card-img-top" height = '275px'  alt="Beer Picture">
        <div class="card-body">
          <h5 class="card-title">${result[i].name}</h5>
          <p class="card-text">${result[i].description}</p>
          <button onclick='moreDetails(${result[i].id})' class="btn btn-primary">More details</button>
        </div>
      </div>` 
        
    }
    paginationHtmlPrint.innerText = pagination;

    
}
 function beerRender (result){
    landingPage.style.display = 'none';
    resultPage.style.display = 'block';
    resultPage.style.visibility = 'visible';
    displayButtons('hide');
    formSelectors.style.visibility = 'hidden'
    resultPage.innerHTML = `<div class="singleCard mb-3" style="max-width: 70vw;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${result.image_url} id="singleBeerImage" class="img-fluid rounded-start" alt="Beer Picture">
      </div>
      <div class="col-md-8">
        <div class="singleCard-body">
          <h5 class="card-title card-header">${result.name}<span><small> - ${result.tagline}</small></span></h5>
          <p class="singleCard-text">${result.description}</p>
          <p class="singleCard-text"><small class="text-body-secondary">First brewed:"${result.first_brewed}"</small></p>
          <p class="singleCard-text"><small class="text-body-secondary">Alcohol: ${result.abv}%</small></p>
          <p class="singleCard-text"><small class="text-body-secondary">Bitterness: ${result.ibu} IBU</small></p>
          <div class="card" style="width: 18rem;">
             <div class="card-header">
             Food Pairing
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${result.food_pairing[0]}</li>
                   <li class="list-group-item">${result.food_pairing[1]}</li>
                  <li class="list-group-item">${result.food_pairing[2]}</li>
  </ul>
</div>
        </div>
      </div>
    </div>
  </div>`
 }

function displayButtons (endPageNumber){
    if (endPageNumber === 'hide'){
        nextButton.style.visibility = 'hidden';
        previousButton.style.visibility = 'hidden';

    }
    else if (numberOfPage === 1) {
        nextButton.style.visibility = 'visible';
        previousButton.style.visibility = 'hidden';
    }
    else if (numberOfPage === endPageNumber) {
        nextButton.style.visibility = 'hidden';
        previousButton.style.visibility = 'visible';
    }
    else {
        nextButton.style.visibility = 'visible';
        previousButton.style.visibility = 'visible';
    }
    
    
}

function endPage (number){
    switch (number) {
        case 10:
            return 33;
        case 25:
            return 13;
        case 40:
            return 9;
        case 80:
            return 5;
            
        default:
            return numberOfPage;
    }
}

function moreDetails (result){
    let data = allBeers.find(data => data.id === result);
    beerRender(data);
}

function pagination (pageNumber,endPage){
    return `Page ${pageNumber} / ${endPage}`;
}

function sorter(sortBy,data) {
    if(dataIsAscending === false){
        if (sortBy === 'name') {
            console.log('name selected');
            let sortedResult = data.toSorted((a,b)=>{
                if(a.name < b.name){
                    return -1;
                }
                if(a.name > b.name){
                    return 1;
                }
                else{
                    return 0;
                }
        }) 

            dataIsAscending = true;
            return sortedResult;
        }
        else if(sortBy === 'abv'){
            console.log('abv selected');
            let sortedResult = data.toSorted((a,b)=> a.abv - b.abv);

            dataIsAscending = true;
            return sortedResult;
        }
        else if(sortBy === 'first_brewed'){
            console.log('first brewed selected');
            // needs work
            let sortedResult = data.toSorted((a,b)=>{
                if(a.first_brewed < b.first_brewed){
                    return -1;
                }
                if(a.first_brewed > b.first_brewed){
                    return 1;
                }
                else{
                    return 0;
                }
            })

            dataIsAscending = true;
            return sortedResult;
        }
        else if(sortBy === 'ibu'){
            console.log('ibu selected');
            let sortedResult = data.toSorted((a,b)=> a.ibu - b.ibu);
            
            dataIsAscending = true;
            return sortedResult;
    }}

    else{
        if (sortBy === 'name') {
            console.log('name selected descending');
            let sortedResult = data.toSorted((a,b)=>{
                if(a.name > b.name){
                    return -1;
                }
                if(a.name < b.name){
                    return 1;
                }
                else{
                    return 0;
                }
        }) 
            
            dataIsAscending = false;
            return sortedResult;
        }
        else if(sortBy === 'abv'){
            console.log('abv selected');
            let sortedResult = data.toSorted((a,b)=> b.abv - a.abv);
            
            dataIsAscending = false;
            return sortedResult;
        }
        else if(sortBy === 'first_brewed'){
            console.log('first brewed selected');
            // needs work
            let sortedResult = data.toSorted((a,b)=>{
                if(a.first_brewed > b.first_brewed){
                    return -1;
                }
                if(a.first_brewed < b.first_brewed){
                    return 1;
                }
                else{
                    return 0;
                }
            })
            
            dataIsAscending = false;
            return sortedResult;
        }
        else if(sortBy === 'ibu'){
            console.log('ibu selected');
            let sortedResult = data.toSorted((a,b)=> b.ibu - a.ibu);
            
            dataIsAscending = false;
            return sortedResult;
        }}    
    
    
}

beersButton.addEventListener('click', ()=> {
    landingPage.style.display = 'none';
    resultPage.style.display = 'block';
    resultPage.innerHTML = '';
    resultPage.style.visibility = 'visible';
    sortSelect.value = 'default';
    
    getDataFromApi(1,showNumberResults, documentRender);
    formSelectors.style.visibility ='visible';
    displayButtons(1);
})

showNumberOfResults.addEventListener('click', () =>{
    resultPage.innerHTML = '';
    sortSelect.value = 'default';
    let showNumResults = showNumberOfResults.value;
    showNumberResults = showNumResults;
    numberOfPage = 1;
    getDataFromApi(1 ,showNumResults, documentRender);
    displayButtons(1);

})

nextButton.addEventListener('click', ()=>{
    resultPage.innerHTML = '';
    let nextPage = numberOfPage + 1;
    numberOfPage = nextPage;
    getDataFromApi(nextPage,showNumberResults,documentRender);
    displayButtons(endPage(parseInt(showNumberResults)));
})

previousButton.addEventListener('click',()=>{
    resultPage.innerHTML = '';
    let previousPage = numberOfPage - 1;
    numberOfPage = previousPage;
    getDataFromApi(previousPage,showNumberResults,documentRender);
    displayButtons(endPage(parseInt(showNumberResults)));
})

randomBeerButton.addEventListener('click', ()=>{
    landingPage.style.display = 'none';
    resultPage.style.display = 'block';
    resultPage.innerHTML = '';  
    formSelectors.style.visibility = 'hidden';
    sortSelect.value = 'default';
    displayButtons('hide');
    resultPage.style.visibility = 'visible';
    getRandomBeer(beerRender);
})

beerBarButton.addEventListener('click',()=>{
    resultPage.style.display = 'none';
    displayButtons('hide');
    formSelectors.style.visibility = 'hidden';
    landingPage.style.display = 'block';
    sortSelect.value = 'default';
})

searchBtn.addEventListener('click', ()=>{
    let searchItem = searchInput.value.toLowerCase();
    searchInput.value = '';
    console.log(searchItem);
    console.log(allBeers);
    let searchResult = allBeers.find(data => data.name.toLowerCase() === searchItem);
    beerRender(searchResult);
})
searchInput.onkeydown = (event) =>{
    if (event.key === 'Enter') {
        let searchItem = searchInput.value.toLowerCase();
        searchInput.value = '';
         console.log(searchItem);
         console.log(allBeers);
        let searchResult = allBeers.find(data => data.name.toLowerCase() === searchItem);
        beerRender(searchResult);
    }
}

sortSelect.addEventListener('click',()=>{
    resultPage.innerHTML = '';
    let sortBy = sortSelect.value;
    let sortedResult = sorter(sortBy,realTimeResultContainer);
    documentRender(sortedResult,paginationEndResult);

})