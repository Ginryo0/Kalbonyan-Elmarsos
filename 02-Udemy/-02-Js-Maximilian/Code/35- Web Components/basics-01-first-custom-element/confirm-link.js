class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', (event) => {
      if (!confirm('Do you really want to be redirected?')) {
        event.preventDefault();
      }
    });
  }
}

customElements.define('kalbonyan-link', ConfirmLink, { extends: 'a' });
