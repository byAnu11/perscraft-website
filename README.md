# PersCraft Website

Statische Website für PersCraft (Personalleasing, Gebäudemanagement, Handwerk), München und Region.

## Struktur

```
index.html          Hauptseite (alle Inhalte/Sektionen)
css/style.css        Gesamtes Styling (Design-Tokens als CSS-Variablen oben in der Datei)
js/main.js            Mobile-Menü, Scroll-Animationen, Kontaktformular (mailto)
assets/logo.png        Logo mit Schriftzug (für Hero/About)
assets/icon.png         Logo-Icon ohne Schriftzug (Header/Footer)
assets/favicon.png       Quadratisches Icon fürs Browser-Tab
```

Keine Build-Tools, keine Abhängigkeiten außer Google Fonts (Outfit, Inter), die per `<link>` in `index.html` eingebunden sind.

## Lokal ansehen

Da das Kontaktformular und relative Pfade sauber funktionieren sollen, am besten über einen lokalen Server öffnen statt die Datei direkt per Doppelklick zu starten:

```bash
# Python (meistens vorinstalliert)
python3 -m http.server 8000

# oder Node
npx serve .
```

Danach im Browser `http://localhost:8000` öffnen.

## Anpassen

- **Farben/Schriften:** ganz oben in `css/style.css` im `:root{...}`-Block.
- **Texte:** direkt in `index.html`, alle Inhalte sind auf Deutsch und in einzelnen `<section>`-Blöcken organisiert (Hero, Leistungen, Für Unternehmen, Über uns, Karriere, Kontakt).
- **Kontaktformular:** öffnet aktuell das E-Mail-Programm des Besuchers (`mailto:`), siehe `js/main.js`. Für eine echte serverseitige Zustellung braucht es ein Backend (z. B. Formspree, ein eigenes API-Endpoint o. Ä.).

## Offene Punkte

- **Impressum & Datenschutz** sind im Footer nur als Platzhalter-Links verlinkt (`#`) und müssen noch mit echten, rechtlich korrekten Inhalten befüllt werden (in Deutschland Pflicht für Unternehmenswebsites).
- Die Handwerk-Leistungen sind bewusst allgemein gehalten und können bei Bedarf präzisiert werden.

## Deployment

Da es sich um eine rein statische Seite handelt, kann der komplette Ordner z. B. auf Netlify, Vercel, GitHub Pages oder per FTP auf normalen Webspace hochgeladen werden. Kein Server-Backend erforderlich.
