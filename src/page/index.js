import "../page/index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
const editButton = document.querySelector(".editbutton");
const addButton = document.querySelector(".addbutton");
const formEditProfile = document.forms.formEditProfile;
const formAddCard = document.forms.formAddCard;
const inputName = formEditProfile.elements.name;
const inputAbout = formEditProfile.elements.about;

//1. RENDER ELEMENTS

//1.1. Render cards

export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const handleCardClick = (evt) => {
  const popupImage = new PopupWithImage(".popup_image");
  popupImage.open(evt.target.alt, evt.target.src);
  popupImage.setEventListeners();
};

export const cardList = new Section(
  {
    items: initialCards,
    renderer: (item, index) => {
      const newCard = new Card(
        item.name,
        item.link,
        ".cardTemplate",
        index,
        handleCardClick,
      );
      const cardElement = newCard.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".elements",
);

//1.2. Render user info

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  descriptionSelector: ".profile__description",
});

//2 POPUP WITH FORMS

//2.1. Popup edit profile

//Save function on submit
const saveProfileInputs = () => {
  const newName = inputName.value;
  const newDescription = inputAbout.value;
  userInfo.setUserInfo(newName, newDescription);
};

//create instance
const popupEditProfile = new PopupWithForm(
  ".popup-editprofile",
  saveProfileInputs,
);
popupEditProfile.setEventListeners();

//open opoup
editButton.addEventListener("click", () => {
  popupEditProfile.open();
  const userObj = userInfo.getUserInfo();
  inputName.value = userObj.name;
  inputAbout.value = userObj.description;
});

//2.2. Popup addCard

const addCard = () => {
  const inputCardTitle = formAddCard.elements.title;
  const inputCardLink = formAddCard.elements.link;
  const newCard = {
    name: inputCardTitle.value,
    link: inputCardLink.value,
  };
  initialCards.unshift(newCard);
  cardList.renderItems();
};

const popupAddCard = new PopupWithForm(".popup-addcard", addCard);
popupAddCard.setEventListeners();

addButton.addEventListener("click", () => {
  popupAddCard.open();
});

const defaultConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__error_visible",
};

const formAddCardValidator = new FormValidator(defaultConfig, formAddCard);

const formEditProfileValidator = new FormValidator(
  defaultConfig,
  formEditProfile,
);

formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();
cardList.renderItems();

//renderCards();

function handleResetValidation(item) {
  formAddCardValidator.resetValidation();
  formEditProfileValidator.resetValidation();
}

//render dinamic date on footer

const date = new Date();
const currentYear = date.getFullYear();
const footer = document.querySelector(".footer__text");
footer.textContent = `© ${currentYear} Around The U.S.`;

export {
  inputName,
  inputAbout,
  formAddCard,
  formAddCardValidator,
  formEditProfileValidator,
  handleResetValidation,
};
