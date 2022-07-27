/*
requisitos:
Ter um objeto com duas propriedades (items e renderer) como primeiro parâmetro do construtor. A propriedade items serve como um vetor de dados, que você precisa adicionar em uma página ao inicializar a classe. A propriedade renderer é uma função responsável por criar e renderizar dados em uma página (ok parcial).
O segundo parâmetro deve ser um seletor de classe CSS onde você adicionará os elementos do cartão (ok).
Ele armazena um método público que renderiza todos os elementos na página.(?)  A função renderer() vai renderizar cada elemento em uma página.
Ela armazena um método público chamado addItem() que pega um elemento DOM e adiciona ao contêiner.
A classe Section não tem marcação. Ela recebe marcação por meio da função de retorno de chamada e insere no contêiner.*/

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer; //vai entrar a função renderCards();
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item, index) => {
      this._renderer(item, index);
    });
  }

  //onde chamar o addItem?

  addItem(element) {
    this._container.append(element);
  }
}
