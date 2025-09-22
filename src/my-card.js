import { LitElement, html, css } from 'lit';

class MyCard extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    image: { type: String }
  };

  constructor() {
    super();
    this.title = "Patrick Mahomes";
    this.description = "Quarterback for the Kansas City Chiefs";
    this.image = "https://upload.wikimedia.org/wikipedia/commons/2/20/Patrick_Mahomes_2021.jpg";
  }

  static styles = css`
    :host {
      display: block;
      max-width: 300px;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      font-family: sans-serif;
    }
    img {
      width: 100%;
      height: auto;
      display: block;
    }
    .content {
      padding: 16px;
    }
    h2 {
      margin: 0 0 8px;
      font-size: 1.2rem;
    }
    p {
      margin: 0 0 16px;
      font-size: 0.9rem;
      color: #555;
    }
    .buttons {
      display: flex;
      gap: 8px;
    }
    button {
      background: #0077cc;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #005fa3;
    }
  `;
}
