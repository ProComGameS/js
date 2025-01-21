"use strict";

console.log('#1. Приклад JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

 let myNum = 10;
 let myStr = 'some string';
 let myBool = true;
 let myArr = ['1', '2', '3','4','5'];
 let myObj = {
     firstName: 'First name',
     lastName: 'Last name',
}



/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2


let decimal2 = myNum.toFixed(2);
console.log(decimal2);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i

let i = 0;

i++;
console.log(i);
i--;
console.log(i);
i++;
console.log(i);

console.log(++i);



/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// myTest
let myTest = 20;
// +=
 myTest += 1;
console.log(myTest);
// –=
 myTest -= 2;
console.log(myTest);
// *=
 myTest *= 5;
console.log(myTest);
// /=
 myTest /= 2;
console.log(myTest);
// %=
 myTest %= 5;
console.log(myTest);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi

let myPi = Math.PI;
console.log(myPi)

// округлене значення числа 89.279 → myRound

let myRound = 89.279;
myRound = Math.round(myRound * 10) / 10;
console.log(myRound);

// випадкове число між 0..10 → myRandom

let myRandom = Math.floor(Math.random()*10);
console.log(myRandom)

// 3 у 5 степені → myPow

let myPow = null;
myPow = Math.pow(3, 5);
console.log(myPow);



/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */


let strObj = {
    str: "Мама мыла раму, рама мила маму",
    length: "Мама мыла раму, рама мила маму".length
}


// Мама мыла раму, рама мыла маму
// strObj

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama

let isRama = null;
let isRamaPos = null;
let searchwrd = "рама";

if (strObj.str.indexOf(searchwrd) !== -1) {
    let isRama = true;
    isRamaPos = strObj.str.indexOf(searchwrd);
    console.log(isRama + isRamaPos);
}
 else {
     let isRama = false;
     console.log(isRama);
}


/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мила маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace

let strReplace = strObj.str.replace("мыла" , "моет").replace("рама" ,"Рама").replace("мила" ,"держит");
console.log(strReplace);


/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr


let someStr = 'some STRING';

let upperText = someStr.toUpperCase();
console.log(upperText);

let lowerText = upperText.toLowerCase();
console.log(lowerText);
