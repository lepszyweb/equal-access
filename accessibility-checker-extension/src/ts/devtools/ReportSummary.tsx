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

import { IReport } from './Report';
import { Tile } from 'carbon-components-react';
import ReportSummaryUtil from '../util/reportSummaryUtil';
import Violation16 from "../../assets/Violation16.svg";
import NeedsReview16 from "../../assets/NeedsReview16.svg";
import Recommendation16 from "../../assets/Recommendation16.svg";

interface IReportSummaryState {
}

interface IReportSummaryProps {
    report: IReport
    tabURL: string
}

export default class ReportSummary extends React.Component<IReportSummaryProps, IReportSummaryState> {
    render() {
        let summaryNumbers = ReportSummaryUtil.calcSummary(this.props.report);

        let d = new Date();
        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        //@ts-ignore
        let time = d.toLocaleString('en-us', options);

        // Note summaryNumbers [Violations,Needs review, Recommendations, elementsWithIssues, totalElements]

        let elementNoFailures: string = "";
        /** Calculate the score */
        elementNoFailures = (((summaryNumbers[4] - summaryNumbers[3]) / summaryNumbers[4]) * 100).toFixed(0);

        return <aside className="reportSummary" aria-labelledby="summaryTitle">
            <div className="bx--grid" style={{ margin: "2rem -1rem 0rem 0rem" }}>
                <div className="bx--row">
                    <div className="bx--col-lg-8 bx--col-md-8 box--col-sm-4">
                        <h2 id="summaryTitle" className="summaryTitle">Podsumowanie skanowania</h2>
                        <div className="summaryTitleDetail">{time}</div>
                        <div className="summaryTitleDetail"><span style={{ fontWeight: 600 }}>Zeskanowana strona:</span> {this.props.tabURL}</div>
                    </div>
                    <div className="bx--col-lg-8 bx--col-md-8 box--col-sm-4">
                    </div>
                </div>
                <div className="bx--row">
                    <div className="bx--col-lg-8 bx--col-md-8 box--col-sm-4">
                        <Tile className="tile score-tile">
                            <div>
                                <h3 className="tile-title" >Aktualny stan</h3>
                            </div>
                            <div className="tile-score">{elementNoFailures}%</div>
                            <div className="tile-description">Odsetek elementów, w których nie wykryto naruszeń lub elementów do przeglądu</div>
                        </Tile>
                    </div>
                    <div className="bx--col-lg-8 bx--col-md-8 box--col-sm-4">
                        <Tile className="tile count-tile">
                            <div>
                                <h3 className="tile-title" style={{ display: "inline" }}>Naruszenia</h3>
                                <span><img src={Violation16} style={{ verticalAlign: "top", float: "right" }} alt="Naruszenia" /></span>
                            </div>
                            <div className="tile-score">{summaryNumbers[0]}</div>
                            <div className="tile-description">Błędy dostępności, które należy skorygować</div>
                        </Tile>
                    </div>
                </div>
                <div className="bx--row">
                    <div className="bx--col-lg-8 bx--col-md-8 box--col-sm-4">
                        <Tile className="tile count-tile">
                            <div>
                                <h3 className="tile-title" style={{ display: "inline" }}>Do przeglądu</h3>
                                <span><img src={NeedsReview16} style={{ verticalAlign: "top", float: "right" }} alt="Do przeglądu" /></span>
                            </div>
                            <div className="tile-score">{summaryNumbers[1]}</div>
                            <div className="tile-description2">Kwestie, które mogą stanowić naruszenia; konieczna jest ręczna weryfikacja</div>
                        </Tile>
                    </div>
                    <div className="bx--col-lg-8 bx--col-md-8 box--col-sm-4">
                        <Tile className="tile count-tile">
                            <div>
                                <h3 className="tile-title" style={{ display: "inline" }}>Rekomendacje</h3>
                                <span><img src={Recommendation16} style={{ verticalAlign: "top", float: "right" }} alt="Rekomendacje" /></span>
                            </div>
                            <div className="tile-score">{summaryNumbers[2]}</div>
                            <div className="tile-description2">Możliwości zastosowania najlepszych praktyk w celu dalszej poprawy dostępności</div>
                        </Tile>
                    </div>
                </div>
            </div>
        </aside>;
    }
}