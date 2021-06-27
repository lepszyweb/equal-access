/******************************************************************************
Copyright:: 2020- IBM, Inc


Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0


Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*****************************************************************************/

import React from "react";

import beeLogoUrl from "../../assets/BE_for_Accessibility_darker.svg";
import violation from "../../assets/Violation16.svg";
import needsReview from "../../assets/NeedsReview16.svg";
import recommendation from "../../assets/Recommendation16.svg";

interface UsingACAppState {}

class UsingACApp extends React.Component<{}, UsingACAppState> {
  state: UsingACAppState = {};

  render() {
    const manifest = chrome.runtime.getManifest();

    return (
      <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-4 leftPanel">
            <div role="banner">
              <img src={beeLogoUrl} alt="purple bee icon" className="icon" />
              <h3>
                IBM <strong>Accessibility</strong>
                <br />
                Zestaw narzędzi Equal Access:
                <br />
                Tester dostępności
              </h3>
            </div>
            <div
              style={{ marginTop: "2.625rem", lineHeight: "32px" }}
              role="navigation"
            >
              <h1>Podręcznik użytkownika</h1>
              <ul className="toc" style={{ marginTop: "1rem" }}>
                <li>
                  <a href="#prereq" title="Wymagania wstępne">
                    1. Wymagania wstępne
                  </a>
                </li>
                <li>
                  <a href="#install" title="Instalacja">
                    2. Instalacja
                  </a>
                </li>

                <li>
                  <a href="#categories" title="kategorie">
                    3. Kategorie problemow dostępności
                  </a>
                </li>

                <li>
                  <a href="#view" title="Sposoby przeglądania problemów">
                    4. Sposoby przeglądania problemów
                  </a>
                </li>

                <li>
                  <a href="#t_select_settings" title="Wybór opcji">
                    5. Opcje
                  </a>
                  <ul className="toc">
                    <li>
                      <a href="#rule_deploy" title="wdrożenie zestawu reguł">
                        5.1 Data wdrożenia zestawu reguł
                      </a>
                    </li>
                    <li>
                      <a href="#ruleset" title="Zestaw reguł">
                        5.2 Wybór wytycznych dla dostępności
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#usage" title="Stosowanie">
                    6. Stosowanie
                  </a>
                  <ul className="toc">
                    <li>
                      <a href="#a11y_check" title="Tester dostępności">
                        6.1 Tester dostępności
                      </a>
                    </li>
                    <li>
                      <a href="#focus_view" title="Skupienie na elemencie">
                        6.2 Skupienie na elemencie
                      </a>
                    </li>
                    <li>
                      <a href="#a11y_assess" title="Ocena dostępności">
                        6.3 Ocena dostępności
                      </a>
                    </li>
                    <li>
                      <a
                        href="#t_single_scan_report"
                        title="Tworzenie raportu skanowania"
                      >
                        6.4 Tworzenie raportu skanowania
                      </a>
                    </li>
                    <li>
                      <a
                        href="#t_multi_scan_report"
                        title="Tworzenie raportu wielu skanowań"
                      >
                        6.5 Tworzenie raportu wielu skanowań
                      </a>
                    </li>
                    <li>
                      <a
                        href="#t_select_hidden_settings"
                        title="Wybierz ustwienia skanowania ukrytej treści"
                      >
                        6.6 Skanowanie ukrytej treści
                      </a>
                    </li>
                    <li>
                      <a href="#scan_local_files" title="Scan local files">
                        6.7 Skanowanie plików lokalnych
                      </a>
                    </li>
                    <li>
                      <a href="#a11y_considerations" title="Uwagi dotyczące dostępności">
                        6.8 Uwagi dotyczące dostępności
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#the_report" title="Raporty sprawdzania dostępności">
                    7. Raporty sprawdzania dostępności{" "}
                  </a>
                  <ul className="toc">
                    <li>
                      <a href="#t_html_report" title="Raport HTML">
                        7.1 Raport HTML
                      </a>
                    </li>
                    <li>
                      <a href="#t_excel_report" title="Raport w arkuszu MS Excel">
                        7.2 Raport w arkuszu MS Excel
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#feedback" title="Informacje zwrotne">
                    8. Informacje zwrotne
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bx--col-md-0 bx--col-lg-1 buffer"></div>
          <div
            className="bx--col-md-8 bx--col-lg-8 rightPanel"
            role="main"
            aria-label="Treść podręcznika użytkownika"
          >
            <h1>IBM Accessibility Checker - podręcznik użytkownika</h1>
            <div className="versionDec">Wersja {manifest.version}</div>

            <p>
			  IBM Equal Access Accessibility Checker jest rozszerzeniem przeglądarki  które pozwala użytkownikom ocenić komponent lub rozwiązanie oparte na sieci Web pod kątem problemów z dostępnością w odniesieniu do wytycznych W3C Web Content Accessibilty Guidelines (WCAG) i wytycznych IBM z wyjaśnieniami i odpowiednimi poprawkami w ramach narzędzia.
			  
            </p>
            <p>
              Rozszerzenie prezentuje dwa widoki, panel{" "}
              <strong>Ocena dostępności</strong> jest kompleksowym narzędziem oceny dostępności, które pomaga zidentyfikować problemy z dostępnością i zrozumieć, jak je naprawić, podczas gdy karta {" "}
              <strong>Tester dostępności</strong> w panelu Elementy w Chrome lub panelu Inspektor w Firefoksie jest skanerem kodu dla programistów, którzy chcą szybko znaleźć i naprawić problemy w kodzie i na stronie. To narzędzie sprawdzające jest częścią otwartego pakietu narzędzi automatyzujących dostępność. Dla zespołów poszukujących zintegrowanego testowania dostępności, IBM oferuje{" "}
              <a href="https://github.com/IBMa/equal-access/blob/master/README.md">
                wtyczki i moduły dla NodeJS i Karma,
              </a>{" "}
              które wykonują międzyplatformowe testowanie dostępności w procesie budowania i rozwoju. Narzędzia te wykorzystują ten sam silnik testowy, co Accessibility Checker.
		  
            </p>
            <h2 id="prereq">1. Wymagania wstępne</h2>
            <div className="pa">
              Obsługiwane przeglądarki:
              <ul
                style={{ listStyleType: "circle", marginInlineStart: "1rem" }}
              >
                <li>Google Chrome wersja 81.x lub nowsza</li>
                <li>Mozilla Firefox wersja 8.x lub nowsza</li>
              </ul>
            </div>

            <h2 id="install">2. Instalacja</h2>
            <div className="pa">
              Wykonaj poniższe kroki, aby zainstalować rozszerzenie przeglądarki dla Google Chrome:
              <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>Otwórz przeglądarkę Google Chrome.</li>
                <li>
                  Przejdź na{" "}
                  <a
                    target="_blank"
                    href="https://chrome.google.com/webstore/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp"
                  >
                    IBM Equal Access Accessibility Checker
                  </a>{" "}
                  w Chrome Web Store.
                </li>
                <li>
                  Naciśnij przycisk <strong>'Dodaj do Chrome'</strong>.
                </li>
              </ol>
            </div>
            <div className="pa">
              Wykonaj poniższe kroki, aby zainstalować rozszerzenie przeglądarki dla 
              Mozilla Firefox:
              <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>Otwórz przeglądarkę Firefox.</li>
                <li>
                  Przejdź na{" "}
                  <a
                    target="_blank"
                    href="https://addons.mozilla.org/en-US/firefox/addon/accessibility-checker/"
                  >
                    IBM Equal Access Accessibility Checker
                  </a>{" "}
                  na stronie Dodatki do przeglądarki.
                </li>
                <li>
                  Naciśnij przycisk <strong>'Dodaj do Firefoksa'</strong> .
                </li>
              </ol>
            </div>

            <h2 id="categories">3. Kategorie problemów dostępności</h2>
            <p>Narzędzie zgłasza trzy rodzaje problemów z dostępnością:</p>
            <ul style={{ marginInlineStart: "2rem" }}>
              <li>
                <p>
                  <img
                    src={violation}
                    alt="Ikona naruszeń "
                    style={{ verticalAlign: "middle" }}
                  />{" "}
                  <strong> Naruszenia</strong> - błędy dostępności, które wymagają naprawy.
                </p>
              </li>
              <li>
                <p>
                  <img
                    src={needsReview}
                    alt="ikona Do przeglądu "
                    style={{ verticalAlign: "middle" }}
                  />{" "}
                  <strong> Do przeglądu</strong> - przypadki, które mogą nie być naruszeniem. Wymagają one ręcznego przeglądu w celu określenia, czy istnieje problem z dostępnością.
                </p>
              </li>
              <li>
                <p>
                  <img
                    src={recommendation}
                    alt="ikona Zalecenia"
                    style={{ verticalAlign: "middle" }}
                  />{" "}
                  <strong> Zalecenia</strong> - możliwości zastosowania najlepszych praktyk w celu dalszej poprawy dostępności.
                </p>
              </li>
            </ul>
            <p>
              Jak w przypadku każdego narzędzia do automatycznego testowania dostępności, 
			  testy te nie wychwytują wszystkich problemów. Zakończ swoją ocenę dostępności 
			  szybkim testem jednostkowym pod kątem dostępności 
			  lub wykonaj pełny proces testowania dostępności.
            </p>

            <h2 id="view">4. Sposoby przeglądania problemów</h2>
            <p>
              Istnieją trzy sposoby przeglądania i badania problemów zidentyfikowanych przez narzędzie. Wszystkie widoki pokazują ten sam zestaw zagadnień:
            </p>
            <ul style={{ marginInlineStart: "2rem" }}>
              <li>
                <p>
                  <strong>Wymagania</strong> - problemy są uporządkowane według  wymagań IBM, co odpowiada standardom WCAG 2.1.  Każdy problem jest zmapowany do najbardziej odpowiedniego wymagania. Ten  widok sprawia, że łatwo jest zobaczyć, jak klasyfikować i  raportować problemy znalezione przez narzędzie.
                </p>
              </li>
              <li>
                <p>
                  <strong>role elementu </strong>- problemy są zorganizowane w hierarchicznej strukturze zdefiniowanej przez role WAI-ARIA dla elementów DOM.  Widok ten pokazuje zarówno role ukryte, jak i jawne role. Nie pokazuje on nazw elementów. Ten widok jest idealny do eksploracji zagadnień w obrębie konkretnego elementu i jego dzieci.
                </p>
              </li>
              <li>
                <p>
                  <strong>Reguły</strong> - problemy są uporządkowane według reguł w zestawie wymagań, z podziałem na naruszenia, elementy wymagające przeglądu i rekomendacje. Ten widok jest najlepszym sposobem na zobaczenie wszystkich różnych rodzajów problemów na raz.
                </p>
              </li>
            </ul>

            <h2 id="t_select_settings">5. Opcje</h2>
            <p>
              Użyj strony opcji, aby zmienić domyślny zestaw reguł dla obsługiwanego standardu lub datę wdrożenia zestawu reguł. Domyślnie, IBM Equal Access Accessibility Checker używa najnowszego wdrożenia z zestawem reguł, które odpowiadają najnowszym standardom WCAG, plus kilku dodatkowym wymaganiom uzupełniającym IBM. W razie potrzeby  do wyboru sa również dostępne zestawy reguł z regułami, które odpowiadają konkretnym wersjom WCAG. Te zestawy reguł są regularnie aktualizowane, a każda aktualizacja ma datę wdrożenia. W przypadku konieczności powtórzenia wcześniejszego testu należy wybrać datę wdrożenia oryginalnego testu.

            </p>
            <p>
              Po zmianie opcji zamknij i otwórz ponownie narzędzia deweloperskie, aby zmiany zaczęły obowiązywać.
            </p>
            <p>
              Wykonaj poniższe kroki, aby otworzyć stronę z opcjami programu Sprawdzanie dostępności:
            </p>
            <ol style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}>
              <li>
                <p>
                  W pasku narzędzi przeglądarki, wybierz ikonę IBM Equal Access ikonę sprawdzania dostępności, pokazaną jako fioletowa pszczoła{" "}
                  <img
                    src={beeLogoUrl}
                    width="16px"
                    height="16px"
                    alt="ikonę aplikacji Sprawdzanie dostępności"
                  />
                  . Zazwyczaj znajduje się on w prawym górnym rogu okna okna przeglądarki. Pojawi się nakładka.
                </p>
              </li>
              <li>
                <p>
                  Wybierz <strong>&bdquo;Opcje&rdquo;</strong> w nakładce. Opcje zostaną otwarte w nowej karcie przeglądarki. <strong>Uwaga:</strong> W przeglądarce Firefox, gdy opcja Enhanced Tracking Protection jest ustawiona na Strict, powoduje to, że niektóre witryny lub treści mogą zostać uszkodzone i może to uniemożliwić otwarcie strony Opcje. Zmień ustawienia prywatności przeglądarki na Standard, aby uniknąć tej sytuacji.

                </p>
              </li>
            </ol>
            <p>
              <img
                src="assets/img/5_Options.png"
                alt="Zrzut ekranu strony opcji - strona, na której można wybrać wdrożenie zestawu reguł oraz zestaw reguł, z którego ma korzystać kontroler."
                width="100%"
                height="100%"
              />
            </p>

            <h3 id="rule_deploy">5.1 Data wdrożenia zestawu reguł</h3>
            <p>
              {" "}
              Z listy rozwijanej <strong>'Wybierz datę wdrożenia zestawu reguł'</strong> wybierz jedną z opcji:
            </p>
            <ul style={{ marginInlineStart: "2rem" }}>
              <li>
                <p>
                  <strong>Najnowsze wdrożenie</strong> - użyj najnowszej wersji  wybranego zestawu reguł. Jest to opcja domyślna.
                </p>
              </li>
              <li>
                <p>
                  <strong>Wdrożenie &lt;data&gt; </strong> - użyj zestawu reguł z określonej daty w celu spójnego testowania w całym projekcie lub do powtórzenia wcześniejszego testu.
                </p>
              </li>
              <li>
                <p>
                  <strong>Podglądowe reguły</strong> - wypróbuj eksperymentaln, być może przyszły zestaw reguł.
                </p>
              </li>
            </ul>
            <p>
              Wybierz przycisk <strong>'Zapisz'</strong>, aby zachować zmiany, lub przycisk <strong>'Resetuj'</strong>, aby odrzucić zmiany.  Zamknij i otwórz ponownie narzędzia deweloperskie, aby zmiany zaczęły obowiązywać.
            </p>

            <h3 id="ruleset">5.2 Wybierz wytyczne dla dostępności</h3>
            <p>
               Z listy rozwijanej <strong>'Wybierz wytyczne dla dostępności'</strong> wybierz jedną z opcji :
            </p>
            <ul style={{ marginInlineStart: "2rem" }}>
              <li>
                <p>
                   <strong>IBM Accessibility</strong> - Reguły obejmujące Wytyczne dla dostępności WCAG 2.1, poziomy A i AA, oraz dodatkowe wymagania IBM. Jest to opcja domyślna.
                </p>
              </li>

              <li>
                <p>
                  <strong>WCAG 2.1 (A,AA)</strong> - Aktualne zalecenia W3C. Treści zgodne z WCAG 2.1 są również zgodne z 2.0. Zasady te są zgodne z europejskimi normami EN 301 549.
                </p>
              </li>

              <li>
                <p>
                  <strong>WCAG 2.0 (A,AA)</strong> - Te reguły te są zgodne z poprawionymi normami US Sec 508, ale nie są najnowszą  rekomendacją W3C.
                </p>
              </li>

              <li>
                <p>
                  <strong>IBM Accessibility BETA</strong> - Rozszerza IBM Accessibility o eksperymentalne zasady.
                </p>
              </li>

            </ul>
            <p>
			  Po wprowadzeniu zmiany należy wybrać przycisk <strong>&bdquo;Zapisz&rdquo;</strong>, a następnie zamknąć i ponownie otworzyć  narzędzia programisty, aby zmiana zaczęła obowiązywać.
            </p>

            <h2 id="usage">6. Stosowanie</h2>
            <p>
			  IBM Equal Access Accessibility Checker oferuje dwa widoki. Widok Tester dostępności (Accessibility Checker) jest skanerem kodu dla programistów, którzy chcą szybko znaleźć i naprawić błędy podczas budowania komponentu. Natomiast widok Ocenianie dostępności (Accessibility Assessment) zapewnia wyjaśnienie i sugerowane rozwiązania dla każdego wykrytego problemu.
              {" "}
              </p>
              <p>
			  <strong>Uwaga</strong>: W rzadkich przypadkach rozszerzenie Accessibility Checker nie pojawia się w narzędziach programisty dla niektórych stron z powodu błędu w narzędziach programisty. Obejściem jest przejście do witryny, gdzie wiesz, że sprawdzanie zostanie uruchomione, i uruchomienie sprawdzania w narzędziach deweloperskich. Następnie, w tej samej karcie przeglądarki, załaduj stronę, która nie została uruchomiona.
            </p>

            <h3 id="a11y_check">6.1 Tester dostępności</h3>
            <div className="pa">
              <ol
                style={{
                  listStyleType: "decimal",
                  marginInlineStart: "2rem",
                  marginTop: " 0.75rem",
                }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>Otwórz panel narzedziy programisty:</p>
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        W Chrome: w menu przeglądarki &bdquo;Widok&rdquo; wybierz
                        &bdquo;Programista&rdquo;, a następnie &bdquo;Narzędzia programisty&rdquo; albo{" "}
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        W Firefox: w menu przeglądarki &bdquo;Narzędzia&rdquo; wybierz &bdquo;Programista&rdquo; , a następnie wybierz &bdquo;Przełącz narzędzia&rdquo;, or
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Press <strong>Command+Option+I</strong> on MacOS® or{" "}
                        <strong>Control+Shift+I</strong> on Microsoft Windows®,
                        or
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Right-click on a page element and select ‘Inspect’
                        (Chrome) or ‘Inspect Element’ (Firefox).
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Open the ‘Elements’ panel (Chrome) or ‘Inspector’ panel
                    (Firefox).
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Select <strong>'Accessibility Checker'</strong> from the
                    tabs in the right-hand pane:{" "}
                  </p>
                  <p>
                    <img
                      src="assets/img/Chrome_Checker.png"
                      alt="Accessibility Checker screenshot - a code scanner for developers"
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Click the <strong>'Scan'</strong> button to scan the web
                    page.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    The scan result displays the total number of issues found
                    with individual counts for violations, items that need
                    review, and recommendations in the issue count region. By
                    default, the issue list is shown in the 'Element roles' view
                    (see the previous definition), while 'Requirements' and 'Rules'
                    tabs are also available. All views show the same set of
                    issues.
                  </p>
                  <p>
                    <img
                      src="assets/img/6_1_AccessibilityChecker5.png"
                      alt="Accessibility Checker results"
                      width="100%"
                      height="100%"
                    />
                  </p>
               </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    To <strong>filter</strong> issues and focus only on
                    violations, items that need review or recommendations,
                    deselect the checkbox by the issue type in the issue count region below the{" "}
                    <strong>'Scan'</strong> button to exclude the issue type from the results. Select 
                    the checkbox by the issue type to include the issue type in the results.
                    In this screenshot, the 'Needs review' items have been filtered out. 
                  </p>
                  <p>
                    <img
                      src="assets/img/6_1_AccessibilityChecker6.png"
                      alt="Accessibility Checker results with 'Needs review' issues filtered out"
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Select the expand icon (^) next to an element role, requirement,
                    or rule in the table to display the corresponding issues
                    found.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Select the 'learn more' link for an issue to view more detailed help
                    information that describes the issue and how to fix it. The
                    help includes links to more detailed explanation, and
                    summarizes why this issue is important, and who is affected
                    by it.
                  </p>
                </li>
                <li>
                  Element roles tab:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Select an instance of an issue, or an element in the
                        document object model (DOM), or use the ‘Inspect
                        element’ command on the web page to:
                      </p>
                      <ul
                        style={{
                          listStyleType: "disc",
                          marginInlineStart: "2rem",
                        }}
                      >
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            Highlight the selected element, or the element
                            containing the selected issue, in the DOM under the
                            browser's Elements panel and highlight its location
                            on the web page.
                          </p>
                        </li>
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            See summary counts showing the number of issues of
                            each type within the selected element and its
                            children.
                          </p>
                        </li>
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            Open and highlight all issues in the element, if any
                            (purple highlight)
                          </p>
                        </li>
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            Open and highlight all issues in the element's
                            children, if any (light purple highlight).
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Requirements tab:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Select the <strong>'Requirements'</strong> tab to view the
                        scan results by the{" "}
                        <a href="https://www.ibm.com/able/requirements/requirements/">
                          IBM accessibility requirements</a>.{" "}
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Select an element or an instance of an issue to
                        highlight the same set of issues and child issues as in
                        the 'Element roles' tab. In this view, the issues will
                        be shown within the relevant requirements.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  Rules tab:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        {" "}
                        Select the <strong>'Rules'</strong> tab to view the scan
                        results by the Accessibility Checker rules.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Select an element or an instance of an issue to
                        highlight the same set of issues and child issues as in
                        the 'Element roles' tab. In this view, the issues will
                        be shown within the relevant rules.
                      </p>
                    </li>
                  </ul>
                </li>

                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Switch between tabs to see the same set of highlighted
                    issues in different views.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Use the <strong>'Reports'</strong> menu button to download reports
                    and to store and manage scans to combine into reports. 
                    For details, see Sections{" "}
                    <a href="#t_single_scan_report" title="Create scan report">6.4 Creating a scan report</a>,{" "} 
                    <a href="#t_multi_scan_report" title="Create multi-scan report">6.5 Creating a multi-scan report</a>{" "}
                    and <a href="#the_report" title="accessibility checker report">7 Accessibility Checker reports</a>.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Optionally, you can update the code in the browser's
                    Elements panel and run <strong>'Scan'</strong> again to
                    confirm your code changes fix the issue.
                  </p>
                </li>
              </ol>
            </div>

            <h3 id="focus_view">6.2 Focus View</h3>
            <p>
            Przełącznik <strong>'Focus view'</strong> umożliwia przełączanie między wyświetlaniem wszystkich problemów na stronie lub tylko problemów z wybranym elementem lub komponentem w DOM. Aby skupić się na dowolnym pojedynczym elemencie lub komponencie:

			
            </p>
            <div className="pa">
              <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz element lub komponent w DOM albo
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Kliknij prawym przyciskiem myszy na elemencie strony i wybierz "Zbadaj" (Chrome) lub "Zbadaj element" (Firefox).
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz nazwę elementu w przełączniku <strong>"Focus View"</strong>, aby wyświetlić tylko problemy dotyczące tego elementu i jego dzieci.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz opcję <strong>'Wszystko'</strong> w przełączniku <strong>"Focus View"</strong> aby wyświetlić wszystkie problemy na stronie.
                  </p>
                </li>
              
              <p>Domyślnie, po pierwszym skanowaniu strony, wyświetlane są wszystkie zagadnienia, a element &lt;html&gt; jest zaznaczony, jak pokazano na tym zrzucie ekranu:
              </p>
  

              <p>
                    <img
                      src="assets/img/6_2_FocusView1.png"
                      alt="Zrzut ekranu narzędzia Accessibility Checker - widok główny z wszystkimi problemami"
                      width="100%"
                      height="100%"
                    />
              </p>
              <p>In this screen shot, the search &lt;input&gt; element in the DOM has been selected, and the{" "} 
              <strong>'Focus View'</strong> switch has been set to show all the issues on the whole page:
              <br/>
              </p>
              <p>
                    <img
                      src="assets/img/6_2_FocusView2.png"
                      alt="Accessibility Checker screenshot. Focus view switch options are 'input' and 'All' (selected) and all issues on the page are shown"
                      width="100%"
                      height="100%"
                    />
              </p>
              <p>In this screen shot, the search &lt;input&gt; element in the DOM has been selected, and the{" "}
              <strong>‘Focus View’</strong> switch has been set to show only the issues for that search &lt;input&gt; element:
              </p>
              <p>
                    <img
                      src="assets/img/6_2_FocusView3.png"
                      alt="Accessibility Checker screenshot. Focus view switch options are 'input' (selected) and 'All' only the two issues within the search input element are shown"
                      width="100%"
                      height="100%"
                    />
              </p>

              </ol>
            </div>

            <h3 id="a11y_assess">6.3 Accessibility Assessment</h3>
            <div className="pa">
              <ol
                style={{
                  listStyleType: "decimal",
                  marginInlineStart: "2rem",
                  marginTop: " 0.75rem",
                }}
              >
                <li>
                  Open the Developer Tools:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        In Chrome: From the browser ‘View’ menu, select
                        ‘Developer’ and then select ‘Developer tools’, or{" "}
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        In Firefox: From the browser ‘Tools menu, select ‘Web
                        Developer’ and then select ‘Toggle Tools’, or
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Press <strong>Command+Option+I</strong> on MacOS® or{" "}
                        <strong>Control+Shift+I</strong> on Microsoft Windows®,
                        or
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Right-click on a page element and select ‘Inspect’
                        (Chrome) or ‘Inspect Element’ (Firefox).
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Select the <strong>'Accessibility Assessment'</strong>{" "}
                    panel:{" "}
                  </p>
                  <p>
                    <img
                      src="assets/img/6_3_AccessibilityAssessment2.png"
                      alt="Accessibility Assessment screenshot - A comprehensive accessibility assessment tool"
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Click the <strong>'Scan'</strong> button to scan the web
                    page.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    By default, the results display by the{" "}
                    <strong>'Requirements'</strong> with a breakdown of
                    the total number of issues found by category.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    The right panel displays an Accessibility Checker Report
                    summary, while the left panel shows the scan result with the
                    total number of issues found, with individual counts for
                    violations, items that need review, and recommendations:{" "}
                  </p>
                  <p>
                    <img
                      src="assets/img/6_3_AccessibilityAssessment5.png"
                      alt="Accessibility Assessment report screenshot - a sample report of Accessibility Assessment"
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    By default, issues are shown in the 'Requirements' view, while
                    'Element roles' and 'Rules' tabs are also available. All
                    views show the same set of issues.
                  </p>
                </li>
                <li>
                  Requirements tab:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Select the expand icon next to a requirement in the table
                        to display a list of issues found within that
                        requirement.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Select an instance of an issue and the report summary is
                        replaced with a detailed description that includes the
                        error level, why the content is failing, what the
                        requirement is, what resources to use, what to do to fix
                        the issue, who it affects, and why it is important:{" "}
                      </p>
                      <p>
                        <img
                          src="assets/img/6_3_AccessibilityAssessment7.png"
                          alt="Accessibility Assessment help panel screenshot - a sample help panel of Accessibility Assessment "
                          width="100%"
                          height="100%"
                        />
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  Element roles tab:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Select the <strong>'Element roles'</strong> tab to view
                        the scan results organized by element roles on the web
                        page.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Expand an element role to view the issues for that
                        element role.
                      </p>
                    </li>
                    <li>
                      Select an issue to:
                      <ul
                        style={{
                          listStyleType: "disc",
                          marginInlineStart: "2rem",
                        }}
                      >
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            Highlight the issue.
                          </p>
                        </li>
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            View the detailed description for that issue in the
                            summary pane (on the left).
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Rules tab:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Select the <strong>'Rules'</strong> tab to view the scan
                        results by the Accessibility Checker rule.
                      </p>
                      <li>
                        {" "}
                        <p style={{ marginTop: "0rem" }}>
                          Expand a rule to view the issues for that rule.
                        </p>
                      </li>
                      <li>
                        Select an issue to:
                        <ul
                          style={{
                            listStyleType: "disc",
                            marginInlineStart: "2rem",
                          }}
                        >
                          <li>
                            <p style={{ marginTop: "0rem" }}>
                              Highlight the issue.
                            </p>
                          </li>
                          <li>
                            <p style={{ marginTop: "0rem" }}>
                              View the detailed description for that issue in
                              the summary pane (on the left).
                            </p>
                          </li>
                        </ul>
                      </li>
                    </li>
                  </ul>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Optionally, you can select the browser's Element panel to
                    view the Accessibility Checker results alongside the code
                    and test fixes.
                  </p>
                </li>
              </ol>
            </div>

            <h3 id="t_single_scan_report">6.4 Creating a scan report</h3>
            <div className="pa">
            To generate a report for a single scan in the <strong>Tester dostępności</strong> view:
            <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Follow the instructions in <a href="#a11y_check" title="Tester dostępności">
                        6.1 Tester dostępności</a> to scan the web page.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Open the <strong>'Reports'</strong> drop-down menu that follows the scan button.
                  </p>
                  <p>
              <img
                src="assets/img/6_4_CreatingSingleScanReport2.png"
                alt="Screen shot of the 'Reports' menu"
                width="100%"
                height="100%"
              />
            </p>

                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Select <strong>'Download current scan'</strong>.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    The report for the most recent scan will be downloaded in both HTML and MS Excel spreadsheet formats.
                </p>
                </li>
                </ol>
                <p>To generate a report for a single scan in the <strong>Accessibility Assessment</strong> view:
                </p>
                <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Follow the instructions in <a href="#a11y_assess" title="Accessibility Assessment">6.3 Accessibility Assessment</a> to scan the web page.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Select the <strong>'Reports'</strong> button.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    The report for the most recent scan will be downloaded in both HTML and MS Excel spreadsheet formats.
                  </p>
                </li>
              </ol>
            </div>

            <h3 id="t_multi_scan_report">6.5 Creating a multi-scan report</h3>
            <p>
              Follow these steps to combine several scans into a single report. 
              Up to 50 scans may be combined. Reports 
              with more than 50 scans may not open correctly in MS Excel due to 
              limitations of the libraries used to write the reports.
              </p>
             <div className="pa">
             <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Open the <strong>Tester dostępności</strong> view (as described in <a href="#a11y_check" title="Tester dostępności">
                        6.1 Tester dostępności</a>).
                 </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Open the <strong>'Reports'</strong> drop-down menu.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Select the <strong>'Start storing scans'</strong> menu item.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    The status indicator below the scan button will show that you are now 
                    storing scans to build a report, and that no scans are stored.
                  </p>
                  <p>
                    <img
                      src="assets/img/6_5_CreatingMulti-scanReport4.png"
                      alt="Status: storing, no scans stored"
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Scan the pages you want to include in the report.  This may include scans 
                    of the same page in different states. 
                    The status indicator will update to show how many scans are stored.
                  </p>
                  <p>
                    <img
                      src="assets/img/6_5_CreatingMulti-scanReport5.png"
                      alt="Status: storing, 1 scan stored"
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    When storing scans, you may stop storing scans by selecting the <strong>'Stop storing scans'</strong>{" "} 
                    option in the <strong>'Reports'</strong> drop-down menu, and your stored scans will not be lost.  
                    You can start storing scans again at any time.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    To remove all stored scans, open the <strong>'Reports'</strong> drop-down menu and 
                    select <strong>'Clear stored scans'</strong>.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    When you have stored the scans for the report, open the <strong>'Reports'</strong> drop-down menu and select{" "} 
                    <strong>'View stored scans'</strong>. This opens the Scan manager view, showing a table listing all the stored scans. 
                  </p>
                  <p>
                        <img
                          src="assets/img/6_5_CreatingMulti-scanReport8.png"
                          alt="Accessibility Checker Stored Scans panel screenshot - a table listing the stored scans "
                          width="100%"
                          height="100%"
                        />
                  </p>
                </li>
              </ol>
              <p>Creating a report in the scan manager view:
              </p><ol 
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Review the scans listed and select the ones you want in the report. Select or unselect all 
                    the stored scans with the checkbox in the first column of the header row of the table.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Use the <strong>'View'</strong> link in the 'Details' column at the right of the table to see a screenshot of each scan.
                  </p>
                  <p>
                        <img
                          src="assets/img/6_5_CreatingMulti-scanReport10.png"
                          alt="Popup dialog with screenshot of scan, and details about the scan "
                          width="100%"
                          height="100%"
                        />
                      </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Unselect any scan you do not want in the report by unchecking its checkbox in the table. 
                  </p>
                  <p>
                        <img
                          src="assets/img/6_5_CreatingMulti-scanReport11.png"
                          alt="Accessibility Checker Stored Scans panel screenshot - one scan is unchecked "
                          width="100%"
                          height="100%"
                        />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    [Optional] To help differentiate the scans in the final report, enter meaningful scan labels 
                    in the 'Scan label’ column of the table.  These labels will appear in the final report.
                  </p>
                  <p>
                        <img
                          src="assets/img/6_5_CreatingMulti-scanReport12.png"
                          alt="Accessibility Checker Stored Scans panel screenshot - three scans are labelled 'Original scan', 'with form' and 'with link' "
                          width="100%"
                          height="100%"
                        />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Download the multi-scan report spreadsheet by selecting the <strong>'Download'</strong> button at the top of the table.
                    The spreadsheet will automatically download.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Remove the selected stored scans using the <strong>'Delete'</strong> button. 
                    This preserves memory for new scans to be stored.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Return to the main checker view by selecting <strong>'Back to list view'</strong>.
                  </p>
                </li>
              </ol>
            </div>

            <h3 id="t_select_hidden_settings">6.6 Hidden content scanning</h3>
            <p>
              By default, the tool skips hidden content (Web pages that use the{" "}
              <var>visibility:hidden</var> or <var>display:none</var> elements),
              if this content is displayed to the user at any point, you must
              test the web content by fully exercising the user interface
              according to the usage scenarios in your test plan. Ensure the
              tests trigger the display of hidden content so that the
              Accessibility Checker can validate the content that is displayed.
            </p>

            <h3 id="scan_local_files">6.7 Scan local files</h3>
            <p>
              The Accessibility Checker is able to scan local .html or .htm
              files launched in the Firefox browser by default. Follow the steps
              below to allow scanning of local .html or .htm files in the Chrome
              browser:
              </p>
            <div className="pa">
              <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Open the Chrome browser.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Open the <strong>'Window'</strong> menu.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Select the <strong>'Extensions'</strong> menu option to see
                    all installed extensions.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Select the <strong>'Details'</strong> button of the IBM Equal
                    Access Accessibility Checker Extension.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Scroll down to <strong>'Allow access to file URLs'</strong>{" "}
                    and turn this option on.
                  </p>
                </li>
              </ol>
            </div>

            <h3 id="a11y_considerations">6.8 Accessibility Considerations</h3>
            <p>
              Highlighted below are several accessibility features for adaptability and to ensure ease of access to the Checker functionality, including with keyboard or with a screen reader: 
            </p>
            <div className="pa">
              <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    The Accessibility Checker tool is responsive to the user's preferred font size and colors.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Both the Accessibility Assessment view and the Accessibility Checker view are fully keyboard accessible, navigate as follows:
                  </p>
                </li>
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Use the <strong>'tab'</strong> key to navigate to any focusable element in the checker, starting
                        with the <strong>'Scan'</strong> button once the checker launches.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        After running the scan, press the <strong>'tab'</strong> key again, to navigate to the <strong>'Reports'</strong> drop-down menu button.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        In the Accessibility Checker view, press the <strong>'tab'</strong> key again to navigate to the 'Focus view’ toggle button. 
                        Use the arrow keys to select whether the issue list includes all issues (default) or just the issues for the currently focused element and its children. 
                        This function is not available in the Accessibility Assessment view. 
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Press the <strong>'tab'</strong> key to navigate to the checkbox by each issue type and press the <strong>'enter'</strong> key to filter the list of issue by <strong>Violations</strong>, <strong>Needs review</strong> and/or by <strong>Recommendations</strong>.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Press the <strong>'tab'</strong> key to navigate to the <strong>Issue List</strong> tabs and use the <strong>'right arrow'</strong> or the <strong>'left arrow'</strong> keys to navigate between the <strong>'Element Roles'</strong> view, the <strong>'Requirements'</strong> view and the <strong>'Rules'</strong> view.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Press the <strong>'tab'</strong> key to navigate through the <strong>issue groupings</strong> associated with each requirement, element role or rule. Use the <strong>'enter'</strong> key to open or close an issue grouping. Within an open grouping, press the <strong>'tab'</strong> key to navigate to each issue, and press the <strong>'enter'</strong> key to select the current issue.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Press the <strong>'tab'</strong> key to move to the <strong>'Learn more'</strong> link or to move to the next issue.
                      </p>
                    </li>
                  </ul>  
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Use the <strong>headings</strong> hierarchy or the implemented <strong>landmarks</strong> to quickly navigate from one section to another. The list of implemented landmarks are as follows:
                  </p>
                </li>
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        The <strong>Accessibility Assessment</strong> or the <strong>Accessibility Checker</strong> main landmark contains the main functionality of the tool in each view and includes,
                      </p>
                      <ul
                          style={{
                            listStyleType: "disc",
                            marginInlineStart: "2rem",
                          }}
                        >
                          <li>
                            <p style={{ marginTop: "0rem" }}>
                              The <strong>Issue Count</strong> region: contains the issue count by issue type as well as the total number of issues found.
                            </p>
                          </li>
                          <li>
                            <p style={{ marginTop: "0rem" }}>
                              The <strong>Issue List</strong> region: contains the list of issues grouped by Element Roles, by Requirements or by Rules.
                            </p>
                          </li>
                          <li>
                          <p style={{ marginTop: "0rem" }}>
                            In the Accessibility Checker view, the main landmark also containes issue help and the overview of stored scans, when those are 
                            requested by the user.
                          </p>
                         </li>
                        </ul>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        The Accessibility Assessment view <strong>Scan Summary</strong> aside or the complementary landmark contains the scan summary, after the scan completes or shows the issue help when any issue is selected.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        The Accessibility Assessment view <strong>Issue Help</strong> aside or the complementary landmark contains the issue help when any issue is selected.
                      </p>
                    </li>
                  </ul>
              </ol>
            </div>

            <h2 id="the_report">7. Accessibility Checker reports</h2>
            <p>
            The Accessibility Checker can create reports for a single scan, or for multiple scans combined (multi-scan reports). 
            Single scan reports are provided in both HTML and MS Excel spreadsheet formats. 
            Multi-scan reports are available only in MS Excel spreadsheet format. 
            Sections <a href="#t_single_scan_report"
                        title="Create scan report">
                  6.4 Creating a scan report
                  </a>{" "}
                  and <a href="#t_multi_scan_report"
                        title="Create multi-scan report">
                    6.5 Creating a multi-scan report
                  </a>{" "}
                  describe how to generate reports.
            </p>
            <h3 id="t_html_report">7.1 HTML report</h3>
            <p>
              This is an interactive report saved as an HTML file for future use. It includes the report
              scan date and time, URL, and a summary of test results followed by
              the issue details organized by requirements, by element
              roles, and by rules. Each instance of an issue also includes a{" "}
              <strong>'Learn more'</strong> link that opens an overlay
              containing a more detailed description of the issue.
            </p>
            <p>
              The current accessibility status of the Web content displays as a
              percentage of elements with no detected violations or items to
              review.{" "}
            </p>
            <p>
              <strong>Important Note:</strong> This percentage is based on
              automated tests only. Be sure to perform additional reviews and
              manual tests to complete the accessibility assessments. Use the{" "}
              <a href="www.ibm.com/able/toolkit">IBM Equal Access Toolkit</a> as
              a guide.
            </p>
            <p>
              <img
                src="assets/img/7_1_Report.png"
                alt="Screen shot of an Accessibility Checker Report"
                width="100%"
                height="100%"
              />
            </p>
            <h3 id="t_excel_report">7.2 MS Excel Spreadsheet report</h3>
            <p>
              This is a 5 sheet spreadsheet report. It can describe a single scan, or multiple scans.
            </p>
            <ol
              style={{
                listStyleType: "decimal",
                marginInlineStart: "2rem",
                marginTop: " 0.75rem",
              }}
            >
              <li>
                <p style={{ marginTop: "0rem" }}>
                  <strong>Overview</strong> includes the name of the tool with its version, the scan date, 
                  ruleset, guidelines and platform used for the scan, and a summary of the overall results across all included scans.  
                </p>            
              </li>
              <li>
                <p style={{ marginTop: "0rem" }}>
                  <strong>Scan summary</strong> provides an overview of the set of scans within the report.
                </p>            
              </li>
              <li>
                <p style={{ marginTop: "0rem" }}>
                  <strong>Issue Summary</strong> provides an overview of the issues found across all the scans.  
                  Issues are summarized in a prioritized order, starting with Level 1 items, 
                  as defined in the IBM Equal Access Toolkit, followed by Level 2 and Levels 3 
                  and 4.  Levels 1-3 are necessary to complete the IBM requirements. Within each 
                  level, the summary lists issues that are Violations, items that Need Review, 
                  and Recommendations. Counts are provided for each type of issue.
                </p>            
              </li>
              <li>
                <p style={{ marginTop: "0rem" }}>
                  <strong>Issues</strong> has the details of the individual issues. This includes the scan label 
                  assigned to the scan, an ID for each issue, relevant accessibility requirements, 
                  and toolkit levels.
                </p>            
              </li>
              <li>
                <p style={{ marginTop: "0rem" }}>
                  <strong>Definition of fields</strong> defines the columns in the other sheets.
                </p>            
              </li>
            </ol>
            <p>
            In a multi-scan report where the same page is scanned several times, 
            issues may be repeated across scans of the same page.  These duplicate 
            issues can be identified by having the same Issue ID.  Where a site template 
            or reused component has issues, these will also be repeated in the report, 
            but may have different Issue IDs.
            </p>            
            <h2 id="feedback">8. Feedback</h2>
              <div className="pa">
                Visit the{" "}
                  <a href="https://github.com/IBMa/equal-access/issues">
                  Equal Access git repository</a> to:
                <ol
                style={{ listStyleType: "circle", marginInlineStart: "2rem" }}
                >
                  <li>
                    <p style={{ marginTop: "0rem" }}>
                      Report a problem with the checker tool.
                    </p>            
                  </li>
                  <li>
                    <p style={{ marginTop: "0rem" }}>
                      Report a problem with the checker rules or accuracy of the errors reported by the checker.
                    </p>            
                  </li>
                  <li>
                    <p style={{ marginTop: "0rem" }}>
                      Find information on any existing issues.
                    </p>            
                  </li>
                </ol>
              </div>
          </div>
          <div className="bx--col-md-0 bx--col-lg-3 buffer"></div>
        </div>
      </div>
    );
  }
}

export default UsingACApp;
