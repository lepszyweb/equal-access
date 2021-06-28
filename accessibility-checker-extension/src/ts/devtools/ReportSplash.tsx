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
import BrowserDetection from "../util/browserDetection";

const splashScreen = "/assets/splash_screen.svg";

interface IReportSplashState {
}

interface IReportSplashProps {
}

export default class ReportSplash extends React.Component<IReportSplashProps, IReportSplashState> {
    render() {
        const manifest = chrome.runtime.getManifest();
        return <aside className="reportSplash">
            <div className="bx--grid" style={{ margin: "2rem -1rem 0rem 0rem" }}>
                <div className="bx--row">
                    <div className="bx--col-lg-8 bx--col-md-8 box--col-sm-4">
                        <h2>
                            <div className="title">IBM <span style={{ fontWeight: 600 }}>Dostępność</span></div>
                            <div className="subtitle">IBM Equal Access Accessibility Checker</div>
                            <div className="version">Wersja {manifest.version}</div>
                        </h2>
                        <div className="description">
                            Rozszerzenie pomaga wykrywać problemy z dostępnością i zrozumieć, jak je usunąć. Użyj karty <span style={{ fontWeight: 600 }}>'Tester dostępności' w panelu&nbsp;{BrowserDetection.isChrome()?"Elementy":"Inspektor" }</span>, aby zlokalizować swoje problemy w kodzie i na stronie.<br /><br />
                            Te zautomatyzowane testy nie wychwytują wszystkich problemów. . Dopełnij swoją ocenę za pomocą&nbsp;<a className="link" href="https://ibm.com/able/toolkit/develop/considerations/unit-testing" target="_blank">szybkiego jednostkowego testu dostępności</a><span> </span>
                            lub przejdź do <a className="link" href="https://ibm.com/able/toolkit/verify" target="_blank">pełnego procesu testowania dostępności</a>.<br /><br />
                            Naucz się projektować, budować i testować dostępność z <a className="link" href="https://ibm.com/able/toolkit" target="_blank">IBM Equal Access Toolkit</a>.
                        </div>
                    </div>
                    <div className="bx--col-lg-8 bx--col-md-8 box--col-sm-4">
                        <img src={splashScreen} alt="Ekran powitalny" style={{ maxWidth: "100%", marginTop: "36px" }}></img>
                    </div>
                </div>
            </div>
        </aside>;
    }
}