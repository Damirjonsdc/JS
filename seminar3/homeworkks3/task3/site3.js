"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

// Функция для определения максимального значения и вывода сообщения
function findMaxNumber(number1, number2, number3) {
    const maxNumber = Math.max(number1, number2, number3);
    console.log(`Максимальное значение среди чисел ${number1}, ${number2}, ${number3} равно ${maxNumber}.`);
}

// Запрашиваем у пользователя ввод трех чисел
const userInput1 = prompt("Введите первое число:");
const userInput2 = prompt("Введите второе число:");
const userInput3 = prompt("Введите третье число:");

// Преобразуем введенные значения в числа и вызываем функцию
const number1 = parseFloat(userInput1);
const number2 = parseFloat(userInput2);
const number3 = parseFloat(userInput3);

findMaxNumber(number1, number2, number3);
