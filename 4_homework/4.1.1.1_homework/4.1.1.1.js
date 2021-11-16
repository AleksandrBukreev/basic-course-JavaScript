// В стиле es5
// Конструктор Product, который принимает параметры name и price, сохраните их как
// свойства объекта.Также объекты типа Product должны иметь метод make25PercentDiscount,
// который будет уменьшать цену в объекте на 25 %
'use strict';
/**
 * Объект Product со следующими параметрами:
 * @param {*} name 
 * @param {*} price 
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price - (this.price * 0.25);
}
const productOne = new Product('Товар', 500);
productOne.make25PercentDiscount();
console.log(productOne);

const productTwo = new Product('Товар_2', 100);
productTwo.make25PercentDiscount();
console.log(productTwo);

