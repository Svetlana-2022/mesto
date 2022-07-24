//отрисовывает элементы на странице
export class Section {
    //renderer-отвечает за создание и отрисовку данных на странице
    constructor({ items, renderer }, containerSelector) {
        this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
    //отвечает за отрисовку всех элементов
    renderItems() {
        this._initialArray.forEach(item => {
            this._renderer(item);
        });
    }
    //добавляет элемент в  контейнер
    addItem(element) {
        this._container.prepend(element);
    }
}