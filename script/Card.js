/*
Crie a classe Card, que cria um cartão com texto e um link de imagem, de acordo com os seguintes requisitos:
Utiliza os dados do cartão, texto e link para a imagem, e um seletor de elementos de template como parâmetros para o construtor.
Possui métodos privados para trabalhar com marcação e adicionar ouvintes de eventos.
Possui métodos privados para cada manipulador de eventos.
Possui um método público que devolve o elemento do cartão totalmente funcional, preenchido com dados.
Crie uma instância de classe Card para cada cartão.*/

export default class Card {
  constructor(text, link, templateSelector) {
    this._text = text;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._element = cardElement;
  }

  _generateCard() {
    this._getTemplate();
    this._element.querySelector(".card__text").textContent = this._text;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._text;
    return this._element;
  }

  _setListners() {}
}
