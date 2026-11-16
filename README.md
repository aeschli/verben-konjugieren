# Deutsch Verb-Trainer

Eine kleine statische Web-App zum Üben von unregelmäßigen deutschen Verben in:

- Präsens
- Futur I
- Präteritum
- Perfekt

## Lokal starten

Da die App nur aus statischen Dateien besteht, reicht es `index.html` zu öffnen.

Optional mit lokalem Server:

```bash
python3 -m http.server 8000
```

Dann im Browser öffnen: `http://localhost:8000`

## Hilfe

Der Link **Hilfe** im Kopfbereich des Trainers öffnet die lokale Hilfeseite
mit einer Anleitung und Beispielen für das Antwortformat. Über
**Zurück zum Verb-Trainer** gelangst du wieder zum Trainer.
Die Hilfe ist auch ohne Internetverbindung verfügbar.

## GitHub Pages Deployment

1. Repo auf GitHub pushen.
2. In GitHub: **Settings → Pages**.
3. Unter **Build and deployment** bei **Source**: `Deploy from a branch` wählen.
4. Branch `main` (oder dein Standard-Branch) und Ordner `/ (root)` wählen.
5. Speichern — nach kurzer Zeit ist die Seite unter der GitHub-Pages-URL erreichbar.

## Dateien

- `index.html` – Layout und Bedienelemente
- `help.html` – Hilfeseite mit Anleitung und Antwortbeispielen
- `styles.css` – Design
- `verb-trainer.svg` – lokale Illustration im Kopfbereich (auch offline verfügbar)
- `script.js` – Übungslogik und Verbformen
