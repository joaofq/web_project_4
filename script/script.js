let editButton = document.querySelector(".editbutton");
let closeButton = document.querySelector(".popup__close-icon");
let popup = document.querySelector(".popup");
let inputName = document.querySelector(".popup__input-name");
let inputAbout = document.querySelector(".popup__input-about");
let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");
let popup__button = document.querySelector(".popup__button");

editButton.addEventListener("click", callPopup);
closeButton.addEventListener("click", callPopup);
popup__button.addEventListener("click", savePopup);

function callPopup() {
  popup.classList.toggle("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileDescription.textContent;
}

function savePopup(evt) {
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputAbout.value;
  popup.classList.toggle("popup_opened");
  evt.preventDefault();
}
