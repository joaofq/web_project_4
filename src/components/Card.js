import PopupWithImage from "./PopupWithImage.js";
import { initialCards } from "../index.js";

export default class Card {
  constructor(text, link, templateSelector, index, handleCardClick) {
    this._text = text;
    this._link = link;
    this._templateSelector = templateSelector;
    this._index = index;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._element = cardElement;
  }

  _setListners() {
    //deleteCard
    this._element
      .querySelector(".card__trash")
      .addEventListener("click", this._deleteCard);

    //toggleLike

    this._element
      .querySelector(".likebutton")
      .addEventListener("click", this._toggleLike);

    //callPopupImage

    this._element
      .querySelector(".card__image")
      .addEventListener("click", (evt) => {
        this._handleCardClick(evt);
      });
  }

  _deleteCard(evt) {
    evt.target.parentElement.remove();
    initialCards.splice(this._index, 1);
  }

  _toggleLike() {
    this.classList.toggle("likebutton_active");
  }

  generateCard() {
    this._getTemplate();
    this._setListners();
    this._element.querySelector(".card__text").textContent = this._text;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._text;
    return this._element;
  }
}
