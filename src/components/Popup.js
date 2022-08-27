//открывает, закрывает попап
export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(evt) {
        if(evt.key ==="Escape") {
            this.close();
        }
    }
    //добавляет слушатель икопке закрытия попапа
    setEventListeners() {
        this._closeIcon = this._popupElement.querySelector('.popup__close-icon');
        this._closeIcon.addEventListener('click', () => {
            this.close();
        });
        this._popupElement.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        });
    
    }
}