

fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(response => response.products)
.then(result => {
    // console.table(result.products);

    orderedLaptops(result);
    firstGroceryItem(result);
    indexOfFirstSamsungPhone(result);
    checkForSonyProducts(result);
    highestRatedSkincare(result);
    averageProductDiscountRatingOver4Dot5(result);
    mostExpensiveProduct(result);
    avgPriceOfIphones(result);
    leastExpensiveProduct(result)

})
.catch (error =>
     console.log(error));




function orderedLaptops (result) {
    let fResult = result.filter(data => data.category === 'laptops').toSorted((a , b)=> b.price - a.price);
    console.log(fResult);
}

function firstGroceryItem (result) {
    let fResult = result.find(data => data.category === 'groceries');
    console.log(fResult);
}

function indexOfFirstSamsungPhone (result) {
    let fResult = result.findIndex(data => data.category === 'smartphones' && data.brand === 'Samsung');
    console.log(fResult);
}

function checkForSonyProducts (result) {
    let fResult = result.filter(data => data.brand === 'Sony');
    if (fResult.length === 0) {
        console.log('There are no Sony products :(');
    }
    else {
    console.log(fResult);
    }
}

function highestRatedSkincare (result) {
    let fResult = result.filter(data => data.category === 'skincare').toSorted((a,b) => b.rating - a.rating).map(data => data.title);
    console.log(fResult[0]);
}

function averageProductDiscountRatingOver4Dot5 (result) {
    let avgResult = result.filter(data => data.rating >= 4.5);
    let fResult = avgResult.reduce((acc, index)=> acc+ index.discountPercentage, 0) / avgResult.length;
    console.log(`Average discount percentage ${parseInt(fResult)}%`);
}

function mostExpensiveProduct (result){
    let mostExpensive = Math.max(...result.map(data => data.price));
    let fResult = result.find(data => data.price === mostExpensive);
    console.log(fResult);
}

function avgPriceOfIphones (result) {
    let fResult = result.filter(data => data.brand.toLowerCase() === 'apple' && data.category.toLowerCase() === 'smartphones');
    let avgResult = fResult.reduce((acc, curr)=> acc.price + curr.price) / fResult.length


    console.log(avgResult);
}


function leastExpensiveProduct (result){
    let leastExpensive = Math.min(...result.map(data => data.price));
    let fResult = result.find(data => data.price === leastExpensive);
    console.log(fResult);
}