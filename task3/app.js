'use strict'

let str = prompt('Введіть слово');
str.toLowerCase();
let arr = str.split('').reverse();
let strRevers = arr.join('');
if(str == strRevers) {
    alert('Введене слово паліндром');
}   else {
    alert('Введене слово не паліндром');
}