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
} from 'carbon-components-react';

import { IReport, IReportItem, valueMap } from "../IReport";
import ReportRow from "./ReportRow";

interface IReportRulesState {
}
interface IReportRulesProps {
    report: IReport;
    selectItem: (item: IReportItem) => void
}

export default class ReportRules extends React.Component<IReportRulesProps, IReportRulesState> {
    state: IReportRulesState = {};

    render() {

        let groupMap: {
            [key: string]: {
                title: string,
                counts: { [key: string]: number }
                items: IReportItem[]
            }
        } | null = {};
        for (const item of this.props.report.results) {
            if (item.value[1] === "PASS") {
                continue;
            }

            if (!(item.ruleId in groupMap)) {
                groupMap[item.ruleId] = {
                    // TODO: Change out for passive rule message
                    title: this.props.report.nls[item.ruleId][0] || item.ruleId,
                    counts: {},
                    items: []
                }
            }
            let curGroup = groupMap[item.ruleId];
            curGroup.items.push(item);
            let val = valueMap[item.value[0]][item.value[1]] || item.value[0] + "_" + item.value[1];
            curGroup.counts[val] = (curGroup.counts[val] || 0) + 1;
        }

        let groups = [];
        for (const ruleId in groupMap) {
            groups.push(groupMap[ruleId]);
        }

        return <div className="bx--grid report" role="rowgroup">
            <div className="bx--row reportHeader">
                <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-4">
                    <div className="label" style={{ marginLeft: "2rem" }}>Problem</div>
                </div>
                <div className="bx--col-sm-3 bx--col-md-6 bx--col-lg-8">
                    <div className="label">Reguły</div>
                </div>
            </div>
            {groups.map(group => {
                return <ReportRow report={this.props.report} selectItem={this.props.selectItem} group={group} />;
            })}
        </div>
    }
}