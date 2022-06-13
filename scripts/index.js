
const popupForEdit = document.querySelector('.popup_for_edit');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseIconForEdit = document.querySelector('.popup__close-icon_for_edit');
const profileAddButton = document.querySelector('.profile__add-button');
const popupForCard = document.querySelector('.popup_for_card');
const popupCloseIconForCard = document.querySelector('.popup__close-icon_for_card');
const popupForImg = document.querySelector('.popup_for_img');
const popupCloseIconForImg = document.querySelector('.popup__close-icon_for_img');
const formElementForEdit = popupForEdit.querySelector('.form_for_edit');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const profileInfoTitle = document.querySelector('.profile__title');
const profileInfoSubtitle = document.querySelector('.profile__subtitle');
const groupElement = document.querySelector('.groups__elements');
const popupElImg = document.querySelector('.popup__el-img');
const popupElCaption = document.querySelector('.popup__el-caption');
const formElementForCard = popupForCard.querySelector('.form_for_card');
const titleInput = document.querySelector('.form__input_type_title');
const linkInput = document.querySelector('.form__input_type_link');
const popups = document.querySelectorAll('.popup');
const elementTemplate = document.querySelector('.element-template').content;

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', haldeEscKeydown);    
}

function closeIconPopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',haldeEscKeydown);
}

const haldeEscKeydown = (evt) => {
  if(evt.key ==="Escape") {
    closeIconPopup(document.querySelector('.popup_opened'));
  }
  const popups = popupArray(document);
}
const popupArray = (document) => {
  return Array.from(document.querySelectorAll('.popup'));
}

const haldeOverlay = (evt) => {
  if(evt.target === evt.currentTarget) {
    closeIconPopup(evt.target);
  }
}
popups.forEach((popup) => {
  popup.addEventListener('click', haldeOverlay);
});

popupCloseIconForEdit.addEventListener('click', () => {
  closeIconPopup(popupForEdit);
});
popupCloseIconForCard.addEventListener('click', () =>{
  closeIconPopup(popupForCard);
});
popupCloseIconForImg.addEventListener('click', () =>{
  closeIconPopup(popupForImg);
});

profileEditButton.addEventListener('click', () => {
  openPopup(popupForEdit);
  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoSubtitle.textContent;
});

profileAddButton.addEventListener('click', () => {
  openPopup(popupForCard);
  linkInput.value = '';
  titleInput.value = '';
});

// Обработчик «отправки» формы,
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoTitle.textContent = nameInput.value;
    profileInfoSubtitle.textContent = jobInput.value;
    closeIconPopup(popupForEdit);

}
formElementForEdit.addEventListener('submit', formSubmitHandler);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
   
function createCard(card) {
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    const elMaskGroup = element.querySelector('.element__mask-group');
    elMaskGroup.src = card.link;
    elMaskGroup.alt = card.name;
    const elTitle = element.querySelector('.element__title');
    elTitle.textContent = card.name;
    element.querySelector('.element__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__like_active');
    });
    element.querySelector('.element__trash').addEventListener('click', () => {
      element.remove();
    });
    elMaskGroup.addEventListener('click', (evt) => {
      openPopup(popupForImg);
      popupElImg.src = evt.target.src;
      popupElImg.alt = element.textContent;
      popupElCaption.textContent = element.textContent;
    });
    return element;
}


function inserstCard(element) {
  groupElement.prepend(createCard(element));  
}

initialCards.forEach(function(card){
  inserstCard(card);
});

// Обработчик «отправки» формы,
function formForCardSubmitHandler (evt) {
    evt.preventDefault();
    const card = {};
    card.link = linkInput.value;
    card.name = titleInput.value;
    inserstCard(card);
    
    closeIconPopup(popupForCard);
    
}

formElementForCard.addEventListener('submit', formForCardSubmitHandler);

