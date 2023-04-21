class Toggler extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
    #info-box {
      display: none;
    }
    </style>
    <button>${this.btnText || 'show'}</button>
    <p id="info-box">${this.pText || 'info box'}</p>
    `;
  }
  connectedCallback() {
    const btn = this.shadowRoot.querySelector('button');
    const infoBox = this.shadowRoot.querySelector('#info-box');
    btn.addEventListener('click', () => {
      infoBox.style.display = 'block';
    });
  }
}

customElements.define('kalbonyan-toggler', Toggler);
