# UnicornNavigation

UnicornNavigation ist ein simples Javascript-Plugin, um 
Navigationen für Websiten per Code zu erstellen

## Installation
Importiere das Stylesheet 'UnicornNavigation.css' und das
Javascript-Skript 'UnicornNavgiation.js' im Head deiner
HTML-Struktur

```html
<link rel="stylesheet" href="./UnicornNavigation.css">
<script src="./UnicornNavigation.js"></script>
```

## Usage
Verwende die Klasse UnicornNavigation() um eine neue Navigation
zu erstellen.

```javascript
let unicornNavigation = new UnicornNavigation(COMPANY, THEME);
let unicornNavigation = new UnicornNavigation('My company');
```

### Neues Item erstellen
Füge ein neues Item hinzu. Dieses bekommt ein Label und eine onclick
Funktion.

```javascript
unicornNavigation.addNavItem("Home", () => {alert("Home")});
```

Um ein Item als "aktuelles" Item zu setzen, muss zudem der Parameter
true übergeben werden.

```javascript
unicornNavigation.addNavItem("Home", () => {alert("Home")}, true);
```

### Navigation rendern
Führe die Funktion render() aus, um die Navigation auf der
HTML-Seite anzeigen zu lassen. Diese wird immer am 
Beginn des Bodies hinzugefügt.

```javascript
unicornNavigation.render();
```

### Theme festlegen
Beim Erstellen der Klasse kann ein Parameter "theme" übergeben werden.

```javascript
let unicornNavigation = new UnicornNavigation('My company', 'theme-dark');
```

Aktuell gibt es folgende Themes:
- default
- theme-dark