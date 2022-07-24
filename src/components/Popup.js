//открывает, закрывает попап
export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(evt) {
        if(evt.key ==="Escape") {
            this.close(document.querySelector('.popup_opened'));
            console.log(evt.key);
        }
    }
    //добавляет слушатель икопке закрытия попапа
    setEventListeners() {
        this._closeIcon = this._popupSelector.querySelector('.popup__close-icon');
        this._closeIcon.addEventListener('click', () => {
            this.close();
        });
        this._popupSelector.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close(evt.target);
            }
        });
    
    }
}