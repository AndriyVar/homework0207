'use strict'

let str = prompt('Введіть рядок');

let znaky = [`.`, `,`, `?`, `@`, `!`, `:`, `;`, `-`, `/`, `...`, `'`, `{`, `}`, `[`, `]`, `(`, `)`, `\\`, `|`, `#`];

let arr = str.split('');

for(let i = 0; i < arr.length; i++) {
    for(let g = 0; g < znaky.length; g++) {
        if(arr[i] == znaky[g]) {
            arr.splice(i, 1, '')
        }
    }
}

console.log(arr.join(''));