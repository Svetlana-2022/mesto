//создаёт карточку с текстом и ссылкой на изображение
export class Card {
    //принимает в коструктор её данные и селектор её темплат-элемента
    constructor(data, templateSelector, handleCardClick) {
        this._link = data.link;
        this._name = data.name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
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
        this._cardImage = this._element.querySelector('.element__mask-group');
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._link, this._name);
        });
        this._cardTrash = this._element.querySelector('.element__trash');
        this._cardTrash.addEventListener('click', () => {
            this._handleDeleteCard();
        });
        this._likeButton = this._element.querySelector('.element__like');
        this._likeButton.addEventListener('click', () => {
            this._handlelike();
        });
    }
    //для каждого обработчика
    //переключатель лайка
    _handlelike() { 
       this._likeButton.classList.toggle('element__like_active');
    }
    //для удаления картинки
    _handleDeleteCard () {
        this._element.remove();
    }    
    //публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle = this._element.querySelector('.element__title');
        this._cardTitle.textContent = this._name;
        
        return this._element;
    }

}
