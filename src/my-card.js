class MyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 400px;             
          box-sizing: border-box;
          margin: 12px;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .card {
          border: 8px solid #ccc;
          border-radius: 8px;
          background: #fff;
          overflow: hidden;
          transition: all 0.35s ease-in-out;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12);
        }

        :host(:hover) .card,
        :host(:focus-within) .card {
          opacity: 1;
          outline: 2px solid green;
          outline-offset: 8px;
        }

        :host([fancy]) .card,
        :host(.fancy) .card {
          border-color: #0a7a27;
          box-shadow: 0 8px 18px rgba(0,0,0,0.25);
        }
        ::slotted(img[slot="image"]) {
          width: 100%;
          height: 256px;     
          object-fit: cover;
          display: block;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .fallback-img {
          width: 100%;
          height: 256px;
          object-fit: cover;
          display: block;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .card-content {
          padding: 12px;
          background: #fde8e8; 
        }

        ::slotted([slot="title"]) {
          display: block;
          margin: 8px 0 4px;
          font-size: 1.4rem;
          font-weight: 700;
        }

        ::slotted([slot="subtitle"]) {
          display: block;
          margin: 4px 0;
          font-size: 0.95rem;
        }

        ::slotted([slot="description"]) {
          display: block;
          margin: 8px 0;
          font-size: 0.9rem;
          color: #444;
        }

        .default-btn {
          display: inline-block;
          padding: 8px 14px;
          background: #0073e6;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-size: 0.9rem;
          margin-top: 8px;
        }
        .default-btn:hover { background: #005bb5; }
      </style>

      <div class="card" part="card">
        <slot name="image"></slot>

        <div class="card-content" part="content">
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
          <slot name="description"></slot>

          <div>
            <slot name="link">
              <a class="default-btn" href="https://hax.psu.edu" target="_blank" rel="noopener">Details</a>
            </slot>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);

