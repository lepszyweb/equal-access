# accessibility-checker-engine rules

Ten README jest zorientowany na tworzenie reguł i ich modyfikację. Reguły powinny być testowane tak, aby
modyfikacje mogły być testowane i potwierdzane w miarę upływu czasu.

## Specyfikacja i struktura

Aby dana reguła zadziałała i pojawiła się w wynikach narzędzia, potrzebnych jest wiele obiektów:

* Rule object
* Ruleset mapping
* Messages
* Help file
  
### Rule object

Znajdują się one w [src/v2/checker/accessibility/rules](src/v2/checker/accessibility/rules). Podstawowy format reguły jest określony przez typ reguły w [src/v2/api/IEngine.ts](src/v2/api/IEngine.ts). Możliwości dla właściwości kontekstowej są określone w [src/v2/common/Context.ts](src/v2/common/Context.ts). Wyniki reguły mogą być jednym z nich:

* RulePass("MSG_ID")
* RuleFail("MSG_ID")
* RulePotential("MSG_ID")
* RuleManual("MSG_ID")
  
Każdy z nich może przyjąć argumenty wiadomości jako tablicę łańcuchową w drugim parametrze. Mogą one również przekazywać parametry do innych API jako tablicę w trzecim argumencie.

Przykładowa reguła może wyglądać jak:

```
{
    id: "TRIGGER_ALL_BODY",
    context: "dom:body",
    run: (context: RuleContext, 
    options?: {}): RuleResult | RuleResult[] => {
        const ruleContext = context["dom"].node as Element;
        const domAttrs = context["dom"].attributes;

        return return RuleManual("Pass_0");
    }
}
```

### Mapowanie reguł

Mapowania zestawów reguł są zdefiniowane w  [src/v2/checker/accessibility/rulesets/index.ts]. Reguły są dodawane do odpowiedniej sekcji punktu kontrolnego z mapowaniem np:

```
{
    id: "TRIGGER_ALL_BODY",
    level: eRulePolicy.VIOLATION
}
```

### Messages

Mapy komunikatów są zdefiniowane w [src/v2/checker/accessibility/nls/index.ts]. Mapowanie jest zdefiniowane  jako:
```
"TRIGGER_ALL_BODY": {
    0: "Passive message used for rule groupings",
    "Pass_0": "Message with message code PASS_0 and arguments {0}, {1}, etc",
    "Fail_1": "Another message with message code Fail_1."
},
```

### Pliki pomocy

Mapy pomocy są zdefiniowane w [src/v2/checker/accessibility/help/index.ts]. Mapowanie jest zdefiniowane jako:

```
"TRIGGER_ALL_BODY": {
    0: `${Config.helpRoot}/Rpt_Aria_MultipleApplicationLandmarks`,
    "Pass_0": `${Config.helpRoot}/Rpt_Aria_MultipleApplicationLandmarks`,
    "Fail_1": `${Config.helpRoot}/Rpt_Aria_MultipleApplicationLandmarks`
}
```

Pliki pomocy znajdują się w [help](help).

## Przypadki testowe

Przypadki testowe znajdują się w [test/v2/checker/accessibility/rules](test/v2/checker/accessibility/rules). Podstawowy szablon przypadków testowych to:

```
<!DOCTYPE html>
<html lang="en">
<head><title>Test case title</title></head>
<body><main>
    <!-- Testcase HTML -->
</main></body>

    <script type="text/javascript">
        UnitTest = {
            ruleIds: ["TRIGGER_ALL_BODY"],
            results: [{
                "ruleId": "TRIGGER_ALL_BODY",
                "category": "Accessibility",
                "value": [
                    "INFORMATION", "FAIL"
                ],
                "path": {
                    "dom": "/html[1]/body[1]",
                    "aria": "/document[1]"
                },
                "reasonId": "Fail_1",
                "message": "Another message with message code Fail_1.",
                "messageArgs": [],
                "apiArgs": []
            }]
        }
    </script>
</body>

</html>
```

Parametr ruleIds definiuje, które reguły są testowane. Zauważ, że pomocne może być pozostawienie parametru results pustego i użycie wyników błędów testowania (poniżej) jako punktu wyjścia. 

## Uruchamianie przypadków testowych

Aby uruchomić wszystkie przypadki testowe, `npm test`. Aby przetestować pojedynczy przypadek testowy lub mniejszy zestaw przypadków testowych, edytuj [karma.conf.js](karma.conf.js). Zamień te linie na pożądany wzorzec:
```
{ pattern: 'test/**/*_ruleunit/*.html', watched: true },
{ pattern: 'test/**/*_ruleunit/*.htm', watched: true },
```
Następnie uruchom ponownie `npm test`.

`npm test` będzie obserwować pliki i automatycznie uruchamiać się ponownie, gdy przypadek testowy lub reguły zostaną zmienione.

## Run local server with local browser extension

Zbuduj i uruchom serwer reguł. W rule-server uruchom 
```
npm run start
```
lub bez pomocy

 ```
 npm run start:nohelp.
```

Załaduj https://localhost:9445/ w przeglądarce i wpisz `thisisunsafe`, aby ominąć ostrzeżenia o certyfikatach.
Zbuduj rozszerzenie. W accessibility-checker-extension uruchom 

```
npm run build:watch:local
```

Dodaj do Chrome rozszerzenie znajdujące się w katalogu accessibility-checker-extension/dist. Będzie ono miało etykietę (local) na karcie DevTools.

**Uwaga**: Zmiany w regułach nie są automatycznie przebudowywane. Będziesz musiał zabić serwer reguł (Ctrl+C), a następnie odbudować go i uruchomić ponownie. Może być konieczne odświeżenie rozszerzenia, aby przeładować reguły.