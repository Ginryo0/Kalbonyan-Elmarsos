class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          opacity: 0;
          pointer-events: none;
        }

        :host([opened]){ 
          opacity: 1;
          pointer-events: all;
        }

        :host([opened]) #modal {
          top: 15vh;
        }
        #backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0, 0.8);
        }

        #modal {
          position: fixed;
          top: 10vh;
          left: 25%;
          width: 50%;
          z-index: 100;
          background: white;
          border-radius: 3px;
          box-shadow: 0 2px 8px rgba(0,0,0, 0.26);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease-out;
        }

        header {
          padding: 1rem;
        }

        ::slotted(h1) {
          font-size: 1.25rem;
          border-bottom: 1px solid #ccc;
          margin: 0;
        }

        #main {
          padding: 1rem;
        }

        #actions {
          border-top: 1px solid #ccc;
          padding: 1rem;
          display: flex;
          justify-content: flex-end;
        }

        #actions button {
          margin: 0 0.25rem;
        }
      </style>
      <div id="backdrop"></div>
      <div id="modal">
        <header>
          <slot name="title">Please Confirm Payment</slot>
        </header>
        <section id="main"> 
          <slot></slot>
        </section>
        <section id="actions">
          <button id="cancelBtn">Cancel</button>
          <button id="confirmBtn">Okay</button>
        </section>
      </div>
    `;
    const slots = this.shadowRoot.querySelectorAll('slot');
    slots[1].addEventListener('slotchange', (event) => {
      console.dir(slots[1].assignedNodes()); // .assignedSlot -> check for which slot this was assigned
    });
    const backdrop = this.shadowRoot.querySelector('#backdrop');
    const cancelBtn = this.shadowRoot.querySelector('#cancelBtn');
    const confirmBtn = this.shadowRoot.querySelector('#confirmBtn');
    backdrop.addEventListener('click', this._cancel.bind(this));
    cancelBtn.addEventListener('click', this._cancel.bind(this));
    confirmBtn.addEventListener('click', this._confirm.bind(this));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'opened') {
      if (this.hasAttribute('opened')) {
        this.isOpen = true;
        //       this.style.opacity = 1;
        //       this.style.pointerEvents = 'all';
      } else {
        this.isOpen = false;
      }
    }
  }

  static get observedAttributes() {
    return ['opened'];
  }

  open() {
    this.setAttribute('opened', '');
  }

  hide() {
    if (this.hasAttribute('opened')) {
      this.removeAttribute('opened');
    }
  }

  _cancel(event) {
    this.hide();
    const cancelEvent = new Event('cancel', { bubbles: true, composed: true }); // asscend -> heared by the closest parent that has a listener, composed-> heared outside shadow DOM
    event.target.dispatchEvent(cancelEvent);
  }
  _confirm() {
    this.hide();
    const confirmEvent = new Event('confirm');
    this.dispatchEvent(confirmEvent);
  }
}

customElements.define('kalbonyan-modal', Modal);
