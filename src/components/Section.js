//отрисовывает элементы на странице
export class Section {
    //renderer-отвечает за создание и отрисовку данных на странице
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    //отвечает за отрисовку всех элементов
    renderItems(items) {
        items.forEach(item => {
            this._renderer(item);
        });
    }
    //добавляет элемент в  контейнер
    addItem(element) {
        this._container.prepend(element);
        //console.log(element);
    }
   
}