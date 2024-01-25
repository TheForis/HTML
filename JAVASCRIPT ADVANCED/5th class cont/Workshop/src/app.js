let peopleClick = document.getElementById('peopleClick');
let shipClick = document.getElementById('shipClick');
let container = document.getElementById('resultContainer');
let headContainer = document.getElementById('headContainer');
let bodyContainer = document.getElementById('bodyContainer');
let nextButton = document.getElementById('nextButton');
let previousButton = document.getElementById('previousButton');


let columnPeopleInfo = ["Name","Height", "Weight","Gender" ,"Birth Year", "Appearances"];
let columnShipInfo = ["Name","Model", "Manufacturer","Cost" ,"People Capacity", "Class"];
let fetchResult = [];
let clicked = -1;

let getDataFromApi = (url, renderFunction) => {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        console.log(result);
        renderFunction(result.results);
        renderButtons(result);
        fetchResult.push(result);
        
    })
    .catch((Error) => {
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

let renderHeader = (array) => {
    
    for (let i = 0; i < array.length; i++) {
        let column = document.createElement('th');
        column.innerHTML = array[i];
        headContainer.appendChild(column);
    }

}

let renderPeople = (resultFromApi) => {
    headContainer.innerHTML= '';
    bodyContainer.innerHTML='';
    renderHeader(columnPeopleInfo);
    renderPeopleData(resultFromApi);
}



let renderShip = (resultFromApi) => {
    headContainer.innerHTML= '';
    bodyContainer.innerHTML='';
    renderHeader(columnShipInfo);
    renderShipData(resultFromApi);
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

let functionPicker = (shipSelected, peopleSelected) => {
    if(fetchResult[clicked].count == 82){
        return peopleSelected;
    }
    if(fetchResult[clicked].count === 36){
        return shipSelected;
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

nextButton.addEventListener('click', ()=>{
    previousButton.innerHTML = '';
        nextButton.innerHTML = '';
    console.log('Next button clicked');
    console.log(fetchResult[clicked]);
    let nextButtonInfo = fetchResult[clicked].next;
    getDataFromApi(nextButtonInfo, functionPicker(renderShip,renderPeople));
    clicked++;

})



previousButton.addEventListener('click', ()=>{
    previousButton.innerHTML = '';
        nextButton.innerHTML = '';
    console.log('Previous button clicked');

    let previousButtonInfo = fetchResult[clicked].previous;
    getDataFromApi(previousButtonInfo, functionPicker(renderShip,renderPeople));
    clicked++;
})