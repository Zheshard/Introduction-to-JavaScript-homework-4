"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

let x = "x";
for (let i = 0; i < 20; i++) {
  console.log(x);
  x = x + "x";
}
