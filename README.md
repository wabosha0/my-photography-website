# Photography Website

A responsive, multi-page photography portfolio built with plain HTML, CSS, and a little JavaScript. No frameworks, no backend, no database.

**Live site:** <!-- add your GitHub Pages link here, e.g. https://wabosha0.github.io/my-photography-website/ -->

## Why I built it

To practise front-end fundamentals: page structure, responsive layout, and small interactive features, and to learn how to publish a site with GitHub Pages.

## Features

- Four pages: Home, Gallery, About, Contact
- Responsive grid gallery that works on phones and desktops
- Click-to-enlarge photo viewer (closes with the X, a click outside, or the Escape key)
- Keyboard-friendly navigation and visible focus outlines
- Footer year updates automatically

## Project structure

```
index.html      Home page
gallery.html    Photo gallery with lightbox
about.html      About page
contact.html    Contact details and links
styles.css      All styling
script.js       Footer year and lightbox
```

## Run it locally

1. Clone or download the repo (extract the zip first if you download it).
2. Open the folder in VS Code and use the Live Server extension, or just double-click `index.html`.

## Publish with GitHub Pages

Settings → Pages → Deploy from a branch → `main` / root → Save.

## What I learned

<!-- Fill this in with your own words, for example: -->
- How merge conflicts happen and how to resolve them (and why conflict markers must never be committed)
- Responsive layouts with CSS grid and media queries
- Basic accessibility: alt text, focus styles, semantic HTML

## Security notes

- Static site: no forms, logins, or server-side code to attack
- No credentials or personal data stored in the repository
- External links use `rel="noopener noreferrer"`
- Only external resource loaded is the Font Awesome icon stylesheet on the contact page


