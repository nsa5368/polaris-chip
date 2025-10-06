import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() { return 'my-card'; }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      img: { type: String, reflect: true },
      alt: { type: String, reflect: true },
      datetime: { type: String, reflect: true },
      location: { type: String, reflect: true },
      href: { type: String, reflect: true },
      fancy: { type: Boolean, reflect: true },
      description: { type: String, reflect: true }
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
        --my-card-fancy-bg: gold;
        --my-card-fancy-shadow: 10px 5px 20px rgba(0,0,0,.25);
        display: inline-block;
      }
      .card {
        font-size: 1em;
        display: inline-flex;
        border: 2px solid var(--card-border);
        padding: 8px;
        margin: 8px;
        opacity: .9;
        background-color: var(--card-bg);
        transition: .3s all ease-in-out;
        color: var(--card-fg);
        border-radius: 12px;
      }
      :host([fancy]) .card {
        background-color: var(--my-card-fancy-bg);
        color: #111;
        border-color: var(--my-card-fancy-bg);
        box-shadow: var(--my-card-fancy-shadow);
      }
    `;
  }

  openChanged(e) {
    const isOpen = e.target.getAttribute('open') !== null;
    this.fancy = isOpen;
  }

  render() {
    return html`
      <section class="card" aria-labelledby="card-title">
        <figure class="card-media">
          <img class="card-image" src="${this.img}" alt="${this.alt}" />
        </figure>
        <div class="card-body">
          <h2 id="card-title" class="card-title">${this.title}</h2>
          <p class="meta">
            <time>${this.datetime}</time>${this.location ? html` • ${this.location}` : ''}
          </p>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot>${this.description}</slot>
            </div>
          </details>
          <div class="card-actions" style="margin-top: 12px;">
            <a class="btn" href="${this.href}" target="_blank" rel="noopener">Details</a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define(MyCard.tag, MyCard);
