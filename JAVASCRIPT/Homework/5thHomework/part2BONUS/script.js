let userInputRecipeName = prompt('Please enter the name of the recipe:');

let recipeName = document.getElementById('recipeName');
recipeName.innerText += userInputRecipeName;




let userInputRecipeLenght= prompt('Please enter how many ingredients we need for the recipe');



if (userInputRecipeLenght %1 === 0){
    const ingredients = [];
        for (let i=0; i< userInputRecipeLenght; i++){
        let userInputIngredientName = prompt('Please enter the name of the ingredient');
        ingredients.push(userInputIngredientName);
        }  

        console.log(ingredients);   
        let list = document.getElementById('list');
        for (i = 0; i < ingredients.length; ++i) {
            let li = document.createElement('li');
            li.innerText = ingredients[i];
            list.appendChild(li);
        }

         
}
else {
    alert('PLEASE ENTER A NUMBER')
}