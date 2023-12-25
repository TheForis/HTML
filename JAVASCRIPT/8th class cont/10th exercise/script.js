let whoInput = document.getElementById('who').value;
let whatInput = document.getElementById('what').value;
let whenInput = document.getElementById('when').value;
let button = document.getElementById('button');
let result = document.getElementById('paragraph');



function storyTeller (who, what, when) {

    let result = `Meet ${who}. ${who} is working as: ${what}. ${when} is the best time to be alive`;
    return result;
     
}

button.addEventListener('click', function(){
    let whoInput = document.getElementById('who').value;
    let whatInput = document.getElementById('what').value;
    let whenInput = document.getElementById('when').value;
    
    let storyResult = storyTeller(whoInput,whatInput, whenInput);
    console.log(storyResult);
    paragraph.innerText = storyResult

})

 
