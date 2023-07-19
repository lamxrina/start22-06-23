// first Task

alert("Task 1");

let ProductQuantity = prompt('Print product quantity');
let ProductPrice = prompt('Print product price');

let convertProductQuantity = Number(ProductQuantity);
let convertProductPrice = Number(ProductPrice);
alert("sum in total: " + (convertProductQuantity * convertProductPrice));
console.log(convertProductQuantity * convertProductPrice);

// second Task

alert("Task 2");

let ProductPriceUser = prompt('Print product price');

let convertProductPriceUser = Number(ProductPriceUser);

alert("price with 10% discount: " + (convertProductPriceUser * 0.9));

console.log(convertProductPriceUser);

// third Task

alert("Task 3");

let FirstValue = prompt('Print first value');
let SecondValue = prompt('Print second value');
let ThirdValue = prompt('Print third value');
let ForthValue = prompt('Print forth value');

let convertFirstValue = Number(FirstValue);
let convertSecondValue = Number(SecondValue);
let convertThirdValue = Number(ThirdValue);
let convertForthValue = Number(ForthValue);

alert("an average value is: " + ((convertFirstValue + convertSecondValue + convertThirdValue + convertForthValue)/4));

