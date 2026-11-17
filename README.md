# Tokyo Blue — 90s Japanese Car Blog & Showroom

A responsive, single-page editorial blog and showroom website built with **HTML, CSS, and vanilla JavaScript only**. No build tools, frameworks, or dependencies are needed to run it.

## Open the site

Open `index.html` in any modern browser. For a local dev server, from this folder run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Files

- `index.html` — page sections and semantic markup.
- `styles.css` — responsive design and visual style.
- `script.js` — blog articles, filtering, search, article dialogs, inventory cards, mobile nav, and demo form.

## Customizing

- Edit `stories` in `script.js` to add/remove full blog posts.
- Edit `cars` in `script.js` to change showroom examples.
- Change brand text and links in `index.html`.
- Change brand colors in `styles.css` under `:root`.
- Update `hello@tokyoblue.example` to your real email address.
- Replace every example Unsplash image URL with photographs that you own or have licensed. They are editorial placeholders and **do not necessarily depict the named vehicle**.
- The subscription form is currently a **front-end demo** and does not store or send emails. To launch subscriptions, connect it to a newsletter provider/backend.
- Car cards are **showcase examples**, not actual available inventory.

## Internet resources

The design loads Google Fonts and placeholder photos from Unsplash when online. The layout and interactions work offline, but remote photos/fonts need an internet connection.
