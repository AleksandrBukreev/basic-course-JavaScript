// а) конструктор Post, который принимает параметры author, text, date и сохраняет
// их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет 
// принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date.
// Проинициализируйте эти свойства с помощью конструктора Post, чтобы не 
// дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
// highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
// который будет назначать свойству highlighted значение true.
'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}
const post_1 = new Post('alex', 'lorem lorem', '2021');
console.log(post_1);
post_1.edit('новый текст');
console.log(post_1);

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attached_1 = new AttachedPost('admin', 'LOREM LOREM', '2022');
console.log(attached_1);
attached_1.makeTextHighlighted();
attached_1.edit('НОВЫЙ ТЕКСТ');
console.log(attached_1);
