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
const cardTemplate = document.querySelector(".cardTemplate").content;
const elements = document.querySelector(".elements");
const addButton = document.querySelector(".addbutton");
const popupAddCard = document.querySelector(".popup-addcard");
const inputCardTitle = formAddCard.elements.title;
const inputCardLink = formAddCard.elements.link;
const popupImage = document.querySelector(".popup_image");

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
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    cardElement.querySelector(".card__text").textContent = item.name;
    cardElement.querySelector(".card__image").src = item.link;
    cardElement.querySelector(".card__image").alt = item.name;
    return elements.append(cardElement);
  });
  callLikeButton();
  callPopupImage();
  deletCardButton();
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

function callPopupImage() {
  const images = document.querySelectorAll(".card__image");
  images.forEach(function (item) {
    item.addEventListener("click", createPopupImage);
  });
}

function createPopupImage(evt) {
  const imageView = document.querySelector(".popup__image-view");
  imageView.src = evt.target.src;
  imageView.alt = evt.target.alt;
  const imageTitle = document.querySelector(".popup__caption");
  imageTitle.textContent = evt.target.alt;
  popupImage.classList.add("popup_opened");
}

//3 FECHA OS POPUPS

closePopupIcon.forEach(function (item) {
  item.addEventListener("click", function () {
    closePopup(item.closest(".popup"));
  });
});

function closePopup(item) {
  item.classList.remove("popup_opened");
}

popup.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    if (!evt.target.closest(".popup__container")) {
      closePopup(item);
    }
  });
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
  callInitialCards();
  clearAddCardPopup();
  evt.preventDefault();
}

function clearAddCardPopup() {
  closePopup(popupAddCard);
  formAddCard.reset();
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

function deletCardButton() {
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
