'use strict'

let str = prompt('Введіть набір слів');

let arr = str.split('').reverse();
let str2 = arr.join('');

console.log(str2);