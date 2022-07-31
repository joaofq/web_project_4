export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._clearSection();
    this._items.forEach((item, index) => {
      this._renderer(item, index);
    });
  }

  addItem(element) {
    this._container.append(element);
  }

  _clearSection() {
    this._container.innerHTML = "";
  }
}
