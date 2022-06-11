const editButton = document.querySelector(".editbutton");
const closeButton = document.querySelectorAll(".popup__close-icon");
const popupEditProfile = document.querySelector(".popup-editprofile");
const inputName = document.querySelector(".popup__input-name");
const inputAbout = document.querySelector(".popup__input-about");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const saveButtonEdit = document.querySelector(".popup__button-edit");
const saveButtonAddCard = document.querySelector(".popup__button-addcard");
const cardTemplate = document.querySelector(".cardTemplate").content;
const elements = document.querySelector(".elements");
const addButton = document.querySelector(".addbutton");
const popupAddCard = document.querySelector(".popup-addcard");
const inputCardTitle = document.querySelector(".popup__input-title");
const inputCardLink = document.querySelector(".popup__input-link");
const popupImage = document.querySelector(".popup__image");

//1. GERA OS 6 CARDS INICIAIS

const initialCards = [
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

function callInitialCards() {
  elements.innerHTML = "";
  initialCards.map(function (item) {
    let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    cardElement.querySelector(".card__text").textContent = item.name;
    cardElement.querySelector(".card__image").src = item.link;
    cardElement.querySelector(".card__image").alt = item.name;
    return elements.append(cardElement);
  });
  callLikeButton();
  callPopupImage();
  callDeleteButton();
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

addButton.addEventListener("click", callPopupAddCard); //Jogar pro final

//2.3. Popup Image

const callPopupImage = function () {
  const images = document.querySelectorAll(".card__image");
  images.forEach(function (item) {
    item.addEventListener("click", function () {
      const imageView = document.querySelector(".popup__image-view");
      imageView.src = item.src;
      imageView.alt = item.alt;
      const imageTitle = document.querySelector(".popup__title_img");
      imageTitle.textContent = item.alt;
      popupImage.classList.add("popup_opened");
    });
  });
};

//3 FECHA OS POPUPS

closeButton.forEach(function (item) {
  item.addEventListener("click", function closePopup() {
    popupAddCard.classList.remove("popup_opened");
    popupEditProfile.classList.remove("popup_opened");
    popupImage.classList.remove("popup_opened");
  });
});

//4 SALVA OS POPUPS

//4.1. Salva dados do Edit Profile

saveButtonEdit.addEventListener("click", function (evt) {
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputAbout.value;
  popupEditProfile.classList.remove("popup_opened");
  evt.preventDefault();
});

saveButtonAddCard.addEventListener("click", addCard);

//4.2. Salva dados do AddCards e inclui na lista

function addCard() {
  let newCard = {
    name: inputCardTitle.value,
    link: inputCardLink.value,
  };
  initialCards.unshift(newCard);

  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__text").textContent = newCard.name;
  cardElement.querySelector(".card__image").src = newCard.link;
  cardElement.querySelector(".card__image").alt = newCard.name;
  elements.prepend(cardElement);

  popupAddCard.classList.remove("popup_opened");
  inputCardLink.value = "";
  inputCardTitle.value = "";
  event.preventDefault();
  callPopupImage();
  callInitialCards();
}

//5. BOTÃO CURTIR

function callLikeButton() {
  const likeButton = document.querySelectorAll(".likebutton");
  likeButton.forEach(function (item) {
    item.addEventListener("click", function (evt) {
      item.classList.toggle("likebutton_active");
    });
  });
}

//6. BOTÃO DELETAR /

function callDeleteButton() {
  const trashButton = document.querySelectorAll(".card__trash");
  trashButton.forEach(function (item, index) {
    item.addEventListener("click", function (evt) {
      evt.target.parentElement.remove();
      initialCards.splice(index, 1);
      callInitialCards();
    });
  });
}

callInitialCards();
