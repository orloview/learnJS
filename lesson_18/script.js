"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let movie = {
    name: prompt('Один из последних просмотренных фильмов?'),
    score: prompt('На сколько оцените его?'),
    name2: prompt('Один из последних просмотренных фильмов?'),
    score2: prompt('На сколько оцените его?')
};

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        [movie['name']]: movie['score'],
        [movie['name2']]: movie['score2'],
    },
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);