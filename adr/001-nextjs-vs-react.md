# Entscheidung: Next.js vs. React

## Status

Akzeptiert

## Kontext

Für die Umsetzung des Frontends lag die Entscheidung zwischen der Nutzung von React oder dem Framework Next.js. Obwohl das Projekt derzeit nur ein clientseitiges Frontend benötigt, sollte die gewählte Technologie zukünftige Backend-Erweiterungen (z.B. API-Endpunkte) ermöglichen. Die bestehende Erfahrung mit React schloss die Nutzung anderer Frameworks wie z.B. Angular aus.

## Berücksichtigte Optionen

- React – Frontend-Bibliothek
- Next.js – Fullstack-Framework auf Basis von React

## Entscheidung

Die Entscheidung fiel auf Next.js. Es basiert auf React und ist daher in der Lage, React-Bibliotheken zu nutzen. Es erlaubt zusätzlich optionale Erweiterungen serverseitiger Funktionalitäten im Kontext eines gesamten Frameworks, ohne auf separate Backend-Lösungen zurückgreifen zu müssen.

## Konsequenzen

- **Positiv:** Zukunftsfähige und erweiterbare Architektur (z.B. für API-Endpunkte)
- **Positiv:** Integration von Front- und Backendentwicklung im gleichen Framework
- **Negativ:** Erhöhte Projektgröße, obwohl derzeit viele Funktionen nicht genutzt werden
