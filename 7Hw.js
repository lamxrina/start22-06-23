//Task 1

class Car{
    constructor(year, model, carName, purchasesNumber){
        this.year = year;
        this.model = model;
        this.carName = carName;
        this.purchasesNumber = purchasesNumber;
    }
}

let cars = [];

let carA = new Car(1995, 'Porsche 911 Carrera','A',154321);
cars.push(carA);
let carB = new Car(2000, 'Porsche Taycan','B',172539);
cars.push(carB);
let carC = new Car(2005, 'Porsche Panamera','C',143988);
cars.push(carC);
let carD = new Car(2010, 'Porsche 911 GT3 RS','D',15032);
cars.push(carD);
let carE = new Car(2015, 'Porsche Cayenne','E',203774);
cars.push(carE);

for(const {model,purchasesNumber} of cars){
    console.log(`This is ${model} and it was selled ${purchasesNumber} times`);
}

// Task 2


let autoplay = document.querySelector('[autoplay]');
let elements = document.querySelectorAll('div, p');
let listItems = document.querySelectorAll('ul.nav > li');
let listItem = document.querySelectorAll('li:nth-child(2)');

// Task 3

document.addEventListener('scroll',function(){
    let ArraySelectors = [];

    let headerSelector = document.querySelector('header');
    let navSelector = document.querySelector('nav');
    let footerSelector = document.querySelector('footer');

    ArraySelectors.push(headerSelector,navSelector,footerSelector);

    ArraySelectors.forEach(selector => {
        selector.innerHTML = "I've changed!";
    });
});

// Task 4

function DaysThisMonth(){
let dateRn = new Date();
let monthRn = dateRn.getMonth();
let yearRn = dateRn.getFullYear();

let nextMonth = monthRn === 11 ? 0 : monthRn + 1;

let daysQuantityRn = new Date(yearRn, monthRn + 1, 0).getDate();
let nextDaysQuantity = new Date(yearRn, nextMonth + 1, 0).getDate();

alert(`In month ${monthRn} there are ${daysQuantityRn} days this year and in month ${nextMonth} there are going to be ${nextDaysQuantity} days this year`);
}
console.log(DaysThisMonth());
