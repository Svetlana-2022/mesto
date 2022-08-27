import Popup from "./Popup.js";
export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open() {
        super.open();
    }
    close() {
        super.close();
    }
    setConfirmAction(action) {
        this._confirmAction = action;
    }
    setEventListeners() {
        super.setEventListeners();
        this._form = this._popupElement.querySelector('.form');
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._confirmAction();
        })
    }
    
}