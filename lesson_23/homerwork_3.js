//      *
//     ***
//    *****
//   *******
//  *********
// ***********


const lines = 15;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let k = i; k <= lines; k++) {
        result += ' ';
    }
    for (let j = 0; j <= i; j++) {
        result += '*';
        if (j >= 1) {
            result += '*'
            continue;
        };
    }
    result += '\n';
}

console.log(result);

//Как сделал её Иван:

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)
