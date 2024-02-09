let peopleClick = document.getElementById('peopleClick');
let shipClick = document.getElementById('shipClick');
let planetClick = document.getElementById('planetClick');
let container = document.getElementById('resultContainer');
let headContainer = document.getElementById('headContainer');
let bodyContainer = document.getElementById('bodyContainer');
let nextButton = document.getElementById('nextButton');
let previousButton = document.getElementById('previousButton');
let spinLoader = document.getElementById('spinLoading');
let firstColumn = document.getElementById('firstCol');
let searchPeople = document.getElementById('searchPeople')
let searchButton = document.getElementById('searchPeopleButton');
let searchContainer = document.getElementById('searchContainer');



let columnPeopleInfo = ["Name","Height", "Weight","Gender" ,"Birth Year", "Appearances"];
let columnShipInfo = ["Name","Model", "Manufacturer","Cost" ,"People Capacity", "Class"];
let columnPlanetInfo = ["Name","Diametar", "Climate","Terrain" ,"Gravity", "Population"]
let columnNumber = ['firstCol','secondCol','thirdCol','fourthCol','fifthCol','sixthCol','seventhCol']
let fetchResult = [];
let clicked = -1;

let dataContainer =[];

let getDataFromApi = (url, renderFunction) => {
    spinLoader.style.visibility = 'visible';
    fetch(url)
    .then(response => response.json())
    .then((result) => {
        
        spinLoader.style.visibility = 'hidden';

        console.log(result);
        renderFunction(result.results);
        renderButtons(result);
        fetchResult.push(result);

        
    })
    
    .catch((Error) => {
        spinLoader.style.visibility = 'hidden';
        container.innerHTML = 'Sorry, the page cannot be loaded right now. Please try again later!';
        console.log(Error);
    })
}



let renderPeopleData = (data) => {

    for (let i = 0; i < data.length; i++) {
        let row = document.createElement('tr');

        let nameCell = row.insertCell();
        let heightCell = row.insertCell();
        let weightCell = row.insertCell();
        let genderCell = row.insertCell();
        let birthYearCell = row.insertCell();
        let appearancesCell = row.insertCell();

        nameCell.innerHTML = data[i].name;
        heightCell.innerHTML = `${data[i].height} cm`;
        weightCell.innerHTML = `${data[i].mass} kg`;
        genderCell.innerHTML = data[i].gender;
        birthYearCell.innerHTML = data[i].birth_year;
        appearancesCell.innerHTML = `${data[i].films.length} movies`;

        // dataContainer.push(data[i])

        bodyContainer.appendChild(row);
    }
}

let renderShipData = (data) => {
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement('tr');

        let nameCell = row.insertCell();
        let modelCell = row.insertCell();
        let manufacturerCell = row.insertCell();
        let costCell = row.insertCell();
        let capacityCell = row.insertCell();
        let classCell = row.insertCell();

        let crew = parseFloat(data[i].crew.replace(/,/g, ''));
        let passengers = parseFloat(data[i].passengers.replace(/,/g, ''));

        nameCell.innerHTML = data[i].name;
        modelCell.innerHTML = data[i].model;
        manufacturerCell.innerHTML = data[i].manufacturer;
        costCell.innerHTML = `${data[i].cost_in_credits} credits`;
        capacityCell.innerHTML = sumCapacity(crew,passengers);    
        classCell.innerHTML = data[i].starship_class;

        

        bodyContainer.appendChild(row);
    }
}

let renderPlanetData = (data) => {
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement('tr');

        let nameCell = row.insertCell();
        let diameterCell = row.insertCell();
        let climateCell = row.insertCell();
        let terrainCell = row.insertCell();
        let gravityCell = row.insertCell();
        let populationCell = row.insertCell();

        nameCell.innerHTML = data[i].name;
        diameterCell.innerHTML = data[i].diameter;
        climateCell.innerHTML = data[i].climate;
        terrainCell.innerHTML = data[i].terrain;
        gravityCell.innerHTML = data[i].gravity;
        populationCell.innerHTML = data[i].population;

        bodyContainer.appendChild(row);
    }
}

(async function getPersonData (){
    let result =[];
    
    
    for (let i = 0; i < 9; i++) {
        let data = await fetch(`https://swapi.dev/api/people/?page=${i+1}`);
        let response = await data.json();
        result.push(...response.results)
        
    }
    // let parsedResult = result.flat();
    dataContainer = result;
    
})()



let renderPersonData = (data) => {

        let row = document.createElement('tr');

        let nameCell = row.insertCell();
        let heightCell = row.insertCell();
        let weightCell = row.insertCell();
        let genderCell = row.insertCell();
        let birthYearCell = row.insertCell();
        let appearancesCell = row.insertCell();

        nameCell.innerHTML = data.name;
        heightCell.innerHTML = `${data.height} cm`;
        weightCell.innerHTML = `${data.mass} kg`;
        genderCell.innerHTML = data.gender;
        birthYearCell.innerHTML = data.birth_year;
        appearancesCell.innerHTML = `${data.films.length} movies`;


        bodyContainer.appendChild(row);
    
}

let renderHeader = (array, colNumber) => {
    
    for (let i = 0; i < array.length; i++) {
        let column = document.createElement('th');
        column.innerHTML = array[i];
        column.setAttribute('onclick', `${colNumber[i]}()`)
        column.setAttribute('id', colNumber[i])
        headContainer.appendChild(column);
    }

}

let renderPeople = (resultFromApi) => {
    headContainer.innerHTML= '';
    bodyContainer.innerHTML='';
    searchContainer.style.visibility = 'visible';
    renderHeader(columnPeopleInfo, columnNumber);
    renderPeopleData(resultFromApi);
}



let renderShip = (resultFromApi) => {
    headContainer.innerHTML= '';
    bodyContainer.innerHTML='';
    searchContainer.style.visibility = 'hidden';
    renderHeader(columnShipInfo, columnNumber);
    renderShipData(resultFromApi);
}

let renderPlanet = (resultFromApi) => {
    headContainer.innerHTML= '';
    bodyContainer.innerHTML='';
    searchContainer.style.visibility = 'hidden';
    renderHeader(columnPlanetInfo, columnNumber);
    renderPlanetData(resultFromApi);
}

let renderPerson = (result) => {
    headContainer.innerHTML= '';
    bodyContainer.innerHTML='';
    previousButton.innerHTML = '';
    nextButton.innerHTML = '';
    searchContainer.style.visibility = 'visible';
    renderHeader(columnPeopleInfo, columnNumber);
    renderPersonData(result);
}

let sumCapacity = (num1,num2) => {
    if (isNaN(num1)){
        return num2;
    }
    else if(isNaN(num2)){
        return num1;
    }
    else{
        return num1 + num2;
    }
    
}


let renderButtons = (result) => {
    if(result.previous === null){
        nextButton.innerHTML = `<button id='nextButton'>Next</button>`
    }
    else if(result.next === null){
        previousButton.innerHTML = `<button id='previousButton'>Previous</button>`
    }
    else {
        previousButton.innerHTML = `<button id='previousButton'>Previous</button>`;
        nextButton.innerHTML = `<button id='nextButton'>Next</button>`;
    }
}

let functionPicker = (shipSelected, peopleSelected, planetSelected) => {
    if(fetchResult[clicked].count == 82){
        return peopleSelected;
    }
    else if(fetchResult[clicked].count === 36){
        return shipSelected;
    }
    else if(fetchResult[clicked].count === 60 ){
        return planetSelected;
    }
}


peopleClick.addEventListener('click', () => {
    previousButton.innerHTML = '';
    nextButton.innerHTML = '';
    console.log('People Clicked');
    getDataFromApi('https://swapi.dev/api/people/?page=1', renderPeople);
    clicked++;
});


shipClick.addEventListener('click', () => {
    previousButton.innerHTML = '';
    nextButton.innerHTML = '';
    console.log('Ship clicked');
    getDataFromApi('https://swapi.dev/api/starships/?page=1',renderShip);
    clicked++;
});

planetClick.addEventListener('click', ()=>{
    previousButton.innerHTML = '';
    nextButton.innerHTML = '';
    console.log('Planet clicked');
    getDataFromApi('https://swapi.dev/api/planets/?page=1',renderPlanet);
    clicked++;
});

nextButton.addEventListener('click', ()=>{
    previousButton.innerHTML = '';
        nextButton.innerHTML = '';
    console.log('Next button clicked');
    console.log(fetchResult[clicked]);
    let nextButtonInfo = fetchResult[clicked].next;
    getDataFromApi(nextButtonInfo, functionPicker(renderShip,renderPeople, renderPlanet));
    clicked++;

})



previousButton.addEventListener('click', ()=>{
    previousButton.innerHTML = '';
        nextButton.innerHTML = '';
    console.log('Previous button clicked');

    let previousButtonInfo = fetchResult[clicked].previous;
    getDataFromApi(previousButtonInfo, functionPicker(renderShip,renderPeople,renderPlanet));
    clicked++;
})

searchPeople.addEventListener('click', () => searchPeople.value = '');

searchButton.addEventListener('click', ()=>{
    if(searchPeople.value === '') {
        searchPeople.value = 'Please enter name';
    }
    else if(searchPeople.value === 'Please enter name'){
        searchPeople.value = 'Please enter name';
    }
    else{
    let parsedSearchPeople = searchPeople.value;
    console.log(parsedSearchPeople);
    

    let searchResult = dataContainer.find(data => data.name === parsedSearchPeople);

    if (searchResult){
        renderPerson(searchResult)
    }
   searchPeople.value = ''
}
});


function firstCol () {
    console.log('first column clicked');
    let data = document.getElementById('firstCol').innerHTML
    console.log(data);
 
}


