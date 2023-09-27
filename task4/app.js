'use strict'

let str = prompt('Введіть текст');

let spam = ['100% безкоштовно', 'збільшення продажів', 'тільки сьогодні', 'не видаляйте', 'ххх'];
str = str.toLowerCase();

for(let spamWord of spam) {
    if(str.includes(spamWord)) {
        console.log(true);
    }
}

