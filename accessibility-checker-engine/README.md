# accessibility-checker-engine

Aby uzyskać informacje na temat tworzenia, modyfikowania reguł, zobac [README-RULES.md]

## Przegląd

accessibility-checker-engine zawiera reguły dostępności IBM i mechanizm oceny ułatwiający użytkownikom sprawdzanie ich stron WWW w celu identyfikacji i zgłaszania problemów z dostępnością.

## Instalacja

Zapoznaj się z plikiem [README.md](../README.md), aby dowiedzieć się, jak sklonować źródło. Po sklonowaniu kodu źródłowego do lokalnego środowiska możesz zbudować kod źródłowy w oparciu o wymagania lokalnego środowiska.

### Zbuduj ace.js, którego można używać w środowisku przeglądarki

```bash
$ cd accessibility-checker-engine
$ npm install
$ npm run build
```

Spowoduje to utworzenie pliku ace.js w katalogu dist, którego można używać w środowisku przeglądarki

### Zbuduj ace-node.js, który może być używany w środowisku NodeJS

```
$ cd accessibility-checker-engine
$ npm install
$ npm run build-node
```

Spowoduje to utworzenie pliku ace-node.js w katalogu dist

## API

Najważniejszym API punktu wejścia jest metoda `check` obiektu `ace.Checker`. Możesz użyć mechanizmu wywołania zwrotnego lub mechanizmu Promise, aby pobrać wyniki dostępności do dalszego przetwarzania w programie javascript lub NodeJS.

```javascript
const checker = new ace.Checker();
checker.check(doc, ["IBM_Accessibility"])
    .then(function(report) {
        // process accessibility report here
    });  
```

* `doc` - może być jednym z: 
  * obiekt Document Object Model (`DOM`) reprezentujący dokument HTML, który jest zwykle dostępny w środowisku przeglądarki jako `document`
  * element `DOM` stanowiący fragment HTML, które mogą być pobrane z DOM dopasowując przeciwko jednemu lub większej liczby selektorów.
* `["IBM_Accessibility"]` - stosować tylko reguły dostępności IBM, tylko reguły projektowania IBM.
* `report` - wyniki dostępności zawierają zidentyfikowane problemy dostępności i ich opisy z podanych `doc`, a także podsumowanie tych zagadnień. Raport jest w formacie JSON (zobacz [szczegóły](#report)).


## Lista kontrolna i zestawy reguł

Reguła jest oparta na IBM [Checklist](https://www.ibm.com/able/guidelines/ci162/accessibility_checklist.html), która jest nadzbiorem WCAG 2.1 AA. Zapewniamy również zestawy reguł WCAG 2.0 AA. Odwzorowania z list kontrolnych na reguły są zdefiniowane w  [pliku zestawu reguł](https://github.com/IBMa/equal-access/blob/master/accessibility-checker-engine/src/v2/checker/accessibility/rulesets/index.ts)


## Report

Raport dostępności jest w formacie JSON i zawiera informacje o zidentyfikowanych problemach z dostępnością oraz ich opisy..

```javascript
{
    report: {
        scanID: "18504e0c-fcaa-4a78-a07c-4f96e433f3e7",
        toolID: "@ibma/aat-v2.0.6",
        // Etykieta przekazywana do getCompliance
        label: "MyTestLabel",
        // Liczba wykonanych reguł
        numExecuted: 137,
        nls: {
            // Mapping of result.ruleId, result.reasonId to get a tokenized string for the result. Message args are result.messageArgs
			// Mapowanie result.ruleId, result.reasonId w celu uzyskania tokenizowanego ciągu dla wyniku. Argumenty wiadomości to result.messageArgs 
            "WCAG20_Html_HasLang": {
                "Pass_0": "Wykryty język strony {0}"
            },
            // ...
        },
        summary: {
            URL: "https://www.ibm.com/en-US/",
            counts: {
                violation: 1,
                potentialviolation: 0,
                recommendation: 0,
                potentialrecommendation: 0,
                manual: 0,
                pass: 136,
                ignored: 0
            },
            scanTime: 29,
            ruleArchive: "September 2019 Deployment (2019SeptDeploy)",
            policies: [
                "IBM_Accessibility"
            ],
            reportLevels: [
                "violation",
                "potentialviolation",
                "recommendation",
                "potentialrecommendation",
                "manual"
            ],
            startScan: 1470103006149
        },
        results: [
            {
                // jaka zasada wywołane? 
                "ruleId": "WCAG20_Html_HasLang",
                // W jaki sposób reguła się uruchomiła?
                "reasonId": "Pass_0",
                "value": [
                    // Czy ta reguła jest oparta na NARUSZENIU, ZALECANIU lub 
                    „NARUSZENIU” INFORMACJI ,
                    "VIOLATION",
                    // PASS, FAIL, POTENTIAL, or MANUAL
                    "PASS"
                ],
                "path": {
                    // xpath
                    "dom": "/html[1]",
                    // path of ARIA roles
                    "aria": ""
                },
                "ruleTime": 0,
                //  Wygenerowana wiadomość
                "message": "Page language detected as en",
                // Arguments to the message
                "messageArgs": [
                    "en"
                ],
                "apiArgs": [],
                // Obramowanie element
                "bounds": {
                    "left": 0,
                    "top": 0,
                    "height": 143,
                    "width": 800
                },
                // Fragment HTML elementu
                "snippet": "<html lang=\"en\">",
                // Jaka kategoria to ta reguła?
                "category": "Accessibility",
                // Czy ten problem został zignorowany z powodu punktu odniesienia?
                "ignored": false,
                // Podsumowanie wartośc: violation, potentialviolation, recommendation, potentialrecommendation, manual, pass
                "level": "pass"
            },
            // ...
        ]
    }
}
```

## Przykłady użycia

Ta sekcja zawiera przykłady kodu, fragmenty kodu lub logikę „TAK JAK JEST”. Oczekuje się, że użytkownicy będą wprowadzać zmiany w zależności od środowiska.


### Wiersz poleceń w narzędziach programistycznch przeglądarki

Możesz użyć wrapera metody `checkDemo` w obiekcie `ace`, który jest specjalnie stworzony do sprawdzania dostępności w narzędziu programistycznym przeglądarki. Metoda `checkDemo` daje na wyjściu zarówno surowe wyniki dostępności w formacie JSON, jak i wyniki klasyfikowane według elementów wskazanych przez ich XPath. Oto przykładowe kroki zastsowania  `ace.checkDemo()`, aby wyświetlić wyniki w narzędziu deweloperskim Chrome:

* Otwórz stronę lub wpisz adres URL strony w przeglądarce Chrome
* Otwórz narzędzie programistyczne w przeglądarce Chrome: kliknij przycisk `Customize and Control Google Chrome`, wybierz `More Tools`, a następnie wybierz`Developer Tool`
* Wybierz kartę `Console`, aby wyświetlić wiersz polecenia
* Otwórz ace.js, któy zbudowałeś w kroku Budowanie w edytorze tekstu, zaznacz i skopiuj całą zawartość
* Wklej skopiowaną zawartość do wiersza polecenia w narzędziu programistycznym, a następnie naciśnij `Enter`
* Wpisz w wierszu polecenia: `ace.checkDemo()`, a następnie naciśnij `Enter`


Możesz wyświetlić raport dostępności stron:  
![use ACE in the Chrome developer tool](img/use-ace-in-developer-tool.png "Use ACE in the Chrome developer tool to test accessibility of a web page")

### Programowo
Poniższy fragment kodu demonstruje, jak używać ACE do testowania strony internetowej pod kątem dostępności we wbudowanym środowisku Chrome (`puppeteer`). Zobacz [accessibility-checker](../accessibility-checker) dostępności, aby uzyskać bardziej kompletne narzędzie dla tego środowiska.



```javascript
(async () => {
  const chromeLauncher = require('chrome-launcher');
  const axios = require('axios');
  const puppeteer = require('puppeteer');
  
  // Initialize a Chrome instance
  // zainicjuj instancję Chrome
  const chrome = await chromeLauncher.launch({
    //chromeFlags: ['--headless'],
    logLevel: 'info',
    output: 'json'
  });
  const response = await axios.get(`http://localhost:${chrome.port}/json/version`);
  const { webSocketDebuggerUrl } = response.data;

  // Connect puppeteer to the chrome instance using the endpoint
  // Połącz puppeteer z instancją chrome za pomocą endpoint
  const browser = await puppeteer.connect({ browserWSEndpoint: webSocketDebuggerUrl });

  //get the page
  const [page] = await browser.pages();

  // inject the ace.js into the page when domcontentloaded event is fired, assuming the ace.js is in the same folder
  // wstrzyknij ace.js na stronę kiedy zdarzenie domcontentloaded jest zwolniony, zakładając ace.js jest w tym samym folderze
  await page.goto('http://localhost:3000', { waitUtil: 'domcontentloaded' };
  await page.addScriptTag({ path: path.join(__dirname, 'ace.js') });

  //wywołaj ace, aby ocenić stronę pod kątem dostępności
  await page.evaluate(() => {
    const checker = new ace.Checker();
    checker.check(document, ["IBM_Accessibility"])
        .then(function (report) {
            for (let idx = 0; idx < report.results.length; ++idx) {
                //przetwórz raport
            }
        });
  });
})();
```

### Rozszerzenie przeglądarki

Możesz użyć [accessibility-checker-extension](../accessibility-checker-extension) dla przeglądarki Chrome lub Firefox. Rozszerzenia przeglądarki integrują accessibility web engine (ace.js) i formatują wyniki w narzędziu programistycznym przeglądarki, aby wizualnie wyświetlić problemy z dostępnością i lokalizacje komponentów naruszających. Aby uzyskać więcej informacji i instrukcji, zobacz [accessibility-checker-extensions](../accessibility-checker-extension).


### Integracja z frameworkami testowymi

Możesz użyć narzędzia [karma-accessibility-checker](../karma-accessibility-checker), aby zintegrować silnik sieciowy dostępności z platformą testową [Karma](https://karma-runner.github.io/latest/index.html) lub [Selenium](https://www.selenium.dev/). Aby uzyskać więcej informacji i instrukcji, zobacz [karma-accessibility-checker](../karma-accessibility-checker).


### Zgłaszanie błędów

Jeśli uważasz, że znalazłeś błąd, masz pytania lub sugestie, zgłoś błąd na [GitHub Issues](https://github.com/IBMa/equal-access/issues).
