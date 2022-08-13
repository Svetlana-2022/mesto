//отрисовывает элементы на странице
export class Section {
    //renderer-отвечает за создание и отрисовку данных на странице
    constructor({ items, renderer }, containerSelector, api) {
        this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._api = api;
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
        console.log(element);
    }
    //используется метод: api.addCard и добавляет элемент в контейнер
    // saveNewCard(element) {
    //     this._api.addCard({ name, link }).then((res) =>{
    //         this.addItem(element.res);
    //         console.log(element.res)
    //     }).catch(err => console.log(err));
    //  }
}