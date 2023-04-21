class InfoToggle extends HTMLElement {
  constructor() {
    super();
    this._isVisible = false;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
    #info-box {
      display: none;
    }
    </style>
    <button>Show</button>
    <p id="info-box">
    <slot></slot>
    </p>
    `;
    this._btn = this.shadowRoot.querySelector('button');
    this._infoBox = this.shadowRoot.querySelector('#info-box');
    this._btn.addEventListener('click', this._toggleInfoBox.bind(this));
  }

  connectedCallback() {
    if (this.hasAttribute('is-visible')) {
      if (this.getAttribute('is-visible') === 'true') {
        this._toggleInfoBox();
      }
      // this._isVisible = !(this.getAttribute('is-visible') === 'true');
      // this._toggleInfoBox();
    }
  }
  _toggleInfoBox() {
    this._isVisible = !this._isVisible;
    this._infoBox.style.display = this._isVisible ? 'block' : 'none';
    this._btn.textContent = this._isVisible ? 'Hide' : 'Show';
  }
}

customElements.define('kalbonyan-toggle', InfoToggle);
