import { openImage } from './index';
//создаёт карточку с текстом и ссылкой на изображение
export class Card {
    //принимает в коструктор её данные и селектор её темплат-элемента
    constructor(link, name, templateSelector) {
        this._link = link;
        this._name = name;
        this._templateSelector = templateSelector;
    }
    
    //содержит приватные методы, 
    //которые работают с разметкой
    _getTemplate() {
        const cardElement = document.querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }
    //устанавливают слушатели событий
    _setEventListeners() {
        this._element.querySelector('.element__mask-group').addEventListener('click', () => {
            this._handleOpenImage();
        });
        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._handleCloseImage();
        });
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handlelike();
        });
    }
    //для каждого обработчика
    //для открытия попап картинки просмотра
    _handleOpenImage () {
        openImage(this._link, this._name);    
    }
    //переключатель лайка
    _handlelike() {
       this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }
    //для удаления картинки
    _handleCloseImage () {
        this._element.querySelector('.element__trash').remove();
    }    
    //публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__mask-group').src = this._link;
        this._element.querySelector('.element__mask-group').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;
        
        return this._element;
    }

}
