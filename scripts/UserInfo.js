 //управляет отображением информации о пользователе на странице
 export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._userName = document.querySelector(nameSelector);
        this._userJob = document.querySelector(jobSelector);
    }
    //возвращает объект с данными пользователя
    getUserInfo() {
        this.userData = {
            nameInput: this._userName.textContent,
            jobInput: this._userJob.textContent
        };
        return this.userData; 
    }
    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo({nameInput, jobInput}) {
        this._userName.textContent = nameInput;
        this._userJob.textContent = jobInput;  
    }
}