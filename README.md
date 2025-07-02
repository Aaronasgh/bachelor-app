# Webbasierte Musikvisualisierung in VR

## Kurzbeschreibung

Dieses Projekt ist ein interaktiver Prototyp zur Echtzeitvisualisierung von Musik in Virtual Reality. Über ein MIDI-Keyboard gespielte Noten werden als farbige Kugeln in einer virtuellen 3D-Umgebung dargestellt. Die Farbgebung und räumliche Anordnung der Kugeln basiert auf musiktheoretischen Prinzipien, um etwa harmonische Zusammenhänge oder Tonhöhe anschaulich darzustellen.
Derzeit ist die Farbgebung auf die Tonart C-Dur beschränkt.

## Kontext der Arbeit

Der Prototyp wurde im Rahmen der Bachelorarbeit **„Webbasierte Musikvisualisierung in VR - Möglichkeiten und Grenzen“** im Studiengang Medieninformatik an der TH Köln entwickelt.

Ziel der Arbeit war es, technische Möglichkeiten und Grenzen bei der Umsetzung einer webbasierten Lösung zur Echtzeitvisualisierung von Musik in VR zu untersuchen. 

## Installation & Ausführung

### Voraussetzungen

- Ein MIDI-Gerät, z. B. ein MIDI-fähiges Keyboard
- Ein kompatibler Browser. Während der Entwicklung wurde Google Chrome unter Windows verwendet.
- Ein VR-Headset (Die Anwendung ist auch ohne VR-Headset nutzbar). Während der Entwicklung wurde die Oculus Quest verwendet.

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

Für die Nutzung des Oculus Quest Headsets muss die Meta Quest Link App auf dem Rechner installiert und das Headset verknüpft werden. Die Verknüpfung erfolgt über die Mobile App Meta Horizon.
Anschließend muss auf dem Betriebssystem der Oculus Quest die Link App geöffnet werden, über die der Browser gestartet wird, um die Anwendung in VR nutzen zu können.
Zum Aktivieren der VR-Ansicht ist der „Enter VR“-Button zu betätigen.

## Benutzerdokumentation


## Architektur & Code-Dokumentation

- Das Projekt basiert auf **React Three Fiber** für die 3D-Darstellung.
- Die MIDI-Eingaben werden über die **Web MIDI API** erfasst.
- Die VR-Funktionalität wird über die **React Tree XR** realisiert.
- Der Quellcode ist modular strukturiert, mit klar getrennten Komponenten für MIDI-Verarbeitung, Visualisierung und XR-Interaktion.

### Architectural Decision Records

## Lizenz

## Kontakt

Bei Fragen oder Anmerkungen kontaktieren Sie bitte:  
**Aaron Asgharzadeh**  
E-Mail: aaron.asgharzadeh@gmail.com
