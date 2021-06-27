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
import "./SavedReport.scss";
import { ISavedReportData, IReportItem } from './IReport';
import ScoreCard from './ScoreCard';
import SummScoreCard from './SummScoreCard';
import ReportChecklist from './report/ReportChecklist';
import ReportRules from './report/ReportRules';
import { ComposedModal, ModalHeader, ModalBody } from 'carbon-components-react';
import HelpSwitcher from './help/helpSwitcher';

const Violation16 = <svg version="1.1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
    <rect style={{ fill: "none" }} width="16" height="16" />
    <path style={{ fill: "#A2191F" }} d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M10.7,11.5L4.5,5.3l0.8-0.8l6.2,6.2L10.7,11.5z" />
    <path style={{ fill: "#FFFFFF", fillOpacity: 0 }} d="M10.7,11.5L4.5,5.3l0.8-0.8l6.2,6.2L10.7,11.5z" />
</svg>

const NeedsReview16 = <svg version="1.1" x="0px" y="0px"
    width="16px" height="16px" viewBox="0 0 16 16">
    <rect style={{ fill: "none" }} width="16" height="16" />
    <path style={{ fill: "#F1C21B" }} d="M14.9,13.3l-6.5-12C8.3,1,8,0.9,7.8,1.1c-0.1,0-0.2,0.1-0.2,0.2l-6.5,12c-0.1,0.1-0.1,0.3,0,0.5
	C1.2,13.9,1.3,14,1.5,14h13c0.2,0,0.3-0.1,0.4-0.2C15,13.6,15,13.4,14.9,13.3z M7.4,4h1.1v5H7.4V4z M8,11.8c-0.4,0-0.8-0.4-0.8-0.8
	s0.4-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,11.8,8,11.8z"/>
    <g>
        <g>
            <g>
                <rect x="7.45" y="4" width="1.1" height="5" />
            </g>
        </g>
        <g>
            <g>
                <circle cx="8" cy="11" r="0.8" />
            </g>
        </g>
    </g>
</svg>

const Recommendation16 = <svg version="1.1" x="0px" y="0px"
    width="16px" height="16px" viewBox="0 0 16 16">
    <rect style={{ fill: "none" }} width="16" height="16" />
    <path style={{ fill: "#0043CE" }} d="M14,15H2c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v12C15,14.6,14.6,15,14,15z" />
    <text transform="matrix(1 0 0 1 5.9528 12.5044)" style={{ fill: "#FFFFFF", fontFamily: "IBMPlexSerif", fontSize: "12.9996px" }}>i</text>
</svg>

interface SavedReportProps {
    reportData: ISavedReportData | null
}

interface SavedReportState {
    selectedItem: IReportItem | null
}

export default class SavedReport extends React.Component<SavedReportProps, SavedReportState> {
    state: SavedReportState = {
        selectedItem: null
    }

    selectItem(item: IReportItem) {
        this.setState({ selectedItem: item });
    }

    clearItem() {
        this.setState({ selectedItem: null });
    }

    render() {
        if (!this.props.reportData) {
            return <React.Fragment>Błąd raportu</React.Fragment>
        }
        let rs = this.props.reportData.rulesets[0];
        for (const ruleset of this.props.reportData.rulesets) {
            if (ruleset.id === "IBM_Accessibility") {
                rs = ruleset;
            }
        }
        return <div
            role="main"
            id="main-content"
        >
            <div className="bx--grid">
                <div className="bx--row">
                    <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-4">
                        <div className="summInfo">
                            <h1 className="prodName">
                                IBM <strong>Accessibility</strong><br />
                                Equal Access Toolkit:<br />
                               Raport sprawdzania dostępności<br />
                            </h1>
                            
                        </div>
                    </div>
                    <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-12" role="region" aria-label="Przegląd raportu: stan obecny">
                        <SummScoreCard title="Aktualny stan" report={this.props.reportData.report} />
                    </div>
                </div>
                <section aria-label="Przegląd raportu: karty wyników">
                    <div className="bx--row">
                        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-4">
                            <div className="time" style={{paddingTop:"12px"}}>{new Date(this.props.reportData.report.timestamp).toLocaleString()}</div>
                            <div className="url"><strong>Skanowana strona:</strong> {this.props.reportData.tabURL}</div>
                        </div>
                        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-4">
                            <ScoreCard count={this.props.reportData.report.counts.total["Violation"]} title="Naruszenia" icon={Violation16}>
                                Błędy dostępności, które muszą zostać skorygowane
                        </ScoreCard>

                        </div>
                        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-4">
                            <ScoreCard count={this.props.reportData.report.counts.total["Needs review"]} title="Do przeglądu" icon={NeedsReview16}>
                                Problemy, które mogą nie stanowić naruszenia; konieczny jest przegląd ręczny
                        </ScoreCard>
                        </div>
                        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-4">
                            <ScoreCard count={this.props.reportData.report.counts.total["Recommendation"]} title="Zalecenia" icon={Recommendation16}>
                                Możliwości zastosowania najlepszych praktyk w celu dalszej poprawy dostępności
                        </ScoreCard>

                        </div>
                    </div>
                </section>
                <section aria-label="Report details">
                    <div className="bx--row">
                        <div className="bx--col-sm-4 bx--col-md-8 bx--offset-lg-4 bx--col-lg-12">
                            <div className="summReport" role="table" aria-label="Problemy pogrupowane według punktów kontrolnych">
                                <h2 className="title">Wyniki uporządkowane według wymagań</h2>
                                <ReportChecklist selectItem={this.selectItem.bind(this)} report={this.props.reportData.report} ruleset={rs} />
                            </div>
                        </div>
                    </div>
                    <div className="bx--row">
                        <div className="bx--col-sm-4 bx--col-md-8 bx--offset-lg-4 bx--col-lg-12">
                            <div className="summReport" role="table" aria-label="Problemy pogrupowane według reguł">
                                <h2 className="title">Wyniki uporządkowane według reguł</h2>
                                <ReportRules selectItem={this.selectItem.bind(this)} report={this.props.reportData.report} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ComposedModal
                open={!!this.state.selectedItem}
                onClose={() => this.clearItem()}
            >
                <ModalHeader />
                <ModalBody aria-label="Ten modal ma przewijaną zawartość">
                    {this.state.selectedItem && <HelpSwitcher report={this.props.reportData.report} item={this.state.selectedItem} />}
                </ModalBody>
            </ComposedModal>
        </div>
    }
}
