//создаёт карточку с текстом и ссылкой на изображение
export class Card {
    //принимает в коструктор её данные и селектор её темплат-элемента
    constructor(data, templateSelector, { handleCardClick, handleDelClick, handleIsOwner, handleLikesCard }) {
        this._link = data.link;
        this._name = data.name;
        this._data = data;
        this._likes = data.likes;
        this._id = data._id;
        this._owner = data.owner._id;
        //this._isOwner = handleIsOwner(this._owner);
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDelClick = handleDelClick.bind(this);
        this._handleLikesCard = handleLikesCard;
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
    _isOwner() {
        return this._data.currentUser === this._owner;
    }
    
    //устанавливают слушатели событий
    _setEventListeners() {
        this._cardImage = this._element.querySelector('.element__mask-group');
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._link, this._name);
        });
        this._cardTrash = this._element.querySelector('.element__trash');
        if(this._isOwner()) {
            console.log(this._isOwner());
            this._cardTrash.addEventListener('click', () => {
                this._handleDelClick(this._data);
            });
        }
       
        this._likeButton = this._element.querySelector('.element__like');
        this._likeButton.addEventListener('click', () => {
            this._handleLikesCard(this._data);
        });
    }
    // //для изменения цвета лайка
    _handlelikeCheck() {
        if(this.isLiked()) {
            this.addLike();
        } else {
            this.deleteLike();
        }
    }
    isLiked() {
        return this._likes.some((item) => {
            return this._data.currentUser === item._id;
        });
    
    }
    addLike() {
        this._likeButton.classList.add('element__like_active');
    }
    deleteLike() {
        this._likeButton.classList.remove('element__like_active');
    }
    //для отображения лайка
    setLike(item) {
        this._likes = item;
        this._cardLikeCount.textContent = this._likes.length;
    }
    //для удаления картинки
    handleDeleteCard = (data) => {
        // console.log(this._cardTitle.textContent);
        // console.log(this._data.name);
        // this._data = data;
        // if(this._cardTitle.textContent === this._data.name){
        //     this._element.remove();
        // }
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
        this._cardLikeCount = this._element.querySelector('.element__like-count');
        this.setLike(this._likes);
        this._handlelikeCheck();
        //this.handleDeleteCard();
        if(!this._isOwner()) {
           this._cardTrash.remove();
        }
        return this._element;
    }
    
}
