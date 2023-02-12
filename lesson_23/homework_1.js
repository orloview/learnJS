// Задачи:

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:
 
//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }
// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]


// Место для первой задачи
function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

// Место для второй задачи
function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i == 13) {
            break;
        }
        console.log(i);
    }
}

// Место для третьей задачи
function thirdTask() {
    for (let i = 1; i <= 10; i++) {
        if((i % 2) === 0) {
            console.log(i);
        }
    }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

function fourthTask() {
    let i = 2;
    while (i < 16) {
        i++;
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }

}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];
    let num = 5;
    for (let i = 0; i <= 5; i++) {
        arrayOfNumbers[i] = num++;
        if (num === 11) {
            break;
        }
    }

    console.log(arrayOfNumbers);
}

// Решение Ивана 5 задачи

// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }

// console.log(arrayOfNumbers)