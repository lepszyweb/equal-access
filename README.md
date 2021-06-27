[![IBM Equal Access Toolkit is released under the Apache-2.0 license](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](./LICENSE)

# equal-access

W tym repozytorium Git znajdują się narzędzia wchodzące w skład pakietu [IBM Equal Access Toolkit](https://ibm.com/able/toolkit) i komponenty pomocnicze.

## Przegląd

Ten plik README obejmuje tematy dla programistów. W przypadku zastosowań innych niż programistyczne zapoznaj się z następującą instrukcją dotyczącą poszczególnych narzędzi::
* [accessibility-checker-extension for Chrome](https://chrome.google.com/webstore/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp) : rozszerzenia przeglądarki internetowej, które dodają funkcje automatycznego sprawdzania dostępności do przeglądarki Chrome i innych przeglądarek obsługujących interfejs API rozszerzenia internetowego Chromium
* [accessibility-checker-extension for Firefox](https://addons.mozilla.org/en-US/firefox/addon/accessibility-checker/) : rozszerzenia przeglądarki internetowej, które dodają funkcje automatycznego sprawdzania dostępności do przeglądarki Firefox
* [accessibility-checker](https://www.npmjs.com/package/accessibility-checker): automatyczne testowanie dostępności dla środowisk testowych opartych na Node
* [karma-accessibility-checker](https://www.npmjs.com/package/karma-accessibility-checker): automatyczne testowanie dostępności dla środowiska Karma
* [cypress-accessibility-checker](https://www.npmjs.com/package/cypress-accessibility-checker): wrapper modułu sprawdzania dostępności w środowisku Cypress

## Zaczynamy

* [Node Version 12](https://nodejs.org/en/download/).

### Sklonuj repozytorium

```bash
$ git clone --branch=master https://github.com/IBMa/equal-access.git
$ cd equal-access
```
or with SSH

```bash
$ git clone --branch=master git@github.com:IBMa/equal-access.git
$ cd equal-access
```

### Zainstaluj zależności

W katalogu equal-access

```
npm install
```
Teraz możesz wybrać narzędzie, którego chcesz użyć i postępować zgodnie z instrukcjami README.MD


### Co jest w tym repozytorium?

Aby uzyskać więcej informacji, zapoznaj się z plikiem README.md każdego narzędzia / składnika

Narzędzia (opis powyżej):
* [accessibility-checker-extension](accessibility-checker-extension/README.md): rozszerzenie przeglądarki internetowej, które dodaje funkcje automatycznego sprawdzania dostępności
* [accessibility-checker](accessibility-checker/README.md):  automatyczne testowanie dostępności dla środowisk testowych opartych na środowisku Node
* [karma-accessibility-checker](karma-accessibility-checker/README.md): Automatyczne testowanie dostępności dla środowiska Karma
* [cypress-accessibility-checker](cypress-accessibility-checker/README.md): Wrapper modułu sprawdzającego dostępność dla środowiska Cypress

Komponenty:
* [accessibility-checker-engine](accessibility-checker-engine/README.md): zasady dostępności i silnik oceny używane przez
* [rule-server](https://github.com/IBMa/equal-access/tree/master/rule-server): wdraża reguły i silnik do użycia przez narzędzia


## Stosowanie

Możesz zbudować wszystkie narzędzia z katalogu głównego lub zbudować każde narzędzie osobno.

### Zbuduj wszystkie narzędzia z katalogu głównego

cd do equal-access, jeśli nie jesteś jeszcze w katalogu, a następnie wykonaj:

```bash
$ npm install
$ npm run build
```

#### Następujące biblioteki lub narzędzia są tworzone przez uruchomienie powyższych poleceń

* W katalogu equal-access/accessibility-checker-engine/dist
  * ace-debug.js: nieskompresowany javascript do wykorzystania w środowisku przeglądarki na potrzeby programowania
  * ace.js: skompresowany javascript do użycia w środowisku przeglądarki do produkcji
  * ace-node-debug.js: nieskompresowana biblioteka javascript do wykorzystania w środowisku NodeJS do programowania
  * ace-node.js: skompresowana biblioteka javascript do użycia w środowisku NodeJS do produkcji
* W katalogu equal-access/accessibility-checker/package
  * źródło javascript, które można zainstalować lub wdrożyć jako pakiet npm, który współpracuje z silnikami analizującymi HTML, takimi jak Selenium, Puppeteer, Playwright lub Zombie, aby umożliwić programistom przeprowadzanie zintegrowanych testów dostępności w ramach ciągłej integracji, takiej jak Travis CI. Zobacz więcej [szczegółów](accessibility-checker/src/README.md).
* W katalogu equal-access/karma-accessibility-checker/package 
  * źródło javascript, którego można użyć jako wtyczki Karma, zobacz więcej [szczegółów](karma-accessibility-checker/README.md).

### Zbuduj każde narzędzie osobno

Proszę sprawdzić README dla każdego narzędzia, aby uzyskać instrukcje dotyczące jego budowy::

* [silnik sprawdzania dostępności](accessibility-checker-engine/README.md)
* [accessibility checker extension](accessibility-checker-extension/README.md)
* [accessibility checker](accessibility-checker/README.md)
* [karma accessibility checker](karma-accessibility-checker/README.md)
