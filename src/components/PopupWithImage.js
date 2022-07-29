import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImg = this._popupSelector.querySelector('.popup__el-img');
        this._popupCaption = this._popupSelector.querySelector('.popup__el-caption');
        //this.link = data.link;
        //this.name = data.name;
    }
    //вставляет в попап картинку
    open({ data }) {
        super.open();
        //this._popupImg = this._popupSelector.querySelector('.popup__el-img');
        this._popupImg.src = data.link;
        this._popupImg.alt = data.name;
        //this._popupCaption = this._popupSelector.querySelector('.popup__el-caption');
        this._popupCaption.textContent = data.name;   
    }
    setEventListeners() {
        super.setEventListeners(); 
    }
}