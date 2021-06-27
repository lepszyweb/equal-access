let a11yNls = {
    // JCH - DONE
    "RPT_List_Misuse": {
        0: "Elementy listy powinny być używane tylko w przypadku wykazów powiązanych elementów",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Brakuje elementu listy lub jest on niewłaściwie skonstruowany"
    },
    // JCH - DONE
    "RPT_Marquee_Trigger": {
        0: "Element <marquee> jest przestarzały i nie powinien być używany",
        "Passed_0": "Wymóg spełniony",
        "Fail_1": "Znaleziono przewijaną treść, która używa przestarzałego elementu <marquee>"
    },
    // JCH - DONE
    "RPT_Headers_FewWords": {
        0: "Elementy nagłówków nie mogą być wykorzystywane do prezentacji",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy element nagłówka jest rzeczywiście nagłówkiem"
    },
    // JCH - DONE
    "WCAG20_Input_ExplicitLabelImage": {
        0: "Element <input> typu \"image\" powinien mieć tekst alternatywny",
        "Pass_0": "Przycisk graficzny zapewnia tekst alternatywny za pomocą atrybutu 'alt'",
        "Pass_1": "Przycisk graficzny zapewnia tekst alternatywny za pomocą atrybutu 'aria-label'",
        "Pass_2": "Przycisk graficzny zapewnia tekst alternatywny za pomocą atrybutu 'title'",
        "Fail": "Element <input> typu \"image\" nie ma tekstu alternatywnego"
    },
    // JCH - DONE
    "RPT_Img_UsemapValid": {
        0: "Punkty aktywne graficznej mapy odsyłaczy po stronie serwera muszą mieć zduplikowane łącza tekstowe",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Punkty aktywne graficznej mapy odsyłaczy po stronie serwera nie mają zduplikowanych łączy tekstowych"
    },
    // JCH - DONE
    "WCAG20_Object_HasText": {
        0: "Elementy <object> muszą posiadać alternatywę tekstową, która opisuje treść odwzorowaną przez obiekt",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <object> nie ma tekstu alternatywnego"
    },
    // JCH - DONE
    "WCAG20_Applet_HasAlt": {
        0: "Elementy <applet> muszą zawierać tekst 'alt' i opis alternatywny",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <applet>`nie ma atrybutu 'alt', który zapewnia krótki tekst alternatywny",
        "Fail_2": "Wartość atrybutu 'alt' dla elementu <applet> powtarza wartość atrybutu 'code'",
        "Fail_3": "Element <applet> zapewnia tekst alternatywny, ale nie zapewnia wewnętrznej treści"
    },
    // JCH - DONE
    "RPT_Media_AudioTrigger": {
        0: "Informacje dźwiękowe powinny być istnieć również w formie tekstowej",
        "Pass_0": "Wymóg spełniony",
        "Manual_1": "Zapewnij transkrypcję plików audio"
    },
    // JCH - DONE
    "RPT_Blockquote_HasCite": {
        0: "Elementu <blockquote> można używać tylko do cytatów",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy `<blockquote>` jest używany tylko do cytatów, a nie wcięć"
    },
    // JCH - DONE
    "RPT_Meta_Refresh": {
        0: "Strony nie powinny się odświeżać automatycznie",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Upewnij się, że strona nie jest odświeżana automatycznie"
    },
    // JCH - DONE
    "WCAG20_Frame_HasTitle": {
        0: "Ramki wbudowane muszą mieć niepusty, opisowy i unikalny atrybut 'title'",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Ramka wbudowana nie ma atrybutu 'title' z tytułem"
    },
    // JCH - DONE
    "WCAG20_Input_ExplicitLabel": {
        0: "Każda kontrolka interfejsu użytkownika musi mieć powiązaną z nią etykietę",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Kontrolka formularza <{0}> nie ma powiązanej z nią etykiety",
        "Fail_2": "Kontrolka formularza z rolą \"{0}\" nie ma powiązanej z nią etykiety"
    },
    // JCH - DONE
    "RPT_Media_AltBrief": {
        0: "Tekst alternatywny w atrybucie 'alt' powinien być krótki (<150 znaków)",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Tekst alternatywny ma więcej niż 150 znaków"
    },
    // JCH - DONE
    "WCAG20_A_TargetAndText": {
        0: "Użytkownicy powinni być ostrzegani z wyprzedzeniem, jeśli ich działanie spowoduje otwarcie nowego okna lub w inny sposób zmieni kontekst",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Poinformuj użytkownika, że jego działanie spowoduje otwarcie nowego okna lub w inny sposób zmieni kontekst"
    },
    // JCH - DONE
    "WCAG20_Area_HasAlt": {
        0: "Elementy <area> na graficznej mapie odsyłaczy muszą mieć alternatywę tekstową",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <area> na graficznej mapie odsyłaczy nie ma alternatywy tekstowej"
    },
    // JCH - DONE
    "RPT_Media_ImgColorUsage": {
        0: "Nie używaj koloru jako jedynego środka przekazu informacji, zapewnij dodatkowe wskazówki tekstowe",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Upewnij się, że kolor nie jest jedynym środkiem przekazu informacji"
    },
    // JCH - DONE
    "WCAG20_Meta_RedirectZero": {
        0: "Strona nie powinna odświeżać się automatycznie bez ostrzeżenia lub możliwości wyłączenia tego albo dostosowania limitu czasu",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Sprawdź, czy strona nie odświeża się automatycznie bez ostrzeżenia lub opcji dostosowania"
    },
    // JCH - DONE
    "RPT_Elem_Deprecated": {
        0: "W miarę możliwości unikaj stosowania przestarzałych cech języka kodowania",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Używane są przestarzałe funkcje kodowania"
    },
    // JCH - DONE
    "RPT_Blockquote_WrapsTextQuote": {
        0: "Cytaty powinny być oznaczone jako elementy '<q>' lub '<blockquote>'",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Jeśli poniższy tekst jest cytatem, zaznacz go jako element '<q>' lub '<blockquote>': {0}"
    },
    // JCH - DONE
    "RPT_Elem_EventMouseAndKey": {
        0: "Cała treść interaktywna z obsługą zdarzeń myszy musi mieć równoważny dostęp z klawiatury",
        "Pass_0": "Wymóg spełniony",
        "Manual_1": "Upewnij się, że element <{0}> z obsługą zdarzeń myszy '{1}' ma odpowiadającą mu obsługę zdarzeń klawiatury"
    },
    // JCH - DONE
    "WCAG20_Doc_HasTitle": {
        0: "Każda strona powinna mieć tytuł, który określa jej temat",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Ponieważ nie ma elementu <head>, to nie istnieje element <title>",
        "Fail_2": "W elemencie <head> nie ma elementu <title>",
        "Fail_3": "Element <title> jest pusty (nie ma wewnątrz treści)"
    },
    // JCH - DONE
    "RPT_Block_ShouldBeHeading": {
        0: "Tekst nagłówka musi być objęty znacznikami nagłówka",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy tekst, który wygląda jak nagłówek, mieści się w elemencie nagłówka"
    },
    // JCH - DONE
    "WCAG20_Form_HasSubmit": {
        0: "Element <form> powinien mieć przycisk wysyłania lub przycisk graficzny",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy element <form> posiada przycisk lub graficzny przycisk wysyłania"
    },
    // JCH - DONE
    "RPT_Elem_UniqueId": {
        0: "Wartości atrybutu 'id' elementów muszą być unikalne w ramach dokumentu",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <{0}> ma id \"{1}\", które jest puste",
        "Fail_2": "Element <{0}> ma id \"{1}\", które nie jest unikalne"
    },
    // JCH - DONE
    "RPT_Font_ColorInForm": {
        0: "Połącz kolor i opisowe znaczniki, aby wskazać wymagane pola formularza",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy kolor nie został użyty jako jedyny wizualny środek oznaczenia pól wymaganych"
    },
    // JCH - DONE
    "RPT_Label_UniqueFor": {
        0: "Kontrolki formularzy powinny mieć dokładnie jedną etykietę",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Kontrolka formularza ma więcej niż jedną etykietę"
    },
    // JCH - DONE
    "RPT_Img_AltCommonMisuse": {
        0: "Wartość atrybutu 'alt' musi być dobrym zamiennikiem dla obrazu",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy nazwa pliku jest równoważną alternatywą dla obrazu"
    },
    // JCH - DONE
    "RPT_Img_LongDescription2": {
        0: "Atrybut 'longdesc' musi odnosić się do zawartości HTML",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy plik wskazany w atrybucie 'longdesc' zawiera prawidłową treść HTML (rozszerzenie pliku nie jest przetwarzane)"
    },
    // JCH - DONE
    "WCAG20_Img_HasAlt": {
        0: "Obrazy muszą mieć atrybut 'alt' z krótkim tekstem alternatywnym, jeśli przekazują znaczenie, lub 'alt=\"\", jeśli są dekoracyjne.",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Wartość atrybutu 'alt' obrazu składa się tylko z białych znaków (spacji)",
        "Fail_2": "Obraz nie ma alternatywy w postaci krótkiego tekstu 'alt'"
    },
    // JCH - DONE
    "RPT_Style_BackgroundImage": {
        0: "Obrazy dołączone za pomocą CSS nie mogą przekazywać ważnych informacji",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Upewnij się, że obraz tła CSS nie przekazuje ważnych informacji"
    },
    // JCH - DONE
    "RPT_Pre_ASCIIArt": {
        0: "Grafika ASCII musi mieć alternatywę tekstową",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Upewnij się, że grafika ASCII ma alternatywę tekstową"
    },
    // JCH - DONE
    "RPT_Media_VideoReferenceTrigger": {
        0: "Wcześniej nagrane multimedia powinny mieć ścieżkę dźwiękową, która opisuje informacje wizualne",
        "Pass_0": "Wymóg spełniony",
        "Manual_1": "Sprawdź, czy istnieje wybierana przez użytkownika ścieżka dźwiękowa z opisem treści wizualnej"
    },
    // JCH - DONE
    "RPT_Media_AudioVideoAltFilename": {
        0: "Audio lub wideo na stronie musi mieć alternatywę w postaci krótkiego tekstu, który opisuje treść medium.",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Użyto nazwy pliku jako etykiety dla osadzonego audio lub wideo"
    },
    // JCH - DONE
    "RPT_Style_ColorSemantics1": {
        0: "Połącz kolor i opisowe oznaczenia, aby przekazać informacje",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy kolor nie jest jedynym wizualnym środkiem przekazu informacji"
    },
    // JCH - DONE
    "WCAG20_Select_HasOptGroup": {
        0: "Grupy powiązanych opcji na liście wyboru powinny być zgrupowane w <optgroup>",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Grupa powiązanych opcji może wymagać <optgroup>"
    },
    // JCH - DONE
    "RPT_List_UseMarkup": {
        0: "Użyj odpowiednich elementów listy HTML do tworzenia list",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy jest to lista, która powinna wykorzystywać elementy listy HTML"
    },
    // JCH - DONE
    "RPT_Script_OnclickHTML1": {
        0: "Nie należy używać skryptów do emulacji łączy",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Możliwe, że użyto skryptu do emulacji łącza"
    },
    // JCH - DONE
    "WCAG20_Table_Structure": {
        0: "Elementy tabeli z 'role=\"presentation\" lub 'role=\"none\" nie powinny mieć strukturalnych elementów lub atrybutów",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <{0}> z rolą WAI-ARIA \"presentation\" lub \"none\" ma element(y) i atrybut(y) strukturalny(e) '{1}'"
    },
    // JCH - DONE
    "WCAG20_Img_AltTriggerNonDecorative": {
        0: "Informacja jest przekazywana za pomocą obrazu tekstu, a nie tekstu",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy obrazy tekstu nie są wykorzystywane do przekazywania informacji"
    },
    // JCH - DONE
    "WCAG20_Blink_AlwaysTrigger": {
        0: "Nie wolno używać treści, które migają w sposób ciągły",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Znaleziono treść, która ciągle miga"
    },
    // JCH - DONE
    "RPT_Blink_CSSTrigger1": {
        0: "Nie używaj wartości \"blink\" właściwości CSS 'text-decoration' dłużej niż przez 5 sekund",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy wartość \"blink\" właściwości CSS 'text-decoration' nie jest używana dłużej niż 5 sekund"
    },
    // JCH - DONE
    "RPT_Html_SkipNav": {
        0: "Zapewnienie sposobu na ominięcie bloków treści, które są powtarzane na wielu stronach internetowych",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy istnieje sposób na ominięcie bloków treści, które powtarzają się na wielu stronach internetowych"
    },
    // JCH - DONE
    "RPT_Title_Valid": {
        0: "Treść <title> strony powinna być opisem jej treści, a nie nazwą pliku",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Tytuł strony <title> jest pusty",
        "Potential_2": "Sprawdź, czy użycie nazwy pliku jako wartości <title> strony jest opisowe."
    },
    // JCH - DONE
    "RPT_Header_HasContent": {
        0: "Elementy nagłówka muszą zawierać tekst opisowy",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element nagłówka nie ma opisowego tekstu "
    },
    // JCH - DONE
    // JCH - 0: provides the general DAP message for the rule
    //       "Pass_i" ???
    //       "Fail_j" descriptive message for specific failure
    //       "Potential_k" descriptive message describing case when it is not a failure 
    //                     but needs other checking to confirm pass or
    "WCAG20_Html_HasLang": {
        0: "Strona musi określać domyślny język dokumentu za pomocą atrybutu 'lang'",
        "Pass_0": "Język strony rozpoznany jako \"{0}\"",
        "Fail_1": "Strona rozpoznana jako XHTML 1.0, ale nie posiada atrybutów 'lang' ani 'xml:lang'",
        "Fail_2": "Strona rozpoznana jako XHTML, ale nie posiada atrybutu 'xml:lang'",
        "Fail_3": "Strona rozpoznana jako HTML, ale nie posiada atrybutu 'lang'",
        "Fail_4": "Strona rozpoznana jako XHTML 1.0 z atrybutami 'lang' i 'xml:lang', które nie są takie same: \"{0}\", \"{1}\"",
        "Potential_5": "Strona rozpoznana jako XHTML 1.0 tylko z atrybutem 'lang'. Upewnij się, że strona jest dostarczana tylko przez typ mime text/html",
        "Potential_6": "Strona rozpoznana jako XHTML 1.0 tylko z atrybutem 'xml:lang' Upewnij się, że strona jest dostarczana tylko przez typ mime text/html"
    },
    // JCH - DONE
    "WCAG20_Form_TargetAndText": {
        0: "Użytkownik powinien być informowany z wyprzedzeniem, gdy interakcja z treścią powoduje zmianę kontekstu",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy interakcja z treścią nie inicjuje otwarcia wyskakującego okna lub zmiany aktywnego okna bez poinformowania o tym użytkownika"
    },
    // JCH - DONE
    "WCAG20_A_HasText": {
        0: "Hiperłącze musi mieć tekst łącza, który opisuje jego przeznaczenie",
        "Pass_0": "Hiperłącze ma opis swojego przeznaczenia",
        "Fail_1": "Hiperłącze nie ma ani tekstu łącza, ani etykiety lub obrazu z tekstem alternatywnym"
    },
    // JCH - DONE
    "WCAG20_Fieldset_HasLegend": {
        0: "Element <fieldset> musi mieć pojedynczy, niepusty  znacznik <legend> jako etykietę",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <fieldset> nie ma elementu <legend>",
        "Fail_2": "Element <fieldset> ma więcej niż jeden element <legend>",
        "Fail_3": "Element <fieldset> ma pusty element <legend>"
    },
    // JCH - DONE
    "RPT_Media_VideoObjectTrigger": {
        0: "Media na żywo (transmisja strumieniowa wideo z dźwiękiem) powinny mieć napisy rozszerzone",
        "Pass_0": "Wymóg spełniony",
        "Manual_1": "Sprawdź, czy media na żywo (transmisja strumieniowa wideo z dźwiękiem) mają napisy rozszerzone"
    },
    // JCH - DONE
    "RPT_Text_SensoryReference": {
        0: "Instrukcje muszą mieć znaczenie bez słów określających kształt lub lokalizację",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Jeśli słowo(a) '{0}' są częścią instrukcji, sprawdź, czy instrukcje są nadal zrozumiałe bez informacji o lokalizacji lub kształcie"
    },
    // JCH - DONE
    "RPT_Embed_AutoStart": {
        0: "Musi istnieć mechanizm wstrzymywania lub zatrzymywania i kontrolowania głośności dźwięku odtwarzanego automatycznie",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy istnieje mechanizm wstrzymywania lub zatrzymywania i kontrolowania głośności dźwięku odtwarzanego automatycznie"
    },
    // JCH - DONE
    "RPT_Style_HinderFocus1": {
        0: "Wskaźnik fokusu klawiatury musi być dobrze widoczny, gdy domyślne obramowanie lub kontur są modyfikowane przez CSS",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy wskaźnik fokusu klawiatury jest dobrze widoczny, gdy używane są włąściwości CSS dla obramowania lub konturu"
    },
    // JCH - DONE
    "WCAG20_Elem_Lang_Valid": {
        0: "Język treści musi być określony zgodnie z BCP 47",
        "Pass_0": "Atrybut lang ma poprawny język podstawowy określony zgodnie z BCP 47",
        "Fail_1": "Podany atrybut 'lang' nie zawiera poprawnego języka podstawowego",
        "Fail_2": "Podany atrybut 'lang' jest niezgodny z BCP 47",
        "Fail_3": "Podany atrybut 'lang' nie zawiera poprawnego języka podstawowego",
        "Fail_4": "Podany atrybut 'xml:lang' nie jest zgodny z BCP 47"
    },
    // JCH - DONE
    "WCAG20_Img_LinkTextNotRedundant": {
        0: "Tekst alternatywny obrazu w ramach łącza nie powinien powtarzać tekstu łącza ani tekstu sąsiedniego łącza",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Tekst łącza jest powtarzany w wartości 'alt' obrazu w tym samym łączu",
        "Fail_2": "Tekst łącza poprzedniego łącza jest powtarzany w wartości 'alt' obrazka łącza",
        "Fail_3": "Wartość 'alt' obrazu w łączu jest powtarzana w tekście łącza znajdującym się za obrazem"
    },
    // JCH - DONE
    "RPT_Style_ExternalStyleSheet": {
        0: "Sprawdź zewnętrzne arkusze stylów, aby upewnić się, że CSS nie jest używany do dodawania obrazów, które przekazują ważne informacje w treści.",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Wykryte zewnętrzne arkusze stylów zapewniają, że CSS nie dodaje obrazów, które przekazują ważne informacje w treści"
    },
    // JCH - DONE
    "RPT_Header_Trigger": {
        0: "Nagłówek powinien poprawnie opisywać tematykę sekcji strony internetowej",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy tekst nagłówka poprawnie opisuje temat każdej sekcji strony internetowej"
    },
    // JCH - DONE
    "RPT_Script_OnclickHTML2": {
        0: "Nie należy używać skryptów do emulacji łączy",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy zdarzenie 'onclick' nie jest używane w skrypcie do emulacji łącza"
    },
    // JCH - DONE
    "WCAG20_Table_CapSummRedundant": {
        0: "Treść elementu 'summary' nie może być powtórzeniem treści elementu 'caption'",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "W tabeli w elemencie 'summary' powielono treść 'caption'"
    },
    // JCH - DONE
    "WCAG20_Input_LabelBefore": {
        0: "Pole tekstowe <input> i element <select> muszą mieć etykietę przed elementem",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Pole tekstowe <input> jest zagnieżdżone w <label>, więc etykieta nie jest przed polem tekstowym",
        "Fail_2": "Etykieta znajduje się za powiązanym z nim polem tekstowym <input> lub elementem <select>"
    },
    // JCH - DONE
    "WCAG20_Input_LabelAfter": {
        0: "Pole wyboru i przyciski radiowe muszą mieć etykietę za kontrolką",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Pole wyboru lub przycisk opcji (Checkbox or radio button is nested in label, so label is not after the input control",
        "Fail_2": "Etykieta znajduje się przed powiązanym z nią polem wyboru lub przyciskiem radiowym (polem opcji)"
    },
    // JCH - DONE
    "WCAG20_Embed_HasNoEmbed": {
        0: "Bezpośrednio po elementach <embed> powinien następować element <noembed>",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy po elemencie <embed> występuje bezpośrednio element <noembed>"
    },
    // JCH - DONE
    "WCAG20_Table_Scope_Valid": {
        0: "Wartością atrybutu 'scope' może być tylko jedna z następujących \"row\", \"col\", \"rowgroup\" lub \"colgroup\"",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Wartość określona w atrybucie 'scope' jest niepoprawna."
    },
    // JCH - DONE
    "WCAG20_Img_TitleEmptyWhenAltNull": {
        0: "Kiedy atrybut 'alt' obrazka jest pusty, atrybut 'title' musi być również pusty",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Tekst atrybutu 'alt' obrazka jest pusty, ale atrybut 'title' nie jest pusty."
    },
    // JCH - DONE
    "WCAG20_Input_InFieldSet": {
        0: "Grupy logicznie powiązanych pól formularza powinny być zawarte wewnątrz elementu <fieldset>",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Użyj <fieldset> do grupowania logicznie powiązanych elementów wejściowych"
    },
    // JCH - DONE
    "WCAG20_Input_RadioChkInFieldSet": {
        0: "Powiązane zestawy przycisków opcji lub pól wyboru muszą być programowo pogrupowane",
        "Pass_LoneNogroup": "grupowanie {0} nie jest wymagane dla kontrolek tego typu",
        "Pass_Grouped": "Pole tekstowe {0} jest zgrupowane z innymi powiązanymi kontrolkami z tą samą nazwą",
        "Pass_RadioNoName": "Przycisk opcji nie jest zgrupowany, ale spełnia wymogi, ponieważ nie ma nazwy grupującej z innymi przyciskami opcji",
        "Fail_ControlNameMismatch": "Znaleziono kontrolkę {0} z taką samą nazwą, jak kontrolka {1}",
        "Potential_LoneCheckbox": "Sprawdź, czy to niezgrupowane pole wyboru nie jest powiązane z innymi polami wyboru",
        "Potential_UnnamedCheckbox": "Sprawdź, czy czy to nienazwane, niezgrupowane pole wyboru nie jest powiązane z innymi polami wyboru",
        "Fail_NotGroupedOtherGrouped": "Kontrolka {0} nie jest w grupie z inną {0} o nazwie \"{1}\"",
        "Fail_NotGroupedOtherNotGrouped": "Kontrolka {0} i inna o nazwie \"{1}\" nie są zgrupowane",
        "Fail_NotSameGroup": "Kontrolka {0} jest w innej grupie niż inna {0} o nazwie \"{1}\"."
    },
    // JCH - DONE
    "WCAG20_Select_NoChangeAction": {
        0: "Żadna zmiana kontekstu nie powinna nastąpić, gdy fokus zostanie przeniesiony na którąkolwiek z wartości do wyboru",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy nie następuje zmiana kontekstu lub działania, gdy opcje wyboru w tym komponencie otrzymują fokus"
    },
    // JCH - DONE
    "WCAG20_Input_HasOnchange": {
        0: "Wszelkie nieoczekiwane zmiany kontekstu są objaśnione z wyprzedzeniem",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy wszelkie zmiany kontekstu są objaśnione z wyprzedzeniem"
    },
    // JCH - DONE
    "RPT_Embed_HasAlt": {
        0: "Zapewnij treść alternatywną dla elementu <embed>",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy element <embed> ma treść alternatywną"
    },
    // JCH - DONE
    "Valerie_Noembed_HasContent": {
        0: "Element <noembed> powinien zawierać opisowy tekst",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Dodaj opisowy tekst do elementu <noembed>"
    },
    // JCH - DONE
    "Valerie_Caption_HasContent": {
        0: "Element <caption> w elemencie <table> musi zawierać opisowy tekst",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <table> ma pusty element <caption>"
    },
    // JCH - DONE
    "Valerie_Caption_InTable": {
        0: "Element <caption> musi być umieszczony wewnątrz powiązanego elementu <table>",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <caption> nie jest zagnieżdżony w elemencie <table>"
    },
    // JCH - DONE
    "Valerie_Label_HasContent": {
        0: "Element <label> musi mieć niepusty tekst, wystarczająco opisowy, który identyfikuje cel komponentu interaktywnego",
        "Pass_Regular": "Element <label> ma dostępną nazwę za pomocą tekstu wewnątrz",
        "Pass_AriaLabel": "Element <label> ma dostępną nazwę za pomocą 'aria-label'",
        "Pass_LabelledBy": "Element <label> ma dostępną nazwę za pomocą 'aria-labelledby'",
        "Fail_1": "Element <label> nie ma wystarczająco opisowego tekstu, który określa  który określa oczekiwane dane wejściowe"
    },
    // JCH - DONE
    "Valerie_Elem_DirValid": {
        0: "Wartością atrybutu 'dir' musi być  \"ltr\", \"rtl\" lub \"auto\"",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Nieprawidłowa wartość użyta w atrybucie 'dir'"
    },
    // JCH - DONE
    "Valerie_Frame_SrcHtml": {
        0: "Treść inna niż HTML osadzona w ramce <frame> musi być dostępna",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy treść <frame> jest dostępna"
    },
    // JCH - DONE
    "Valerie_Table_DataCellRelationships": {
        0: "W złożonej tabeli danych wszystkie elementy <th> i <td> muszą być powiązane za pomocą atrybutów 'header' lub 'scope'.",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Złożona tabela nie ma nagłówków dla każdej komórki zdefiniowanych poprawnie za pomocą 'header' lub 'scope'"
    },
    // JCH - DONE
    "RPT_Table_LayoutTrigger": {
        0: "Unikaj używania tabel do formatowania dokumentów tekstowych w kolumnach, chyba że tabela może być zlinearyzowana",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy tabela nie jest używana do formatowania treści tekstowej w kolumnach, chyba że tabela może być zlinearyzowana"
    },
    // JCH - DONE
    "RPT_Table_DataHeadingsAria": {
        0: "Tabela danych musi mieć określone nagłówki",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Tabela nie ma określonych nagłówków"
    },
    // JCH - DONE
    "WCAG20_Label_RefValid": {
        0: "Atrybut 'for' musi odnosić się do niepustego unikalnego atrybutu 'id' elementu <input>",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Wartość \"{0}\" w atrybucie 'for' nie jest taka jak wartość 'id' elementu <input>"
    },
    // JCH - DONE
    "WCAG20_Elem_UniqueAccessKey": {
        0: "Wartości atrybutów `accesskey` dla każdego elementu muszą być na stronie unikalne",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Wartość atrybutu 'accesskey' nie jest unikalna"
    },
    // JCH - DONE
    "WCAG20_Script_FocusBlurs": {
        0: "Skrypty nie mogą usuwać fokusu z treści, która normalnie otrzymuje fokus",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy skrypt nie usuwa fokusu z treści, która zwykle jest aktywna"
    },
    // JCH - DONE
    "HAAC_Img_UsemapAlt": {
        0: "Mapa odsyłaczy i każdy element <area> w mapie odsyłaczy musi mieć tekst alternatywny",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Mapa odsyłaczy lub element <area> na mapie nie ma tekstu alternatywnego"
    },
    // JCH - DONE
    "WCAG20_Text_Emoticons": {
        0: "Ikony emocji muszą mieć krótką alternatywę tekstową, która opisuje ich przeznaczenie",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy ikony emocji mają alternatywę tekstową"
    },
    // JCH - DONE
    "WCAG20_Style_BeforeAfter": {
        0: "Nie używaj pseudoelementów CSS '::before' i '::after' do wstawiania treści niedekoracyjnej",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy pseudoelementy '::before' i '::after' nie wstawiają treści niedekoracyjnej"
    },
    // JCH - DONE
    "WCAG20_Text_LetterSpacing": {
        0: "Użyj właściwości CSS 'letter-spacing' do kontrolowania odstępów w obrębie słów",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy znaki spacji nie są używane do tworzenia odstępów między literami słowa"
    },
    // JCH - DONE
    "Rpt_Aria_ValidRole": {
        0: "Elementy muszą posiadać poprawnie określoną wartość 'role' zgodnie ze specyfikacją WAI-ARIA",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Wartość atrybutu 'role' określona dla elementu nie istnieje w specyfikacji WAI-ARIA"
    },
    "table_aria_descendants": {
        0: "Table structure elements cannot specify an explicit 'role' within table containers",
        "explicit_role": "An explicit WAI-ARIA 'role' is not valid for <{0}> element within a WAI-ARIA role '{1}' per the ARIA in HTML specification"
    },
    // JCH - DONE
    "Rpt_Aria_ValidPropertyValue": {
        0: "Wartość atrybutu określona w elemencie musi być poprawna zgodnie ze specyfikacją WAI-ARIA 1.2",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Wartość \"{0}\" określona dla właściwości WAI-ARIA '{1}' dla elementu <{2}> jest nieprawidłowa"
    },
    // JCH - DONE
    "Rpt_Aria_ValidIdRef": {
        0: "Właściwość WAI-ARIA musi odwoływać się do niepustego unikalnego identyfikatora istniejącego elementu, który jest widoczny",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Wartość 'id' równa \"{0}\" określona dla właściwości WAI-ARIA '{1}' jest nieprawidłowa"
    },
    // JCH - DONE
    "Rpt_Aria_RequiredProperties": {
        0: "Element z atrybutem roli WAI-ARIA musi mieć zdefiniowane atrybuty wymagane dla tej roli",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element z rolą WAI-ARIA  '{0}' nie ma wymaganego atrybutu WAI-ARIA: '{1}'"
    },
    // JCH - DONE
    "Rpt_Aria_EmptyPropertyValue": {
        0: "Wartość wymaganych atrybutów WAI-ARIA nie może być pusta",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Wartość atrybutu (ów) elementu '{0}' jest pusta"
    },
    // JCH - DONE
    "Rpt_Aria_ValidProperty": {
        0: "Atrybuty WAI-ARIA muszą być poprawne dla roli elementu",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Atrybut(y) '{0}', do których odwołuje się element <{1}> , nie jest prawidłowym stanem lub właściwością WAI-ARIA"
    },
    // JCH - DONE
    "Rpt_Aria_InvalidTabindexForActivedescendant": {
        0: "Element używający właściwości 'aria-activedescendant' musi mieć wartość atrybutu 'tabindex' ustawioną na 0 lub -1, aby był dostępny z klawiatury.",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <{0}> używający właściwości 'aria-activedescendant' ustawionej na \"{1}\" nie posiada wartości atrybutu 'tabindex' ustawionej na 0 lub -1 "
    },
    // JCH - DONE
    "Rpt_Aria_MissingFocusableChild": {
        0: "Komponent UI musi mieć co najmniej jeden element potomny z możliwością ustawienia fokusu, aby można go obsługiwać za pomocą klawiatury",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element potomny <{0}> z rolą \"{1}\" nie ma elementu potomnego, na którym można utawić fokus"
    },
    // JCH - DONE
    "Rpt_Aria_MissingKeyboardHandler": {
        0: "Interaktywne komponenty interfejsu użytkownika WAI_ARIA muszą zapewniać dostęp do treści za pomocą klawiatury",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy element <{0}> z rolą \"{1}\" jest dostępny z klawiatury"
    },
    // JCH - DONE
    "WCAG20_Img_PresentationImgHasNonNullAlt": {
        0: "Obraz oznaczony jako dekoracyjny musi mieć pusty tekst alternatywny (atrybut 'alt=\"\")",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Obraz oznakowany jako dekoracyjny ma wypełniony tekst alternatywny"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleSearchLandmarks": {
        0: "Jeśli na stronie istnieje więcej niż jeden element z rolą \"search\", każdy musi mieć unikalną etykietę opisującą jego przeznaczenie",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Istnieje wiele elementów z rolą \"search\" bez unikalnych etykiet"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleApplicationLandmarks": {
        0: "Każdy element z rolą \"application\" musi mieć unikalną etykietę, która opisuje jego przeznaczenie",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Istnieje wiele elementów z rolą \"application\" bez unikalnych etykiet"
    },
    // JCH - DONE
    "Rpt_Aria_ApplicationLandmarkLabel": {
        0: "Element z rolą \"application\" musi mieć unikalną etykietę, która opisuje jego przeznaczenie",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element z rolą \"application\" nie ma etykiety"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleDocumentRoles": {
        0: "All elements with a \"document\" role must have unique labels",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Wiele elementów z rolą \"document\" nie ma unikalnych etykiet"
    },
    // JCH - DONE
    "WCAG20_Label_TargetInvisible": {
        0: "Nie należy etykietować ukrytych elementów <input> ('type=\"hidden\"')",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Ukryte pole <input> ('type=\"hidden\"') prawdopodobnie ma etykietę"
    },
    // JCH - DONE
    "HAAC_Video_HasNoTrack": {
        0: "Element <video> musi mieć tekstową alternatywę dla każdej znaczącej treści audio",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Upewnij się, że dla każdego znaczącego dźwięku zapewnione są równoważne napisy rozszerzone lub podaj ścieżkę z napisami dla elementu <video>"
    },
    // JCH - DONE
    "HAAC_Audio_Video_Trigger": {
        0: "Media wykorzystujące elementy `<audio>` lub `<video>` muszą mieć sterowanie za pomocą klawiatury",
        "Pass_0": "Wymóg spełniony",
        "Manual_1": "Sprawdź, czy media używajace elementu `<audio>` lub `<video>` mogą być sterowane za pomocą klawiatury"
    },
    // JCH - DONE
    "HAAC_Input_HasRequired": {
        0: "Jeśli aplikacja musi być dostępna w przeglądarce Internet Explorer 8, użyj właściwości 'aria-required' zamiast właściwości HTML5 'required'",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Jeśli aplikacja musi być dostępna w przeglądarce Internet Explorer 8, użyj właściwości 'aria-required' zamiast właściwości HTML5 'required'"
    },
    // JCH - DONE
    "HAAC_Aria_ImgAlt": {
        0: "Element z rolą \"img\" musi mieć wypełnioną etykietę ('label')",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element z rolą \"img\" nie ma etykiety",
        "Fail_2": "Element z rolą \"img\" nie ma etykiety lub etykieta jest pusta",
        "Fail_3": "Element z rolą \"img\" nie ma niepustej etykiety 'aria-label' lub 'aria-labelledby'"
    },
    "HAAC_Aria_SvgAlt": {
        0: "An element with \"{0}\" graphics role must have a non-empty label",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element graficzny z \"{0}\" nie ma etykiety",
        "Fail_2": "Element graficzny z \"{0}\" nie ma etykiety lub etykieta jest pusta",
        "Fail_3": "Element graficzny z \"{0}\" nie ma niepustej etykiety 'aria-label' lub 'aria-labelledby'"
    },
    // JCH - DONE
    "HAAC_BackgroundImg_HasTextOrTitle": {
        0: "Obrazy tła, które przekazują znaczenie, muszą mieć alternatywę tekstową, która opisuje obraz",
        "Pass_0": "Wymóg spełniony",
        "Manual_1": "Sprawdź, czy w trybie wysokiego kontrastu obraz w tle ma alternatywę tekstową"
    },
    // JCH - DONE
    "HAAC_Accesskey_NeedLabel": {
        0: "Element HTML z przypisanym atrybutem 'accesskey' musi mieć przypisaną etykietę",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Element HTML z przypisanym atrybutem 'accesskey' nie ma przypisanej etykiety"
    },
    // JCH - DONE
    "HAAC_Aria_Or_HTML5_Attr": {
        0: "Atrybuty HTML5 nie mogą być w konflikcie z powiązanym atrybutem WAI-ARIA użytym dla pola formularza",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Konflikt między atrybutem HTML5 z powiązanym atrybutem WAI-ARIA zastosowanymi do pola formularza"
    },
    // JCH - DONE
    "HAAC_Canvas": {
        0: "Element <canvas> może nie być dostępny",
        "Pass_0": "Wymóg spełniony",
        "Manual_1": "Sprawdź, czy element <canvas> jest dostępny"
    },
    // JCH - DONE
    "HAAC_Figure_label": {
        0: "Element <figure> musi mieć przypisaną etykietę",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <figure> nie ma przypisanej etykiety"
    },
    // JCH - DONE
    "HAAC_Input_Placeholder": {
        0: "Atrybutu HTML5 'placeholder' nie można używać jako widocznego zamiennika etykiety",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Jedyną widoczną etykietą jest atrybut HTML5 placeholder",
        "Potential_2": "Dodatkowa widoczna etykieta, do której odwołuje się 'aria-labelledby' nie jest poprawna"
    },
    // JCH - DONE
    "aria_semantics_role": {
        0: "Role WAI-ARIA muszą być poprawne dla elementu, do którego są przypisane",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Rola WAI-ARIA '{0}' nie jest poprawna dla elementu <{1}>",
        "Fail_2": "Rola WAI-ARIA '{0}' nie jest poprawna dla elementu <{1}> i może zostać zignorowana przez przeglądarkę, ponieważ element przyjmuje fokus"
    },
    "aria_semantics_attribute": {
        0: "Atrybuty WAI-ARIA muszą być ważne dla poprawne i roli WAI-ARIA, do której są przypisane",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Atrybut '{0}' nie jest poprawny dla elementu <{1}> z rolą WAI-ARIA '{2}'"
    },
    // JCH - DONE
    "RPT_Form_ChangeEmpty": {
        0: "Formularz nie powinien być przesyłany automatycznie bez ostrzeżenia użytkownika",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Upewnij się, że formularz nie zostanie wysłany automatycznie bez ostrzeżenia"
    },
    // JCH - DONE
    "IBMA_Color_Contrast_WCAG2AA": {
        0: "Kontrast kolorów tekstu z jego tłem musi spełniać minimalne wymagania WCAG 2.1 AA",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Kontrast tekstu {0} do jego tła jest mniejszy niż minimalne wymagania dla WCAG AA dla tekstu o rozmiarze {1}px i wadze {2}",
        "Potential_1": "Zarówno tekst na pierwszym planie, jak i jego kolor tła są wykrywane jako {3}. Sprawdź, czy tekst spełnia wymagania WCAG 2.1 AA dla minimalnego kontrastu"
    },
    // JCH - DONE
    "IBMA_Color_Contrast_WCAG2AA_PV": {
        0: "Współczynnik kontrastu tekstu na tle gradientu kolorów lub obrazu tła musi spełniać wymagania WCAG 2.1 AA.",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź kontrast tekstu w stosunku do najjaśniejszych i najciemniejszych kolorów tła, czy spełnia minimalne wymagania normy WCAG 2.1 AA dla tekstu o rozmiarze {1}px i wadze {2}."
    },
    // JCH - DONE
    "WCAG20_Body_FirstASkips_Native_Host_Sematics": {
        0: "Strony internetowe muszą zapewniać możliwość przejścia bezpośrednio do głównej treści",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Na stronie nie ma możliwości szybkiego przejścia do głównej treści (punkt orientacyjny \"main\" lub łącze pomijające)"
    },
    // JCH - DONE
    "WCAG20_Body_FirstAContainsSkipText_Native_Host_Sematics": {
        0: "Opis hiperłącza użytego do pominięcia treści musi informować, do czego ono odsyła",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Jeśli to hiperłącze pomija treść, sprawdź, czy opis informuje, do czego się łączy"
    },
    // JCH - DONE
    "Rpt_Aria_RequiredChildren_Native_Host_Sematics": {
        0: "Element z WAI-ARIA 'role' musi zawierać wymagane elementy potomne",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Element z rolą WAI-ARIA \"{0}\" nie zawiera ani nie posiada co najmniej jednego elementu podrzędnego z każdą z następujących ról WAI-ARIA: \"{1}\""
    },
    // JCH - DONE
    "Rpt_Aria_RequiredParent_Native_Host_Sematics": {
        0: "Element z rolą WAI-ARIA musi być zawarty w poprawnym elemencie",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element z rolą WAI-ARIA \"{0}\" nie jest zawarty w elemencie z jedną z następujących ról WAI-ARIA ani nie jest przez niego własnością: \"{1}\""
    },
    // JCH - DONE
    "Rpt_Aria_EventHandlerMissingRole_Native_Host_Sematics": {
        0: "Elementy obsługujące zdarzenia muszą mieć poprawną rolę WAI-ARIA",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <{0}> z '{1}' nie ma określonej prawidłowej roli WAI-ARIA."
    },
    // JCH - DONE
    "Rpt_Aria_WidgetLabels_Implicit": {
        0: "Komponent interaktywny musi mieć programowo powiązaną nazwę",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Komponent interaktywny nie ma programowo powiązanej nazwy"
    },
    // JCH - DONE
    "Rpt_Aria_OrphanedContent_Native_Host_Sematics": {
        0: "Cała treść musi się znajdować wewnątrz obszarów z rolami punktów orientacyjnych",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Treść znajduje się poza obszarem punktu orientacyjnego"
    },
    // JCH - DONE
    "Rpt_Aria_RegionLabel_Implicit": {
        0: "Elementy z rolą \"region\" muszą mieć etykietę opisującą ich przeznaczenie",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element sekcji z dorozumianą rolą \"region\" nie jest oznaczony etykietą 'aria-label' 'aria-labelledby'",
        "Fail_2": "Element z rolą \"region\" nie jest oznaczony etykietą 'aria-label' lub 'aria-labelledby'."
    },
    // JCH - DONE
    "Rpt_Aria_MultipleMainsVisibleLabel_Implicit": {
        0: "Każdy element z rolą \"main\" powinien mieć widoczną niepowtarzalną etykietę, która opisuje jego cel",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Więcej niż jeden element z rolą \"main\"  bez unikalnej etykiety"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleBannerLandmarks_Implicit": {
        0: "Jeśli na stronie istnieje więcej niż jeden element  pełniący  rolę \"banner\", każdy musi mieć unikalną etykietę opisującą jego przeznaczenie",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Istnieje wiele elementów z rolą \"banner\" bez unikalnych etykiet"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleComplementaryLandmarks_Implicit": {
        0: "Jeśli na stronie istnieje więcej niż jeden element pełniący  rolę \"complementary\", każdy musi mieć unikalną etykietę opisującą jego przeznaczenie",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Istnieje wiele elementów z rolą \"complementary\" bez unikalnych etykiet"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleContentinfoLandmarks_Implicit": {
        0: "Jeśli na stronie istnieje więcej niż jeden element pełniący  rolę \"contentinfo\", każdy musi mieć unikalną etykietę opisującą jego przeznaczenie",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Istnieje wiele elementów z rolą \"contentinfo\" bez unikalnych etykiet"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleFormLandmarks_Implicit": {
        0: "Jeśli na stronie istnieje więcej niż jeden element z rolą \"form\", każdy musi mieć unikalną etykietę opisującą jego przeznaczenie",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Istnieje wiele elementów z rolą \"form\" bez unikalnych etykiet"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleNavigationLandmarks_Implicit": {
        0: "Jeśli na stronie istnieje więcej niż jeden element z rolą \"navigation\", każdy musi mieć unikalną etykietę opisującą jego przeznaczenie",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Istnieje wiele elementów z rolą \"navigation\" bez unikalnych etykiet"
    },
    // JCH - DONE
    "Rpt_Aria_ComplementaryLandmarkLabel_Implicit": {
        0: "Każdy element z rolą \"complementary\" powinien mieć unikalną i widoczną etykietę, która opisuje jego cel",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element z rolą \"complementary\" nie ma widocznej etykiety"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleArticleRoles_Implicit": {
        0: "Każdy element z rolą \"article\" powinien mieć unikalną i widoczną etykietę, która opisuje jego cel",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Istnieje wiele elementów z rolą \"article\"  bez unikalnych etykiet"
    },
    // JCH - DONE
    "Rpt_Aria_ArticleRoleLabel_Implicit": {
        0: "Wszystkie elementy z rolą \"article\" muszą mieć etykietę, która opisuje ich cel",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element z rolą \"article\" nie ma etykiety"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleGroupRoles_Implicit": {
        0: "Każdy element z rolą \"group\" powinien mieć unikalną i widoczną etykietę, która opisuje jego cel",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Istnieje wiele elementów z rolą \"group\" bez unikalnych etykiet"
    },
    // JCH - DONE
    "Rpt_Aria_GroupRoleLabel_Implicit": {
        0: "Wszystkie elementy z rolą \"group\" muszą mieć etykietę, która opisuje kolekcję powiązanych elementów",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element <{0}> z rolą \"group\" nie ma etykiety"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleContentinfoInSiblingSet_Implicit": {
        0: "Strona, dokument lub aplikacja może mieć tylko jeden element z rolą \"contentinfo\"",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Znaleziono na stronie wiele elementów z rolą \"contentinfo\""
    },
    // JCH - DONE
    "Rpt_Aria_OneBannerInSiblingSet_Implicit": {
        0: "Na stronie może się znajdować  tylko jeden element z rolą \"banner\"",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Na stronie znajduje się wiele elementów z rolą \"banner\""
    },
    // JCH - DONE
    "Rpt_Aria_ContentinfoWithNoMain_Implicit": {
        0: "Element z rolą \"contentinfo\" jest dozwolony tylko, gdy istnieje element z rolą \"main\"",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Istnieje element z rolą \"contentinfo\", ale nie ma elementu \"main\""
    },
    // JCH - DONE
    "Rpt_Aria_ComplementaryRequiredLabel_Implicit": {
        0: "Element z rolą \"complementary\" musi mieć etykietę",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Element z rolą \"complementary\" nie ma etykiety"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleRegionsUniqueLabel_Implicit": {
        0: "Each element with a \"region\" role must have a unique label",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Multiple elements with \"region\" role do not have unique labels"
    },
    // JCH - DONE
    "IBMA_Focus_Tabbable": {
        0: "W komponencie musi być co najmniej jeden element przyjmujący fokus klawiatury",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Komponent z rolą \"{0}\" nie ma elementu przyjmującego fokus klawiatury"
    },
    // JCH - DONE
    "IBMA_Focus_MultiTab": {
        0: "Niektóre komponenty mogą mieć tylko jeden element osiągany klawiszem Tab",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Komponent z rolą \"{0}\" ma więcej niż jeden element osiągany klawiszem Tab"
    },
    // JCH - DONE
    "WCAG20_Table_SummaryAria3": {
        0: "Złożone tabele danych powinny mieć 'summary' lub 'aria-describedby', które daje przegląd tabeli",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Złożona tabela danych nie ma 'summary' lub 'aria-describedby', które daje przegląd tabeli"
    },
    // JCH - DONE
    "RPT_Style_Trigger2": {
        0: "Tryb wysokiego kontrastu w systemie Windows musi być obsługiwany dla obrazów tła CSS",
        "Pass_0": "Wymóg spełniony",
        "Manual_1": "Upewnij się, że tryb wysokiego kontrastu systemu Windows jest obsługiwany dla obrazów tła CSS"
    },
    // JCH - DONE
    "Rpt_Aria_MultipleMainsRequireLabel_Implicit_2": {
        0: "Każdy element z rolą \"main\" powinien mieć widoczną niepowtarzalną etykietę, która opisuje jego cel",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Wiele elementów z rolą \"main\" bez unikalnej etykiety"
    },
    // JCH - DONE
    "HAAC_Media_DocumentTrigger2": {
        0: "Mechanizmy pobierania plików powinny być obsługiwane za pomocą klawiatury i zachowywać położenie fokusu klawiatury",
        "Pass_0": "Wymóg spełniony",
        "Manual_1": "Sprawdź, czy mechanizm pobierania plików nie powoduje pułapki klawiaturowej"
    },
    // JCH - DONE
    "HAAC_Aria_ErrorMessage": {
        0: "Własny komunikat o błędzie musi odwoływać się do poprawnego 'id', a po wyzwoleniu komunikat musi być odpowiednio wyeksponowany",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Własny komunikat o błędzie ma nieprawidłowe odniesienie 'id'",
        "Fail_2": "Własny komunikat o błędzie nie jest widoczny"
    },
    // JCH - DONE
    "HAAC_List_Group_ListItem": {
        0: "'Elementami potomnymi komponentu listy zbudowanego za pomocą atrybutu 'role=\"group\"' mogą być tylko elementy 'listitem'",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Komponent listy zbudowany za pomocą atrybutu 'role=\"group\"' ma dzieci, które nie są elementami 'listitem'"
    },
    // JCH - DONE
    "HAAC_ActiveDescendantCheck": {
        0: "Właściwość 'aria-activedescendant' musi odnosić się do 'id' niepustego nieukrytego aktywnego elementu potomnego.",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Właściwość 'aria-activedescendant' jest pusta",
        "Fail_2": "Właściwość 'aria-activedescendant' odnosi się do elementu ukrytego",
        "Fail_3": "Element nie jest komponentem złożonym (combobox), a element, do którego odwołuje się aktywny element potomny nie jest prawidłowym elementem potomnym",
        "Fail_4": "Element nie jest komponentem złożonym (combobox), a odnośny element active-descendant nie jest kontrolowany przez ten komponent"
    },
    // JCH - DONE
    "HAAC_Application_Role_Text": {
        0: "Niedekoracyjna  statyczna treść tekstowa i graficzna w ramach elementu z rolą \"application\" musi być dostępna",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy dostępna jest niedekoracyjna statyczna treść tekstowa lub obraz w ramach elementu z rolą \"application\""
    },
    // JCH - DONE
    "Rpt_Aria_MultipleToolbarUniqueLabel": {
        0: "Wszystkie komponenty na stronie z rolą muszą 'toolbar' mieć unikalne etykiety ",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Wiele komponentów z rolą 'toolbar' bez unikalnej etykiety"
    },
    "combobox_version": {
        0: "Wzorzec projektowy combobox musi być zgodny z WAI-ARIA 1.2.",
        "Pass_1.0": "Wykryto zastosowanie wzorca projektowego combobox z WAI-ARIA 1.0, co nie jest dozwolone przez WAI-ARIA 1.2",
        "Fail_1.1": "Wykryto zastosowanie wzorca projektowego combobox z WAI-ARIA 1.1, co nie jest dozwolone przez WAI-ARIA 1.2",
        "Pass_1.2": "Wykryto zastosowanie wzorca projektowego combobox z WAI-ARIA 1.2"
    },
    "combobox_popup_reference": {
        0: "Atrybut 'aria-controls' (dla WAI-ARIA 1.2) lub 'aria-owns' (dla WAI-ARIA 1.0) rozwiniętego combo musi odwoływać się do prawidłowej wartości 'id' wyskakującego okienka",
        "Pass_expanded": "Wyskakujące okienko kombi, do którego odwołuje się 'aria-controls' (WAI-ARIA 1.2) lub 'aria-owns' (WAI-ARIA 1.0) istnieje i jest widoczne",
        "Pass_collapsed": "Wyskakujące okienko kombi w stanie zwiniętym nie odwołuje się do żadnego widocznego wyskakującego okienka zgodnie z wymaganiami",
        "Fail_1.0_missing_owns": "Brak atrybutu 'aria-owns' w rozwiniętym polu kombi",
        "Fail_1.2_missing_controls": "Brak atrybutu 'aria-controls' w rozwiniętym polu kombi",
        "Fail_1.0_popup_reference_missing": "Atrybut 'aria-owns' \"{0}\" rozwiniętego combo nie odwołuje się do prawidłowej wartości 'id' wyskakującego okienka",
        "Fail_1.2_popup_reference_missing": "Atrybut 'aria-controls' \"{0}\" rozwiniętego pola combo nie odwołuje się do prawidłowej wartości 'id' wyskakującego okienka",
        "Fail_combobox_expanded_hidden": "Wartością atrybutu 'aria-expanded' combobox jest 'true', ale wyskakujące okienko combobox nie jest widoczne",
        "Fail_combobox_collapsed_visible": "Wartością atrybutu 'aria-expanded' combobox jest 'false', ale wyskakujące okienko combobox jest widoczne"
    },
    "combobox_haspopup": {
        0: "Wartość atrybutu 'aria-haspopup' w combobox musi być odpowiednia dla roli elementu, do którego odwołuje się 'aria-controls' (WAI-ARIA 1.2) lub 'aria-owns' (WAI-ARIA 1.0)",
        "Pass": "Wartość atrybutu 'aria-controls (WAI-ARIA 1.2) lub 'aria-owns' (WAI-ARIA 1.0) odpowiednio odwołuje się do prawidłowej wartości 'id' wyskakującego okienka",
        "Fail_popup_role_invalid": "Wartość 'role' \"{0}\" elementu wyskakującego \"{1}\" powinna być jedną z następujących: \"listbox\, \"grid\", \"tree\" lub \"dialog\"",
        "Fail_combobox_popup_role_mismatch": "Wartość atrybutu 'aria-haspopup' combobox \"{0}\" nie jest zgodna z wartością atrybutu 'role' elementu popup \"{1}\" "
    },    
    "combobox_focusable_elements": {
        0: "Fokus klawiatury wewnątrz combobox można ustawić tylko na polu wprowadzania tekstu, z wyjątkiem sytuacji, gdy używane jest okienko dialogowe",
        "Pass": "Fokus DOM jest dozwolony tylko na elemencie combobox, zgodnie z wymaganiami",
        "Fail_not_tabbable": "Element combobox nie pozwala na ustawianie fokusu DOM zgodnie z wymaganiami",
        "Fail_tabbable_child": "Wyskakujące okienko combo ma fokus DOM lub ma zdefiniowane 'aria-activedescendant', co jest niedozwolone"
    },
    "combobox_active_descendant": {
         0: "Do ustawienia fokusu w wyskakującym polu kombinowanym musi być użyta właściwość 'aria-activedescendant' z wyjątkiem sytuacji, gdy używasz wyskakującego okna",
        "Pass": "Właściwość 'aria-activedescendant' jest użyty odpowiednio dla tego comboboxa",
        "Fail_missing": "Element, do którego odwołuje się 'aria-activedescendant' \"{0}\" nie istnieje",
        "Fail_not_in_popup": "Element, do którego odwołuje się 'aria-activedescendant' \"{0}\" nie istnieje w oknie wyskakującym, do którego odwołuje się 'id' \"{1}\"",
        "Fail_active_role_invalid": "Element 'aria-activedescendant' \"{0}\" odnosi się do elementu z rolą \"{1}\", który nie ma poprawnej roli WAI-ARIA o wartości 'option', 'gridcell', 'row', lub 'treeitem'",
        "Fail_active_not_selected": "Element 'aria-activedescendant' \"{0}\" odnosi się do elementu, który nie ma  opcji 'aria-selected' ustawionej na wartość true",
    },
    "combobox_autocomplete": {
        0: "Pole kombinowane, które obsługuje funkcję autouzupełniania, musi mieć atrybut 'aria-autocomplete' z prawidłową wartością tylko w elemencie wprowadzania tekstu; wartość '\"inline\"' nie jest obsługiwana",
        "Pass": "Pole kombinowane nie używa w atrybucie 'aria-autocomplete' wartości '\"inline\"' ani nie ma zdefiniowanego 'aria-autocomplete' w wyskakującym okienku",
        "Fail_1": "Pole kombinowane ma nieprawidłowo ustawiony atrybut 'aria-autocomplete' dla elementu w wyskakującym okienku, do którego odwołuje się \"{0}\"",
        "Fail_inline": "Pole kombinowane nie obsługuje wartości atrybutu 'aria-autocomplete' ustawionej na '\"inline\"' "
    },
    // JCH - DONE
    "WCAG21_Style_Viewport": {
        0: "Tekst musi być skalowany do 200% bez utraty treści lub funkcjonalności",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Sprawdź, czy rozmiar tekstu za pomocą jednostek rozmiaru obszaru operacyjnego (viewport)  można zmienić aż do 200%"
    },
    // JCH - DONE
    "WCAG21_Label_Accessible": {
        0: "Dostępna nazwa musi być taka sama lub zawierać widoczny tekst etykiety",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Dostępna nazwa nie pasuje lub nie zawiera widocznego tekstu etykiety"
    },
    // JCH - DONE
    "WCAG21_Input_Autocomplete": {
        0: "Tokeny atrybutu 'autocomplete' w pola wejściowym formularza muszą być odpowiednie",
        "Pass_0": "Wymóg spełniony",
        "Fail_1": "Nieodpowiednie tokeny dla atrybutu 'autocomplete' w polu wejściowym formularza"
    },
    // JCH - DONE
    "WCAG20_Input_VisibleLabel": {
        0: "Element '<input>' musi mieć przypisaną widoczną etykietę",
        "Pass_0": "Wymóg spełniony",
        "Potential_1": "Element '<input>' nie ma przypisanej widocznej etykiety"
    }
}
export { a11yNls }
