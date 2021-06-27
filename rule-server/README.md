To README obejmuje kilka tematów związanych z budową i wdrażaniem serwera reguł.

## Gałęzie i archiwa reguł

Domyślnie, wdrożenia budują bieżący pakiet reguł jako archiwum `preview`. Jednak różne gałęzie są wdrażane na różnych serwerach. Gałęzie `master` są wdrażane na `rules-dev.mybluemix.net/rules`. Aby użytkownicy końcowi mogli zobaczyć archiwum `preview`, zmiany muszą być połączone z gałęzią `prod`.

## Tworzenie nowego archiwum

1) Instalacja
* W katalogach `accessibility-checker-engine` oraz `rule-server` uruchom `npm install`

2) Budowanie 
* Usuń katalog `rule-server/dist`
* W katalogu `rule-server` uruchom `npm run build`
* Nowe archiwum znajduje się w `rule-server/dist/static/archives/preview`.Skopiuj i zmień nazwę `preview`  do katalogu archiwum (np., `rule-server/src/static/archives/yyyy.mm.dd`)

3) Metadane
* Dodaj wpis do `rule-server/src/static/archives.json`. Zobacz inne wpisy, aby zapoznać się z przykładami. Upewnij się, że przeniosłeś właściwość  właściwość `latest` do nowego archiwum.


