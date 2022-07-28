/*
Crie a classe Popup que abre e fecha a janela pop-up, conforme os seguintes requisitos:
O construtor deve ter um único parâmetro, que é o seletor pop-up.
Armazenar os métodos públicos open() e close() que abrirão e fecharão o pop-up.
Armazenar um método privado chamado _handleEscClose() que armazena a lógica para fechar o pop-up pressionando a tecla Esc.
Armazenar um método público chamado setEventListeners() que adiciona um ouvinte de evento click ao ícone de fechamento do popup. A janela modal também deve fechar quando os usuários clicarem na área sombreada em torno do formulário.*/

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_opened");
  }

  close() {
    this._popup.classList.remove("popup_opened");
  }

  _handleEscClose(evt) {
    if (
      this._popup.classList.contains("popup_opened") &&
      evt.key === "Escape"
    ) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });

    this._popup.addEventListener("click", (evt) => {
      if (!evt.target.closest(".popup__container")) {
        this.close();
      }
    });

    this._popup
      .querySelector(".popup__close-icon")
      .addEventListener("click", () => {
        this.close();
      });
  }
}
