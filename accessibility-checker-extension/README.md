[![IBM Equal Access Toolkit is released under the Apache-2.0 license](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](./LICENSE)

# accessibility-checker-extension
Rozszerzenia przeglądarki internetowej, które dodają funkcje automatycznego testowania dostępności

## Pierwsze kroki

* [Wersja Node 12](https://nodejs.org/en/download/).

### Instalacja zależności

1. W katalogu głównym ```equal-access```  

    ```
    npm install
    ```

2. W katalogu rozszerzenia accessibility-checker-extension
    ```
    npm install
    ```

3. Wróć do katalogu głównego ```cd ..```

4. W katalogu report-react
    ```
    npm install
    npm start
    ```

5. W nowym oknie wiersza poleceń przejdź do katalogu accessibility-checker-extension 
   i wykonaj
    ```
    npm run build:watch:local
    ```
    Opcje uruchamiania kompilacji:<br> 
    Kompilacja dla deweloperów: `npm run build:dev`<br> 
    Tworzenie dla deweloperów i obserwowanie zmian: `npm run build:watch`<br> 
    Kompilacja dla produkcji: `npm run build:prod`<br> 

## Ładowanie do przeglądarki:
### W przeglądarce Chrome
1. Przejdź do: [**chrome://extensions**](chrome://extensions)
2. Włącz opcję on: "**developer mode**".
3. Kliknij na: "**Load unpacked**"
4. Wybierz nowo utworzony folder "**dist**" ```equal-access/accessibility-checker-extension/dist``` z folderu projektu.

### In Firefox web browser
1. Przejdź do: [**about:debugging**](about:debugging) in the Firefox browser
2. Wybierz: "**This Firefox**"
3. Kliknij na: "**Load Temporary Add-on…**"
4. Otwórz nowo utworzony folder "**dist**"  z folderu projektu i wybierz plik "**manifest.json**" file.


### W przeglądarce Firefox
1. Przejdź do: [**about:debugowanie**](about:debugowanie) w przeglądarce Firefox
2. Wybierz: "**To Firefox**"
3. Kliknij na: "**Załaduj tymczasowy dodatek...**"
4. Otwórz nowo utworzony folder "**dist**" z folderu projektu i wybierz plik "**manifest.json**".


## Zbuduj pakiet wdrożeniowy dla przeglądarek Chrome i Firefox:
```
npm run clean:all
npm install
npm run package:browser
```
Polecenia generują plik package/accessibility-checker-extension.zip file. Pakiet zip można wdrożyć w sklepie Chrome lub Firefox. Pakiet można przetestować lokalnie w przeglądarce Firefox (choć nie w przeglądarce Chrome):
1. Przejdź do: [**about:debugging**](about:debugging) w przeglądarce Firefox
2. Wybierz: "**This Firefox**"
3. Kliknij na: "**Load Temporary Add-on…**"
4. Otwórz nowo utworzony plik pakietu "**accessibility-checker-extension.zip**" z folderu pakietu.  

## Błędy i problemy

Wszystkie błędy lub problemy związane z kodem karma-accessibility-checker mogą być tworzone w [GitHub Issues](https://github.com/IBMa/equal-access/issues).












