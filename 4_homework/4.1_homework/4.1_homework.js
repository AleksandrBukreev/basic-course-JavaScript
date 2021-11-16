'use script';
/**
 * Функция разбивает число по разрядам
 * @param {*} num Число от 0 до 999, которое разбиваем на разряды(еденицы(units), десятки(tens), сотни(hundreds))
* @returns Объект с разрядами числа
*/


function splitNumberByDidits(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Число должно быть в диапазоне от 0 до 999');
        return {};
    }
    return {
        units: num % 10,
        hundreds: Math.floor(num / 100),
        tens: Math.floor((num / 10) % 10),
    }
}
console.log(splitNumberByDidits(1010));