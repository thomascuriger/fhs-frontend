# FHS Frontend
Contributors: Nico Dünner, Michael Forrer, Thomas Curiger
## Technology
* Java 17
* Node 14.18.1
* Angular 13
* Spring Boot 2.5.6

## Installation

* npm install everything

Falls Sie die Sitzung im Browser öffnen wollen:

1.	Öffnen Sie die Datei „src/app/data/services/trainingsession-data.service.ts“
2.	Kommentieren Sie die 7. Zeile aus, indem Sie zwei Slashes // an den Start der Zeile eingeben
3.	Löschen Sie in der 8. Zeile die zwei Slashes heraus
4.	Wiederholen Sie die oberen Schritte für die Datei „src/app/data/services/trainingsession-data.service.ts“
5.	Geben Sie nun den Befehl ng serve ein
6.	Die Applikation wird nun gestartet und ist nach der Kompilierung in Ihrem Webbrowser unter der folgenden Adresse verfügbar: localhost:4200

Falls Sie die Sitzung in Electron öffnen wollen:
1.	Öffnen Sie die Datei „src/app/data/services/trainingsession-data.service.ts“
2.	Kommentieren Sie die 8. Zeile aus, indem Sie zwei Slashes // an den Start der Zeile eingeben
3.	Löschen Sie in der 7. Zeile die zwei Slashes heraus
4.	Wiederholen Sie die oberen Schritte für die Datei „src/app/data/services/trainingsession-data.service.ts“
5.  Geben Sie den Befehl ng build --base-href ./ ein.
6.  Geben Sie den Befehl electron . ein.
7.  Das Electron-Fenster öffnet sich.