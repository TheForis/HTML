let button = document.getElementById('myButton');
let paragraph = document.getElementById('paragraph')



function makeAjaxApiCall(){
    $.ajax({
        url: 'https://swapi.dev/api/planets/1/',
        success: function(result){
            console.log(result.name);
            console.log(result.population);
            paragraph.innerText += `The planet ${result.name} has ${result.population} people.`
        },
    
        error: function(error){
            console.log('The api didn\'t return anything')
            console.log(error);
        }
    })
}

button.addEventListener('click', function(){
   makeAjaxApiCall();
    
})


