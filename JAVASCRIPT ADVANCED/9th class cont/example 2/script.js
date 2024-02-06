const showResult = document.getElementById('result');
const button = document.getElementById('button');


// AJAX
// AJAX
// AJAX
// AJAX
// function getStarWarsPeople() {
//     return new Promise ((resolve, reject)=>
//     $.ajax({
//         url : 'https://swapi.dev/api/people',
//         success : ((response) => {
//             resolve(response)
//         }),
//         error :((error) => {

//             reject(error)
//         })
//     }))
// }

// getStarWarsPeople()
// .then(data => {
//     let maleCharacters = data.results.filter(data => data.gender === 'male')
//     console.log(maleCharacters);
//     return maleCharacters
// })
// .then (filteredResult =>{
//     const maleNames = filteredResult.map (data => data.name);
//     console.log(maleNames);
//     showResult.innerHTML = `Names: ${maleNames} `
//     return maleNames;
// })
// .catch(error => console.log(`Something wrong happened ${error}`))


// FETCH
// FETCH
// FETCH
// FETCH
// FETCH

function fetchCountyInfo (countryCode) {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then(response =>{
        if (!response.ok){
            throw new Error(`Http Error! Status ${response.status}`)
        }
        return response.json()
    })
    .then (result =>{
        console.log(result);
        return result
    })
    .then(result =>{
        let countryName = result[0].name.common
        console.log(countryName);
        showResult.innerHTML = `Country name:${countryName}`
    })
}






button.addEventListener('click', ()=>{
    const userInput = document.getElementById('userInput');
    const parsedInput = userInput.value
    console.log(parsedInput);
    fetchCountyInfo(`${parsedInput}`);
})


async function fetchCountyInfoAsunc(countryCode) {
    let url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    let response = await fetch(url)
    console.log(response);
    if(!response.ok){
        console.log(`HTTP ERROR. Status:${response.status}`);
    }
    let data = await response.json()
    console.log(data);
    let result = await data[0].name.common
    showResult.innerHTML = result
}

fetchCountyInfoAsunc('MK')

let result = fetchCountyInfoAsunc('GB')
result.then(data => {
    let countryName = data[0].name.common
    console.log(countryName);
})



