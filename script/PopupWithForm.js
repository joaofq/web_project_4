/*Crie PopupWithForm como uma classe filha de Popup. A classe PopupWithForm deve atender aos seguintes requisitos:

*Levar um retorno de chamada do envio do formulário para dentro do construtor (?) e do seletor pop-up.*

Armazenar um método privado chamado _getInputValues() que coleta dados de todos os campos de entrada.

Modificar o método pai setEventListeners(). O método setEventListeners() da classe PopupWithForm precisa adicionar o manipulador de eventos Enviar ao formulário e ao ouvinte de evento click para o ícone de fechamento.

Modificar o método pai close() para redefinir o formulário assim que o pop-up for fechado.
Criar uma instância da classe PopupWithForm para cada pop-up.*/

import Popup from "./Popup.js";
import { resetValidation } from "./script.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector("form");
  }

  _getInputValues() {
    const inputList = this._popup.querySelectorAll(".popup__input");
    return inputList;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFunction();
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
    resetValidation();
  }
}

/*formEditProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  saveProfileInputs();
});

function saveProfileInputs() {
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputAbout.value;
}*/
