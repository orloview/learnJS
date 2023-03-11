// Очень важная деталь! Функция должна быть универсальной
// Философия программирования направленна на ЭФФЕКТИВНОСТЬ. Код должен быть ЭФФЕКТИВНЫМ, а потому функция должна быть всегда - УНИВЕРСАЛЬНОЙ.

//Главная моя философия и мысль! - Создавать максимально эффективные и чистые алгоритмы.

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

// function convert(amount, curr) { // Мы делаем функцию универсальной. Независящей от конкретных значений
//     console.log(amount * curr); // Если мы поместим usdCurr прямо сюда, функция будет привязана к этому значению. А она должна быть адаптивна!
// }

function convert(amount, curr) {
    return curr * amount; // Функцией может быть возвращено что угодно!
}

function promotion(result) {
    console.log(result * discount);
    
    //return function() {}
    //return undefined - функция, который не задано что возвратить. Вернет undefined по умолчанию. На уровне движка JS!
}

promotion(convert(500, usdCurr)); // Если мы хотим получить результат выполнения вот этой строки, то тут нам как раз и поможет return.

const res = convert(500, eurCurr);
promotion(res);

function test() { // Данная функция вернет undefined.
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return //Когда функция видит это слово (return), она прекращает свою работу
    } 
    console.log('Done');
}

test();

// Иногда на собеседованиях спрашивают, откуда берется undefined при вводе console.log() в консоли браузера? Ответ ниже. Console.log - Это функция! Console - большой объект. log - это метод объекта (функция которая записана внутри объекта называется методом)

function doNothing() {};

console.log(doNothing() === undefined); // Повторюсь! Функция всегда что-то возвращает. Если мы ничего не указываем, то она вернет значение undefined. Undefined - значит не задано

// Любая функция может что-то вернуть как результат своей работы. (return)
// А может и ничего не возвращать. Зависит от задачи, которую она решает.

