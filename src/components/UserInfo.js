 //управляет отображением информации о пользователе на странице
 export default class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector}) {
        this._userName = document.querySelector(nameSelector);
        this._userJob = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);

    }
    //возвращает объект с данными пользователя
    getUserInfo() {
        this.userData = {
            nameInput: this._userName.textContent,
            jobInput: this._userJob.textContent,
            _id: this._id
        };
        return this.userData; 
    }
    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo({nameInput, jobInput, _id}) {
        this._userName.textContent = nameInput;
        this._userJob.textContent = jobInput;
        this._id = _id; 
    }
    setUserInfoAvatar({ avatar}) {
        this._avatar.src = avatar; 
    }
}