const popup = document.querySelector('.popup');
const profileinfoEditButton = document.querySelector('.profile-info__edit-button');
const popupCloseicon = document.querySelector('.popup__close-icon');


function openPopup() {
    popup.classList.add('popup_opened');
}
function closeiconPopup() {
    popup.classList.remove('popup_opened');
}
popupCloseicon.addEventListener('click', () => {
    closeiconPopup();
})
profileinfoEditButton.addEventListener('click', () => {
    openPopup();
})
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input-name');
let jobInput = document.querySelector('.form__input-name_type_job');
let profileInfoTitle = document.querySelector('.profile-info__title');
let profileInfoSubtitle = document.querySelector('.profile-info__subtitle');

// Обработчик «отправки» формы,
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    closeiconPopup();

}

formElement.addEventListener('submit', formSubmitHandler);