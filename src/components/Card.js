//создаёт карточку с текстом и ссылкой на изображение
export class Card {
    //принимает в коструктор её данные и селектор её темплат-элемента
    constructor(data, templateSelector, handleCardClick, handleDelClick, api) {
        this._link = data.link;
        this._name = data.name;
        this._likes = data.likes;
        //console.log(data.likes);
        this._id = data._id;
        //console.log(data._id);
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDelClick = handleDelClick;
        this._api = api;
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
            this._handleDelClick();
           //this._handleDeleteCard();
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
       if(this._likeButton.classList.contains('element__like_active')) {
        this._likes.length +1;
       } else {
        this._likes.length -1;
       }
    }

    //для удаления картинки
    _handleDeleteCard () {
        this._api.deleteCard(this._id)
        .then(() =>{
            this._element.remove();
        }).catch(err => console.log(err));
        
    }    
    //публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardTitle = this._element.querySelector('.element__title');
        this._cardTitle.textContent = this._name;
        this._cardLikeCount = this._element.querySelector('.element__like-count');
        this._cardLikeCount.textContent = this._likes.length;
        //console.log(this._likes.length);
        // if(this._id) {
        //     this._cardTrash.remove();
        // }
        
        return this._element;
    }

}
