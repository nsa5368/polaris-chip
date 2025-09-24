import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      img: { type: String, reflect: true },
      alt: { type: String, reflect: true },
      datetime: { type: String, reflect: true },
      location: { type: String, reflect: true },
      href: { type: String, reflect: true },
      fancy: { type: Boolean, reflect: true },
      description: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = 'My card';
    this.img = 'https://m.media-amazon.com/images/I/71qu4p5bnDL._UF894,1000_QL80_.jpg';
    this.alt = 'Oppenheimer film poster';
    this.datetime = '2025-09-14 • 7:00 PM';
    this.location = 'UEC Theaters';
    this.href = 'https://hax.psu.edu';
    this.fancy = false;
    this.description = 'Join us for an exclusive premiere screening of Oppenheimer through pressing the button below.';
  }

  static get styles() {
    return css`
      :host {
        --card-bg: navy;
        --card-fg: white;
        --card-border: grey;
        --card-title-bg: #eee;
        --card-body-bg: white;
        --card-body-fg: black;
        display: inline-block;
      }
      .card {
        font-size: 1em;
        display: inline-flex;
        border: 2px solid var(--card-border);
        padding: 8px;
        margin: 8px;
        opacity: .8;
        background-color: var(--card-bg);
        transition: .6s all ease-in-out;
        color: var(--card-fg);
      }
      .card:hover,
      .card:focus-within {
        opacity: 1;
        outline: 2px solid green;
        outline-offset: 16px;
      }
      .card-media img {
        display: block;
        width: 200px;
        height: 100%;
        object-fit: cover;
      }
      .card-body {
        width: 300px;
        padding: 0 8px 8px 8px;
        background-color: var(--card-body-bg);
        color: var(--card-body-fg);
        margin: 0 0 0 8px;
        height: 300px;
        overflow: auto;
      }
      .card-title {
        position: sticky;
        top: 0;
        background-color: var(--card-title-bg);
        text-align: center;
        font-size: 2em;
        padding: 8px 8px 16px;
        margin: 0 -8px;
      }
      .meta {
        margin: 0 0 12px;
        color: #444;
        font-size: 0.95em;
      }
      .btn {
        display: inline-block;
        padding: 8px 16px;
        border: 1px solid #222;
        border-radius: 6px;
        color: #222;
        text-decoration: none;
      }
      :host([fancy]) .card {
        background-color: orange;
        color: #111;
        border-color: orange;
      }
    `;
  }

  render() {
    return html`
      <article class="card" aria-labelledby="card-title">
        <figure class="card-media">
          <img class="card-image" src="${this.img}" alt="${this.alt}" width="400" height="225" />
        </figure>
        <div class="card-body">
          <h2 id="card-title" class="card-title">${this.title}</h2>
          <p class="meta">
            <time>${this.datetime}</time>${this.location ? html` • ${this.location}` : ''}
          </p>
          <p>${this.description}</p>
          <div class="card-actions">
            <a class="btn" href="${this.href}" target="_blank" rel="noopener">Details</a>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define(MyCard.tag, MyCard);
