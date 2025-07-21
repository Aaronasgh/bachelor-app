# Webbasierte Musikvisualisierung in VR

## Kurzbeschreibung

Dieses Projekt ist ein interaktiver Prototyp zur Echtzeitvisualisierung von Musik in Virtual Reality. Über ein MIDI-Keyboard gespielte Noten werden als farbige Kugeln in einer virtuellen 3D-Umgebung dargestellt. Die Farbgebung und räumliche Anordnung der Kugeln basiert auf musiktheoretischen Prinzipien, um etwa harmonische Zusammenhänge oder Tonhöhen anschaulich darzustellen.
Die Farbgebung ist derzeit auf die Tonart C-Dur beschränkt.

## Kontext der Arbeit

Der Prototyp wurde im Rahmen der Bachelorarbeit **„Webbasierte Musikvisualisierung in VR - Möglichkeiten und Grenzen“** im Studiengang Medieninformatik an der TH Köln entwickelt.

Ziel der Arbeit war es, technische Möglichkeiten und Grenzen bei der Umsetzung einer webbasierten Lösung zur Echtzeitvisualisierung von Musik in VR zu untersuchen.

## Installation & Ausführung

### Voraussetzungen

- Ein MIDI-Gerät, z. B. ein MIDI-Keyboard.
- Ein kompatibler Browser. Während der Entwicklung wurde Google Chrome unter Windows verwendet.
- Ein VR-Headset (optional). Während der Entwicklung wurde die Oculus Quest verwendet.

### Online Version

Eine lauffähige Version des Prototyps finden Sie unter: https://musikvisualisierung.onrender.com

Für eine lokale Installation und Ausführung folgen Sie den nächsten Schritten:
### Installation

```bash
git clone https://github.com/Aaronasgh/bachelor-app.git
cd bachelor-app
npm install
```

### Nutzungshinweise

Zum Ausführen der Anwendung in einer Entwicklerumgebung führen Sie folgenden Befehl aus:

```bash
npm run dev
```

Die Anwendung ist anschließend unter http://localhost:3000 im Browser erreichbar.

Für die Nutzung des Oculus Quest Headsets muss die Meta Quest Link App auf dem Rechner installiert und das Headset verknüpft werden. Die Verknüpfung erfolgt über die Meta Horizon Mobile App.
Anschließend muss auf dem Betriebssystem der Oculus Quest die Link App geöffnet werden, über die der Browser gestartet wird, um die Anwendung in VR nutzen zu können.
Zum Aktivieren der VR-Ansicht ist der „Enter VR“-Button oben links zu betätigen.

## Benutzerdokumentation

### Wichtige Funktionen

- **Musikvisualisierung:** Interaktive 3D-Szene mit dynamischer Visualisierung, basierend auf musiktheoretischen Prinzipien.
- **MIDI-Erfassung:** Echtzeitvisualisierung von MIDI-Daten über ein angeschlossenes MIDI-Gerät.
- **VR-Unterstützung:** Optionaler VR-Modus für ein immersives Spielerlebnis.

### Nutzungsszenarien

1. **Standard Modus:** Öffnen Sie die Webanwendung im Browser, die 3D-Szene startet automatisch. Schließen Sie ein MIDI-Gerät an, erlauben Sie den Zugriff im Browser und spielen Sie Noten, um die Visualisierung in Echtzeit zu steuern.
2. **Optionaler VR-Modus:** Verbinden Sie ein VR-Headset und starten Sie den VR-Modus.

## Architektur & Code-Dokumentation

- Als Grundlage für Entwicklung wurde das Framework **Next.js** verwendet.
- Das Projekt nutzt **React Three Fiber** für die Darstellung der 3D-Elemente.
- Die MIDI-Eingaben werden über die **Web MIDI API** erfasst.
- Die VR-Funktionalität wird durch **React Three XR** umgesetzt.
- Der Quellcode ist modular strukturiert, mit getrennten Komponenten für MIDI-Verarbeitung und Visualisierung.

### Architectural Decision Records

- [001-nextjs-vs-react](./adr/001-nextjs-vs-react.md)
- [002-react-three-fiber-vs-threejs](./adr/002-react-three-fiber-vs-threejs.md)
- [003-react-three-xr-vs-webxr-device-api](./adr/003-react-three-xr-vs-webxr-device-api.md)
- [004-web-midi-api](./adr/004-web-midi-api.md)

## Lizenz

Alle Rechte vorbehalten.

Der Quellcode darf ausschließlich für akademische Zwecke genutzt und verändert werden.

Jegliche kommerzielle Nutzung, Vervielfältigung oder Weitergabe ist ohne ausdrückliche Genehmigung untersagt.

## Kontakt

Bei Fragen oder Anmerkungen kontaktieren Sie bitte:  
**Aaron Asgharzadeh**  
E-Mail: aaron.asgharzadeh@gmail.com
