// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0); // false
// console.log(1 && 5); // true (5)
// console.log(null && 5); // false (null)
// console.log(0 && 'effjsdfsdf'); // false

// Оператор И всегда возвращает первое ложное значение если оно есть. На нем он запинается,
// его возвращает и дальше код больше не идет. Если все аргументы верны, код дошел до конца -
// то возвращается значение последнего аргумента.

// И запинается на лжи. ИЛИ запинается на правде

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

if (hamburger == 3 && cola == 2 || fries == 3 && nuggets) {
    console.log('Берём!');
} else {
    console.log('Валим');
}

console.log(hamburger == 3 && (cola == 2 || fries == 3) && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

if (samReport == 'done') {
    console.log('ok');
} else {
    console.log(alexReport);
}

console.log(!0);

console.log(NaN || 2 || undefined); // true
console.log(NaN && 2 && undefined); // false
console.log(1 && 2 && 3); // true
console.log(!1 && 2 || !3); // false

// Мой косяк заключается в том, что там выводится значение!!! А не логический оператор
// во всех случаях, кроме !. Потому что он (!) делает из значения - логическое знач (true/false).

console.log(25 || null && !3); //25
console.log(NaN || null || !3 && undefined || 5); //5
console.log(NaN || null && !3 && undefined || 5); //5
console.log(5 === 5 && 3 < 1 || 5); //5

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done');
}

let hamburger; //(undefined)
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
}

console.log(hamburger && cola || fries === 3 && nuggets); //false. Потому что fries не равно 3! Оно равно NaN
console.log('Изменение');