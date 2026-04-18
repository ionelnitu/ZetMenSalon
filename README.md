# NOIR — Luxury Hair Salon Website (Angular 17)

## 📁 Structura Proiectului

```
noir-salon/
├── src/
│   ├── index.html                        ← Entry HTML
│   ├── main.ts                           ← Bootstrap Angular
│   ├── styles/
│   │   └── global.scss                   ← CSS variables, reset, clase comune
│   └── app/
│       ├── app.component.ts              ← Root component (compune toate sectiunile)
│       ├── app.config.ts                 ← Configuratie Angular
│       ├── app.routes.ts                 ← Rute (goale pentru SPA)
│       └── components/
│           ├── navbar/
│           │   ├── navbar.component.ts   ← Scroll detection, hamburger menu logic
│           │   ├── navbar.component.html ← Template navbar + mobile menu
│           │   └── navbar.component.scss ← Stiluri navbar + responsive
│           ├── hero/
│           │   ├── hero.component.ts
│           │   ├── hero.component.html   ← Sectiunea hero cu background
│           │   └── hero.component.scss   ← Animatii fadeUp, slowZoom
│           ├── about/
│           │   ├── about.component.ts    ← Date servicii, scroll reveal
│           │   ├── about.component.html
│           │   └── about.component.scss
│           ├── services-strip/
│           │   ├── services-strip.component.ts  ← Lista servicii, marquee
│           │   ├── services-strip.component.html
│           │   └── services-strip.component.scss
│           ├── find-us/
│           │   ├── find-us.component.ts   ← Date contact, scroll reveal
│           │   ├── find-us.component.html ← Harta + carduri contact
│           │   └── find-us.component.scss
│           ├── ceo/
│           │   ├── ceo.component.ts       ← Date CEO + accomplishments array
│           │   ├── ceo.component.html
│           │   └── ceo.component.scss
│           └── footer/
│               ├── footer.component.ts
│               ├── footer.component.html
│               └── footer.component.scss
├── angular.json
├── package.json
├── tsconfig.json
└── tsconfig.app.json
```

---

## 🚀 Instalare & Pornire

### 1. Instalează Node.js
Descarcă de la [nodejs.org](https://nodejs.org) (versiunea LTS).

### 2. Instalează Angular CLI
```bash
npm install -g @angular/cli
```

### 3. Clonează / copiază proiectul, apoi instalează dependențele
```bash
cd noir-salon
npm install
```

### 4. Pornește serverul de development
```bash
ng serve
```
Deschide [http://localhost:4200](http://localhost:4200) în browser.

### 5. Build pentru producție (GitHub Pages)
```bash
ng build --base-href "/numele-repo-ului-tau/"
```
Fișierele generate se află în `dist/noir-salon/browser/` — uploadează-le pe GitHub Pages.

---

## 🗺️ Cum adaugi Google Maps (Find Us)

1. Mergi pe [maps.google.com](https://maps.google.com) și caută adresa salonului
2. Click **Share → Embed a map** → copiază `src="..."` din iframe
3. Deschide `src/app/components/find-us/find-us.component.html`
4. Înlocuiește blocul `.find-us-map` cu:

```html
<div class="find-us-map reveal" #reveal>
  <iframe
    src="PASTE_GOOGLE_MAPS_SRC_AICI"
    width="100%"
    height="100%"
    style="border:0; filter: grayscale(1) brightness(0.5) contrast(1.2);"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
</div>
```

---

## ✏️ Cum personalizezi conținutul

| Ce vrei să schimbi | Unde |
|---|---|
| Nume salon | `navbar.component.html`, `footer.component.html`, `hero.component.html` |
| Imagine hero | `hero.component.scss` → `.hero-bg { background-image: url(...) }` |
| Servicii (strip) | `services-strip.component.ts` → array `services` |
| Adresă / ore / telefon | `find-us.component.ts` → array `contactInfo` |
| Nume & bio CEO | `ceo.component.html` |
| Accomplishments | `ceo.component.ts` → array `accomplishments` |
| Culori (gold, black) | `src/styles/global.scss` → `:root { --gold: ...; }` |

---

## 📱 Responsive Breakpoints

| Breakpoint | Ecran |
|---|---|
| Default | Desktop (> 1024px) |
| `max-width: 1024px` | Tabletă |
| `max-width: 768px` | Mobile (hamburger menu activ) |
| `max-width: 480px` | Mobile mic |
