export class Api {
    constructor({ url, headers}) {
      this._url = url;
      this._headers = headers;
    }

    //метод загрузки информации о пользователе с сервера
    getUserInfo() {
      return fetch(`${this._url}users/me`, { headers: this._headers}).then((res) => {
        if(res.ok) {
          return res.json();
        } else {
          Promise.reject(`Ошибка ${res.status}`);
        }
      });
    }
     //метод редактирования профиля пользователя
    updateProfileInfo({ name, about }) {
      return fetch(`${this._url}users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({ name, about })
      }).then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`));
    }
     //метод редактирования профиля аватара
    updateProfileAvatar({ avatar }) {
      return fetch(`${this._url}users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({ avatar })
      }).then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`));
    }
  
    //метод загрузки карточек с сервера
    getInitialCards() {
      return fetch(`${this._url}cards`, { headers: this._headers}).then((res) => {
        if(res.ok) {
          return res.json();
        } else {
          Promise.reject(`Ошибка ${res.status}`);
        }
      });
    }

    //метод добавления новой карточки
    addCard = ({ name, link }) => {
      return fetch(`${this._url}cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({ name, link })
      }).then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status} ${res.statusText}`));
    }
     //метод удаления карточки 
    deleteCard = (id) => {
      return fetch(`${this._url}cards/${id}`, {
        method: "DELETE",
        headers: this._headers
      }).then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status} ${res.statusText}`));
    }
  
    //метод  постановки лайка карточки
    likeCard() {
      return fetch(`${this._url}cards/${id}/${likes}`, {
        method: "PUT",
        headers: this._headers
      }).then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status} ${res.statusText}`));
    }
    //метод снятия лайка
    inLikeCard() {
      return fetch(`${this._url}cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers
      }).then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status} ${res.statusText}`));
    }
  }
  
