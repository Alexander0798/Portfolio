
export default class OpenBurger {
  constructor({ menu, buttonMenu }) {
    this._menu = document.querySelector(`.${menu}`);
    this._menuSelector = menu;
    this._buttonMenu = document.querySelector(`.${buttonMenu}`);
    this._bittonSelector = buttonMenu

  }
  open() {
    this._menu.classList.toggle('active')
    this._setEventListeners()
  }
  close() {
    this._menu.classList.remove('active')
    this._removeEventListeners()
  }
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close()
    }
  }
  _setEventListeners() {
    document.addEventListener('mousedown', (evt) => {
      if (!evt.target.classList.contains('menu__navigation') & !evt.target.classList.contains('menu__link')) {
        this.close()
      }
    })
  }
  _removeEventListeners() {
    document.removeEventListener('mousedown', (evt) => {
      if (!evt.target.classList.contains('menu__navigation') & !evt.target.classList.contains('menu__link')) {
        this.close()
      }
    })
  }
}
