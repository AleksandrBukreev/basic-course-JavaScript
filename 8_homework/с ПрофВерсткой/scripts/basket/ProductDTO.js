'use strict';
//Этот класс будет хранить информацию о каком-то конкретном товаре
// Data Transfer Object (DTO) — один из шаблонов проектирования,
//  используется для передачи данных между подсистемами приложения
class ProductDTO {
    /**
     * @param {number} id -уникальный идентификатор каждого товара
     * @param {string} image -название файла с картинкой, например test.jpg
     * @param {string} name -имя товара
     * @param {string} description -описание товара
     * @param {number} price -цена товара
     */
    constructor(id, image, name, description, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}