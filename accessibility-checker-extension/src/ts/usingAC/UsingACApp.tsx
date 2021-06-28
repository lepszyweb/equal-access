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
                IBM <strong>Dostępność</strong>
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
                      <a href="#focus_view" title="Widok skoncentrowany">
                        6.2 Widok skoncentrowany
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
			  IBM Equal Access Accessibility Checker jest rozszerzeniem przeglądarek, które pozwala sprawdzać, &nbsp;oceniać i&nbsp;poprawiać dostępność cyfrową rozwiązań dla Internetu w oparciu o&nbsp;Wytyczne W3C Web Content Accessibilty Guidelines (WCAG) oraz wytyczne IBM z wyjaśnieniami i&nbsp;propozycjami odpowiednich poprawek.
			  
            </p>
            <p>
              Rozszerzenie prezentuje dwa widoki. Widok panelu{" "}
              <strong>Ocena dostępności</strong> jest kompleksowym narzędziem, które pomaga wykryć problemy z&nbsp;dostępnością i zrozumieć, jak je naprawić. Natomiast karta {" "}
              <strong>Tester dostępności</strong> w panelu Elementy w Chrome lub panelu Inspektor w&nbsp;Firefoksie jest skanerem kodu dla programistów, którzy chcą szybko znaleźć i naprawić problemy w&nbsp;kodzie i na stronie.
			</p>
			<p>
			  IBM Equal Access Accessibility Checker jest częścią otwartego pakietu narzędzi automatyzujących pracę nad dostępnością. Dla zespołów poszukujących rozwiązań zintegrowanego testowania dostępności, IBM oferuje{" "}
              <a href="https://github.com/IBMa/equal-access/blob/master/README.md">
                wtyczki i moduły dla NodeJS i&nbsp;Karma</a>{" "},
              które wykonują międzyplatformowe testy dostępności w procesie budowania i rozwoju. Narzędzia te wykorzystują ten sam silnik testowy, co Accessibility Checker.
            </p>
            <h2 id="prereq">1. Wymagania wstępne</h2>
            <div className="pa">
              Obsługiwane przeglądarki:
              <ul
                style={{ listStyleType: "circle", marginInlineStart: "1rem" }}
              >
                <li>Google Chrome w wersji 81.x lub nowszej</li>
                <li>Mozilla Firefox wersji 8.x lub nowszej</li>
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
			  testy te nie wychwytują wszystkich problemów. Dopełnij swoją ocenę dostępności  
			  <a className="link" href="https://ibm.com/able/toolkit/develop/considerations/unit-testing" target="_blank">szybkim testem jednostkowym</a> lub przejdź do <a className="link" href="https://ibm.com/able/toolkit/verify" target="_blank">pełnego procesu testowania dostępności</a>.
			  
           </p>

            <h2 id="view">4. Sposoby przeglądania problemów</h2>
            <p>
              Istnieją trzy sposoby przeglądania i badania problemów wykrytych przez narzędzie. Wszystkie widoki pokazują ten sam zestaw problemów:
            </p>
            <ul style={{ marginInlineStart: "2rem" }}>
              <li>
                <p>
                  <strong>Wymagania</strong> - problemy są uporządkowane według wymagań IBM, co odpowiada standardom WCAG 2.1. Każdy problem jest zmapowany do konkretnego wymagania WCAG 2.1. Ten  widok sprawia, że łatwo jest zobaczyć, jak klasyfikować i raportować problemy wykryte przez narzędzie.
                </p>
              </li>
              <li>
                <p>
                  <strong>Role elementów</strong> - problemy są zorganizowane w hierarchicznej strukturze określonej przez role WAI-ARIA dla elementów DOM. Widok ten pokazuje zarówno role ukryte, jak i role jawne. Nie pokazuje on nazw elementów. Ten widok jest idealny do eksploracji problemów w obrębie konkretnego elementu i&nbsp;jego dzieci.
                </p>
              </li>
              <li>
                <p>
                  <strong>Reguły</strong> - problemy są uporządkowane według reguł w zestawie wymagań. Są podzielone na naruszenia, kwestie wymagające przeglądu i zalecenia. Ten widok jest najlepszym sposobem na równoczesny przegląd wszystkich problemów różnego typu.
                </p>
              </li>
            </ul>

            <h2 id="t_select_settings">5. Opcje</h2>
            <p>
              Użyj strony opcji, aby zmienić domyślny zestaw reguł dla obsługiwanego standardu lub datę wdrożenia zestawu reguł.
            </p>
            <p>Domyślnie, IBM Equal Access Accessibility Checker używa najnowszego wdrożenia zestawu reguł, które odpowiadają najnowszym standardom WCAG oraz kilku dodatkowym wymaganiom uzupełniającym IBM. W&nbsp;razie potrzeby do wyboru są również dostępne zestawy reguł z regułami, które odpowiadają konkretnym wersjom WCAG. Te zestawy reguł są regularnie aktualizowane, a każda aktualizacja ma datę wdrożenia. W przypadku konieczności powtórzenia wcześniejszego testu należy wybrać datę wdrożenia oryginalnego testu.

            </p>
            <p>
              Po zmianie opcji zamknij i otwórz ponownie narzędzia programistyczne, aby zmiany zaczęły obowiązywać.
            </p>
            <p>
              Wykonaj poniższe kroki, aby otworzyć stronę z opcjami programu Tester dostępności:
            </p>
            <ol style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}>
              <li>
                <p>
                  W pasku narzędzi przeglądarki, wybierz ikonę IBM Equal Access Accessibility Checker, widoczną jako fioletowa pszczoła{" "}
                  <img
                    src={beeLogoUrl}
                    width="16px"
                    height="16px"
                    alt="ikona aplikacji Tester dostępności"
                  />
                  . Zazwyczaj znajduje się on w&nbsp;prawym górnym rogu okna okna przeglądarki. Pojawi się nakładka.
                </p>
              </li>
              <li>
                <p>
                  Wybierz w nakładce <strong>„Opcje”</strong>. Opcje zostaną otwarte na nowej karcie przeglądarki. <strong>Uwaga:</strong> W przeglądarce Firefox, gdy w opcjach Wzmocniona ochrony przed śledzeniem wybrano ustawienie <strong>Ścisła</strong>, zdarza się, że niektóre witryny lub treści mogą zostać uszkodzone i może to uniemożliwić otwarcie strony Opcje. Zmień ustawienia prywatności przeglądarki na Standard, aby uniknąć tej sytuacji.

                </p>
              </li>
            </ol>
            <p>
              <img
                src="assets/img/5_Options.png"
                alt="Zrzut ekranu strony opcji - strona, na której można wybrać wdrożenie zestawu reguł oraz zestaw reguł, z jakiego ma korzystać kontroler."
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
                  <strong>Wdrożenie &lt;data&gt; </strong> - użyj zestawu reguł z określonej daty w celu spójnego testowania w całym projekcie albo żeby powtórzyć wcześniejsze testy.
                </p>
              </li>
              <li>
                <p>
                  <strong>Podglądowe reguły</strong> - wypróbuj eksperymentalny zestaw przyszłych reguł.
                </p>
              </li>
            </ul>
            <p>
              Wybierz przycisk <strong>„Zapisz”</strong>, aby zachować zmiany, lub przycisk <strong>„Przywróć domyślne”</strong>, aby odrzucić zmiany. Zamknij i otwórz ponownie narzędzia programistyczne, aby zmiany zaczęły obowiązywać.
            </p>

            <h3 id="ruleset">5.2 Wybierz wytyczne dla dostępności</h3>
            <p>
               Z listy rozwijanej <strong>„Wybierz wytyczne dla dostępności”</strong> wybierz jedną z opcji :
            </p>
            <ul style={{ marginInlineStart: "2rem" }}>
              <li>
                <p>
                   <strong>IBM Accessibility</strong> - Reguły obejmujące Wytyczne dla dostępności WCAG 2.1 zgodnie z poziomami A i AA oraz dodatkowe wymagania IBM. Jest to opcja domyślna.
                </p>
              </li>

              <li>
                <p>
                  <strong>WCAG 2.1 (A,AA)</strong> - Aktualne zalecenie W3C. Treści zgodne z WCAG 2.1 są również zgodne z 2.0. Zasady te są zgodne z europejską normą EN 301 549.
                </p>
              </li>

              <li>
                <p>
                  <strong>WCAG 2.0 (A,AA)</strong> - Te reguły te są zgodne z obwiązującymi w USA poprawionymi normami Sekcja 508, ale nie z najnowszą rekomendacją W3C.
                </p>
              </li>

              <li>
                <p>
                  <strong>IBM Accessibility BETA</strong> - Reguły dla WCAG 2.1 AA i dodatkowe wymagania IBM oraz reguły eksperymentalne.
                </p>
              </li>

            </ul>
            <p>
			  Po wprowadzeniu zmiany należy wybrać przycisk <strong>„Zapisz”</strong>, a następnie zamknąć i&nbsp;ponownie otworzyć narzędzia programistyczne, aby zmiana zaczęła obowiązywać.
            </p>

            <h2 id="usage">6. Stosowanie</h2>
            <p>
			  IBM Equal Access Accessibility Checker oferuje dwa widoki. Widok Tester dostępności (Accessibility Checker) jest skanerem kodu dla programistów, którzy chcą szybko znaleźć i&nbsp;naprawić błędy podczas budowania komponentu. Natomiast widok Ocena dostępności (Accessibility Assessment) zapewnia wyjaśnienie i&nbsp;sugerowane rozwiązania dla każdego wykrytego problemu.
              {" "}
              </p>
              <p>
			  <strong>Uwaga</strong>: W rzadkich przypadkach rozszerzenie Accessibility Checker nie pojawia się w&nbsp;narzędziach programistycznych na niektórych stronach z powodu błędu w tych narzędziach. Obejściem jest przejście do witryny, o&nbsp;której wiesz, że sprawdzanie zostanie na niej uruchomione, i&nbsp;uruchomienie sprawdzania. Następnie załaduj na tej samej karcie przeglądarki stronę, która nie została uruchomiona.
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
                  <p style={{ marginTop: "0rem" }}>Otwórz panel narzędzi programisty:</p>
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        W Chrome: z menu przeglądarki wybierz „Więcej narzędzi”, a następnie „Narzędzia dla deweloperów” albo{" "}
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        W Firefox: w menu przeglądarki „Narzędzia” wybierz „Narzędzia przeglądarki” , a następnie wybierz „Narzędzia dla twórców witryn”, lub
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Naciśnij <strong>Command+Option+I</strong> w systemie  MacOS® albo{" "}
                        <strong>Control+Shift+I</strong> w&nbsp;systemie Microsoft Windows®,
                        lub
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Kliknij prawym przyciskiem myszy element strony i&nbsp;wybierz z menu kontekstowego „Zbadaj”.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Otwórz panel „Elementy” (Chrome) lub „Inspektor” (Firefox).
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz <strong>„Tester dostępności”</strong> z&nbsp;kart w&nbsp;prawym okienku:{" "}
                  </p>
                  <p>
                    <img
                      src="assets/img/Chrome_Checker.png"
                      alt="Zrzut ekranu Accessibility Checker - skaner kodu dla programistów"
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Kliknij przycisk <strong>„Skanuj”</strong>, aby zeskanować stronę internetową.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wynik skanowania wyświetla łączną liczbę wykrytych problemów oraz liczbę naruszeń, kwestii wymagających przeglądu i zaleceń. Domyślnie lista problemów jest wyświetlana w&nbsp;widoku „Role elementów” (patrz poprzednia definicja), dostępne są również karty „Wymagania” i&nbsp;„Reguły”. Wszystkie widoki pokazują ten sam zestaw problemów.
                  </p>
                  <p>
                    <img
                      src="assets/img/6_1_AccessibilityChecker5.png"
                      alt="Wyniki oceniania dostępności"
                      width="100%"
                      height="100%"
                    />
                  </p>
               </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Aby <strong>filtrować</strong> problemy i skupić się tylko na naruszeniach, elementach, które wymagają sprawdzenia lub zaleceniach, usuń zaznaczenie pola wyboru obok typu problemu w obszarze liczby problemów poniżej przycisku{" "}
                    <strong>„Skanuj”</strong>, aby wykluczyć typ problemu z wyników. Zaznacz pole wyboru obok typu problemów, aby uwzględnić typ problemu w wynikach. Na tym zrzucie ekranu elementy „Do przeglądu” zostały odfiltrowane. 
                  </p>
                  <p>
                    <img
                      src="assets/img/6_1_AccessibilityChecker6.png"
                      alt="Wyniki sprawdzania dostępności z odfiltrowanymi problemami Do przeglądu."
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz ikonę rozwijania (^) obok roli elementu, wymagania lub reguły w tabeli, aby wyświetlić odpowiednie znalezione problemy.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz link „Dowiedz się więcej” w definicji problemu, aby wyświetlić bardziej szczegółowe informacje pomocy opisujące problem i&nbsp;sposoby jego rozwiązania. Pomoc zawiera łącza do bardziej szczegółowych wyjaśnień i&nbsp;podsumowuje, dlaczego ten problem jest ważny i&nbsp;kogo dotyczy.
                  </p>
                </li>
                <li>
                  Karta Role elementu:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Wybierz instancję problemu lub element w obiektowym modelu dokumentu (DOM) lub użyj polecenia „Zbadaj” na stronie internetowej, aby:
                      </p>
                      <ul
                        style={{
                          listStyleType: "disc",
                          marginInlineStart: "2rem",
                        }}
                      >
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            Podświetl wybrany element lub element zawierający wybrane zagadnienie w DOM pod panelem Elementy przeglądarki i zaznacz jego lokalizację na stronie internetowej.
                          </p>
                        </li>
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            Zobacz liczniki podsumowujące pokazujące liczbę problemów każdego typu w wybranym elemencie i jego dzieciach.
                          </p>
                        </li>
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            Otwórz i zaznacz wszystkie problemy w elemencie, jeśli występują (fioletowe podświetlenie)
                          </p>
                        </li>
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            Otwórz i zaznacz wszystkie problemy w elementach potomnych elementu, jeśli występują (jasnofioletowe podświetlenie).
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Karta Wymagania:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Wybierz kartę <strong>„Wymagania”</strong>, aby wyświetlić wyniki skanowania{" "}
                        <a href="https://www.ibm.com/able/requirements/requirements/">
                          według wymagań dostępności IBM</a>.{" "}
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Wybierz element lub wystąpienie problemu, aby wyróżnić ten sam zestaw problemów i&nbsp;problemów podrzędnych, co na karcie „Role elementów”. W&nbsp;tym widoku problemy zostaną pokazane w&nbsp;ramach odpowiednich wymagań.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  Karta Reguły:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        {" "}
                        Wybierz kartę <strong>„Reguły”</strong>, aby wyświetlić wyniki skanowania według reguł sprawdzania dostępności.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Wybierz element lub wystąpienie problemu, aby wyróżnić ten sam zestaw problemów i&nbsp;problemów podrzędnych, co na karcie „Role elementów”. Z&nbsp;tego punktu widzenia problemy zostaną pokazane w ramach odpowiednich zasad.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Przełączaj się między kartami, aby zobaczyć ten sam zestaw wyróżnionych problemów w&nbsp;różnych widokach.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Użyj przycisku menu <strong>„Raporty”</strong>, aby pobrać raporty oraz przechowywać i&nbsp;zarządzać skanami w celu połączenia ich w raporty. Aby uzyskać szczegółowe informacje, zobacz sekcje {" "}
                    <a href="#t_single_scan_report" title="Utwórz raport skanowania">6.4 Tworzenie raportu ze skanowania</a>,{" "} 
                    <a href="#t_multi_scan_report" title="Utwórz raport z wielu skanowań">6.5 Tworzenie raportu z wielu skanów</a>{" "}
                    oraz <a href="#the_report" title="Raporty sprawdzania dostępności">7 Raporty sprawdzania dostępności</a>.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Opcjonalnie możesz zaktualizować kod w panelu Elementy przeglądarki i ponownie uruchomić <strong>„Skanuj”</strong>, aby potwierdzić, że zmiany w kodzie rozwiązują problem.
                  </p>
                </li>
              </ol>
            </div>

            <h3 id="focus_view">6.2 Widok skoncentrowany</h3>
            <p>
            Przełącznik <strong>Widok skoncentrowany</strong> umożliwia przełączanie między wyświetlaniem wszystkich problemów na stronie lub tylko problemów z wybranym elementem lub komponentem w DOM. Aby skupić się na dowolnym pojedynczym elemencie lub komponencie:

			
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
                    Kliknij prawym przyciskiem myszy na elemencie strony i&nbsp;wybierz z&nbsp;menu kontekstowego „Zbadaj”.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz nazwę elementu w przełączniku <strong>„Widok skoncentrowany”</strong>, aby wyświetlić tylko problemy dotyczące tego elementu i&nbsp;jego dzieci.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz opcję <strong>„Wszystko”</strong> w przełączniku <strong>„Widok skoncentrowany”</strong>, aby wyświetlić wszystkie problemy na stronie.
                  </p>
                </li>
              
              <p>Domyślnie, po pierwszym skanowaniu strony, wyświetlane są wszystkie zagadnienia, a&nbsp;element &lt;html&gt; jest zaznaczony, jak pokazano na tym zrzucie ekranu:
              </p>
  

              <p>
                    <img
                      src="assets/img/6_2_FocusView1.png"
                      alt="Zrzut ekranu narzędzia Accessibility Checker - widok główny z wszystkimi problemami"
                      width="100%"
                      height="100%"
                    />
              </p>
              <p>Na tym zrzucie ekranu wybrano element wyszukiwania &lt;input&gt; w DOM, a przełącznik {" "} 
              <strong>„Widok skoncentrowany”</strong> został ustawiony tak, aby wyświetlał wszystkie problemy na całej stronie:
              <br/>
              </p>
              <p>
                    <img
                      src="assets/img/6_2_FocusView2.png"
                      alt="Zrzut ekranu narzędzia sprawdzania dostępności. Opcje przełączania widoku ostrości to 'input' i 'Wszystko' (wybrane) i&nbsp;wszystkie problemy na stronie są pokazane"
                      width="100%"
                      height="100%"
                    />
              </p>
              <p>Na tym zrzucie ekranu wybrano pole wyszukiwania &lt;input&gt; w DOM, a przełącznik{" "}
              <strong>„skoncentrowany”</strong>  został ustawiony tak, aby wyświetlał tylko problemy dla tego elementu wyszukiwania &lt;input&gt;:
              </p>
              <p>
                    <img
                      src="assets/img/6_2_FocusView3.png"
                      alt="Zrzut ekranu narzędzia sprawdzania dostępności. Opcje przełączania widoku ostrości to 'input' (zaznaczone) i 'Wszystko', pokazane są tylko dwa problemy w obrębie elementu wejściowego wyszukiwania"
                      width="100%"
                      height="100%"
                    />
              </p>

              </ol>
            </div>

            <h3 id="a11y_assess">6.3 Ocena dostępności</h3>
            <div className="pa">
              <ol
                style={{
                  listStyleType: "decimal",
                  marginInlineStart: "2rem",
                  marginTop: " 0.75rem",
                }}
              >
                <li>
                 Otwórz Narzędzia dla programistów:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        W przeglądarce Chrome: z menu przeglądarki wybierz „Więcej narzędzi”, a&nbsp;następnie „Narzędzia dla deweloperów” lub{" "}
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        W przeglądarce Firefox: z menu „Narzędzia” przeglądarki wybierz „Narzędzia przeglądarki”, a następnie wybierz „Narzędzia dla twórców witryn” lub
                      </p>
                    </li>
				
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Naciśnij <strong>Command+Option+I</strong> w systemie MacOS® lub{" "}
                        <strong>Control+Shift+I</strong> w&nbsp;systemie Microsoft Windows®,
                         lub
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Kliknij prawym przyciskiem myszy element strony i&nbsp;wybierz z&nbsp;menu kontekstowego „Zbadaj”
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz panel  <strong>„Ocena dostępności”</strong>{" "}
                    panel:{" "}
                  </p>
                  <p>
                    <img
                      src="assets/img/6_3_AccessibilityAssessment2.png"
                      alt="Zrzut ekranu oceny dostępności - Kompleksowe narzędzie do oceny dostępności"
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Kliknij przycisk <strong>„Skanuj”</strong>, aby zeskanować stronę internetową.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Domyślnie wyniki są wyświetlane według {" "}
                    <strong>„Wymagań”</strong> with z podziałem całkowitej liczby wykrytych problemów według kategorii.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Prawy panel wyświetla podsumowanie raportu Kontrolera dostępności, a lewy panel pokazuje wynik skanowania z łączną liczbą wykrytych problemów, z liczbami naruszeń, kwestii, które wymagają sprawdzenia oraz zaleceniami:{" "}
                  </p>
                  <p>
                    <img
                      src="assets/img/6_3_AccessibilityAssessment5.png"
                      alt="Zrzut ekranu raportu Oceny dostępności - przykładowy raport Oceny dostępności"
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
			
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Domyślnie problemy są wyświetlane w widoku „Wymagania”, ale dostępne są również karty „Role elementów” i&nbsp;„Reguły”. Wszystkie widoki pokazują ten sam zestaw problemów.
                  </p>
                </li>
                <li>
                  Karta Wymagania:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Wybierz ikonę rozwijania obok wymagania w tabeli, aby wyświetlić listę problemów znalezionych w ramach tego wymagania.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Wybierz wystąpienie problemu, a podsumowanie raportu zostanie zastąpione szczegółowym opisem, który zawiera poziom błędu, dlaczego treść nie działa dostępnie, jakie są wymagania, jakich zasobów użyć, co zrobić, aby naprawić problem, kogo dotyczy i&nbsp; dlaczego jest to ważne:{" "}
                      </p>
                      <p>
                        <img
                          src="assets/img/6_3_AccessibilityAssessment7.png"
                          alt="Zrzut ekranu panelu pomocy Oceny dostępności - przykładowy panel pomocy Oceny dostępności "
                          width="100%"
                          height="100%"
                        />
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  Karta Rola elementu:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Wybierz kartę <strong>„Role elementów”</strong>, aby wyświetlić wyniki skanowania uporządkowane według ról elementów na stronie internetowej.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Rozwiń rolę elementu, aby wyświetlić problemy dla tej roli elementu.
                      </p>
                    </li>
                    <li>
                      Wybierz problem, aby:
                      <ul
                        style={{
                          listStyleType: "disc",
                          marginInlineStart: "2rem",
                        }}
                      >
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            Podświetlić problem.
                          </p>
                        </li>
                        <li>
                          <p style={{ marginTop: "0rem" }}>
                            Wyświetlić szczegółowy opis tego problemu w okienku podsumowania (po lewej stronie).
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Karta Reguły:
                  <ul
                    style={{
                      listStyleType: "circle",
                      marginInlineStart: "2rem",
                    }}
                  >
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Wybierz kartę <strong>„Reguły”</strong>, aby wyświetlić wyniki skanowania według reguły sprawdzania dostępności.
                      </p>
                      <li>
                        {" "}
                        <p style={{ marginTop: "0rem" }}>
                          Rozwiń regułę, aby wyświetlić problemy dla tej reguły.
                        </p>
                      </li>
                      <li>
                        Wybierz problem, aby:
                        <ul
                          style={{
                            listStyleType: "disc",
                            marginInlineStart: "2rem",
                          }}
                        >
                          <li>
                            <p style={{ marginTop: "0rem" }}>
                              Poświetlić problem.
                            </p>
                          </li>
                          <li>
                            <p style={{ marginTop: "0rem" }}>
                              Wyświetlić szczegółowy opis tego problemu w okienku podsumowania (po lewej stronie).
                            </p>
                          </li>
                        </ul>
                      </li>
                    </li>
                  </ul>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Opcjonalnie możesz wybrać panel Element przeglądarki, aby wyświetlić wyniki sprawdzania dostępności wraz z&nbsp;poprawkami kodu i&nbsp;testów.
                  </p>
                </li>
              </ol>
            </div>

            <h3 id="t_single_scan_report">6.4 Tworzenie raportu ze skanowania</h3>
            <div className="pa">
            Aby wygenerować raport dla pojedynczego skanu w widoku <strong>Tester dostępności</strong>:
            <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Postępuj zgodnie z instrukcjami w <a href="#a11y_check" title="Tester dostępności">
                        6.1 Tester dostępności</a>, aby zeskanować stronę internetową.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                   Otwórz menu rozwijane <strong>„Raporty”</strong>, które znajduje się za przyciskiem skanowania.
                  </p>
                  <p>
              <img
                src="assets/img/6_4_CreatingSingleScanReport2.png"
                alt="Zrzut ekranu menu 'Raporty'."
                width="100%"
                height="100%"
              />
            </p>

                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz <strong>„Pobierz aktualny skan”</strong>.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Raport z ostatniego skanowania zostanie pobrany w formacie arkusza kalkulacyjnego HTML i MS Excel.
                </p>
                </li>
                </ol>
                <p>Aby wygenerować raport dla pojedynczego skanowania w widoku <strong>Ocena dostępności</strong>:
                </p>
                <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Postępuj zgodnie z instrukcjami w  <a href="#a11y_assess" title="Ocena dostępności">6.3 Ocena dostępności</a>, aby zeskanować stronę internetową.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz przycisk <strong>„Raporty”</strong>.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Raport z ostatniego skanowania zostanie pobrany w formacie arkusza kalkulacyjnego HTML i&nbsp;MS Excel.
                  </p>
                </li>
              </ol>
            </div>

            <h3 id="t_multi_scan_report">6.5 Tworzenie raportu z wielu skanów</h3>
            <p>
              Wykonaj poniższe czynności, aby połączyć kilka skanów w jeden raport. Można połączyć do 50 skanów. Raporty zawierające więcej niż 50 skanów mogą nie otwierać się poprawnie w&nbsp;MS Excel ze względu na ograniczenia bibliotek używanych do pisania raportów.
              </p>
             <div className="pa">
             <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Otwórz widok <strong>Tester dostępności</strong> (opisany w <a href="#a11y_check" title="Tester dostępności">
                        6.1 Tester dostępności</a>).
                 </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Otwórz menu rozwijane <strong>„Raporty”</strong>.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz pozycję menu <strong>„Rozpocznij przechowywanie skanów”</strong>.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wskaźnik stanu poniżej przycisku skanowania pokaże, że teraz przechowujesz skany w&nbsp;celu utworzenia raportu i&nbsp;że żadne skany nie są przechowywane.
                  </p>
                  <p>
                    <img
                      src="assets/img/6_5_CreatingMulti-scanReport4.png"
                      alt="Status: przechowywanie, brak zapisanych skanów"
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Zeskanuj strony, które chcesz uwzględnić w raporcie. Może to obejmować skany tej samej strony w różnych stanach. Wskaźnik stanu zaktualizuje się, pokazując, ile skanów jest przechowywanych.
                  </p>
                  <p>
                    <img
                      src="assets/img/6_5_CreatingMulti-scanReport5.png"
                      alt="Status: zapisywanie, 1 skan zapisany"
                      width="100%"
                      height="100%"
                    />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Podczas zapisywania skanów możesz przestać zapisywać skany, wybierając opcję <strong>„Zatrzymaj przechowywanie skanów”</strong>{" "} w&nbsp;menu rozwijanym <strong>„Raporty”</strong>, a&nbsp;zapisane skany nie zostaną utracone. W&nbsp;dowolnym momencie możesz ponownie zapisywać skany.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Aby usunąć wszystkie zapisane skany, otwórz menu rozwijane <strong>„Raporty”</strong> i&nbsp;wybierz opcję  <strong>„Wyczyść przechowywane skany”</strong>.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Po zapisaniu skanów do raportu otwórz menu rozwijane <strong>„Raporty”</strong>i&nbsp;wybierz opcję {" "} 
                    <strong>„Pokaż przechowywane skany”</strong>. Spowoduje to otwarcie widoku menedżera skanowania, zawierającego tabelę zawierającą wszystkie zapisane skany. 
                  </p>
                  <p>
                        <img
                          src="assets/img/6_5_CreatingMulti-scanReport8.png"
                          alt="Zrzut ekranu panelu Accessibility Checker Stored Scans - tabela zawierająca listę zapisanych skanów "
                          width="100%"
                          height="100%"
                        />
                  </p>
                </li>
              </ol>
              <p>Tworzenie raportu w widoku menedżera skanowania:
              </p><ol 
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Przejrzyj wymienione skany i wybierz te, które chcesz umieścić w&nbsp;raporcie. Zaznacz lub usuń zaznaczenie wszystkich zapisanych skanów za pomocą pola wyboru w&nbsp;pierwszej kolumnie wiersza nagłówka tabeli.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Użyj linku <strong>„Wyświetl”</strong> w kolumnie „Szczegóły” po prawej stronie tabeli, aby zobaczyć zrzut ekranu każdego skanu.
                  </p>
                  <p>
                        <img
                          src="assets/img/6_5_CreatingMulti-scanReport10.png"
                          alt="Wyskakujące okno dialogowe zawierające zrzut ekranu i&nbsp;szczegóły dotyczące skanowania "
                          width="100%"
                          height="100%"
                        />
                      </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Usuń zaznaczenie dowolnego skanowania, którego nie chcesz umieścić w&nbsp;raporcie, odznaczając jego pole wyboru w tabeli. 
                  </p>
                  <p>
                        <img
                          src="assets/img/6_5_CreatingMulti-scanReport11.png"
                          alt="Zrzut ekranu panelu Accessibility Checker Stored Scans - jeden skan jest niezaznaczony "
                          width="100%"
                          height="100%"
                        />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    [Opcjonalnie] Aby ułatwić rozróżnienie skanów w raporcie końcowym, wpisz odpowiednie etykiety skanowania w kolumnie „Etykieta skanowania” w&nbsp;tabeli. Etykiety te pojawią się w&nbsp;raporcie końcowym.
                  </p>
                  <p>
                        <img
                          src="assets/img/6_5_CreatingMulti-scanReport12.png"
                          alt="Zrzut ekranu panelu Accessibility Checker Stored Scans - trzy skany są oznaczone jako 'oryginalny skan', 'z formularzem' i 'z linkiem'. "
                          width="100%"
                          height="100%"
                        />
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Pobierz arkusz z raportem z wielu skanów, wybierając przycisk  <strong>„Pobierz”</strong> u&nbsp;góry tabeli. Arkusz kalkulacyjny zostanie pobrany automatycznie.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Usuń wybrane zapisane skany za pomocą przycisku  <strong>„Usuń”</strong> Pozwala to zachować pamięć do przechowywania nowych skanów.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wróć do głównego widoku sprawdzania, wybierając <strong>„Powrót do widoku listy”</strong>.
                  </p>
                </li>
              </ol>
            </div>

            <h3 id="t_select_hidden_settings">6.6 Skanowanie ukrytych treści</h3>
            <p>
              Domyślnie narzędzie pomija ukrytą zawartość (strony internetowe, które używają elementów{" "}
              <var>visibility:hidden</var> lub <var>display:none</var>, jeśli ta zawartość jest wyświetlana użytkownikowi w&nbsp;dowolnym momencie, należy przetestować zawartość sieci Web, w pełni wykorzystując interfejs użytkownika zgodnie z scenariusze użycia w&nbsp;planie testów. Upewnij się, że testy uruchamiają wyświetlanie ukrytej zawartości, aby narzędzie sprawdzania ułatwień dostępu mogło sprawdzić poprawność wyświetlanej zawartości.
            </p>
            <h3 id="scan_local_files">6.7 Skanuj pliki lokalne</h3>
            <p>
              Narzędzie sprawdzania ułatwień dostępu domyślnie skanuje lokalne pliki .html lub .htm uruchamiane w przeglądarce Firefox. Wykonaj poniższe czynności, aby zezwolić na skanowanie lokalnych plików .html lub .htm w&nbsp;przeglądarce Chrome:
              </p>
            <div className="pa">
              <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Otwórz przeglądarkę Chrome.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Otwórz menu <strong>„Okno”</strong>.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz opcję menu <strong>„Rozszerzenia”</strong>, aby zobaczyć wszystkie zainstalowane rozszerzenia.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Wybierz przycisk <strong>„Szczegóły”</strong> rozszerzenia IBM Equal Accessibility Checker.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Przewiń w dół do <strong>„Zezwól na dostęp do adresów URL plików”</strong>{" "}
                     i&nbsp;włącz tę opcję.
                  </p>
                </li>
              </ol>
            </div>

            <h3 id="a11y_considerations">6.8 Rozważania dotyczące dostępności</h3>
            <p>
              Poniżej wyróżniono kilka funkcji dostępności umożliwiających dostosowanie i&nbsp;zapewniających łatwy dostęp do funkcji Checker, w&nbsp;tym za pomocą klawiatury lub czytnika ekranu:
            </p>
            <div className="pa">
              <ol
                style={{ listStyleType: "decimal", marginInlineStart: "2rem" }}
              >
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Narzędzie Tester dostępności reaguje na preferowany rozmiar i&nbsp;kolory czcionki użytkownika.
                  </p>
                </li>
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Zarówno widok Oceny dostępności, jak i widok Tester dostępności są w&nbsp;pełni dostępne za pomocą klawiatury, nawiguj w następujący sposób:
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
                        Użyj klawisza <strong>„Tab”</strong>, aby przejść do dowolnego elementu sprawdzania, który można ustawić, zaczynając od przycisku <strong>„Skanuj”</strong> po uruchomieniu sprawdzania.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Po uruchomieniu skanowania ponownie naciśnij klawisz <strong>„tab”</strong>, aby przejść do przycisku menu rozwijanego <strong>„Raporty”</strong>.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        W widoku Tester dostępności ponownie naciśnij klawisz <strong>„Tab”</strong>, aby przejść do przycisku przełączania „Widok skoncentrowany”. Użyj klawiszy strzałek, aby wybrać, czy lista spraw zawiera wszystkie sprawy (domyślnie), czy tylko sprawy dla aktualnie wybranego elementu i&nbsp;jego elementów podrzędnych. Ta funkcja nie jest dostępna w widoku Ocena dostępności. 
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Naciśnij klawisz <strong>„Tab”</strong>, aby przejść do pola wyboru według każdego typu problemu i naciśnij klawisz <strong>„enter”</strong>, aby przefiltrować listę problemów według <strong>naruszeń</strong>, <strong>Do przeglądu</strong> lub według <strong>Zaleceń</strong>.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Naciśnij klawisz <strong>„Tab”</strong>, aby przejść do kart z <strong>listą problemów</strong> i użyj klawiszy <strong>„strzałka w&nbsp;prawo”</strong> lub <strong>„strzałka w&nbsp;lewo”</strong>, aby przechodzić między widokami <strong>„Role elementów”</strong>, <strong>„Wymagania”</strong> i&nbsp;widokiem <strong>„Reguły”</strong>.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Naciśnij klawisz <strong>„Tab”</strong>, aby poruszać się po <strong>grupach problemów</strong> związanych z każdym wymaganiem, rolą elementu lub regułą. Użyj klawisza <strong>„enter”</strong>, aby otworzyć lub zamknąć grupowanie spraw. W ramach otwartej grupy naciśnij klawisz <strong>„Tab”</strong>, aby przejść do każdego problemu, i&nbsp;naciśnij klawisz <strong>„Enter”</strong>, aby wybrać bieżący problem.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Naciśnij klawisz <strong>„Tab”</strong>, aby przejść do linku <strong>„Więcej informacji”</strong> lub przejść do następnego problemu.
                      </p>
                    </li>
                  </ul>  
                <li>
                  <p style={{ marginTop: "0rem" }}>
                    Użyj <strong>hierarchii nagłówków</strong> lub zaimplementowanych <strong>punktów orientacyjnych</strong>, aby szybko przechodzić z&nbsp;jednej sekcji do drugiej. <br />Lista wdrożonych punktów orientacyjnych jest następująca:
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
                       Główny punkt orientacyjny w widokach <strong>Ocena dostępności</strong> lub <strong>Tester dostępności</strong> zawiera główną funkcjonalność narzędzia i&nbsp;obejmuje,
                      </p>
                      <ul
                          style={{
                            listStyleType: "disc",
                            marginInlineStart: "2rem",
                          }}
                        >
                          <li>
                            <p style={{ marginTop: "0rem" }}>
                              Obszar <strong>Liczba problemów</strong>: zawiera liczbę problemów według typu oraz łączną liczbę wykrytych problemów.
                            </p>
                          </li>
                          <li>
                            <p style={{ marginTop: "0rem" }}>
                              Obszar <strong>Lista problemów</strong>: zawiera listę problemów pogrupowanych według ról elementów, wymagań lub reguł.
                            </p>
                          </li>
                          <li>
                          <p style={{ marginTop: "0rem" }}>
                            W widoku Tester dostępności główny punkt orientacyjny zawiera również pomoc dotyczącą problemów oraz przegląd zapisanych skanów, jeśli użytkownik o&nbsp;nie poprosi.
                          </p>
                         </li>
                        </ul>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Obszar uzupełniający <strong>Podsumowanie skanowania</strong> w widoku Ocena dostępności zawiera podsumowanie skanowania po zakończeniu skanowania lub pokazuje pomoc dotycząca problemu, gdy zostanie wybrany.
                      </p>
                    </li>
                    <li>
                      <p style={{ marginTop: "0rem" }}>
                        Obszar uzupełniający <strong>Problem Pomoc</strong> w widoku Ocena dostępności zawiera pomoc dotyczącą problemu po wybraniu dowolnego problemu.
                      </p>
                    </li>
                  </ul>
              </ol>
            </div>

            <h2 id="the_report">7. Raporty sprawdzania dostępności</h2>
            <p>
            Narzędzie sprawdzania dostępności może tworzyć raporty dla pojedynczego skanowania lub dla wielu skanów połączonych (raporty z wielu skanów). Raporty pojedynczego skanowania są dostarczane zarówno w formacie arkuszy kalkulacyjnych HTML, jak i&nbsp;MS Excel. Raporty z&nbsp;wielu skanów są dostępne tylko w formacie arkusza kalkulacyjnego MS Excel. Rozdziały <a href="#t_single_scan_report"
                        title="Tworzenie raportu ze skanowania">
						
                 6.4 Tworzenie raportu ze skanowania
                  </a>{" "}
                  and <a href="#t_multi_scan_report"
                        title="Tworzenie raportu z wielu skanów">
                    6.5 Tworzenie raportu z wielu skanów
                  </a>{" "}
                  opisują sposób generowania raportów.
            </p>
            <h3 id="t_html_report">7.1 Raport HTML</h3>
            <p>
              Jest to interaktywny raport zapisany jako plik HTML do wykorzystania w przyszłości. Zawiera datę i godzinę skanowania raportu, adres URL oraz podsumowanie wyników testów, a następnie szczegóły problemu uporządkowane według wymagań, ról elementów i reguł. Każde wystąpienie problemu zawiera również łącze <strong>„Dowiedz się więcej”</strong>, które otwiera nakładkę zawierającą bardziej szczegółowy opis problemu.
            </p>
            <p>
              Bieżący stan dostępności treści internetowych jest wyświetlany jako procent elementów bez wykrytych naruszeń lub elementów do przejrzenia.{" "}
            </p>
            <p>
              <strong>Ważna uwaga:</strong> ten odsetek jest oparty wyłącznie na testach automatycznych. Pamiętaj, aby wykonać dodatkowe przeglądy i testy ręczne, aby ukończyć oceny dostępności. Użyj zestawu{" "}
              <a href="www.ibm.com/able/toolkit">IBM Equal Access Toolkit</a> jako przewodnika
            </p>
            <p>
              <img
                src="assets/img/7_1_Report.png"
                alt="Zrzut ekranu raportu z narzędzia sprawdzania dostępności"
                width="100%"
                height="100%"
              />
            </p>
            <h3 id="t_excel_report">7.2 Raport w arkuszu kalkulacyjnym MS Excel</h3>
            <p>
              Raport zkłada się z 5 arkuszy kalkulacyjnych. Może opisywać pojedynczy skan lub wiele skanów.
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
                  <strong>Przegląd</strong> zawiera nazwę narzędzia i jego wersję, datę skanowania, zestaw reguł, wytyczne i platformę używaną do skanowania oraz podsumowanie ogólnych wyników wszystkich uwzględnionych skanów.  
                </p>            
              </li>
              <li>
                <p style={{ marginTop: "0rem" }}>
                  <strong>Zestawienie skanowań</strong> zawiera przegląd zestawu skanów w raporcie.
                </p>            
              </li>
              <li>
                <p style={{ marginTop: "0rem" }}>
                  <strong>Zestawienie problemów</strong> zawiera przegląd problemów znalezionych we wszystkich skanach. Zagadnienia są podsumowywane według priorytetów, zaczynając od pozycji Poziomu 1, zgodnie z&nbsp;definicją w IBM Equal Access Toolkit, a następnie Poziomu 2 oraz Poziomów 3 i 4. Poziomy 1-3 są niezbędne do spełnienia wymagań IBM. Na każdym poziomie podsumowanie zawiera listę problemów, które stanowią naruszenia, kwestie wymagające przeglądu oraz zalecenia. Liczby są podane dla każdego rodzaju problemu.
                </p>            
              </li>
              <li>
                <p style={{ marginTop: "0rem" }}>
                  <strong>Problemy</strong> zawiera szczegóły poszczególnych spraw. Obejmuje to etykietę skanu, identyfikator każdego problemu, odpowiednie wymagania dla dostępności i poziomy zestawu narzędzi.
                </p>            
              </li>
              <li>
                <p style={{ marginTop: "0rem" }}>
                  <strong>Definicja pól</strong> definiuje kolumny w pozostałych arkuszach.
                </p>            
              </li>
            </ol>
            <p>
            W raporcie z wielu skanów, w którym ta sama strona jest skanowana kilka razy, problemy mogą się powtarzać w różnych skanach tej samej strony. Te zduplikowane problemy można zidentyfikować, mając ten sam identyfikator problemu. W przypadku wystąpienia problemów z&nbsp;szablonem witryny lub ponownie użytym komponentem, zostaną one również powtórzone w&nbsp;raporcie, ale mogą mieć różne identyfikatory problemów.
            </p>            
            <h2 id="feedback">8. Informacje zwrotne</h2>
              <div className="pa">
                Odwiedź {" "}
                  <a href="https://github.com/IBMa/equal-access/issues">
                  repozytorium git Equal Access</a>, aby:
                <ol
                style={{ listStyleType: "circle", marginInlineStart: "2rem" }}
                >
                  <li>
                    <p style={{ marginTop: "0rem" }}>
                      Zgłosić problem z narzędziem do sprawdzania.
                    </p>            
                  </li>
                  <li>
                    <p style={{ marginTop: "0rem" }}>
                      Zgłosić problem z regułami sprawdzania lub dokładnością błędów zgłoszonych przez sprawdzarkę.
                    </p>            
                  </li>
                  <li>
                    <p style={{ marginTop: "0rem" }}>
                      Znaleźć informacje o istniejących problemach.
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
