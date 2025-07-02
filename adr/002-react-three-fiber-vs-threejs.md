# Entscheidung: React Three Fiber (R3F) vs. Three.js

## Status

Akzeptiert

## Kontext

Für die Musikvisualisierung soll eine virtuelle 3D-Umgebung realisiert werden, die mit dem React-basierten Frontend funktioniert.

## Berücksichtigte Optionen

- React Three Fiber (R3F) – React-spezifische und deklarative Umsetzung von Three.js
- Three.js – 3D-Grafikbibliothek

## Entscheidung

Die Entscheidung fiel auf React Three Fiber, da die React-kompatible API die Integration in das bestehende Frontend vereinfacht. Der deklarative Ansatz erleichtert die Entwicklung durch Abstraktion technischer Low-Level-Details von Three.js.

## Konsequenzen

- **Positiv:** Deklarative Umsetzung reduziert die Einstiegshürden im Vergleich zu Three.js
- **Positiv:** Gute Integration ins React-Ökosystem durch React-Komponenten
