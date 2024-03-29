"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

// Функция для сложения
function sum(a, b) {
    return a + b;
}

// Функция для разности
function subtract(a, b) {
    return a >= b ? a - b : 0;
}

// Функция для умножения
function multiply(a, b) {
    return a * b;
}

// Функция для деления
function divide(a, b) {
    return b !== 0 ? a / b : 'Деление на ноль невозможно';
}

// Примеры использования функций
console.log(sum(2, 6));       // Вывод: 8
console.log(subtract(8, 3));   // Вывод: 5
console.log(multiply(4, 5));   // Вывод: 20
console.log(divide(10, 2));    // Вывод: 5
console.log(divide(7, 0));     // Вывод: "Деление на ноль невозможно"
