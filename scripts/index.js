const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseIcon = document.querySelector('.popup__close-icon');


function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value = profileInfoTitle.textContent;
    jobInput.value = profileInfoSubtitle.textContent;
}
function closeIconPopup() {
    popup.classList.remove('popup_opened');
}
popupCloseIcon.addEventListener('click', () => {
    closeIconPopup();
})
profileEditButton.addEventListener('click', () => {
    openPopup();
})
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__input-name_type_name');
let jobInput = document.querySelector('.form__input-name_type_job');
let profileInfoTitle = document.querySelector('.profile__title');
let profileInfoSubtitle = document.querySelector('.profile__subtitle');

// Обработчик «отправки» формы,
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    closeIconPopup();

}

formElement.addEventListener('submit', formSubmitHandler);