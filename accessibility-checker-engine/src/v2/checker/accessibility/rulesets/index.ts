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

import { Ruleset } from "../../Checker";
import { eRulePolicy, eRuleCategory, eToolkitLevel} from "../../../api/IEngine";

let a11yRulesets: Ruleset[] = [
{
    id: "IBM_Accessibility",
    name: "IBM Accessibility",
    category: eRuleCategory.ACCESSIBILITY,
    description: "Reguły dla WCAG 2.1 AA oraz dodatkowe wymagania uzupełniające dla listy kontrolnej IBM.",
    "checkpoints": [
        {
            "num": "1.1.1",
            "name": "Treść nietekstowa",
            "wcagLevel": "A",
            "summary": "Wszystkie treści nietekstowe przedstawione użytkownikowi mają alternatywę tekstową, która służy równoważnemu celowi.",
            "rules": [
                {
                    id: "WCAG20_Input_ExplicitLabelImage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_UsemapValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Object_HasText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Applet_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_ExplicitLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Area_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_AltCommonMisuse",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_LongDescription2",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Img_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Pre_ASCIIArt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_AudioVideoAltFilename",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Style_BackgroundImage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Img_LinkTextNotRedundant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Img_TitleEmptyWhenAltNull",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Img_UsemapAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Text_Emoticons",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Img_PresentationImgHasNonNullAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Figure_label",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Media_AltBrief",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "WCAG20_Embed_HasNoEmbed",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                
                {
                    id: "RPT_Embed_HasAlt",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "RPT_Style_Trigger2",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_BackgroundImg_HasTextOrTitle",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "Valerie_Noembed_HasContent",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "HAAC_Canvas",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.1",
            "name": "Tylko audio lub tylko wideo (nagranie)",
            "wcagLevel": "A",
            "summary": "Dla mediów nagranych w systemie tylko audio lub tylko wideo, w alternatywny sposób zapewnione są równoważne informacje.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_AudioTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.2",
            "name": "Napisy rozszerzone (nagranie)",
            "wcagLevel": "A",
            "summary": "Do wszystkich nagrań audio w multimediach zsynchronizowanych zapewnione są napisy rozszerzone.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "1.2.3",
            "name": "Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)",
            "wcagLevel": "A",
            "summary": "Zapewniona jest alternatywa dla multimediów lub audiodeskrypcja dla nagrań wideo w multimediach zsynchronizowanych.",
            "rules": [
                {
                    id: "RPT_Media_VideoReferenceTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.4",
            "name": "Napisy rozszerzone (na żywo)",
            "wcagLevel": "AA",
            "summary": "Do wszystkich treści audio w multimediach zsynchronizowanych przekazywanych na żywo zapewnione są napisy rozszerzone.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_VideoObjectTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
            ]
        },
        {
            "num": "1.2.5",
            "name": "Audiodeskrypcja (nagranie)",
            "wcagLevel": "AA",
            "summary": "Zapewniona jest audiodeskrypcja dla wszystkich nagrań wideo w multimediach zsynchronizowanych.",
            "rules": [
                {
                    id: "RPT_Media_VideoReferenceTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.3.1",
            "name": "Informacje i relacje",
            "wcagLevel": "A",
            "summary": "Informacje, struktura oraz relacje między treściami przekazywane poprzez prezentację mogą być odczytane przez program komputerowy lub istnieją w postaci tekstu.",
            "rules": [
                {
                    id: "RPT_Headers_FewWords",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Blockquote_HasCite",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Blockquote_WrapsTextQuote",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Block_ShouldBeHeading",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Label_UniqueFor",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_List_UseMarkup",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Script_OnclickHTML1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Fieldset_HasLegend",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Table_CapSummRedundant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Table_Scope_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Input_RadioChkInFieldSet",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "Valerie_Caption_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Valerie_Caption_InTable",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Valerie_Table_DataCellRelationships",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Table_DataHeadingsAria",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Label_RefValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Style_BeforeAfter",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_List_Misuse",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Select_HasOptGroup",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Script_OnclickHTML2",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "WCAG20_Input_InFieldSet",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Table_LayoutTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "WCAG20_Table_Structure",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Table_SummaryAria3",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                
            ]
        },
        {
            "num": "1.3.2",
            "name": "Zrozumiała kolejność",
            "wcagLevel": "A",
            "summary": "Jeśli kolejność, w jakiej przedstawiona jest treść, ma znaczenie dla zrozumienia treści — prawidłowa kolejność odczytu musi być określona programowo.",
            "rules": [
                {
                    id: "Valerie_Elem_DirValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Text_LetterSpacing",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.3.3",
            "name": "Właściwości zmysłowe",
            "wcagLevel": "A",
            "summary": "Instrukcje co do zrozumienia i operowania treścią nie opierają się wyłącznie na właściwościach zmysłowych, takich jak: kształt, rozmiar, wzrokowa lokalizacja, orientacja w przestrzeni lub dźwięk.",
            "rules": [
                {
                    id: "RPT_Text_SensoryReference",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.3.4",
            "name": "Orientacja",
            "wcagLevel": "AA",
            "summary": "Treść nie ogranicza swojego widoku i działania do jednej orientacji wyświetlania, takiej jak pionowa lub pozioma.",
            "rules": []
        },
        {
            "num": "1.3.5",
            "name": "Określenie pożądanej wartości",
            "wcagLevel": "AA",
            "summary": "Cel każdego pola zbierającego informacje o użytkowniku może być programowo określony.",
            "rules": [
                {
                    id: "WCAG21_Input_Autocomplete",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.4.1",
            "name": "Użycie koloru",
            "wcagLevel": "A",
            "summary": "Kolor nie jest wykorzystywany jako jedyny wizualny sposób przekazywania informacji, wskazywania czynności do wykonania lub oczekiwania na odpowiedź, czy też wyróżniania elementów wizualnych.",
            "rules": [
                {
                    id: "RPT_Font_ColorInForm",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Style_ColorSemantics1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.4.2",
            "name": "Kontrola odtwarzania dźwięku",
            "wcagLevel": "A",
            "summary": "Jeśli jakieś nagranie audio włącza się automatycznie na danej stronie i jest odtwarzane przez okres dłuższy niż 3 sekundy, istnieje mechanizm umożliwiający przerwanie lub wyłączenie nagrania albo mechanizm kontrolujący poziom głośności niezależnie od poziomu głośności całego systemu.",
            "rules": [
                {
                    id: "RPT_Embed_AutoStart",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.4.3",
            "name": "Kontrast (minimalny)",
            "wcagLevel": "AA",
            "summary": "Wizualna prezentacja tekstu lub obrazu tekstu posiada współczynnik kontrastu wynoszący 4,5:1 w przypadku zwykłego tekstu, a 3:1 w przypadku dużego tekstu.",
            "rules": [
                {
                    id: "IBMA_Color_Contrast_WCAG2AA",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "IBMA_Color_Contrast_WCAG2AA_PV",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "1.4.4",
            "name": "Zmiana rozmiaru tekstu",
            "wcagLevel": "AA",
            "summary": "Rozmiar tekstu może zostać powiększony do 200% bez użycia technologii wspomagających oraz bez utraty treści lub funkcjonalności.",
            "rules": [
                {
                    id: "WCAG21_Style_Viewport",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.4.5",
            "name": "Obrazy tekstu",
            "wcagLevel": "AA",
            "summary": "Jeśli wykorzystywane technologie mogą przedstawiać treść wizualnie, do przekazywania informacji wykorzystuje się tekst, a nie obraz tekstu.",
            "rules": []
        },
        {
            "num": "1.4.10",
            "name": "Dopasowanie do ekranu",
            "wcagLevel": "AA",
            "summary": "Treść może być prezentowana bez utraty informacji lub funkcjonalności, bez konieczności przewijania w dwóch wymiarach.",
            "rules": []
        },
        {
            "num": "1.4.11",
            "name": "Kontrast elementów nietekstowych",
            "wcagLevel": "AA",
            "summary": "Części obiektów graficznych wymagane do zrozumienia treści oraz informacje wizualne wymagane do zidentyfikowania komponentów i stanów interfejsu użytkownika mają współczynnik kontrastu wynoszący co najmniej 3:1 względem sąsiednich kolorów.",
            "rules": []
        },
        {
            "num": "1.4.12",
            "name": "Odstępy w tekście",
            "wcagLevel": "AA",
            "summary": "Zmiana odstępów między literami, wyrazami i akapitami, a także wysokości wiersza nie powoduje utraty treści ani funkcjonalności.",
            "rules": []
        },
        {
            "num": "1.4.13",
            "name": "Treść spod kursora lub fokusu",
            "wcagLevel": "AA",
            "summary": "Gdy jakaś treść staje się widoczna po otrzymaniu kursora lub fokusu klawiatury, dodatkowa treść może być odrzucona, wskazana kursorem lub pozostaje widoczna do usunięcia wskazania lub gdy przestaje być ważna.",
            "rules": []
        },
        {
            "num": "2.1.1",
            "name": "Klawiatura",
            "wcagLevel": "A",
            "summary": "Wszystkie funkcjonalności w treści są obsługiwane za pomocą interfejsu klawiatury, bez wymogu określonego czasu użycia poszczególnych klawiszy.",
            "rules": [
                {
                    id: "RPT_Elem_EventMouseAndKey",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_InvalidTabindexForActivedescendant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MissingFocusableChild",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MissingKeyboardHandler",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Audio_Video_Trigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "HAAC_Application_Role_Text",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.1.2",
            "name": "Bez pułapki na klawiaturę",
            "wcagLevel": "A",
            "summary": "Jeśli fokus klawiatury można przemieścić do danego komponentu treści za pomocą interfejsu klawiatury, to może on być z niego usunięty również za pomocą interfejsu klawiatury, a jeśli wymagane jest użycie czegoś więcej niż tylko strzałek, tabulatora lub innych standardowych metod wyjścia, użytkownik musi otrzymać odpowiednią podpowiedź, w jaki sposób usunąć fokus z danego komponentu.",
            "rules": [
                {
                    id: "HAAC_Media_DocumentTrigger2",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.1.4",
            "name": "Jednoznakowe skróty klawiaturowe",
            "wcagLevel": "A",
            "summary": "Jeśli skrót klawiaturowy jest zaimplementowany w treści tylko przy użyciu jednego znaku (litery, w tym wielkiej i małej, cyfry lub symbolu), to skrót można wyłączyć, przemapować lub aktywować tylko, gdy komponent ma fokus.",
            "rules": []
        },
        {
            "num": "2.2.1",
            "name": "Dostosowanie czasu",
            "wcagLevel": "A",
            "summary": "Gdy czas korzystania z treści jest ograniczany, użytkownik może wyłączyć, dostosować lub przedłużyć limit.",
            "rules": [
                {
                    id: "RPT_Meta_Refresh",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Meta_RedirectZero",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "2.2.2",
            "name": "Pauza, zatrzymanie, ukrycie",
            "wcagLevel": "A",
            "summary": "Gdy treść się porusza, migocze, przesuwa lub jest automatycznie aktualizowana, użytkownik może wstrzymać, zatrzymać, ukryć lub dostosować częstość aktualizacji.",
            "rules": [
                {
                    id: "RPT_Marquee_Trigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Blink_AlwaysTrigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Blink_CSSTrigger1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "2.3.1",
            "name": "Trzy błyski lub wartości poniżej progu",
            "wcagLevel": "A",
            "summary": "Treść nie zawiera niczego, co błyska częściej niż trzy razy w ciągu jednej sekundy, lub też błysk nie przekracza wartości granicznych dla błysków ogólnych i czerwonych.",
            "rules": []
        },
        {
            "num": "2.4.1",
            "name":"Możliwość pominięcia bloków",
            "wcagLevel": "A",
            "summary": "Istnieje mechanizm, który umożliwia pominięcie bloków treści powtarzanych na wielu stronach internetowych.",
            "rules": [
                {
                    id: "WCAG20_Frame_HasTitle",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Html_SkipNav",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Valerie_Frame_SrcHtml",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleSearchLandmarks",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ComplementaryLandmarkLabel_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleApplicationLandmarks",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ApplicationLandmarkLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleDocumentRoles",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Body_FirstASkips_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Body_FirstAContainsSkipText_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_OrphanedContent_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_RegionLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleMainsVisibleLabel_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleBannerLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleComplementaryLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleContentinfoLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleFormLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleNavigationLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleArticleRoles_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleGroupRoles_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleContentinfoInSiblingSet_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_OneBannerInSiblingSet_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ContentinfoWithNoMain_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ComplementaryRequiredLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleRegionsUniqueLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleMainsRequireLabel_Implicit_2",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "2.4.2",
            "name": "Tytuły stron",
            "wcagLevel": "A",
            "summary": "Strony internetowe, dokumenty inne niż internetowe i oprogramowanie mają tytuły, które opisują ich cel lub przedstawiają ich temat.",
            "rules": [
                {
                    id: "WCAG20_Doc_HasTitle",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Title_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.4.3",
            "name": "Kolejność fokusu",
            "wcagLevel": "A",
            "summary": "Jeśli po treści można nawigować sekwencyjnie, a kolejność nawigacji wpływa na zrozumienie lub funkcjonalność strony, komponenty przyjmują fokus w kolejności, dzięki której zachowany jest sens i funkcjonalność treści.",
            "rules": []
        },
        {
            "num": "2.4.4",
            "name": "Cel łącza (w kontekście)",
            "wcagLevel": "A",
            "summary": "Cel każdego łącza można określić na podstawie samej treści łącza lub treści tekstu powiązanego z kontekstem łącza określonym programowo.",
            "rules": [
                {
                    id: "WCAG20_A_HasText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "2.4.5",
            "name": "Wiele dróg",
            "wcagLevel": "AA",
            "summary": "Istnieje więcej niż jeden sposób umożliwiający zlokalizowanie strony internetowej w zestawie stron internetowych, z wyjątkiem sytuacji, kiedy dana strona jest wynikiem jakiejś procedury lub jednym z jej etapów.",
            "rules": []
        },
        {
            "num": "2.4.6",
            "name": "Nagłówki i etykiety",
            "wcagLevel": "AA",
            "summary": "Nagłówki i etykiety opisują temat lub cel treści.",
            "rules": [
                {
                    id: "RPT_Header_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.4.7",
            "name": "Widoczny fokus",
            "wcagLevel": "AA",
            "summary": "Każdy interfejs posiadający możliwość obsługi przy pomocy klawiatury ma tryb obsługi, w którym fokus klawiatury jest stale widoczny.",
            "rules": [
                {
                    id: "RPT_Style_HinderFocus1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Script_FocusBlurs",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.5.1",
            "name": "Gesty dotykowe",
            "wcagLevel": "A",
            "summary": "Wszystkie funkcjonalności wykorzystujące do obsługi gesty wielopunktowe lub oparte na ścieżkach mogą być obsługiwane za pomocą dotyku jednopunktowego bez gestu opartego na ścieżce.",
            "rules": []
        },
        {
            "num": "2.5.2",
            "name": "Rezygnacja ze wskazania",
            "wcagLevel": "A",
            "summary": "W przypadku funkcjonalności, które są wywoływane za pomocą dotyku jednopunktowego, zakończenie funkcjonalności następuje wskutek zwolnienia nacisku albo może być przerwane lub cofnięte.",
            "rules": []
        },
        {
            "num": "2.5.3",
            "name": "Etykieta w nazwie",
            "wcagLevel": "A",
            "summary": "W przypadku komponentów interfejsu użytkownika z etykietami zawierającymi tekst lub obrazy tekstu, nazwa zawiera tekst, który jest prezentowany wizualnie.",
            "rules": [
                {
                    id: "WCAG21_Label_Accessible",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "2.5.4",
            "name": "Aktywowanie ruchem",
            "wcagLevel": "A",
            "summary": "Funkcjonalność, którą można obsługiwać za pomocą ruchu urządzenia lub ruchu użytkownika, można również obsługiwać za pomocą komponentów interfejsu użytkownika, a reagowanie na ruch można wyłączyć.",
            "rules": []
        },
        {
            "num": "3.1.1",
            "name": "Język strony",
            "wcagLevel": "A",
            "summary": "Domyślny język naturalny każdej strony internetowej może zostać odczytany przez program komputerowy.",
            "rules": [
                {
                    id: "WCAG20_Html_HasLang",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.1.2",
            "name": "Język części",
            "wcagLevel": "AA",
            "summary": "Język naturalny każdej innojęzycznej części lub frazy zawartej w treści może zostać odczytany przez program komputerowy.",
            "rules": [
                {
                    id: "WCAG20_Elem_Lang_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "3.2.1",
            "name": "Po otrzymaniu fokusu",
            "wcagLevel": "A",
            "summary": "Przyjęcie fokusu przez dowolny komponent interfejsu użytkownika nie powoduje nieoczekiwanej zmiany kontekstu.",
            "rules": [
                {
                    id: "WCAG20_Select_NoChangeAction",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Script_FocusBlurs",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.2.2",
            "name": "Podczas wprowadzania danych",
            "wcagLevel": "A",
            "summary": "Zmiana ustawień jakiegokolwiek komponentu interfejsu użytkownika nie powoduje automatycznej zmiany kontekstu, chyba, że użytkownik został poinformowany o takim działaniu, zanim zaczął korzystać z komponentu.",
            "rules": [
                {
                    id: "WCAG20_A_TargetAndText",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Form_HasSubmit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Form_TargetAndText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Input_HasOnchange",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Form_ChangeEmpty",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "3.2.3",
            "name": "Spójna nawigacja",
            "wcagLevel": "AA",
            "summary": "Mechanizmy nawigacji, które powtarzają się na wielu stronach internetowych w ramach jednego zestawu stron internetowych, występują w tej samej względnej kolejności za każdym razem, gdy są powtarzane, chyba że zmiana jest inicjowana przez użytkownika.",
            "rules": []
        },
        {
            "num": "3.2.4",
            "name": "Spójna identyfikacja",
            "wcagLevel": "AA",
            "summary": "Komponenty, które mają tę samą funkcjonalność w ramach jednego zestawu stron internetowych, są w taki sam sposób zidentyfikowane.",
            "rules": []
        },
        {
            "num": "3.3.1",
            "name": "Identyfikacja błędu",
            "wcagLevel": "A",
            "summary": "Jeśli automatycznie zostanie wykryty błąd wprowadzania danych, system wskazuje błędny element, a użytkownik otrzymuje opis błędu w postaci tekstu.",
            "rules": [
                {
                    id: "HAAC_Aria_ErrorMessage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.3.2",
            "name": "Etykiety lub instrukcje",
            "wcagLevel": "A",
            "summary": "Gdy w treści wymagane jest wprowadzenie danych przez użytkownika, zapewnione są etykiety lub instrukcje.",
            "rules": [
                {
                    id: "WCAG20_Input_LabelBefore",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_LabelAfter",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Accesskey_NeedLabel",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_Or_HTML5_Attr",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Input_Placeholder",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_VisibleLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
            ]
        },
        {
            "num": "3.3.3",
            "name": "Sugestie korekty błędów",
            "wcagLevel": "AA",
            "summary": "Jeśli automatycznie zostanie wykryty błąd wprowadzania danych i znane są sugestie korekty, wtedy użytkownik otrzymuje takie sugestie, chyba, że zagrażałoby to bezpieczeństwu treści lub zmieniło jej cel.",
            "rules": []
        },
        {
            "num": "3.3.4",
            "name": "Zapobieganie błędom (prawnym, finansowym, w danych)",
            "wcagLevel": "AA",
            "summary": "W przypadku treści, które powodują zobowiązania prawne, albo na których użytkownik przeprowadza transakcje finansowe, modyfikuje lub usuwa dane w systemach przechowywania danych, nad którymi ma kontrolę, albo udziela odpowiedzi na testy, użytkownik może cofnąć, poprawić lub potwierdzić działanie.",
            "rules": []
        },
        {
            "num": "4.1.1",
            "name": "Poprawność kodu",
            "wcagLevel": "A",
            "summary": "W treści wprowadzonej przy użyciu języka znaczników, elementy posiadają kompletne znaczniki początkowe i końcowe, elementy są zagnieżdżane według swoich specyfikacji, nie posiadają zduplikowanych atrybutów, a wszystkie ID są unikalne, z wyjątkiem przypadków, kiedy specyfikacja zezwala na wyżej wymienione cechy.",
            "rules": [
                {
                    id: "RPT_Elem_UniqueId",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Elem_UniqueAccessKey",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "4.1.2",
            "name": "Nazwa, rola, wartość",
            "wcagLevel": "A",
            "summary": "Dla wszystkich komponentów interfejsu użytkownika (w tym, ale nie tylko, elementów formularzy, łączy oraz komponentów wygenerowanych przez skrypty) nazwa oraz rola mogą być określone programowo; stan, właściwości oraz wartości, które mogą być ustawione przez użytkownika, mogą również być ustawione programowo; powiadomienie o zmianach w tych elementach dostępne jest dla programów użytkownika, w tym technologii wspomagających.",
            "rules": [
                {
                    id: "WCAG20_Input_ExplicitLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Valerie_Label_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidRole",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "table_aria_descendants",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidPropertyValue",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidIdRef",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredProperties",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_EmptyPropertyValue",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidProperty",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_ImgAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_SvgAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Canvas",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "aria_semantics_role",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "aria_semantics_attribute",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredChildren_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredParent_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_EventHandlerMissingRole_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_WidgetLabels_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_List_Group_ListItem",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_ActiveDescendantCheck",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MultipleToolbarUniqueLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_version",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_popup_reference",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_haspopup",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_focusable_elements",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_active_descendant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_autocomplete",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        }
    ]    
},
{
    id: "WCAG_2_1",
    name: "WCAG 2.1 (A, AA)",
    category: eRuleCategory.ACCESSIBILITY,
    description: "Reguły dla WCAG 2.1 AA. Jest to aktualne zalecenie W3C. Treść, która jest zgodna z WCAG 2.1 jest również zgodna z WCAG 2.0.", 
    "checkpoints": [
        {
            "num": "1.1.1",
            "name": "Treść nietekstowa",
            "wcagLevel": "A",
            "summary": "Wszystkie treści nietekstowe przedstawione użytkownikowi mają alternatywę tekstową, która służy równoważnemu celowi.",
            "rules": [
                {
                    id: "WCAG20_Input_ExplicitLabelImage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_UsemapValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Object_HasText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Applet_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_ExplicitLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Area_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_AltCommonMisuse",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_LongDescription2",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Img_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Pre_ASCIIArt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_AudioVideoAltFilename",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Style_BackgroundImage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Img_LinkTextNotRedundant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Img_TitleEmptyWhenAltNull",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Img_UsemapAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Text_Emoticons",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Img_PresentationImgHasNonNullAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Figure_label",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Media_AltBrief",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Embed_HasNoEmbed",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                
                {
                    id: "RPT_Embed_HasAlt",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "RPT_Style_Trigger2",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_BackgroundImg_HasTextOrTitle",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "Valerie_Noembed_HasContent",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "HAAC_Canvas",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.1",
            "name": "Tylko audio lub tylko wideo (nagranie)",
            "wcagLevel": "A",
            "summary": "Dla mediów nagranych w systemie tylko audio lub tylko wideo, w alternatywny sposób zapewnione są równoważne informacje.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_AudioTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.2",
            "name": "Napisy rozszerzone (nagranie)",
            "wcagLevel": "A",
            "summary": "Do wszystkich nagrań audio w multimediach zsynchronizowanych zapewnione są napisy rozszerzone.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "1.2.3",
            "name": "Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)",
            "wcagLevel": "A",
            "summary": "Zapewniona jest alternatywa dla multimediów lub audiodeskrypcja dla nagrań wideo w multimediach zsynchronizowanych.",
            "rules": [
                {
                    id: "RPT_Media_VideoReferenceTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.4",
            "name": "Napisy rozszerzone (na żywo)",
            "wcagLevel": "AA",
            "summary": "Do wszystkich treści audio w multimediach zsynchronizowanych przekazywanych na żywo zapewnione są napisy rozszerzone.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_VideoObjectTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
            ]
        },
        {
            "num": "1.2.5",
            "name": "Audiodeskrypcja (nagranie)",
            "wcagLevel": "AA",
            "summary": "Zapewniona jest audiodeskrypcja dla wszystkich nagrań wideo w multimediach zsynchronizowanych.",
            "rules": [
                {
                    id: "RPT_Media_VideoReferenceTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.3.1",
            "name": "Informacje i relacje",
            "wcagLevel": "A",
            "summary": "Informacje, struktura oraz relacje między treściami przekazywane poprzez prezentację mogą być odczytane przez program komputerowy lub istnieją w postaci tekstu.",
            "rules": [
                {
                    id: "RPT_Headers_FewWords",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Blockquote_HasCite",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Blockquote_WrapsTextQuote",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Block_ShouldBeHeading",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Label_UniqueFor",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_List_UseMarkup",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Script_OnclickHTML1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Fieldset_HasLegend",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Table_CapSummRedundant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Table_Scope_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Input_RadioChkInFieldSet",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "Valerie_Caption_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Valerie_Caption_InTable",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Valerie_Table_DataCellRelationships",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Table_DataHeadingsAria",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Label_RefValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Style_BeforeAfter",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_List_Misuse",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Select_HasOptGroup",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Script_OnclickHTML2",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "WCAG20_Input_InFieldSet",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Table_LayoutTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "WCAG20_Table_Structure",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Table_SummaryAria3",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                
            ]
        },
        {
            "num": "1.3.2",
            "name": "Zrozumiała kolejność",
            "wcagLevel": "A",
            "summary": "Jeśli kolejność, w jakiej przedstawiona jest treść, ma znaczenie dla zrozumienia treści — prawidłowa kolejność odczytu musi być określona programowo.",
            "rules": [
                {
                    id: "Valerie_Elem_DirValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Text_LetterSpacing",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.3.3",
            "name": "Właściwości zmysłowe",
            "wcagLevel": "A",
            "summary": "Instrukcje co do zrozumienia i operowania treścią nie opierają się wyłącznie na właściwościach zmysłowych, takich jak: kształt, rozmiar, wzrokowa lokalizacja, orientacja w przestrzeni lub dźwięk.",
            "rules": [
                {
                    id: "RPT_Text_SensoryReference",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.3.4",
            "name": "Orientacja",
            "wcagLevel": "A",
            "summary": "Treść nie ogranicza swojego widoku i działania do jednej orientacji wyświetlania, takiej jak pionowa lub pozioma.",
            "rules": []
        },
        {
            "num": "1.3.5",
            "name": "Określenie pożądanej wartości",
            "wcagLevel": "AA",
            "summary": "Cel każdego pola zbierającego informacje o użytkowniku może być programowo określony.",
            "rules": [
                {
                    id: "WCAG21_Input_Autocomplete",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.4.1",
            "name": "Użycie koloru",
            "wcagLevel": "A",
            "summary": "Kolor nie jest wykorzystywany jako jedyny wizualny sposób przekazywania informacji, wskazywania czynności do wykonania lub oczekiwania na odpowiedź, czy też wyróżniania elementów wizualnych.",
            "rules": [
                {
                    id: "RPT_Font_ColorInForm",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Style_ColorSemantics1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.4.2",
            "name": "Kontrola odtwarzania dźwięku",
            "wcagLevel": "A",
            "summary": "Jeśli jakieś nagranie audio włącza się automatycznie na danej stronie i jest odtwarzane przez okres dłuższy niż 3 sekundy, istnieje mechanizm umożliwiający przerwanie lub wyłączenie nagrania albo mechanizm kontrolujący poziom głośności niezależnie od poziomu głośności całego systemu.",
            "rules": [
                {
                    id: "RPT_Embed_AutoStart",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.4.3",
            "name": "Kontrast (minimalny)",
            "wcagLevel": "AA",
            "summary": "Wizualna prezentacja tekstu lub obrazu tekstu posiada współczynnik kontrastu wynoszący 4,5:1 w przypadku zwykłego tekstu, a 3:1 w przypadku dużego tekstu.",
            "rules": [
                {
                    id: "IBMA_Color_Contrast_WCAG2AA",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "IBMA_Color_Contrast_WCAG2AA_PV",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "1.4.4",
            "name": "Zmiana rozmiaru tekstu",
            "wcagLevel": "AA",
            "summary": "Rozmiar tekstu może zostać powiększony do 200% bez użycia technologii wspomagających oraz bez utraty treści lub funkcjonalności.",
            "rules": [
                {
                    id: "WCAG21_Style_Viewport",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.4.5",
            "name": "Obrazy tekstu",
            "wcagLevel": "AA",
            "summary": "Jeśli wykorzystywane technologie mogą przedstawiać treść wizualnie, do przekazywania informacji wykorzystuje się tekst, a nie obraz tekstu.",
            "rules": []
        },
        {
            "num": "1.4.10",
            "name": "Dopasowanie do ekranu",
            "wcagLevel": "AA",
            "summary": "Treść może być prezentowana bez utraty informacji lub funkcjonalności, bez konieczności przewijania w dwóch wymiarach.",
            "rules": []
        },
        {
            "num": "1.4.11",
            "name": "Kontrast elementów nietekstowych",
            "wcagLevel": "AA",
            "summary": "Części obiektów graficznych wymagane do zrozumienia treści oraz informacje wizualne wymagane do zidentyfikowania komponentów i stanów interfejsu użytkownika mają współczynnik kontrastu wynoszący co najmniej 3:1 względem sąsiednich kolorów.",
            "rules": []
        },
        {
            "num": "1.4.12",
            "name": "Odstępy w tekście",
            "wcagLevel": "AA",
            "summary": "Zmiana odstępów między literami, wyrazami i akapitami, a także wysokości wiersza nie powoduje utraty treści ani funkcjonalności.",
            "rules": []
        },
        {
            "num": "1.4.13",
            "name": "Treść spod kursora lub fokusu",
            "wcagLevel": "AA",
            "summary": "Gdy jakaś treść staje się widoczna po otrzymaniu kursora lub fokusu klawiatury, dodatkowa treść może być odrzucona, wskazana kursorem lub pozostaje widoczna do usunięcia wskazania lub gdy przestaje być ważna.",
            "rules": []
        },
        {
            "num": "2.1.1",
            "name": "Klawiatura",
            "wcagLevel": "A",
            "summary": "Wszystkie funkcjonalności w treści są obsługiwane za pomocą interfejsu klawiatury, bez wymogu określonego czasu użycia poszczególnych klawiszy.",
            "rules": [
                {
                    id: "RPT_Elem_EventMouseAndKey",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_InvalidTabindexForActivedescendant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MissingFocusableChild",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MissingKeyboardHandler",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Audio_Video_Trigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "HAAC_Application_Role_Text",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.1.2",
            "name": "Bez pułapki na klawiaturę",
            "wcagLevel": "A",
            "summary": "Jeśli fokus klawiatury można przemieścić do danego komponentu treści za pomocą interfejsu klawiatury, to może on być z niego usunięty również za pomocą interfejsu klawiatury, a jeśli wymagane jest użycie czegoś więcej niż tylko strzałek, tabulatora lub innych standardowych metod wyjścia, użytkownik musi otrzymać odpowiednią podpowiedź, w jaki sposób usunąć fokus z danego komponentu.",
            "rules": [
                {
                    id: "HAAC_Media_DocumentTrigger2",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.1.4",
            "name": "Jednoznakowe skróty klawiaturowe",
            "wcagLevel": "A",
            "summary": "Jeśli skrót klawiaturowy jest zaimplementowany w treści tylko przy użyciu jednego znaku (litery, w tym wielkiej i małej, cyfry lub symbolu), to skrót można wyłączyć, przemapować lub aktywować tylko, gdy komponent ma fokus.",
            "rules": []
        },
        {
            "num": "2.2.1",
            "name": "Dostosowanie czasu",
            "wcagLevel": "A",
            "summary": "Gdy czas korzystania z treści jest ograniczany, użytkownik może wyłączyć, dostosować lub przedłużyć limit.",
            "rules": [
                {
                    id: "RPT_Meta_Refresh",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Meta_RedirectZero",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "2.2.2",
            "name": "Pauza, zatrzymanie, ukrycie",
            "wcagLevel": "A",
            "summary": "Gdy treść się porusza, migocze, przesuwa lub jest automatycznie aktualizowana, użytkownik może wstrzymać, zatrzymać, ukryć lub dostosować częstość aktualizacji.",
            "rules": [
                {
                    id: "RPT_Marquee_Trigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Blink_AlwaysTrigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Blink_CSSTrigger1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "2.3.1",
            "name": "Trzy błyski lub wartości poniżej progu",
            "wcagLevel": "A",
            "summary": "Treść nie zawiera niczego, co błyska częściej niż trzy razy w ciągu jednej sekundy, lub też błysk nie przekracza wartości granicznych dla błysków ogólnych i czerwonych.",
            "rules": []
        },
        {
            "num": "2.4.1",
            "name":"Możliwość pominięcia bloków",
            "wcagLevel": "A",
            "summary": "Istnieje mechanizm, który umożliwia pominięcie bloków treści powtarzanych na wielu stronach internetowych.",
            "rules": [
                {
                    id: "WCAG20_Frame_HasTitle",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Html_SkipNav",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Valerie_Frame_SrcHtml",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleSearchLandmarks",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ComplementaryLandmarkLabel_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleApplicationLandmarks",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ApplicationLandmarkLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleDocumentRoles",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Body_FirstASkips_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Body_FirstAContainsSkipText_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_OrphanedContent_Native_Host_Sematics",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_RegionLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleMainsVisibleLabel_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleBannerLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleComplementaryLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleContentinfoLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleFormLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleNavigationLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleArticleRoles_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleGroupRoles_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleContentinfoInSiblingSet_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_OneBannerInSiblingSet_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ContentinfoWithNoMain_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ComplementaryRequiredLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleRegionsUniqueLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleMainsRequireLabel_Implicit_2",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "2.4.2",
            "name": "Tytuły stron",
            "wcagLevel": "A",
            "summary": "Strony internetowe, dokumenty inne niż internetowe i oprogramowanie mają tytuły, które opisują ich cel lub przedstawiają ich temat.",
            "rules": [
                {
                    id: "WCAG20_Doc_HasTitle",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Title_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.4.3",
            "name": "Kolejność fokusu",
            "wcagLevel": "A",
            "summary": "Jeśli po treści można nawigować sekwencyjnie, a kolejność nawigacji wpływa na zrozumienie lub funkcjonalność strony, komponenty przyjmują fokus w kolejności, dzięki której zachowany jest sens i funkcjonalność treści.",
            "rules": []
        },
        {
            "num": "2.4.4",
            "name": "Cel łącza (w kontekście)",
            "wcagLevel": "A",
            "summary": "Cel każdego łącza można określić na podstawie samej treści łącza lub treści tekstu powiązanego z kontekstem łącza określonym programowo.",
            "rules": [
                {
                    id: "WCAG20_A_HasText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "2.4.5",
            "name": "Wiele dróg",
            "wcagLevel": "AA",
            "summary": "Istnieje więcej niż jeden sposób umożliwiający zlokalizowanie strony internetowej w zestawie stron internetowych, z wyjątkiem sytuacji, kiedy dana strona jest wynikiem jakiejś procedury lub jednym z jej etapów.",
            "rules": []
        },
        {
            "num": "2.4.6",
            "name": "Nagłówki i etykiety",
            "wcagLevel": "AA",
            "summary": "Nagłówki i etykiety opisują temat lub cel treści.",
            "rules": [
                {
                    id: "RPT_Header_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.4.7",
            "name": "Widoczny fokus",
            "wcagLevel": "AA",
            "summary": "Każdy interfejs posiadający możliwość obsługi przy pomocy klawiatury ma tryb obsługi, w którym fokus klawiatury jest stale widoczny.",
            "rules": [
                {
                    id: "RPT_Style_HinderFocus1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Script_FocusBlurs",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.5.1",
            "name": "Gesty dotykowe",
            "wcagLevel": "A",
            "summary": "Wszystkie funkcjonalności wykorzystujące do obsługi gesty wielopunktowe lub oparte na ścieżkach mogą być obsługiwane za pomocą dotyku jednopunktowego bez gestu opartego na ścieżce.",
            "rules": []
        },
        {
            "num": "2.5.2",
            "name": "Rezygnacja ze wskazania",
            "wcagLevel": "A",
            "summary": "W przypadku funkcjonalności, które są wywoływane za pomocą dotyku jednopunktowego, zakończenie funkcjonalności następuje wskutek zwolnienia nacisku albo może być przerwane lub cofnięte.",
            "rules": []
        },
        {
            "num": "2.5.3",
            "name": "Etykieta w nazwie",
            "wcagLevel": "A",
            "summary": "W przypadku komponentów interfejsu użytkownika z etykietami zawierającymi tekst lub obrazy tekstu, nazwa zawiera tekst, który jest prezentowany wizualnie.",
            "rules": [
                {
                    id: "WCAG21_Label_Accessible",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "2.5.4",
            "name": "Aktywowanie ruchem",
            "wcagLevel": "A",
            "summary": "Funkcjonalność, którą można obsługiwać za pomocą ruchu urządzenia lub ruchu użytkownika, można również obsługiwać za pomocą komponentów interfejsu użytkownika, a reagowanie na ruch można wyłączyć.",
            "rules": []
        },
        {
            "num": "3.1.1",
            "name": "Język strony",
            "wcagLevel": "A",
            "summary": "Domyślny język naturalny każdej strony internetowej może zostać odczytany przez program komputerowy.",
            "rules": [
                {
                    id: "WCAG20_Html_HasLang",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.1.2",
            "name": "Język części",
            "wcagLevel": "AA",
            "summary": "Język naturalny każdej innojęzycznej części lub frazy zawartej w treści może zostać odczytany przez program komputerowy.",
            "rules": [
                {
                    id: "WCAG20_Elem_Lang_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "3.2.1",
            "name": "Po otrzymaniu fokusu",
            "wcagLevel": "A",
            "summary": "Przyjęcie fokusu przez dowolny komponent interfejsu użytkownika nie powoduje nieoczekiwanej zmiany kontekstu.",
            "rules": [
                {
                    id: "WCAG20_Select_NoChangeAction",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Script_FocusBlurs",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.2.2",
            "name": "Podczas wprowadzania danych",
            "wcagLevel": "A",
            "summary": "Zmiana ustawień jakiegokolwiek komponentu interfejsu użytkownika nie powoduje automatycznej zmiany kontekstu, chyba, że użytkownik został poinformowany o takim działaniu, zanim zaczął korzystać z komponentu.",
            "rules": [
                {
                    id: "WCAG20_A_TargetAndText",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Form_HasSubmit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Form_TargetAndText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Input_HasOnchange",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Form_ChangeEmpty",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "3.2.3",
            "name": "Spójna nawigacja",
            "wcagLevel": "AA",
            "summary": "Mechanizmy nawigacji, które powtarzają się na wielu stronach internetowych w ramach jednego zestawu stron internetowych, występują w tej samej względnej kolejności za każdym razem, gdy są powtarzane, chyba że zmiana jest inicjowana przez użytkownika.",
            "rules": []
        },
        {
            "num": "3.2.4",
            "name": "Spójna identyfikacja",
            "wcagLevel": "AA",
            "summary": "Komponenty, które mają tę samą funkcjonalność w ramach jednego zestawu stron internetowych, są w taki sam sposób zidentyfikowane.",
            "rules": []
        },
        {
            "num": "3.3.1",
            "name": "Identyfikacja błędu",
            "wcagLevel": "A",
            "summary": "Jeśli automatycznie zostanie wykryty błąd wprowadzania danych, system wskazuje błędny element, a użytkownik otrzymuje opis błędu w postaci tekstu.",
            "rules": [
                {
                    id: "HAAC_Aria_ErrorMessage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.3.2",
            "name": "Etykiety lub instrukcje",
            "wcagLevel": "A",
            "summary": "Gdy w treści wymagane jest wprowadzenie danych przez użytkownika, zapewnione są etykiety lub instrukcje.",
            "rules": [
                {
                    id: "WCAG20_Input_LabelBefore",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_LabelAfter",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Accesskey_NeedLabel",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_Or_HTML5_Attr",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Input_Placeholder",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_VisibleLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
            ]
        },
        {
            "num": "3.3.3",
            "name": "Sugestie korekty błędów",
            "wcagLevel": "AA",
            "summary": "Jeśli automatycznie zostanie wykryty błąd wprowadzania danych i znane są sugestie korekty, wtedy użytkownik otrzymuje takie sugestie, chyba, że zagrażałoby to bezpieczeństwu treści lub zmieniło jej cel.",
            "rules": []
        },
        {
            "num": "3.3.4",
            "name": "Zapobieganie błędom (prawnym, finansowym, w danych)",
            "wcagLevel": "AA",
            "summary": "W przypadku treści, , które powodują zobowiązania prawne, albo na których użytkownik przeprowadza transakcje finansowe, modyfikuje lub usuwa dane w systemach przechowywania danych, nad którymi ma kontrolę, albo udziela odpowiedzi na testy, użytkownik może cofnąć, poprawić lub potwierdzić działanie.",
            "rules": []
        },
        {
            "num": "4.1.1",
            "name": "Poprawność kodu",
            "wcagLevel": "A",
            "summary": "W treści wprowadzonej przy użyciu języka znaczników, elementy posiadają kompletne znaczniki początkowe i końcowe, elementy są zagnieżdżane według swoich specyfikacji, nie posiadają zduplikowanych atrybutów, a wszystkie ID są unikalne, z wyjątkiem przypadków, kiedy specyfikacja zezwala na wyżej wymienione cechy.",
            "rules": [
                {
                    id: "RPT_Elem_UniqueId",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Elem_UniqueAccessKey",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "4.1.2",
            "name": "Nazwa, rola, wartość",
            "wcagLevel": "A",
            "summary": "Dla wszystkich komponentów interfejsu użytkownika (w tym, ale nie tylko, elementów formularzy, łączy oraz komponentów wygenerowanych przez skrypty) nazwa oraz rola mogą być określone programowo; stan, właściwości oraz wartości, które mogą być ustawione przez użytkownika, mogą również być ustawione programowo; powiadomienie o zmianach w tych elementach dostępne jest dla programów użytkownika, w tym technologii wspomagających.",
            "rules": [
                {
                    id: "WCAG20_Input_ExplicitLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Valerie_Label_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidRole",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                 {
                    id: "table_aria_descendants",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidPropertyValue",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidIdRef",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredProperties",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_EmptyPropertyValue",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidProperty",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_ImgAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_SvgAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Canvas",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "aria_semantics_role",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "aria_semantics_attribute",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredChildren_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredParent_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_EventHandlerMissingRole_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_WidgetLabels_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_List_Group_ListItem",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_ActiveDescendantCheck",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MultipleToolbarUniqueLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_version",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_popup_reference",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_haspopup",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_focusable_elements",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_active_descendant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_autocomplete",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        }
    ]    
},
{
    id: "WCAG_2_0",
    name: "WCAG 2.0 (A, AA)",
    category: eRuleCategory.ACCESSIBILITY,
    description: "Reguły dla WCAG 2.0 AA. Przywołane przez US Section 508, ale nie w najnowszym zaleceniu W3C.",
    "checkpoints": [
        {
            "num": "1.1.1",
            "name": "Treść nietekstowa",
            "wcagLevel": "A",
            "summary": "Wszystkie treści nietekstowe przedstawione użytkownikowi mają alternatywę tekstową, która służy równoważnemu celowi.",
            "rules": [
                {
                    id: "WCAG20_Input_ExplicitLabelImage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_UsemapValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Object_HasText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Applet_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_ExplicitLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Area_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_AltCommonMisuse",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_LongDescription2",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Img_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Pre_ASCIIArt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_AudioVideoAltFilename",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Style_BackgroundImage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Img_LinkTextNotRedundant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Img_TitleEmptyWhenAltNull",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Img_UsemapAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Text_Emoticons",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Img_PresentationImgHasNonNullAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Figure_label",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Media_AltBrief",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Embed_HasNoEmbed",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                
                {
                    id: "RPT_Embed_HasAlt",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "RPT_Style_Trigger2",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_BackgroundImg_HasTextOrTitle",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "Valerie_Noembed_HasContent",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "HAAC_Canvas",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.1",
            "name": "Tylko audio lub tylko wideo (nagranie)",
            "wcagLevel": "A",
            "summary": "Dla mediów nagranych w systemie tylko audio lub tylko wideo, w alternatywny sposób zapewnione są równoważne informacje.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_AudioTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.2",
            "name": "Napisy rozszerzone (nagranie)",
            "wcagLevel": "A",
            "summary": "Do wszystkich nagrań audio w multimediach zsynchronizowanych zapewnione są napisy rozszerzone.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "1.2.3",
            "name": "Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)",
            "wcagLevel": "A",
            "summary": "Zapewniona jest alternatywa dla multimediów lub audiodeskrypcja dla nagrań wideo w multimediach zsynchronizowanych.",
            "rules": [
                {
                    id: "RPT_Media_VideoReferenceTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.4",
            "name": "Napisy rozszerzone (na żywo)",
            "wcagLevel": "AA",
            "summary": "Do wszystkich treści audio w multimediach zsynchronizowanych przekazywanych na żywo zapewnione są napisy rozszerzone.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_VideoObjectTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
            ]
        },
        {
            "num": "1.2.5",
            "name": "Audiodeskrypcja (nagranie)",
            "wcagLevel": "AA",
            "summary": "Zapewniona jest audiodeskrypcja dla wszystkich nagrań wideo w multimediach zsynchronizowanych.",
            "rules": [
                {
                    id: "RPT_Media_VideoReferenceTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.3.1",
            "name": "Informacje i relacje",
            "wcagLevel": "A",
            "summary": "Informacje, struktura oraz relacje między treściami przekazywane poprzez prezentację mogą być odczytane przez program komputerowy lub istnieją w postaci tekstu.",
            "rules": [
                {
                    id: "RPT_Headers_FewWords",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Blockquote_HasCite",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Blockquote_WrapsTextQuote",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Block_ShouldBeHeading",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Label_UniqueFor",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_List_UseMarkup",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Script_OnclickHTML1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Fieldset_HasLegend",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Table_CapSummRedundant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Table_Scope_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Input_RadioChkInFieldSet",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "Valerie_Caption_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Valerie_Caption_InTable",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Valerie_Table_DataCellRelationships",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Table_DataHeadingsAria",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Label_RefValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Style_BeforeAfter",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_List_Misuse",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Select_HasOptGroup",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Script_OnclickHTML2",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "WCAG20_Input_InFieldSet",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Table_LayoutTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "WCAG20_Table_Structure",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Table_SummaryAria3",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                
            ]
        },
        {
            "num": "1.3.2",
            "name": "Zrozumiała kolejność",
            "wcagLevel": "A",
            "summary": "Jeśli kolejność, w jakiej przedstawiona jest treść, ma znaczenie dla zrozumienia treści — prawidłowa kolejność odczytu musi być określona programowo.",
            "rules": [
                {
                    id: "Valerie_Elem_DirValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Text_LetterSpacing",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.3.3",
            "name": "Właściwości zmysłowe",
            "wcagLevel": "A",
            "summary": "Instrukcje co do zrozumienia i operowania treścią nie opierają się wyłącznie na właściwościach zmysłowych, takich jak: kształt, rozmiar, wzrokowa lokalizacja, orientacja w przestrzeni lub dźwięk.",
            "rules": [
                {
                    id: "RPT_Text_SensoryReference",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.4.1",
            "name": "Użycie koloru",
            "wcagLevel": "A",
            "summary": "Kolor nie jest wykorzystywany jako jedyny wizualny sposób przekazywania informacji, wskazywania czynności do wykonania lub oczekiwania na odpowiedź, czy też wyróżniania elementów wizualnych.",
            "rules": [
                {
                    id: "RPT_Font_ColorInForm",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Style_ColorSemantics1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.4.2",
            "name": "Kontrola odtwarzania dźwięku",
            "wcagLevel": "A",
            "summary": "Jeśli jakieś nagranie audio włącza się automatycznie na danej stronie i jest odtwarzane przez okres dłuższy niż 3 sekundy, istnieje mechanizm umożliwiający przerwanie lub wyłączenie nagrania albo mechanizm kontrolujący poziom głośności niezależnie od poziomu głośności całego systemu.",
            "rules": [
                {
                    id: "RPT_Embed_AutoStart",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.4.3",
            "name": "Kontrast (minimalny)",
            "wcagLevel": "AA",
            "summary": "Wizualna prezentacja tekstu lub obrazu tekstu posiada współczynnik kontrastu wynoszący 4,5:1 w przypadku zwykłego tekstu, a 3:1 w przypadku dużego tekstu.",
            "rules": [
                {
                    id: "IBMA_Color_Contrast_WCAG2AA",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "IBMA_Color_Contrast_WCAG2AA_PV",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "1.4.4",
            "name": "Zmiana rozmiaru tekstu",
            "wcagLevel": "AA",
            "summary": "Rozmiar tekstu może zostać powiększony do 200% bez użycia technologii wspomagających oraz bez utraty treści lub funkcjonalności.",
            "rules": [
                {
                    id: "WCAG21_Style_Viewport",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.4.5",
            "name": "Obrazy tekstu",
            "wcagLevel": "AA",
            "summary": "Jeśli wykorzystywane technologie mogą przedstawiać treść wizualnie, do przekazywania informacji wykorzystuje się tekst, a nie obraz tekstu.",
            "rules": []
        },
        {
            "num": "2.1.1",
            "name": "Klawiatura",
            "wcagLevel": "A",
            "summary": "Wszystkie funkcjonalności w treści są obsługiwane za pomocą interfejsu klawiatury, bez wymogu określonego czasu użycia poszczególnych klawiszy.",
            "rules": [
                {
                    id: "RPT_Elem_EventMouseAndKey",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_InvalidTabindexForActivedescendant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MissingFocusableChild",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MissingKeyboardHandler",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Audio_Video_Trigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "HAAC_Application_Role_Text",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.1.2",
            "name": "Bez pułapki na klawiaturę",
            "wcagLevel": "A",
            "summary": "Jeśli fokus klawiatury można przemieścić do danego komponentu treści za pomocą interfejsu klawiatury, to może on być z niego usunięty również za pomocą interfejsu klawiatury, a jeśli wymagane jest użycie czegoś więcej niż tylko strzałek, tabulatora lub innych standardowych metod wyjścia, użytkownik musi otrzymać odpowiednią podpowiedź, w jaki sposób usunąć fokus z danego komponentu.",
            "rules": [
                {
                    id: "HAAC_Media_DocumentTrigger2",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.2.1",
            "name": "Dostosowanie czasu",
            "wcagLevel": "A",
            "summary": "Gdy czas korzystania z treści jest ograniczany, użytkownik może wyłączyć, dostosować lub przedłużyć limit.",
            "rules": [
                {
                    id: "RPT_Meta_Refresh",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Meta_RedirectZero",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "2.2.2",
            "name": "Pauza, zatrzymanie, ukrycie",
            "wcagLevel": "A",
            "summary": "Gdy treść się porusza, migocze, przesuwa lub jest automatycznie aktualizowana, użytkownik może wstrzymać, zatrzymać, ukryć lub dostosować częstość aktualizacji.",
            "rules": [
                {
                    id: "RPT_Marquee_Trigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Blink_AlwaysTrigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Blink_CSSTrigger1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "2.3.1",
            "name": "Trzy błyski lub wartości poniżej progu",
            "wcagLevel": "A",
            "summary": "Treść nie zawiera niczego, co błyska częściej niż trzy razy w ciągu jednej sekundy, lub też błysk nie przekracza wartości granicznych dla błysków ogólnych i czerwonych.",
            "rules": []
        },
        {
            "num": "2.4.1",
            "name":"Możliwość pominięcia bloków",
            "wcagLevel": "A",
            "summary": "Istnieje mechanizm, który umożliwia pominięcie bloków treści powtarzanych na wielu stronach internetowych.",
            "rules": [
                {
                    id: "WCAG20_Frame_HasTitle",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Html_SkipNav",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Valerie_Frame_SrcHtml",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleSearchLandmarks",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ComplementaryLandmarkLabel_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleApplicationLandmarks",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ApplicationLandmarkLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleDocumentRoles",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Body_FirstASkips_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Body_FirstAContainsSkipText_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_OrphanedContent_Native_Host_Sematics",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_RegionLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleMainsVisibleLabel_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleBannerLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleComplementaryLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleContentinfoLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleFormLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleNavigationLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleArticleRoles_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleGroupRoles_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleContentinfoInSiblingSet_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_OneBannerInSiblingSet_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
               {
                    id: "Rpt_Aria_ContentinfoWithNoMain_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ComplementaryRequiredLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleRegionsUniqueLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleMainsRequireLabel_Implicit_2",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "2.4.2",
            "name": "Tytuły stron",
            "wcagLevel": "A",
            "summary": "Strony internetowe, dokumenty inne niż internetowe i oprogramowanie mają tytuły, które opisują ich cel lub przedstawiają ich temat.",
            "rules": [
                {
                    id: "WCAG20_Doc_HasTitle",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Title_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.4.3",
            "name": "Kolejność fokusu",
            "wcagLevel": "A",
            "summary": "Jeśli po treści można nawigować sekwencyjnie, a kolejność nawigacji wpływa na zrozumienie lub funkcjonalność strony, komponenty przyjmują fokus w kolejności, dzięki której zachowany jest sens i funkcjonalność treści.",
            "rules": []
        },
        {
            "num": "2.4.4",
            "name": "Cel łącza (w kontekście)",
            "wcagLevel": "A",
            "summary": "Cel każdego łącza można określić na podstawie samej treści łącza lub treści tekstu powiązanego z kontekstem łącza określonym programowo.",
            "rules": [
                {
                    id: "WCAG20_A_HasText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "2.4.5",
            "name": "Wiele dróg",
            "wcagLevel": "AA",
            "summary": "Istnieje więcej niż jeden sposób umożliwiający zlokalizowanie strony internetowej w zestawie stron internetowych, z wyjątkiem sytuacji, kiedy dana strona jest wynikiem jakiejś procedury lub jednym z jej etapów.",
            "rules": []
        },
        {
            "num": "2.4.6",
            "name": "Nagłówki i etykiety",
            "wcagLevel": "AA",
            "summary": "Nagłówki i etykiety opisują temat lub cel treści.",
            "rules": [
                {
                    id: "RPT_Header_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.4.7",
            "name": "Widoczny fokus",
            "wcagLevel": "AA",
            "summary": "Każdy interfejs posiadający możliwość obsługi przy pomocy klawiatury ma tryb obsługi, w którym fokus klawiatury jest stale widoczny.",
            "rules": [
                {
                    id: "RPT_Style_HinderFocus1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Script_FocusBlurs",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.1.1",
            "name": "Język strony",
            "wcagLevel": "A",
            "summary": "Domyślny język naturalny każdej strony internetowej może zostać odczytany przez program komputerowy.",
            "rules": [
                {
                    id: "WCAG20_Html_HasLang",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.1.2",
            "name": "Język części",
            "wcagLevel": "AA",
            "summary": "Język naturalny każdej innojęzycznej części lub frazy zawartej w treści może zostać odczytany przez program komputerowy.",
            "rules": [
                {
                    id: "WCAG20_Elem_Lang_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "3.2.1",
            "name": "Po otrzymaniu fokusu",
            "wcagLevel": "A",
            "summary": "Przyjęcie fokusu przez dowolny komponent interfejsu użytkownika nie powoduje nieoczekiwanej zmiany kontekstu.",
            "rules": [
                {
                    id: "WCAG20_Select_NoChangeAction",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Script_FocusBlurs",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.2.2",
            "name": "Podczas wprowadzania danych",
            "wcagLevel": "A",
            "summary": "Zmiana ustawień jakiegokolwiek komponentu interfejsu użytkownika nie powoduje automatycznej zmiany kontekstu, chyba, że użytkownik został poinformowany o takim działaniu, zanim zaczął korzystać z komponentu.",
            "rules": [
                {
                    id: "WCAG20_A_TargetAndText",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Form_HasSubmit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Form_TargetAndText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Input_HasOnchange",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Form_ChangeEmpty",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "3.2.3",
            "name": "Spójna nawigacja",
            "wcagLevel": "AA",
            "summary": "Mechanizmy nawigacji, które powtarzają się na wielu stronach internetowych w ramach jednego zestawu stron internetowych, występują w tej samej względnej kolejności za każdym razem, gdy są powtarzane, chyba że zmiana jest inicjowana przez użytkownika.",
            "rules": []
        },
        {
            "num": "3.2.4",
            "name": "Spójna identyfikacja",
            "wcagLevel": "AA",
            "summary": "Komponenty, które mają tę samą funkcjonalność w ramach jednego zestawu stron internetowych, są w taki sam sposób zidentyfikowane.",
            "rules": []
        },
        {
            "num": "3.3.1",
            "name": "Identyfikacja błędu",
            "wcagLevel": "A",
            "summary": "Jeśli automatycznie zostanie wykryty błąd wprowadzania danych, system wskazuje błędny element, a użytkownik otrzymuje opis błędu w postaci tekstu.",
            "rules": [
                {
                    id: "HAAC_Aria_ErrorMessage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.3.2",
            "name": "Etykiety lub instrukcje",
            "wcagLevel": "A",
            "summary": "Gdy w treści wymagane jest wprowadzenie danych przez użytkownika, zapewnione są etykiety lub instrukcje.",
            "rules": [
                {
                    id: "WCAG20_Input_LabelBefore",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_LabelAfter",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Accesskey_NeedLabel",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_Or_HTML5_Attr",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Input_Placeholder",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_VisibleLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
            ]
        },
        {
            "num": "3.3.3",
            "name": "Sugestie korekty błędów",
            "wcagLevel": "AA",
            "summary": "Jeśli automatycznie zostanie wykryty błąd wprowadzania danych i znane są sugestie korekty, wtedy użytkownik otrzymuje takie sugestie, chyba, że zagrażałoby to bezpieczeństwu treści lub zmieniło jej cel.",
            "rules": []
        },
        {
            "num": "3.3.4",
            "name": "Zapobieganie błędom (prawnym, finansowym, w danych)",
            "wcagLevel": "AA",
            "summary": "W przypadku treści, , które powodują zobowiązania prawne, albo na których użytkownik przeprowadza transakcje finansowe, modyfikuje lub usuwa dane w systemach przechowywania danych, nad którymi ma kontrolę, albo udziela odpowiedzi na testy, użytkownik może cofnąć, poprawić lub potwierdzić działanie.",
            "rules": []
        },
        {
            "num": "4.1.1",
            "name": "Poprawność kodu",
            "wcagLevel": "A",
            "summary": "W treści wprowadzonej przy użyciu języka znaczników, elementy posiadają kompletne znaczniki początkowe i końcowe, elementy są zagnieżdżane według swoich specyfikacji, nie posiadają zduplikowanych atrybutów, a wszystkie ID są unikalne, z wyjątkiem przypadków, kiedy specyfikacja zezwala na wyżej wymienione cechy.",
            "rules": [
                {
                    id: "RPT_Elem_UniqueId",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Elem_UniqueAccessKey",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "4.1.2",
            "name": "Nazwa, rola, wartość",
            "wcagLevel": "A",
            "summary": "Dla wszystkich komponentów interfejsu użytkownika (w tym, ale nie tylko, elementów formularzy, łączy oraz komponentów wygenerowanych przez skrypty) nazwa oraz rola mogą być określone programowo; stan, właściwości oraz wartości, które mogą być ustawione przez użytkownika, mogą również być ustawione programowo; powiadomienie o zmianach w tych elementach dostępne jest dla programów użytkownika, w tym technologii wspomagających.",
            "rules": [
                {
                    id: "WCAG20_Input_ExplicitLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Valerie_Label_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidRole",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "table_aria_descendants",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidPropertyValue",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidIdRef",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredProperties",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_EmptyPropertyValue",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidProperty",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_ImgAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_SvgAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Canvas",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "aria_semantics_role",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "aria_semantics_attribute",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredChildren_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredParent_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_EventHandlerMissingRole_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_WidgetLabels_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_List_Group_ListItem",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_ActiveDescendantCheck",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MultipleToolbarUniqueLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_version",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_popup_reference",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_haspopup",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_focusable_elements",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_active_descendant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_autocomplete",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        }
    ]    
},
{
    id: "IBM_Accessibility_BETA",
    name: "IBM Accessibility BETA",
    category: eRuleCategory.ACCESSIBILITY,
    description: "Reguły dla WCAG 2.1 AA oraz dodatkowe wymagania uzupełniające dla listy kontrolnej IBM i reguły eksperymentalne.",
    "checkpoints": [
        {
            "num": "1.1.1",
            "name": "Treść nietekstowa",
            "wcagLevel": "A",
            "summary": "Wszystkie treści nietekstowe przedstawione użytkownikowi mają alternatywę tekstową, która służy równoważnemu celowi.",
            "rules": [
                {
                    id: "WCAG20_Input_ExplicitLabelImage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_UsemapValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Object_HasText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Applet_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_ExplicitLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Area_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_AltCommonMisuse",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Img_LongDescription2",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Img_HasAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Pre_ASCIIArt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_AudioVideoAltFilename",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Style_BackgroundImage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Img_LinkTextNotRedundant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Img_TitleEmptyWhenAltNull",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Img_UsemapAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Text_Emoticons",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Img_PresentationImgHasNonNullAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Figure_label",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Media_AltBrief",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Embed_HasNoEmbed",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                
                {
                    id: "RPT_Embed_HasAlt",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "RPT_Style_Trigger2",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_BackgroundImg_HasTextOrTitle",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "Valerie_Noembed_HasContent",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "HAAC_Canvas",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.1",
            "name": "Tylko audio lub tylko wideo (nagranie)",
            "wcagLevel": "A",
            "summary": "Dla mediów nagranych w systemie tylko audio lub tylko wideo, w alternatywny sposób zapewnione są równoważne informacje.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_AudioTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.2",
            "name": "Napisy rozszerzone (nagranie)",
            "wcagLevel": "A",
            "summary": "Do wszystkich nagrań audio w multimediach zsynchronizowanych zapewnione są napisy rozszerzone.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "1.2.3",
            "name": "Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)",
            "wcagLevel": "A",
            "summary": "Zapewniona jest alternatywa dla multimediów lub audiodeskrypcja dla nagrań wideo w multimediach zsynchronizowanych.",
            "rules": [
                {
                    id: "RPT_Media_VideoReferenceTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.2.4",
            "name": "Napisy rozszerzone (na żywo)",
            "wcagLevel": "AA",
            "summary": "Do wszystkich treści audio w multimediach zsynchronizowanych przekazywanych na żywo zapewnione są napisy rozszerzone.",
            "rules": [
                {
                    id: "HAAC_Video_HasNoTrack",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Media_VideoObjectTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
            ]
        },
        {
            "num": "1.2.5",
            "name": "Audiodeskrypcja (nagranie)",
            "wcagLevel": "AA",
            "summary": "Zapewniona jest audiodeskrypcja dla wszystkich nagrań wideo w multimediach zsynchronizowanych.",
            "rules": [
                {
                    id: "RPT_Media_VideoReferenceTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.3.1",
            "name": "Informacje i relacje",
            "wcagLevel": "A",
            "summary": "Informacje, struktura oraz relacje między treściami przekazywane poprzez prezentację mogą być odczytane przez program komputerowy lub istnieją w postaci tekstu.",
            "rules": [
                {
                    id: "RPT_Headers_FewWords",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Blockquote_HasCite",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Blockquote_WrapsTextQuote",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Block_ShouldBeHeading",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Label_UniqueFor",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_List_UseMarkup",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Script_OnclickHTML1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Fieldset_HasLegend",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Table_CapSummRedundant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Table_Scope_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Input_RadioChkInFieldSet",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "Valerie_Caption_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Valerie_Caption_InTable",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Valerie_Table_DataCellRelationships",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Table_DataHeadingsAria",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Label_RefValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Style_BeforeAfter",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_List_Misuse",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Select_HasOptGroup",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Script_OnclickHTML2",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "WCAG20_Input_InFieldSet",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Table_LayoutTrigger",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_FOUR
                },
                {
                    id: "WCAG20_Table_Structure",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "WCAG20_Table_SummaryAria3",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                
            ]
        },
        {
            "num": "1.3.2",
            "name": "Zrozumiała kolejność",
            "wcagLevel": "A",
            "summary": "Jeśli kolejność, w jakiej przedstawiona jest treść, ma znaczenie dla zrozumienia treści — prawidłowa kolejność odczytu musi być określona programowo.",
            "rules": [
                {
                    id: "Valerie_Elem_DirValid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Text_LetterSpacing",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.3.3",
            "name": "Właściwości zmysłowe",
            "wcagLevel": "A",
            "summary": "Instrukcje co do zrozumienia i operowania treścią nie opierają się wyłącznie na właściwościach zmysłowych, takich jak: kształt, rozmiar, wzrokowa lokalizacja, orientacja w przestrzeni lub dźwięk.",
            "rules": [
                {
                    id: "RPT_Text_SensoryReference",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.3.4",
            "name": "Orientacja",
            "wcagLevel": "A",
            "summary": "Treść nie ogranicza swojego widoku i działania do jednej orientacji wyświetlania, takiej jak pionowa lub pozioma.",
            "rules": []
        },
        {
            "num": "1.3.5",
            "name": "Określenie pożądanej wartości",
            "wcagLevel": "AA",
            "summary": "Cel każdego pola zbierającego informacje o użytkowniku może być programowo określony.",
            "rules": [
                {
                    id: "WCAG21_Input_Autocomplete",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.4.1",
            "name": "Użycie koloru",
            "wcagLevel": "A",
            "summary": "Kolor nie jest wykorzystywany jako jedyny wizualny sposób przekazywania informacji, wskazywania czynności do wykonania lub oczekiwania na odpowiedź, czy też wyróżniania elementów wizualnych.",
            "rules": [
                {
                    id: "RPT_Font_ColorInForm",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Style_ColorSemantics1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.4.2",
            "name": "Kontrola odtwarzania dźwięku",
            "wcagLevel": "A",
            "summary": "Jeśli jakieś nagranie audio włącza się automatycznie na danej stronie i jest odtwarzane przez okres dłuższy niż 3 sekundy, istnieje mechanizm umożliwiający przerwanie lub wyłączenie nagrania albo mechanizm kontrolujący poziom głośności niezależnie od poziomu głośności całego systemu.",
            "rules": [
                {
                    id: "RPT_Embed_AutoStart",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "1.4.3",
            "name": "Kontrast (minimalny)",
            "wcagLevel": "AA",
            "summary": "Wizualna prezentacja tekstu lub obrazu tekstu posiada współczynnik kontrastu wynoszący 4,5:1 w przypadku zwykłego tekstu, a 3:1 w przypadku dużego tekstu.",
            "rules": [
                {
                    id: "IBMA_Color_Contrast_WCAG2AA",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "IBMA_Color_Contrast_WCAG2AA_PV",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "1.4.4",
            "name": "Zmiana rozmiaru tekstu",
            "wcagLevel": "AA",
            "summary": "Rozmiar tekstu może zostać powiększony do 200% bez użycia technologii wspomagających oraz bez utraty treści lub funkcjonalności.",
            "rules": [
                {
                    id: "WCAG21_Style_Viewport",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "1.4.5",
            "name": "Obrazy tekstu",
            "wcagLevel": "AA",
            "summary": "Jeśli wykorzystywane technologie mogą przedstawiać treść wizualnie, do przekazywania informacji wykorzystuje się tekst, a nie obraz tekstu.",
            "rules": []
        },
        {
            "num": "1.4.10",
            "name": "Dopasowanie do ekranu",
            "wcagLevel": "AA",
            "summary": "Treść może być prezentowana bez utraty informacji lub funkcjonalności, bez konieczności przewijania w dwóch wymiarach.",
            "rules": []
        },
        {
            "num": "1.4.11",
            "name": "Kontrast elementów nietekstowych",
            "wcagLevel": "AA",
            "summary": "Części obiektów graficznych wymagane do zrozumienia treści oraz informacje wizualne wymagane do zidentyfikowania komponentów i stanów interfejsu użytkownika mają współczynnik kontrastu wynoszący co najmniej 3:1 względem sąsiednich kolorów.",
            "rules": []
        },
        {
            "num": "1.4.12",
            "name": "Odstępy w tekście",
            "wcagLevel": "AA",
            "summary": "Zmiana odstępów między literami, wyrazami i akapitami, a także wysokości wiersza nie powoduje utraty treści ani funkcjonalności.",
            "rules": []
        },
        {
            "num": "1.4.13",
            "name": "Treść spod kursora lub fokusu",
            "wcagLevel": "AA",
            "summary": "Gdy jakaś treść staje się widoczna po otrzymaniu kursora lub fokusu klawiatury, dodatkowa treść może być odrzucona, wskazana kursorem lub pozostaje widoczna do usunięcia wskazania lub gdy przestaje być ważna.",
            "rules": []
        },
        {
            "num": "2.1.1",
            "name": "Klawiatura",
            "wcagLevel": "A",
            "summary": "Wszystkie funkcjonalności w treści są obsługiwane za pomocą interfejsu klawiatury, bez wymogu określonego czasu użycia poszczególnych klawiszy.",
            "rules": [
                {
                    id: "RPT_Elem_EventMouseAndKey",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_InvalidTabindexForActivedescendant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MissingFocusableChild",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MissingKeyboardHandler",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Audio_Video_Trigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "HAAC_Application_Role_Text",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.1.2",
            "name": "Bez pułapki na klawiaturę",
            "wcagLevel": "A",
            "summary": "Jeśli fokus klawiatury można przemieścić do danego komponentu treści za pomocą interfejsu klawiatury, to może on być z niego usunięty również za pomocą interfejsu klawiatury, a jeśli wymagane jest użycie czegoś więcej niż tylko strzałek, tabulatora lub innych standardowych metod wyjścia, użytkownik musi otrzymać odpowiednią podpowiedź, w jaki sposób usunąć fokus z danego komponentu.",
            "rules": [
                {
                    id: "HAAC_Media_DocumentTrigger2",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.1.4",
            "name": "Jednoznakowe skróty klawiaturowe",
            "wcagLevel": "A",
            "summary": "Jeśli skrót klawiaturowy jest zaimplementowany w treści tylko przy użyciu jednego znaku (litery, w tym wielkiej i małej, cyfry lub symbolu), to skrót można wyłączyć, przemapować lub aktywować tylko, gdy komponent ma fokus.",
            "rules": []
        },
        {
            "num": "2.2.1",
            "name": "Dostosowanie czasu",
            "wcagLevel": "A",
            "summary": "Gdy czas korzystania z treści jest ograniczany, użytkownik może wyłączyć, dostosować lub przedłużyć limit.",
            "rules": [
                {
                    id: "RPT_Meta_Refresh",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Meta_RedirectZero",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "2.2.2",
            "name": "Pauza, zatrzymanie, ukrycie",
            "wcagLevel": "A",
            "summary": "Gdy treść się porusza, migocze, przesuwa lub jest automatycznie aktualizowana, użytkownik może wstrzymać, zatrzymać, ukryć lub dostosować częstość aktualizacji.",
            "rules": [
                {
                    id: "RPT_Marquee_Trigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Blink_AlwaysTrigger",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                },
                {
                    id: "RPT_Blink_CSSTrigger1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "2.3.1",
            "name": "Trzy błyski lub wartości poniżej progu",
            "wcagLevel": "A",
            "summary": "Treść nie zawiera niczego, co błyska częściej niż trzy razy w ciągu jednej sekundy, lub też błysk nie przekracza wartości granicznych dla błysków ogólnych i czerwonych.",
            "rules": []
        },
        {
            "num": "2.4.1",
            "name":"Możliwość pominięcia bloków",
            "wcagLevel": "A",
            "summary": "Istnieje mechanizm, który umożliwia pominięcie bloków treści powtarzanych na wielu stronach internetowych.",
            "rules": [
                {
                    id: "WCAG20_Frame_HasTitle",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Html_SkipNav",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Valerie_Frame_SrcHtml",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleSearchLandmarks",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ComplementaryLandmarkLabel_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleApplicationLandmarks",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ApplicationLandmarkLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleDocumentRoles",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Body_FirstASkips_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Body_FirstAContainsSkipText_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_OrphanedContent_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_RegionLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleMainsVisibleLabel_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleBannerLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleComplementaryLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleContentinfoLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleFormLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleNavigationLandmarks_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleArticleRoles_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleGroupRoles_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleContentinfoInSiblingSet_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_OneBannerInSiblingSet_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ContentinfoWithNoMain_Implicit",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_ComplementaryRequiredLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleRegionsUniqueLabel_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "Rpt_Aria_MultipleMainsRequireLabel_Implicit_2",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "2.4.2",
            "name": "Tytuły stron",
            "wcagLevel": "A",
            "summary": "Strony internetowe, dokumenty inne niż internetowe i oprogramowanie mają tytuły, które opisują ich cel lub przedstawiają ich temat.",
            "rules": [
                {
                    id: "WCAG20_Doc_HasTitle",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "RPT_Title_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.4.3",
            "name": "Kolejność fokusu",
            "wcagLevel": "A",
            "summary": "Jeśli po treści można nawigować sekwencyjnie, a kolejność nawigacji wpływa na zrozumienie lub funkcjonalność strony, komponenty przyjmują fokus w kolejności, dzięki której zachowany jest sens i funkcjonalność treści.",
            "rules": [
                {
                    id: "IBMA_Focus_Tabbable",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
                , {
                    id: "IBMA_Focus_MultiTab",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.4.4",
            "name": "Cel łącza (w kontekście)",
            "wcagLevel": "A",
            "summary": "Cel każdego łącza można określić na podstawie samej treści łącza lub treści tekstu powiązanego z kontekstem łącza określonym programowo.",
            "rules": [
                {
                    id: "WCAG20_A_HasText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "2.4.5",
            "name": "Wiele dróg",
            "wcagLevel": "AA",
            "summary": "Istnieje więcej niż jeden sposób umożliwiający zlokalizowanie strony internetowej w zestawie stron internetowych, z wyjątkiem sytuacji, kiedy dana strona jest wynikiem jakiejś procedury lub jednym z jej etapów.",
            "rules": []
        },
        {
            "num": "2.4.6",
            "name": "Nagłówki i etykiety",
            "wcagLevel": "AA",
            "summary": "Nagłówki i etykiety opisują temat lub cel treści.",
            "rules": [
                {
                    id: "RPT_Header_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.4.7",
            "name": "Widoczny fokus",
            "wcagLevel": "AA",
            "summary": "Każdy interfejs posiadający możliwość obsługi przy pomocy klawiatury ma tryb obsługi, w którym fokus klawiatury jest stale widoczny.",
            "rules": [
                {
                    id: "RPT_Style_HinderFocus1",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Script_FocusBlurs",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "2.5.1",
            "name": "Gesty dotykowe",
            "wcagLevel": "A",
            "summary": "Wszystkie funkcjonalności wykorzystujące do obsługi gesty wielopunktowe lub oparte na ścieżkach mogą być obsługiwane za pomocą dotyku jednopunktowego bez gestu opartego na ścieżce.",
            "rules": []
        },
        {
            "num": "2.5.2",
            "name": "Rezygnacja ze wskazania",
            "wcagLevel": "A",
            "summary": "W przypadku funkcjonalności, które są wywoływane za pomocą dotyku jednopunktowego, zakończenie funkcjonalności następuje wskutek zwolnienia nacisku albo może być przerwane lub cofnięte.",
            "rules": []
        },
        {
            "num": "2.5.3",
            "name": "Etykieta w nazwie",
            "wcagLevel": "A",
            "summary": "W przypadku komponentów interfejsu użytkownika z etykietami zawierającymi tekst lub obrazy tekstu, nazwa zawiera tekst, który jest prezentowany wizualnie.",
            "rules": [
                {
                    id: "WCAG21_Label_Accessible",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_TWO
                }
            ]
        },
        {
            "num": "2.5.4",
            "name": "Aktywowanie ruchem",
            "wcagLevel": "A",
            "summary": "Funkcjonalność, którą można obsługiwać za pomocą ruchu urządzenia lub ruchu użytkownika, można również obsługiwać za pomocą komponentów interfejsu użytkownika, a reagowanie na ruch można wyłączyć.",
            "rules": []
        },
        {
            "num": "3.1.1",
            "name": "Język strony",
            "wcagLevel": "A",
            "summary": "Domyślny język naturalny każdej strony internetowej może zostać odczytany przez program komputerowy.",
            "rules": [
                {
                    id: "WCAG20_Html_HasLang",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.1.2",
            "name": "Język części",
            "wcagLevel": "AA",
            "summary": "Język naturalny każdej innojęzycznej części lub frazy zawartej w treści może zostać odczytany przez program komputerowy.",
            "rules": [
                {
                    id: "WCAG20_Elem_Lang_Valid",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "3.2.1",
            "name": "Po otrzymaniu fokusu",
            "wcagLevel": "A",
            "summary": "Przyjęcie fokusu przez dowolny komponent interfejsu użytkownika nie powoduje nieoczekiwanej zmiany kontekstu.",
            "rules": [
                {
                    id: "WCAG20_Select_NoChangeAction",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Script_FocusBlurs",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.2.2",
            "name": "Podczas wprowadzania danych",
            "wcagLevel": "A",
            "summary": "Zmiana ustawień jakiegokolwiek komponentu interfejsu użytkownika nie powoduje automatycznej zmiany kontekstu, chyba, że użytkownik został poinformowany o takim działaniu, zanim zaczął korzystać z komponentu.",
            "rules": [
                {
                    id: "WCAG20_A_TargetAndText",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Form_HasSubmit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Form_TargetAndText",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Input_HasOnchange",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "RPT_Form_ChangeEmpty",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "3.2.3",
            "name": "Spójna nawigacja",
            "wcagLevel": "AA",
            "summary": "Mechanizmy nawigacji, które powtarzają się na wielu stronach internetowych w ramach jednego zestawu stron internetowych, występują w tej samej względnej kolejności za każdym razem, gdy są powtarzane, chyba że zmiana jest inicjowana przez użytkownika.",
            "rules": []
        },
        {
            "num": "3.2.4",
            "name": "Spójna identyfikacja",
            "wcagLevel": "AA",
            "summary": "Komponenty, które mają tę samą funkcjonalność w ramach jednego zestawu stron internetowych, są w taki sam sposób zidentyfikowane.",
            "rules": []
        },
        {
            "num": "3.3.1",
            "name": "Identyfikacja błędu",
            "wcagLevel": "A",
            "summary": "Jeśli automatycznie zostanie wykryty błąd wprowadzania danych, system wskazuje błędny element, a użytkownik otrzymuje opis błędu w postaci tekstu.",
            "rules": [
                {
                    id: "HAAC_Aria_ErrorMessage",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        },
        {
            "num": "3.3.2",
            "name": "Etykiety lub instrukcje",
            "wcagLevel": "A",
            "summary": "Gdy w treści wymagane jest wprowadzenie danych przez użytkownika, zapewnione są etykiety lub instrukcje.",
            "rules": [
                {
                    id: "WCAG20_Input_LabelBefore",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_LabelAfter",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Accesskey_NeedLabel",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_Or_HTML5_Attr",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Input_Placeholder",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "WCAG20_Input_VisibleLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
            ]
        },
        {
            "num": "3.3.3",
            "name": "Sugestie korekty błędów",
            "wcagLevel": "AA",
            "summary": "Jeśli automatycznie zostanie wykryty błąd wprowadzania danych i znane są sugestie korekty, wtedy użytkownik otrzymuje takie sugestie, chyba, że zagrażałoby to bezpieczeństwu treści lub zmieniło jej cel.",
            "rules": []
        },
        {
            "num": "3.3.4",
            "name": "Zapobieganie błędom (prawnym, finansowym, w danych)",
            "wcagLevel": "AA",
            "summary": "W przypadku treści, , które powodują zobowiązania prawne, albo na których użytkownik przeprowadza transakcje finansowe, modyfikuje lub usuwa dane w systemach przechowywania danych, nad którymi ma kontrolę, albo udziela odpowiedzi na testy, użytkownik może cofnąć, poprawić lub potwierdzić działanie.",
            "rules": []
        },
        {
            "num": "4.1.1",
            "name": "Poprawność kodu",
            "wcagLevel": "A",
            "summary": "W treści wprowadzonej przy użyciu języka znaczników, elementy posiadają kompletne znaczniki początkowe i końcowe, elementy są zagnieżdżane według swoich specyfikacji, nie posiadają zduplikowanych atrybutów, a wszystkie ID są unikalne, z wyjątkiem przypadków, kiedy specyfikacja zezwala na wyżej wymienione cechy.",
            "rules": [
                {
                    id: "RPT_Elem_UniqueId",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "WCAG20_Elem_UniqueAccessKey",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                }
            ]
        },
        {
            "num": "4.1.2",
            "name": "Nazwa, rola, wartość",
            "wcagLevel": "A",
            "summary": "Dla wszystkich komponentów interfejsu użytkownika (w tym, ale nie tylko, elementów formularzy, łączy oraz komponentów wygenerowanych przez skrypty) nazwa oraz rola mogą być określone programowo; stan, właściwości oraz wartości, które mogą być ustawione przez użytkownika, mogą również być ustawione programowo; powiadomienie o zmianach w tych elementach dostępne jest dla programów użytkownika, w tym technologii wspomagających.",
            "rules": [
                {
                    id: "WCAG20_Input_ExplicitLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Valerie_Label_HasContent",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidRole",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                  {
                    id: "table_aria_descendants",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidPropertyValue",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidIdRef",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredProperties",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_EmptyPropertyValue",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_ValidProperty",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_ImgAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Aria_SvgAlt",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_Canvas",
                    level: eRulePolicy.RECOMMENDATION,
                    toolkitLevel: eToolkitLevel.LEVEL_THREE
                },
                {
                    id: "aria_semantics_role",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "aria_semantics_attribute",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredChildren_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_RequiredParent_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_EventHandlerMissingRole_Native_Host_Sematics",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_WidgetLabels_Implicit",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_List_Group_ListItem",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "HAAC_ActiveDescendantCheck",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "Rpt_Aria_MultipleToolbarUniqueLabel",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_version",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_popup_reference",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_haspopup",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_focusable_elements",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_active_descendant",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                },
                {
                    id: "combobox_autocomplete",
                    level: eRulePolicy.VIOLATION,
                    toolkitLevel: eToolkitLevel.LEVEL_ONE
                }
            ]
        }
    ]    
}
]

export { a11yRulesets }
