import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const editButton = document.querySelector(".editbutton");
const popup = document.querySelectorAll(".popup");
const closePopupIcon = document.querySelectorAll(".popup__close-icon");
const popupEditProfile = document.querySelector(".popup-editprofile");
const formEditProfile = document.forms.formEditProfile;
const formAddCard = document.forms.formAddCard;
const inputName = formEditProfile.elements.name;
const inputAbout = formEditProfile.elements.about;
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const elements = document.querySelector(".elements");
const addButton = document.querySelector(".addbutton");
const popupAddCard = document.querySelector(".popup-addcard");
const inputCardTitle = formAddCard.elements.title;
const inputCardLink = formAddCard.elements.link;

//1. GERA OS 6 CARDS INICIAIS

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

function renderCards() {
  elements.innerHTML = "";
  initialCards.map(function (item, index) {
    const newCard = new Card(item.name, item.link, ".cardTemplate", index);
    elements.append(newCard.generateCard());
  });
}

//2 ABERTURA DE POPUPS

//2.1. Popup edit profile - puxa dados iniciais

function callPopupEditProfile() {
  popupEditProfile.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileDescription.textContent;
}

editButton.addEventListener("click", callPopupEditProfile);

//2.2. Popup addCard

function callPopupAddCard() {
  popupAddCard.classList.add("popup_opened");
}

addButton.addEventListener("click", callPopupAddCard);

//2.3. Popup Image

//3 FECHA OS POPUPS

closePopupIcon.forEach(function (item) {
  item.addEventListener("click", function () {
    closePopup(item.closest(".popup"));
  });
});

function closePopup(item) {
  item.classList.remove("popup_opened");
  formAddCard.reset();
}

popup.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    if (!evt.target.closest(".popup__container")) {
      closePopup(item);
    }
  });
});

popup.forEach(function (item) {
  document.addEventListener("keydown", function (evt) {
    if (item.classList.contains("popup_opened") && evt.key === "Escape") {
      closePopup(item);
    }
  });
});

//4 SALVA OS POPUPS

//4.1. Salva dados do Edit Profile

formEditProfile.addEventListener("submit", function (evt) {
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputAbout.value;
  closePopup(popupEditProfile);
  evt.preventDefault();
});

//4.2. Salva dados do AddCards e inclui na lista

formAddCard.addEventListener("submit", addCard);

function addCard(evt) {
  const newCard = {
    name: inputCardTitle.value,
    link: inputCardLink.value,
  };
  initialCards.unshift(newCard);
  renderCards();
  clearAddCardPopup();
  evt.preventDefault();
}

function clearAddCardPopup() {
  closePopup(popupAddCard);
  formAddCard.reset();
}

renderCards();

//Enable form validations

const defaultConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_visible",
};
const formAddCardValidator = new FormValidator(defaultConfig, formAddCard);
const formEditProfileValidator = new FormValidator(
  defaultConfig,
  formEditProfile,
);

formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();
