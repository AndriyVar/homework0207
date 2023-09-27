'use strict'

let str = prompt('Введіть речення');

let arr = str.split(' ');

let longest = arr[0];

for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > longest.length) {
        longest = arr[i];
    }
}

console.log(`Найдовше слово: ${longest}`);