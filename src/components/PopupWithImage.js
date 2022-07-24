import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector, { data }) {
        super(popupSelector);
        this.link = data.link;
        this.name = data.name;
    }
    //вставляет в попап картинку
    open() {
        super.open();
        this._popupImg = this._popupSelector.querySelector('.popup__el-img');
        this._popupImg.src = this.link;
        this._popupImg.alt = this.name;
        this._popupCaption = this._popupSelector.querySelector('.popup__el-caption');
        this._popupCaption.textContent = this.name;
        
    }
}