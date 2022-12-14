// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

import {number, string} from "prop-types";

export function sum(...nums: Array<number>): number {
    console.log(nums)
    //...здесь пишем код.
    return nums.reduce((acc, el) => acc + el)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код
if (a>b && a>c && b==c){
    return "00"
}
else if (a === b && b === c && a === c) {
        return "10"
    }
else if (a === b || a === c || b === c) {
        return "01"
    }
else if (a != b && b != c && a != c) {
        return "11"
    }
return ''
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    let string = String(number)
    let sum = 0
    for (let i = 0; i < string.length; i++)
        sum += Number(string[i])
    return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    const sub1 = arr.filter((_, index) => index % 2 === 0)
    const sum1 = sub1.reduce((acc, el) => acc + el)
    const sub2 = arr.filter((_, index) => index % 2 != 0)
    const sum2 = sub2.reduce((acc, el) => acc + el)
    if (sum1 > sum2) {
        return true
    } else {
        return false
    }
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    let array1 = array.filter(el => Number.isInteger(el) && el > 0)
    let newArray = array1.map(el => el * el)
    return newArray
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    let sum = (N * (N + 1)) / 2
    return sum
}

// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(sum: number): Array<number> {
    //...здесь пишем код.
    let banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let result = []
    let currPos=0
    while (sum>0){
        if(sum - banknotes [currPos] >=0){
            sum -= banknotes [currPos]
            result.push(banknotes [currPos])
        }
        else {
            currPos ++
        }
    }
    return result
}
