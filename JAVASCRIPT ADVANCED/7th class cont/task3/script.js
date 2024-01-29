
fetch('https://dummyjson.com/recipes')
.then(response => response.json())
.then(result => result.recipes)
.then(result => {
    console.log(result);

    getAllDeserts(result);
    getRecepiesWith30Reviews(result);
    includesCinnamon(result);
    lunchAndDinnerRecipes(result);
    findIngridientsForDish(result);
    avgAmericanCusineCalories(result);
    avgPastaCookingTime(result);
    lowestReviews(result);
})
.catch(error => console.log(error))


function getAllDeserts (result) {
    let dataResult = result.filter(data => data.mealType.some(data => data === 'Dessert'));
    console.log(dataResult);
}

function getRecepiesWith30Reviews (result) {
    let dataResult = result.filter(data => data.reviewCount >= 30);
    console.log(dataResult);
}


function includesCinnamon (result) {
    let dataResult = result.filter(data => data.ingredients.some(data => data === 'Cinnamon'));
    console.log(dataResult);
}

function lunchAndDinnerRecipes (result){
    let lunchResult = result.filter(data => data.mealType.some(data => data === 'Lunch'));
    let dataResult = lunchResult.filter(data => data.mealType.some(data => data === 'Dinner'))
    console.log(dataResult);
}

function findIngridientsForDish (result) {
    let dataResult = result.find(data => data.name ==='Mango Salsa Chicken').ingredients;
    console.log(dataResult);
}

function avgAmericanCusineCalories (result) {
    let americanRecipes = result.filter(data => data.cuisine.toLowerCase() === 'american')
    let dataResult = americanRecipes.reduce((acc,curr)=> acc + curr.caloriesPerServing, 0) / americanRecipes.length
    console.log(`Average American cuisine calories per dish:${dataResult}`);
}

function avgPastaCookingTime (result) {
    let pastaRecipes = result.filter(data => data.tags.some(tag => tag.toLowerCase() === 'pasta'));
    
    let dataResult = pastaRecipes.reduce((acc,curr)=> acc + curr.cookTimeMinutes, 0) / pastaRecipes.length
    console.log(`Average pasta cooking time:${dataResult} minutes!`);
}

function lowestReviews (result) {
    let lowestCount = Math.min(...result.map(data => data.reviewCount));
    let dataResult = result.find(data => data.reviewCount === lowestCount);

    console.log(dataResult);
}