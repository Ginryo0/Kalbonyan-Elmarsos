class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltiplIcon;
    this._tooltipVisible;
    this._tooltipText = 'Default tooltip';
    this.attachShadow({ mode: 'open' }); // could be accessed from outside
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          padding: 0.2rem;
        }
        :host(.important) {
          background-color: var(--color-primary, #ccc);
        }
        :host-context(p){
          font-weight: bold;
        }
        div {
          font-weight: normal;
          background-color: black;
          padding: 0.3rem;
          color: white;
          position: absolute;
          top: 1.5rem;
          left: 0.75rem;
          z-index: 10;
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.26);
        }
        ::slotted(.highlight) {
          color: #fefefe;
        }
        .icon {
          background-color: black;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 50%;
        }

      </style>
      <slot>Default slot</slot>
      <span class="icon">?</span>
    `; // ok to access shadow root too
  }
  // connect to DOM
  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    this._tooltiplIcon = this.shadowRoot.querySelector('.icon'); // query select the shadow DOM
    this._tooltiplIcon.addEventListener(
      'mouseenter',
      this._showTooltip.bind(this)
    );
    this._tooltiplIcon.addEventListener(
      'mouseleave',
      this._hideTooltip.bind(this)
    );
  }
  // check condition on attributes on change
  attributeChangedCallback(name, oldValue, newValue) {
    // so we don't waste performance
    if (oldValue === newValue) {
      return;
    }
    if (name === 'text') {
      this._tooltipText = newValue;
    }
  }
  // observe attr
  static get observedAttributes() {
    return ['text']; // array with attr names
  }

  disconnectedCallback() {
    // both of these are useless for: 1- by default by removing element -> listeners would be removed 2- this won't work because of bind
    // this is generally for clearing http requests ...etc
    this._tooltiplIcon.removeEventListener('mouseenter', this._showTooltip);
    this._tooltiplIcon.removeEventListener('mouseleave', this._hideTooltip);
  }

  _render() {
    let tooltipContainer = this.shadowRoot.querySelector('div');
    if (this._tooltipVisible) {
      tooltipContainer = document.createElement('div');
      tooltipContainer.textContent = this._tooltipText;
      this.shadowRoot.appendChild(tooltipContainer);
    } else {
      if (tooltipContainer) {
        this.shadowRoot.removeChild(tooltipContainer);
      }
    }
  }

  // pseudo private function
  _showTooltip() {
    this._tooltipVisible = true;
    this._render();
  }

  _hideTooltip() {
    this._tooltipVisible = false;
    this._render();
  }
}

// custom elements object -> define(name, class) -> name must include at least a dash '-'
customElements.define('kalbonyan-tooltip', Tooltip);
