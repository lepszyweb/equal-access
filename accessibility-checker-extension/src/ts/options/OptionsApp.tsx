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
import {
  Dropdown,
  Button,
  Modal,
} from "carbon-components-react";

import { Restart16, Save16, Information16 } from "@carbon/icons-react";
import OptionMessaging from "../util/optionMessaging";
import OptionUtil  from '../util/optionUtil';
import beeLogoUrl from "../../assets/BE_for_Accessibility_darker.svg";

interface OptionsAppState {
  archives: any;
  selected_archive: any;
  rulesets: any;
  selected_ruleset: any;
  show_notif: boolean;
  show_reset_notif: boolean;
  modalRuleSet: boolean;
  modalGuidelines: boolean;
}

class OptionsApp extends React.Component<{}, OptionsAppState> {
  state: OptionsAppState = {
    archives: [],
    selected_archive: null,
    rulesets: null,
    selected_ruleset: null,
    show_notif: false,
    show_reset_notif: false,
    modalRuleSet: false,
    modalGuidelines: false,
  };

  async componentDidMount() {
    var self = this;

    //get the selected_archive from storage
    chrome.storage.local.get("OPTIONS", async function (result: any) {
      //always sync archives with server
      var archives = await self.getArchives();
      var selected_archive: any = null;
      var rulesets: any = null;
      var selected_ruleset: any = null;

      //OPTIONS are not in storage
      if (result != null && result.OPTIONS == undefined) {
        //find the latest archive
        selected_archive = self.getLatestArchive(archives);
        rulesets = await self.getRulesets(selected_archive);
        selected_ruleset = rulesets[0];
      } else {
        //OPTIONS are in storage
        selected_archive = result.OPTIONS.selected_archive;
        rulesets = result.OPTIONS.rulesets;
        selected_ruleset = result.OPTIONS.selected_ruleset;

        if (selected_archive) {
            if (archives.some((archive: any) => (archive.id === selected_archive.id && archive.name === selected_archive.name))) {
                // do nothing
            } else if (archives.some((archive: any) => (archive.id === selected_archive.id))) {
                // Name change
                selected_archive.name = archives.find((archive: any) => (archive.id === selected_archive.id)).name;
            } else {
                // Archive missing
                selected_archive = null;
            }
        }
        if (!selected_archive) {
            // No pre-selected archive
            selected_archive = self.getLatestArchive(archives);
            rulesets = self.getRulesets(selected_ruleset.id);
            selected_ruleset = rulesets[0];
        }
      }

      self.setState({ archives, selected_archive, rulesets, selected_ruleset });
      self.save_options_to_storage(self.state);
    });
  }

  //get archives from server
  getArchives = async () => {
    return await OptionMessaging.sendToBackground("OPTIONS", {
      command: "getArchives",
    });
  };

  getLatestArchive = (archives: any) => {
    return archives.find((archive: any) => {
      return archive.id == "latest";
    });
  };

  getRulesets = async (selected_archive: any) => {
    return selected_archive.policies;
  };

  //save options into browser's storage
  save_options_to_storage = async (state: any) => {
    var options = { OPTIONS: state };
    await chrome.storage.local.set(options, function () {
      console.log("opcje są ustawione na ", options);
    });
  };

  handleArchiveSelect = async (item: any) => {
    var rulesets = await this.getRulesets(item.selectedItem);
    var selected_ruleset = rulesets[0];
    this.setState({
      selected_archive: item.selectedItem,
      rulesets,
      selected_ruleset,
      show_notif: false,
    });
  };

  handleRulesetSelect = (item: any) => {
    this.setState({ selected_ruleset: item.selectedItem, show_notif: false });
  };

  handleSave = () => {
    this.save_options_to_storage(this.state);
    this.setState({ show_notif: true, show_reset_notif: false });
  };

  handlReset = () => {
    var selected_archive: any = this.getLatestArchive(this.state.archives);
    var selected_ruleset: any = this.state.rulesets[0];

    this.setState({
      selected_archive,
      selected_ruleset,
      show_reset_notif: true,
      show_notif: false,
    });
  };

  render() {
    let {
      archives,
      selected_archive,
      rulesets,
      selected_ruleset,
    } = {
      ...this.state,
    };

    var rulesetDate = OptionUtil.getRuleSetDate(selected_archive?.id, archives);

    const manifest = chrome.runtime.getManifest();
    if (archives && rulesets) {
      return (
        <div className="bx--grid bx--grid--full-width">
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-4 leftPanel">
              <div role="banner">
                <img src={beeLogoUrl} alt="fioletowa ikona pszczoły" className="icon" />
                <h2>
                  IBM <strong>Accessibility</strong>
                  <br />Zestaw narzędzi Equal Access:
                  <br />Tester dostępności
                </h2>
              </div>
              <aside aria-label="O opcjach Testera dostępności">
                <div className="op_version" style={{ marginTop: "8px" }}>
                  Wersja {manifest.version}
                </div>
                <p>
                  Domyślnie Tester dostępności korzysta z zestawu reguł, 
				  które odpowiadają najnowszym wytycznym WCAG oraz kilku 
				  dodatkowym wymaganiom IBM. Dostępne są również zestawy reguł 
				  dla poszczególnych wersji WCAG. Zestawy reguł są regularnie aktualizowane, 
				  aby stale poprawiać ich zasięg i dokładność.
                </p>
              </aside>
            </div>
            <div className="bx--col-md-0 bx--col-lg-1 buffer"></div>
            <div className="bx--col-md-8 bx--col-lg-8 rightPanel">
              <main aria-labelledby="options">
                <h1 id="options">Opcje Testera dostępności IBM</h1>

                <div>
                  <div className="rulesetDate" style={{ marginTop: "1rem" }}>
                    Wybierz datę wdrożenia zestawu reguł
                    <Button 
                          renderIcon={Information16} 
                          kind="ghost"   
                          hasIconOnly iconDescription="Rule set info" tooltipPosition="top" 
                          style={{color:"black", border:"none", verticalAlign:"baseline", minHeight:"28px", 
                                  paddingTop:"8px", paddingLeft:"8px", paddingRight:"8px"}}
                          onClick={(() => {
                              this.setState({ modalRuleSet: true });
                          }).bind(this)}>
                      </Button>
                  </div>
                  
                  <Dropdown
                    ariaLabel={undefined}
                    disabled={false}
                    helperText={"Obecnie używane: " + rulesetDate}
                    id="archivedRuleset"
                    items={archives}
                    itemToString={(item: any) => (item ? item["name"] : "")}
                    label="Data wdrożenia zasady"
                    light={false}
                    titleText=""
                    type="default"
                    selectedItem={selected_archive}
                    onChange={this.handleArchiveSelect}
                  />

                  <Modal
                      aria-label="Informacje o wersji"
                      modalHeading="Wybieranie daty wdrożenia zestawu reguł"
                      passiveModal={true}
                      open={this.state.modalRuleSet}
                      onRequestClose={(() => {
                          this.setState({ modalRuleSet: false });
                      }).bind(this)}
                  >
                      <p style={{maxWidth:"100%"}}><strong>Datowane wdrożenie: </strong> Użyj zestawu reguł z określonej daty do spójnego testowania w całym projekcie lub do powtórzenia wcześniejszych testów</p>  
                      
                      <p style={{maxWidth:"100%"}}><strong>Przyszły zestaw: </strong> Wypróbuj eksperymentalny podgląd możliwego przyszłego zestawu reguł</p> 
                      
                      <p style={{maxWidth:"100%"}}>Szczegółowe informacje na temat zmian w zestawie reguł pomiędzy wdrożeniami znajdują się na stronie <a className="link" href="https://www.ibm.com/able/requirements/release-notes" target="_blank" style={{color:'#002D9C'}}>Uwagi o wydaniu</a></p>        
                  </Modal>

                  
                </div>

                <div className="rulesetDate" style={{ marginTop: "1rem" }}>
                  Wybierz wytyczne dotyczące dostępności
                  <Button 
                        renderIcon={Information16} 
                        kind="ghost"   
                        hasIconOnly iconDescription="Informacje o zestawie reguł" tooltipPosition="top" 
                        style={{color:"black", border:"none", verticalAlign:"baseline", minHeight:"28px", 
                                paddingTop:"8px", paddingLeft:"8px", paddingRight:"8px"}}
                        onClick={(() => {
                            this.setState({ modalGuidelines: true });
                        }).bind(this)}>
                    </Button>
                </div>

                <Dropdown
                  ariaLabel={undefined}
                  disabled={false}
                  helperText={"Obecnie używane: " + rulesets[0].name}
                  id="rulesetSelection"
                  items={rulesets}
                  itemToString={(item: any) => (item ? item["name"] : "")}
                  label="Wybór reguł"
                  light={false}
                  titleText=""
                  type="default"
                  selectedItem={selected_ruleset}
                  onChange={this.handleRulesetSelect}
                />

                <Modal
                    aria-label="Informacje o wytycznych"
                    modalHeading="Wybór wytycznych dla dostępności"
                    passiveModal={true}
                    open={this.state.modalGuidelines}
                    onRequestClose={(() => {
                        this.setState({ modalGuidelines: false });
                    }).bind(this)}
                >
                    <p style={{maxWidth:"100%"}}><strong>IBM Accessibility: </strong> Reguły dla WCAG 2.1 AA plus dodatkowe wymagania IBM</p>  
                    <p style={{maxWidth:"100%"}}><strong>WCAG 2.1 (A, AA): </strong> Jest to aktualne zalecenie W3C. Treści zgodne z WCAG 2.1 są również zgodne z WCAG 2.0.</p> 
                    <p style={{maxWidth:"100%"}}><strong>WCAG 2.0 (A, AA): </strong> Odniesienie do amerykańskiej sekcji 508, ale nie do najnowszego zalecenia W3C</p> 
                    <p style={{maxWidth:"100%"}}><strong>IBM Accessibility BETA: </strong> Zasady dla WCAG 2.1 AA plus dodatkowe wymagania IBM i zasady eksperymentalne</p>      
                </Modal>
                
                <div className="buttonRow">
                  <Button
                    disabled={false}
                    kind="tertiary"
                    onClick={this.handlReset}
                    renderIcon={Restart16}
                    size="default"
                    tabIndex={0}
                    type="button"
                  >
                    Przywróć domyślne
                  </Button>
                  <Button
                    disabled={false}
                    kind="primary"
                    onClick={this.handleSave}
                    renderIcon={Save16}
                    size="default"
                    tabIndex={0}
                    type="button"
                  >
                    Zapisz
                  </Button>
                </div>
              </main>
            </div>
            <div className="bx--col-md-0 bx--col-lg-3 buffer"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        <p>Wystąpił błąd podczas ładowania tej strony. Proszę sprawdzić połączenie internetowe i spróbować ponownie.</p>
        <br />
        <p> Prosimy również sprawdzić  {" "}
            <a href={chrome.runtime.getURL("usingAC.html")} target="_blank" rel="noopener noreferred">Podręcznik użytkownika</a>
            {" "}, jak dać przeglądarce pozwolenie na uruchomienie strony opcji. </p>
        </div>
      )
    }
  }
}

export default OptionsApp;
