function filmMaker(filmName, releaseYear, filmRating){
    this.filmName = filmName;
    this.releaseYear = releaseYear;
    this.filmRating = filmRating;
}
let filmsArray = [];

const firstFilm = new filmMaker('Mulholland Drive', 2001, 9.1);
filmsArray.push(firstFilm);
const secondFilm = new filmMaker('The Wolf of Wall Street', 2013, 7.5);
filmsArray.push(secondFilm);
const thirdFilm = new filmMaker('Talk to Her', 2002, 6.8);
filmsArray.push(thirdFilm);
const forthFilm = new filmMaker('Oppenheimer', 2023, 8.8);
filmsArray.push(forthFilm);
const fifthFilm = new filmMaker('Blade Runner 2049', 2017, 7.1);
filmsArray.push(fifthFilm);

console.log(filmsArray);

for(let i=0; i<filmsArray.length; i++){
    alert(`Film "${filmsArray[i].filmName}" is released in ${filmsArray[i].releaseYear} and is ${filmsArray[i].filmRating} out of 10 in the rating`);
}

function sortFilmRating(arr){
    arr.sort((a,b) => b.filmRating - a.filmRating)
}
sortFilmRating(filmsArray);
console.log(filmsArray);

function sortYear(array, years){
    return array.filter(function(filmsArray){
        return filmsArray.releaseYear == years;
    });
}

let filmSortYear = sortYear(filmsArray, 2023);

console.log(filmSortYear);