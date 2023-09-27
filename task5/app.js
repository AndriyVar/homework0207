'use strict'

let str = prompt('Введіть рядок');

let arr = str.split('');
let rez = 0;

let golosni = ['а','о','у','е','є','я','и','ю','і','ї'];

for(let i = 0; i < arr.length; i++) {
    for(let c = 0; c < golosni.length; c++) {
        if(arr[i] == golosni[c]) {
            rez = rez + 1;
        }
    }
}

console.log(rez);