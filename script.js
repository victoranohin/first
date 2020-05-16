
/*function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
*/
//use strict
var numberOfFilms=prompt("Сколько фильмов вы уже посмотрели?");

var personalMovieDb={
  count:numberOfFilms,
  movies:undefined,
  actors:undefined,
  genres:undefined,
  private:false,
};

let last=prompt("Какой фильм посмотрели последним?");
let lastRating=+prompt("На сколько его оцениваете?");
personalMovieDb.movies=(last + ':' + lastRating); 

console.log(personalMovieDb);