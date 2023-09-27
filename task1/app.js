'use strict'

let str1 = prompt('Введіть перший рядок');
let str2 = prompt('Введіть другий рядок');

if(str1.length > str2.length) {
    console.log(1);
} else if(str1.length < str2.length) {
    console.log(-1);
} else {
    console.log(0);
}