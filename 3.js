"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const arr = [];
const arrLength = 5;
let sumOfArrElem = 0;

for (let i = 0; i < arrLength; i++) {
  arr.push(Math.floor(Math.random() * 10));
}
// 1
for (const elem of arr) {
  sumOfArrElem += elem;
}

// 2
let minElemOfArr = arr[0];
for (const i in arr) {
  if (minElemOfArr > arr[i]) {
    minElemOfArr = arr[i];
  }
}

// 3
const arrOfIndex = [];
for (const i in arr) {
  if (arr[i] === 3) {
    arrOfIndex.push(+i);
  }
}

console.log(arr);
console.log(`Сумма элементов массива: ${sumOfArrElem}`);
console.log(`Минимальное значение в массиве: ${minElemOfArr}`);
console.log(arrOfIndex);
