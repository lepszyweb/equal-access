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

import ReportUtil from "../../reportUtil";
// import ReportSummaryUtil from '../../../util/reportSummaryUtil';

import ExcelJS from "exceljs"

export default class MultiScanReport {

    public static async multiScanXlsxDownload(storedScans: any, scanType:string, storedScanCount: number, archives: []) {

        // create workbook
        var reportWorkbook = MultiScanReport.createReportWorkbook(storedScans, scanType, storedScanCount, archives);
        
        // create binary buffer
        const buffer = await reportWorkbook.xlsx.writeBuffer();

        // create xlsx blob
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        const blob = new Blob([buffer], {type: fileType});

        // const fileName = ReportUtil.single_page_report_file_name(xlsx_props.tab_title);
        const fileName = ReportUtil.single_page_report_file_name(storedScans[storedScans.length - 1].pageTitle);

        // if scanStorage false clear/delete current scan?

        // download file
        ReportUtil.download_file(blob, fileName);
    }

    public static createReportWorkbook(storedScans: any, scanType: string, storedScanCount: number, archives: []) {
        // create workbook
        // @ts-ignore
        const workbook = new ExcelJS.Workbook({useStyles: true });
            
        // create worksheets
        this.createOverviewSheet(storedScans, scanType, storedScanCount, archives, workbook);
        this.createScanSummarySheet(storedScans, scanType, workbook);
        this.createIssueSummarySheet(storedScans, scanType, workbook);
        this.createIssuesSheet(storedScans, scanType, workbook);
        this.createDefinitionsSheet(workbook);

        return workbook;
    }

    
    public static createOverviewSheet(storedScans: any, scanType: string, storedScanCount: number, archives: [], workbook: any) {

        let violations = 0;
        let needsReviews = 0;
        let recommendations = 0;
        let totalIssues = 0;

        // if scanType is "selected" need to recalculate storedScanCount
        let selectedStoredScanCount = 0;

        // BIG QUESTION: is report 
        //               1. for current scan (from menu)
        //               2. all stored scans (from menu)
        //               3. selected stored scans (from scan manager)
        const theCurrentScan = storedScans[storedScans.length - 1];

        if (scanType === "current") {
            violations = theCurrentScan.violations;
            needsReviews = theCurrentScan.needsReviews;
            recommendations = theCurrentScan.recommendations;
            totalIssues = theCurrentScan.violations+theCurrentScan.needsReviews+theCurrentScan.recommendations;
        } else if (scanType === "all") {
            for (let i=0; i < storedScans.length; i++) {
                violations += storedScans[i].violations;
                needsReviews += storedScans[i].needsReviews;
                recommendations += storedScans[i].recommendations;
            }
            totalIssues = violations+needsReviews+recommendations;
        } else if (scanType === "selected") {
            for (let i=0; i < storedScans.length; i++) {
                if (storedScans[i].isSelected === true) {
                    selectedStoredScanCount++;
                    violations += storedScans[i].violations;
                    needsReviews += storedScans[i].needsReviews;
                    recommendations += storedScans[i].recommendations;
                }
            }
            totalIssues = violations+needsReviews+recommendations;
        }

        const worksheet = workbook.addWorksheet("Przegląd");


        // Report Title
        worksheet.mergeCells('A1', "D1");

        const titleRow = worksheet.getRow(1);
        titleRow.height = "27";

        const cellA1 = worksheet.getCell('A1');
        cellA1.value = "Raport skanowania dostępności";
        cellA1.alignment = { vertical: "middle", horizontal: "left"};
        cellA1.font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        cellA1.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };

        // what are column widths - can't get it till you set it

        const colWidthData = [
            {col: 'A', width: '15.1'},
            {col: 'B', width: '15.9'},
            {col: 'C', width: '16.23'},
            {col: 'D', width: '19.4'},
        ]

        for (let i=0; i<4; i++) {
            worksheet.getColumn(colWidthData[i].col).width = colWidthData[i].width;
        }
        

        // set row height for rows 2-10
        for (let i=2; i<11; i++) {
            if (i == 7) {
                worksheet.getRow(i).height = 36;
            } else {
                worksheet.getRow(i).height = 12; // results in a row height of 16
            }
        }

        // note except for Report Date this is the same for all scans
        const rowData = [
            {key1: 'Narzędzie:', key2: 'IBM Equal Access Accessibility Checker'},
            {key1: 'Wersja:', key2: chrome.runtime.getManifest().version},
            //@ts-ignore
            {key1: 'Zestaw reguł:', key2: (theCurrentScan.ruleSet === "Najnowsze wdrożenie") ? archives[1].name : theCurrentScan.ruleSet },
            {key1: 'Wytyczne:', key2: theCurrentScan.guidelines},
            {key1: 'Data raportu:', key2: theCurrentScan.reportDate}, // do we need to get actual date?
            {key1: 'Platforma:', key2: navigator.userAgent},
            {key1: 'Skany:', key2: scanType === "current" ? 1 : scanType === "all" ? storedScanCount : selectedStoredScanCount}, // *** NEED TO FIX FOR selected
            {key1: 'Strony:', key2: ""}
        ];
        
        worksheet.mergeCells('B2', "D2");
        worksheet.mergeCells('B3', "D3");
        worksheet.mergeCells('B4', "D4");
        worksheet.mergeCells('B5', "D5");
        worksheet.mergeCells('B6', "D6");
        worksheet.mergeCells('B7', "D7");
        worksheet.mergeCells('B8', "D8");
        worksheet.mergeCells('B9', "D9");
        worksheet.mergeCells('A10', "D10");


        for (let i=2; i<10; i++) {
            worksheet.getRow(i).getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            worksheet.getRow(i).getCell(2).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            worksheet.getRow(i).getCell(1).alignment = { horizontal: "left"};
            worksheet.getRow(i).getCell(2).alignment = { horizontal: "left"};
            if (i == 7) {
                worksheet.getRow(i).getCell(1).alignment = { vertical: "top"};
                worksheet.getRow(i).getCell(2).alignment = { wrapText: true };
            }
        }
        for (let i=2; i<10; i++) {
            worksheet.getRow(i).getCell(1).value = rowData[i-2].key1; worksheet.getRow(i).getCell(2).value = rowData[i-2].key2;
        }
        
        // Summary Title
        worksheet.mergeCells('A11', "D11");

        const summaryRow = worksheet.getRow(11);
        summaryRow.height = "27";

        const cellA11 = worksheet.getCell('A11');
        cellA11.value = "Podsumowanie";
        cellA11.alignment = { vertical: "middle", horizontal: "left"};
        cellA11.font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        cellA11.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };

        // Scans info Headers
        worksheet.getRow(12).height = 16; // actual height is

        const cellA12 = worksheet.getCell('A12'); cellA12.value = "Ogółem problemów";
        const cellB12 = worksheet.getCell('B12'); cellB12.value = "Naruszenia";
        const cellC12 = worksheet.getCell('C12'); cellC12.value = "Do przeglądu";
        const cellD12 = worksheet.getCell('D12'); cellD12.value = "Zalecenia";

        const cellObjects1 = [cellA12, cellB12, cellC12, cellD12];

        for (let i=0; i<4; i++) {
            cellObjects1[i].alignment = { vertical: "middle", horizontal: "center"};
            if (i == 1 || i == 2 || i == 3) {
                cellObjects1[i].font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            } else {
                cellObjects1[i].font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "12" };
            }
            
            // cellObjects1[i].fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFC65911'} };
            cellObjects1[i].border = {
                top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                right: {style:'thin', color: {argb: 'FFA6A6A6'}}
            }
        }

        cellA12.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF000000'} };
        cellB12.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFE4AAAF'} };
        cellC12.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFF4E08A'} };
        cellD12.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF96A9D7'} };


        // Scans info Values
        worksheet.getRow(13).height = 27; // actual height is

        const cellA13 = worksheet.getCell('A13'); cellA13.value = totalIssues;
        const cellB13 = worksheet.getCell('B13'); cellB13.value = violations;
        const cellC13 = worksheet.getCell('C13'); cellC13.value = needsReviews;
        const cellD13 = worksheet.getCell('D13'); cellD13.value = recommendations;

        const cellObjects2 = [cellA13, cellB13, cellC13, cellD13];

        for (let i=0; i<4; i++) {
            cellObjects2[i].alignment = { vertical: "middle", horizontal: "center"};
            cellObjects2[i].font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            // cellObjects2[i].fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            cellObjects2[i].border = {
                top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                right: {style:'thin', color: {argb: 'FFA6A6A6'}}
            }
        }
    }

    public static createScanSummarySheet(storedScans: any, scanType: string, workbook: any) {

        const worksheet = workbook.addWorksheet("Zestawienie skanowań");

        // Scans info Headers
        worksheet.getRow(1).height = 39; // actual height is 52

        const colWidthData = [
            {col: 'A', width: '27.0'},
            {col: 'B', width: '46.0'},
            {col: 'C', width: '20.17'},
            {col: 'D', width: '18.5'},
            {col: 'E', width: '17.17'},
            {col: 'F', width: '17.17'},
            {col: 'G', width: '17.17'},
            {col: 'H', width: '17.17'},
            {col: 'I', width: '17.17'},
        ]

        for (let i=0; i<9; i++) {
            worksheet.getColumn(colWidthData[i].col).width = colWidthData[i].width;
        }

        const cellA1 = worksheet.getCell('A1'); cellA1.value = "Tytuł strony";
        const cellB1 = worksheet.getCell('B1'); cellB1.value = "URL strony";
        const cellC1 = worksheet.getCell('C1'); cellC1.value = "Etykieta skanu";
        const cellD1 = worksheet.getCell('D1'); cellD1.value = "Skan bazowy";

        const cellObjects1 = [cellA1, cellB1, cellC1, cellD1];

        for (let i=0; i<4; i++) {
            cellObjects1[i].alignment = { vertical: "middle", horizontal: "left"};
            cellObjects1[i].font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "12" };
            cellObjects1[i].fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };
            cellObjects1[i].border = {
                top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                right: {style:'thin', color: {argb: 'FFA6A6A6'}}
            }
        }

        const cellE1 = worksheet.getCell('E1'); cellE1.value = "Naruszenia";
        const cellF1 = worksheet.getCell('F1'); cellF1.value = "Do przeglądu";
        const cellG1 = worksheet.getCell('G1'); cellG1.value = "Zalecenia";
        const cellH1 = worksheet.getCell('H1'); cellH1.value = "% elementów bez naruszeń";
        const cellI1 = worksheet.getCell('I1'); cellI1.value = "% elementów bez naruszeń lub pozycji do przeglądu";

        const cellObjects2 = [cellE1, cellF1, cellG1, cellH1, cellI1];

        for (let i=0; i<5; i++) {
            cellObjects2[i].alignment = { vertical: "middle", horizontal: "center", wrapText: true };
            if (i == 0 || i ==1 || i == 2) {
                cellObjects2[i].font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            } else {
                cellObjects2[i].font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "12" };
            }
            
            // cellObjects2[i].fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFC65911'} };
            cellObjects2[i].border = {
                top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                right: {style:'thin', color: {argb: 'FFA6A6A6'}}
            }
        }

        cellE1.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFE4AAAF'} };
        cellF1.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFF4E08A'} };
        cellG1.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF96A9D7'} };
        cellH1.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF000000'} };
        cellI1.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF000000'} };


        // if current scan use last scan, if 
        // if current scan use only the last scan otherwise loop through each scan an create row
        let j = scanType === "current" ? storedScans.length - 1 : 0; // NEED TO FIX for selected
        for (j; j < storedScans.length; j++) { // for each scan
            console.log("scanType = ", scanType, "   storedScans[j].isSelected = ", storedScans[j].isSelected);
            if (scanType === "selected" && storedScans[j].isSelected === true) {
                let row = worksheet.addRow(
                    [storedScans[j].pageTitle, 
                     storedScans[j].url, 
                     storedScans[j].userScanLabel, 
                     "none", 
                     storedScans[j].violations,
                     storedScans[j].needsReviews,
                     storedScans[j].recommendations,
                     storedScans[j].elementsNoViolations,
                     storedScans[j].elementsNoFailures
                ]);
                row.height = 37; // actual height is
                for (let i = 1; i < 5; i++) {
                    row.getCell(i).alignment = { vertical: "middle", horizontal: "left", wrapText: true };
                    row.getCell(i).font = { name: "Calibri", color: { argb: "00000000" }, size: "12" };
                }
                for (let i = 5; i < 10; i++) {
                    row.getCell(i).alignment = { vertical: "middle", horizontal: "center", wrapText: true };
                    row.getCell(i).font = { name: "Calibri", color: { argb: "00000000" }, size: "12" };
                    // row.getCell(i).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
                    row.getCell(i).border = {
                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                    }
                }
            } else if (scanType === "all") {
                let row = worksheet.addRow(
                    [storedScans[j].pageTitle, 
                     storedScans[j].url, 
                     storedScans[j].userScanLabel, 
                     "none", 
                     storedScans[j].violations,
                     storedScans[j].needsReviews,
                     storedScans[j].recommendations,
                     storedScans[j].elementsNoViolations,
                     storedScans[j].elementsNoFailures
                ]);
                row.height = 37; // actual height is
                for (let i = 1; i < 5; i++) {
                    row.getCell(i).alignment = { vertical: "middle", horizontal: "left", wrapText: true };
                    row.getCell(i).font = { name: "Calibri", color: { argb: "00000000" }, size: "12" };
                }
                for (let i = 5; i < 10; i++) {
                    row.getCell(i).alignment = { vertical: "middle", horizontal: "center", wrapText: true };
                    row.getCell(i).font = { name: "Calibri", color: { argb: "00000000" }, size: "12" };
                    // row.getCell(i).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
                    row.getCell(i).border = {
                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                    }
                }
            } else if (scanType === "current") {
                let row = worksheet.addRow(
                    [storedScans[j].pageTitle, 
                     storedScans[j].url, 
                     storedScans[j].userScanLabel, 
                     "none", 
                     storedScans[j].violations,
                     storedScans[j].needsReviews,
                     storedScans[j].recommendations,
                     storedScans[j].elementsNoViolations,
                     storedScans[j].elementsNoFailures
                ]);
                row.height = 37; // actual height is
                for (let i = 1; i < 5; i++) {
                    row.getCell(i).alignment = { vertical: "middle", horizontal: "left", wrapText: true };
                    row.getCell(i).font = { name: "Calibri", color: { argb: "00000000" }, size: "12" };
                }
                for (let i = 5; i < 10; i++) {
                    row.getCell(i).alignment = { vertical: "middle", horizontal: "center", wrapText: true };
                    row.getCell(i).font = { name: "Calibri", color: { argb: "00000000" }, size: "12" };
                    // row.getCell(i).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
                    row.getCell(i).border = {
                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                    }
                }
            }
            
        }
    }

    public static createIssueSummarySheet(storedScans: any, scanType: string, workbook: any) {

        let violations = 0;
        let needsReviews = 0;
        let recommendations = 0;
        let totalIssues = 0;

        // question 1: is report for current scans or all available scans?
        const theCurrentScan = storedScans[storedScans.length - 1];

        if (scanType === "current") {
            violations = theCurrentScan.violations;
            needsReviews = theCurrentScan.needsReviews;
            recommendations = theCurrentScan.recommendations;
            totalIssues = theCurrentScan.violations+theCurrentScan.needsReviews+theCurrentScan.recommendations;
        } else if (scanType === "all") {
            for (let i=0; i < storedScans.length; i++) {
                violations += storedScans[i].violations;
                needsReviews += storedScans[i].needsReviews;
                recommendations += storedScans[i].recommendations;
            }
            totalIssues = violations+needsReviews+recommendations;
        } else if (scanType === "selected") {
            for (let i=0; i < storedScans.length; i++) {
                if (storedScans[i].isSelected === true) {
                    violations += storedScans[i].violations;
                    needsReviews += storedScans[i].needsReviews;
                    recommendations += storedScans[i].recommendations;
                }
            }
            totalIssues = violations+needsReviews+recommendations;
        }

        // counts
        let level1Counts = [0,0,0,0]; // level 1 total issues, violations, needs reviews, recommendations
        let level2Counts = [0,0,0,0];
        let level3Counts = [0,0,0,0];
        let level4Counts = [0,0,0,0];
        let level1V = []; let level2V = []; let level3V = []; let level4V = [];
        let level1NR = []; let level2NR = []; let level3NR = []; let level4NR = [];
        let level1R = []; let level2R = []; let level3R = []; let level4R = [];
        let j = scanType === "current" ? storedScans.length - 1 : 0; // NEED TO FIX for selected
        for (j; j < storedScans.length; j++) { // for each scan
            const myStoredData = storedScans[j].storedScanData;
            if (scanType === "selected" && storedScans[j].isSelected === true) {
                for (let i=0; i<myStoredData.length;i++) { // for each issue row
                    if (myStoredData[i][5] == 1) { // if level 1
                        level1Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level1Counts[1]++;
                            level1V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level1Counts[2]++;
                            level1NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level1Counts[3]++;
                            level1R.push(myStoredData[i][9]);
                        }
                    }
                    if (myStoredData[i][5] == 2) { // if level 2
                        level2Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level2Counts[1]++;
                            level2V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level2Counts[2]++;
                            level2NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level2Counts[3]++;
                            level2R.push(myStoredData[i][9]);
                        }
                    }
                    if (myStoredData[i][5] == 3) { // if level 3
                        level3Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level3Counts[1]++;
                            level3V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level3Counts[2]++;
                            level3NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level3Counts[3]++;
                            level3R.push(myStoredData[i][9]);
                        }
                    }
                    if (myStoredData[i][5] == 4) { // if level 4
                        level4Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level4Counts[1]++;
                            level4V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level4Counts[2]++;
                            level4NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level4Counts[3]++;
                            level4R.push(myStoredData[i][9]);
                        }
                    }
                }
            } else if (scanType === "all") {
                for (let i=0; i<myStoredData.length;i++) { // for each issue row
                    if (myStoredData[i][5] == 1) { // if level 1
                        level1Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level1Counts[1]++;
                            level1V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level1Counts[2]++;
                            level1NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level1Counts[3]++;
                            level1R.push(myStoredData[i][9]);
                        }
                    }
                    if (myStoredData[i][5] == 2) { // if level 2
                        level2Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level2Counts[1]++;
                            level2V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level2Counts[2]++;
                            level2NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level2Counts[3]++;
                            level2R.push(myStoredData[i][9]);
                        }
                    }
                    if (myStoredData[i][5] == 3) { // if level 3
                        level3Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level3Counts[1]++;
                            level3V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level3Counts[2]++;
                            level3NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level3Counts[3]++;
                            level3R.push(myStoredData[i][9]);
                        }
                    }
                    if (myStoredData[i][5] == 4) { // if level 4
                        level4Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level4Counts[1]++;
                            level4V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level4Counts[2]++;
                            level4NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level4Counts[3]++;
                            level4R.push(myStoredData[i][9]);
                        }
                    }
                }
            } else if (scanType === "current") {
                for (let i=0; i<myStoredData.length;i++) { // for each issue row
                    if (myStoredData[i][5] == 1) { // if level 1
                        level1Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level1Counts[1]++;
                            level1V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level1Counts[2]++;
                            level1NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level1Counts[3]++;
                            level1R.push(myStoredData[i][9]);
                        }
                    }
                    if (myStoredData[i][5] == 2) { // if level 2
                        level2Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level2Counts[1]++;
                            level2V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level2Counts[2]++;
                            level2NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level2Counts[3]++;
                            level2R.push(myStoredData[i][9]);
                        }
                    }
                    if (myStoredData[i][5] == 3) { // if level 3
                        level3Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level3Counts[1]++;
                            level3V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level3Counts[2]++;
                            level3NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level3Counts[3]++;
                            level3R.push(myStoredData[i][9]);
                        }
                    }
                    if (myStoredData[i][5] == 4) { // if level 4
                        level4Counts[0]++;
                        if (myStoredData[i][4] === "Violation") {
                            level4Counts[1]++;
                            level4V.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Needs review") {
                            level4Counts[2]++;
                            level4NR.push(myStoredData[i][9]);
                        }
                        if (myStoredData[i][4] === "Recommendation") {
                            level4Counts[3]++;
                            level4R.push(myStoredData[i][9]);
                        }
                    }
                }
            }
        }
        // @ts-ignore
        let level1VrowValues: { [index: string]:any } = this.countDuplicatesInArray(level1V); // note this returns an object
        // @ts-ignore
        let level1NRrowValues: { [index: string]:any }  = this.countDuplicatesInArray(level1NR);
        // @ts-ignore
        let level1RrowValues: { [index: string]:any }  = this.countDuplicatesInArray(level1R);

        // @ts-ignore
        let level2VrowValues: { [index: string]:any } = this.countDuplicatesInArray(level2V); // note this returns an object
        // @ts-ignore
        let level2NRrowValues: { [index: string]:any }  = this.countDuplicatesInArray(level2NR);
        // @ts-ignore
        let level2RrowValues: { [index: string]:any }  = this.countDuplicatesInArray(level2R);

        // @ts-ignore
        let level3VrowValues: { [index: string]:any } = this.countDuplicatesInArray(level3V); // note this returns an object
        // @ts-ignore
        let level3NRrowValues: { [index: string]:any }  = this.countDuplicatesInArray(level3NR);
        // @ts-ignore
        let level3RrowValues: { [index: string]:any }  = this.countDuplicatesInArray(level3R);

        // @ts-ignore
        let level4VrowValues: { [index: string]:any } = this.countDuplicatesInArray(level4V); // note this returns an object
        // @ts-ignore
        let level4NRrowValues: { [index: string]:any }  = this.countDuplicatesInArray(level4NR);
        // @ts-ignore
        let level4RrowValues: { [index: string]:any }  = this.countDuplicatesInArray(level4R);


        
        const worksheet = workbook.addWorksheet("Zestawienie problemów");

        // Approach:
        // 1. sort by levels
        // 2. for each level sort by V, NR and R
        // 3. for each V, NR, and R in a level get issue dup counts
        // 4. build the rows

        // build Issue summary title
        worksheet.mergeCells('A1', "B1");

        const titleRow = worksheet.getRow(1);
        titleRow.height = "27"; // actual is 36

        const cellA1 = worksheet.getCell('A1');
        cellA1.value = "Zestawienie problemów";
        cellA1.alignment = { vertical: "middle", horizontal: "left"};
        cellA1.font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        cellA1.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };

        const colWidthData = [
            {col: 'A', width: '155.51'}, // note .84 added to actual width
            {col: 'B', width: '21.16'},
        ]

        for (let i=0; i<2; i++) {
            worksheet.getColumn(colWidthData[i].col).width = colWidthData[i].width;
        }

        // build Description title
        worksheet.mergeCells('A2', "B2");

        const descriptionRow = worksheet.getRow(2);
        descriptionRow.height = "20.25"; // actual is 27

        const cellA2 = worksheet.getCell("A2");
        cellA2.value = "     W zestawie narzędzi IBM Equal Access Toolkit waga problemów jest oznaczona jednym z czterech poziomów - priorytetów. Przeanalizuj poziomy, aby w pierwszej kolejności zająć się najbardziej istotnymi kwestiami.";
        cellA2.alignment = { vertical: "middle", horizontal: "left"};
        cellA2.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        // cellA2.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFCCC0DA'} };

        


        // build Total issues found: title
        // worksheet.mergeCells('A3', "B3");

        const totalIssuesRow = worksheet.getRow(3);
        totalIssuesRow.height = "27"; // actual is 36

        const cellA3 = worksheet.getCell("A3");
        cellA3.value = "Ogółem wykrytych problemów:";
        cellA3.alignment = { vertical: "middle", horizontal: "left"};
        cellA3.font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        cellA3.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF000000'} };

        const cellB3 = worksheet.getCell("B3");
        cellB3.value = totalIssues;
        cellB3.alignment = { vertical: "middle", horizontal: "right"};
        cellB3.font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        cellB3.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF000000'} };

        // build Number of issues title
        const numberOfIssuesRow = worksheet.getRow(4);
        numberOfIssuesRow.height = "20.25"; // actual is 27


        const cellA4 = worksheet.getCell("A4");
        // no value
        cellA4.alignment = { vertical: "middle", horizontal: "left"};
        cellA4.border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFFFFFFF'}}
        };
        
        const cellB4 = worksheet.getCell("B4");
        cellB4.value = "Liczba problemów";
        cellB4.alignment = { vertical: "middle", horizontal: "right"};
        cellB4.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        cellB4.border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFFFFFFF'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        /////////////////////////////
        // build Level 1 title
        /////////////////////////////

        const level1Row = worksheet.getRow(5);
        level1Row.height = "27"; // actual is 36

        const cellA5 = worksheet.getCell("A5");
        cellA5.value = "Poziom 1 - najistotniejsze kwestie o dużym wpływie na użytkowników, którymi należy się zająć w pierwszej kolejności";
        cellA5.alignment = { vertical: "middle", horizontal: "left"};
        cellA5.font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        cellA5.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };

        const cellB5 = worksheet.getCell("B5");
        cellB5.value = level1Counts[0]; // total Level 1 issues
        cellB5.alignment = { vertical: "middle", horizontal: "right"};
        cellB5.font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        cellB5.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };
        
        //       Level 1 Violation title
        const level1ViolationRow = worksheet.getRow(6);
        level1ViolationRow.height = "18"; // target is 21

        const cellA6 = worksheet.getCell("A6");
        cellA6.value = "     Naruszenia";
        cellA6.alignment = { vertical: "middle", horizontal: "left"};
        cellA6.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        cellA6.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFE4AAAF'} };
        level1ViolationRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        const cellB6 = worksheet.getCell("B6");
        cellB6.value = level1Counts[1]; // total level 1 violations
        cellB6.alignment = { vertical: "middle", horizontal: "right"};
        cellB6.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        cellB6.fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFE4AAAF'} };
        level1ViolationRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // Level 1 Violation Rows

        // build rows
        let rowArray = [];
            
        for (const property in level1VrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level1VrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }
       
        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        let rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            // row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            // row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });


        // Level 1 Needs review title
        const level1NeedsReviewRow = worksheet.addRow(["", 0]);
        level1NeedsReviewRow.height = "18"; // target is 21

        level1NeedsReviewRow.getCell(1).value = "     Do przeglądu";
        level1NeedsReviewRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level1NeedsReviewRow.getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level1NeedsReviewRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFF4E08A'} };
        level1NeedsReviewRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        level1NeedsReviewRow.getCell(2).value = level1Counts[2]; // total level 1 needs review
        level1NeedsReviewRow.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level1NeedsReviewRow.getCell(2).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level1NeedsReviewRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFF4E08A'} };
        level1NeedsReviewRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // Level 1 Needs review Rows

        // build rows
        rowArray = [];
            
        for (const property in level1NRrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level1NRrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }

        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        rows = [];

        rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            //row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            //row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });

        // Level 1 Recommendation title
        const level1RecommendationRow = worksheet.addRow(["", 0]);
        level1RecommendationRow.height = "18"; // target is 21

        level1RecommendationRow.getCell(1).value = "     Rekomendacje";
        level1RecommendationRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level1RecommendationRow.getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level1RecommendationRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF96A9D7'} };
        level1RecommendationRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        level1RecommendationRow.getCell(2).value = level1Counts[3]; // total level 1 recommendations
        level1RecommendationRow.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level1RecommendationRow.getCell(2).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "12" };
        level1RecommendationRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF96A9D7'} };
        level1RecommendationRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        
        // Level 1 Recommendation Rows

        // build rows
        rowArray = [];
            
        for (const property in level1RrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level1RrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }

        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        rows = [];

        rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            //row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            //row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });
        

        /////////////////////////////
        // build Level 2 title
        /////////////////////////////

        const level2Row = worksheet.addRow(["",0]);
        level2Row.height = "27"; // actual is 36

        level2Row.getCell(1).value = "Poziom 2 - należy rozwiązać te problemy, bo mogą uniemożliwić niekttórym użytkownikom korzystanie ze strony.";
        level2Row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level2Row.getCell(1).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        level2Row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };

        level2Row.getCell(2).value = level2Counts[0]; // total Level 2 issues
        level2Row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level2Row.getCell(2).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        level2Row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };
        
        //       Level 2 Violation title
        const level2ViolationRow = worksheet.addRow(["",0]);
        level2ViolationRow.height = "18"; // target is 21

        level2ViolationRow.getCell(1).value = "     Naruszenia";
        level2ViolationRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level2ViolationRow.getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level2ViolationRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFE4AAAF'} };
        level2ViolationRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        level2ViolationRow.getCell(2).value = level2Counts[1]; // total level 2 violations
        level2ViolationRow.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level2ViolationRow.getCell(2).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level2ViolationRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFE4AAAF'} };
        level2ViolationRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // Level 2 Violation Rows

        // build rows
        rowArray = [];
            
        for (const property in level2VrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level2VrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }
       
        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            //row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            //row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });


        // Level 2 Needs review title
        const level2NeedsReviewRow = worksheet.addRow(["", 0]);
        level2NeedsReviewRow.height = "18"; // target is 21

        level2NeedsReviewRow.getCell(1).value = "     Do przeglądu";
        level2NeedsReviewRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level2NeedsReviewRow.getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level2NeedsReviewRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFF4E08A'} };
        level2NeedsReviewRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        level2NeedsReviewRow.getCell(2).value = level2Counts[2]; // total level 2 needs review
        level2NeedsReviewRow.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level2NeedsReviewRow.getCell(2).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level2NeedsReviewRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFF4E08A'} };
        level2NeedsReviewRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // Level 2 Needs review Rows

        // build rows
        rowArray = [];
            
        for (const property in level2NRrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level2NRrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }

        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        rows = [];

        rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            //row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            //row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });

        // Level 2 Recommendation title
        const level2RecommendationRow = worksheet.addRow(["", 0]);
        level2RecommendationRow.height = "18"; // target is 21

        level2RecommendationRow.getCell(1).value = "     Rekomendacje";
        level2RecommendationRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level2RecommendationRow.getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level2RecommendationRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF96A9D7'} };
        level2RecommendationRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        level2RecommendationRow.getCell(2).value = level2Counts[3]; // total level 2 recommendations
        level2RecommendationRow.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level2RecommendationRow.getCell(2).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "12" };
        level2RecommendationRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF96A9D7'} };
        level2RecommendationRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // Level 2 Recommendation Rows

        // build rows
        rowArray = [];
            
        for (const property in level2RrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level2RrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }

        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        rows = [];

        rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            //row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            //row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });
        
        /////////////////////////////
        // build Level 3 title
        /////////////////////////////

        const level3Row = worksheet.addRow(["",0]);
        level3Row.height = "27"; // actual is 36

        level3Row.getCell(1).value = "Poziom 3 - rozwiązanie wszystkich trzech poziomów zapewnia zgoddność z badanymi kryteriami A i AA wytycznych WCAG";
        level3Row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level3Row.getCell(1).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        level3Row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };

        level3Row.getCell(2).value = level3Counts[0]; // total Level 3 issues
        level3Row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level3Row.getCell(2).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        level3Row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };
        
        //       Level 3 Violation title
        const level3ViolationRow = worksheet.addRow(["",0]);
        level3ViolationRow.height = "18"; // target is 21

        level3ViolationRow.getCell(1).value = "     Naruszenia";
        level3ViolationRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level3ViolationRow.getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level3ViolationRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFE4AAAF'} };
        level3ViolationRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        level3ViolationRow.getCell(2).value = level3Counts[1]; // total level 3 violations
        level3ViolationRow.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level3ViolationRow.getCell(2).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "12" };
        level3ViolationRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFE4AAAF'} };
        level3ViolationRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // Level 3 Violation Rows

        // build rows
        rowArray = [];
            
        for (const property in level3VrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level3VrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }
       
        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            //row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            //row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });


        // Level 3 Needs review title
        const level3NeedsReviewRow = worksheet.addRow(["", 0]);
        level3NeedsReviewRow.height = "18"; // target is 21

        level3NeedsReviewRow.getCell(1).value = "     Do przeglądu";
        level3NeedsReviewRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level3NeedsReviewRow.getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level3NeedsReviewRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFF4E08A'} };
        level3NeedsReviewRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        level3NeedsReviewRow.getCell(2).value = level3Counts[2]; // total level 3 needs review
        level3NeedsReviewRow.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level3NeedsReviewRow.getCell(2).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level3NeedsReviewRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFF4E08A'} };
        level3NeedsReviewRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // Level 3 Needs review Rows

        // build rows
        rowArray = [];
            
        for (const property in level3NRrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level3NRrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }

        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        rows = [];

        rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            //row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            //row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });

        // Level 3 Recommendation title
        const level3RecommendationRow = worksheet.addRow(["", 0]);
        level3RecommendationRow.height = "18"; // target is 21

        level3RecommendationRow.getCell(1).value = "     Rekomendacje";
        level3RecommendationRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level3RecommendationRow.getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level3RecommendationRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF96A9D7'} };
        level3RecommendationRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        level3RecommendationRow.getCell(2).value = level3Counts[3]; // total level 3 recommendations
        level3RecommendationRow.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level3RecommendationRow.getCell(2).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "12" };
        level3RecommendationRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF96A9D7'} };
        level3RecommendationRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // Level 3 Recommendation Rows

        // build rows
        rowArray = [];
            
        for (const property in level3RrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level3RrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }

        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        rows = [];

        rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            //row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            //row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });

        
        /////////////////////////////
        // build Level 4 title
        /////////////////////////////

        const level4Row = worksheet.addRow(["",0]);
        level4Row.height = "27"; // actual is 36

        level4Row.getCell(1).value = "Poziom 4 - zalecane usprawnienia i ulepszenia dostępności, których wdrożenie poprawi dostępność niektórym użytkownikom";
        level4Row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level4Row.getCell(1).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        level4Row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };

        level4Row.getCell(2).value = level4Counts[0]; // total Level 4 issues
        level4Row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level4Row.getCell(2).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        level4Row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };
        
        //       Level 4 Violation title
        const level4ViolationRow = worksheet.addRow(["",0]);
        level4ViolationRow.height = "18"; // target is 21

        level4ViolationRow.getCell(1).value = "     naruszenia";
        level4ViolationRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level4ViolationRow.getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level4ViolationRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFE4AAAF'} };
        level4ViolationRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        level4ViolationRow.getCell(2).value = level4Counts[1]; // total level 4 violations
        level4ViolationRow.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level4ViolationRow.getCell(2).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level4ViolationRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFE4AAAF'} };
        level4ViolationRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // Level 4 Violation Rows

        // build rows
        rowArray = [];
            
        for (const property in level4VrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level4VrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }
       
        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            //row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            //row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });


        // Level 4 Needs review title
        const level4NeedsReviewRow = worksheet.addRow(["", 0]);
        level4NeedsReviewRow.height = "18"; // target is 21

        level4NeedsReviewRow.getCell(1).value = "     Do przeglądu";
        level4NeedsReviewRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level4NeedsReviewRow.getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level4NeedsReviewRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFF4E08A'} };
        level4NeedsReviewRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        level4NeedsReviewRow.getCell(2).value = level4Counts[2]; // total level 4 needs review
        level4NeedsReviewRow.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level4NeedsReviewRow.getCell(2).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level4NeedsReviewRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFF4E08A'} };
        level4NeedsReviewRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // Level 4 Needs review Rows

        // build rows
        rowArray = [];
            
        for (const property in level4NRrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level4NRrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }

        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        rows = [];

        rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            //row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            //row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });

        // Level 4 Recommendation title
        const level4RecommendationRow = worksheet.addRow(["", 0]);
        level4RecommendationRow.height = "18"; // target is 21

        level4RecommendationRow.getCell(1).value = "     Rekomendacje";
        level4RecommendationRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        level4RecommendationRow.getCell(1).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
        level4RecommendationRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF96A9D7'} };
        level4RecommendationRow.getCell(1).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        level4RecommendationRow.getCell(2).value = level4Counts[3]; // total level 4 recommendations
        level4RecommendationRow.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
        level4RecommendationRow.getCell(2).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "12" };
        level4RecommendationRow.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF96A9D7'} };
        level4RecommendationRow.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // Level 4 Recommendation Rows

        // build rows
        rowArray = [];
            
        for (const property in level4RrowValues) {
            let row = ["     "+`${property}`, parseInt(`${level4RrowValues[property]}`) 
                    ];
            rowArray.push(row);
        }

        // sort array according to count
        rowArray.sort((a,b) => (a[1] < b[1]) ? 1 : -1);

        // add array of rows

        rows = [];

        rows = worksheet.addRows(rowArray);

        rows.forEach((row:any) => {
            row.height = 14;
            row.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
            row.getCell(2).alignment = { vertical: "middle", horizontal: "right"};
            row.font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            //row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            //row.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFf8cbad'} };
            row.getCell(1).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
            row.getCell(2).border = {
                                        top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        // left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                                        right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                                    };
        });
        
    }

    public static createIssuesSheet(storedScans: any, scanType: string, workbook: any) {
        const worksheet = workbook.addWorksheet("Problemy");

        // build rows
        let rowArray = [];
        let j = scanType === "current" ? storedScans.length - 1 : 0; // NEED TO FIX for selected
        for (j; j < storedScans.length; j++) {
            const myStoredData = storedScans[j].storedScanData;
            if (scanType === "selected" && storedScans[j].isSelected === true) {
                for (let i=0; i<myStoredData.length;i++) {
                    let row = [myStoredData[i][0], myStoredData[i][1], storedScans[j].userScanLabel, 
                            myStoredData[i][3], myStoredData[i][4], Number.isNaN(myStoredData[i][5]) ? "n/a" : myStoredData[i][5], 
                            myStoredData[i][6], Number.isNaN(myStoredData[i][5]) ? "n/a" : myStoredData[i][7], myStoredData[i][8], 
                            myStoredData[i][9], myStoredData[i][10], myStoredData[i][11],
                            myStoredData[i][12], myStoredData[i][13] 
                            ];
                    rowArray.push(row);
                }
            } else if (scanType === "all") {
                for (let i=0; i<myStoredData.length;i++) {
                    let row = [myStoredData[i][0], myStoredData[i][1], storedScans[j].userScanLabel,
                            myStoredData[i][3], myStoredData[i][4], Number.isNaN(myStoredData[i][5]) ? "n/a" : myStoredData[i][5], 
                            myStoredData[i][6], Number.isNaN(myStoredData[i][5]) ? "n/a" : myStoredData[i][7], myStoredData[i][8], 
                            myStoredData[i][9], myStoredData[i][10], myStoredData[i][11],
                            myStoredData[i][12], myStoredData[i][13] 
                            ];
                    rowArray.push(row);
                }
            } else if (scanType === "current") {
                for (let i=0; i<myStoredData.length;i++) {
                    let row = [myStoredData[i][0], myStoredData[i][1], storedScans[j].userScanLabel, 
                            myStoredData[i][3], myStoredData[i][4], Number.isNaN(myStoredData[i][5]) ? "n/a" : myStoredData[i][5], 
                            myStoredData[i][6], Number.isNaN(myStoredData[i][5]) ? "n/a" : myStoredData[i][7], myStoredData[i][8], 
                            myStoredData[i][9], myStoredData[i][10], myStoredData[i][11],
                            myStoredData[i][12], myStoredData[i][13] 
                            ];
                    rowArray.push(row);
                }
            }
        }

        // column widths
        const colWidthData = [
            {col: 'A', width: '18.0', alignment: { vertical: "middle", horizontal: "left"}},
            {col: 'B', width: '20.5', alignment: { vertical: "middle", horizontal: "left"}},
            {col: 'C', width: '21.0', alignment: { vertical: "middle", horizontal: "center"}},
            {col: 'D', width: '18.5', alignment: { vertical: "middle", horizontal: "left"}},
            {col: 'E', width: '17.0', alignment: { vertical: "middle", horizontal: "center"}},
            {col: 'F', width: '17.17', alignment: { vertical: "middle", horizontal: "center"}},
            {col: 'G', width: '17.17', alignment: { vertical: "middle", horizontal: "left"}},
            {col: 'H', width: '17.17', alignment: { vertical: "middle", horizontal: "center"}},
            {col: 'I', width: '17.17', alignment: { vertical: "middle", horizontal: "left"}},
            {col: 'J', width: '17.17', alignment: { vertical: "middle", horizontal: "left"}},
            {col: 'K', width: '14.00', alignment: { vertical: "middle", horizontal: "center"}},
            {col: 'L', width: '17.17', alignment: { vertical: "middle", horizontal: "left"}},
            {col: 'M', width: '43.00', alignment: { vertical: "middle", horizontal: "left"}},
            {col: 'N', width: '17.17', alignment: { vertical: "middle", horizontal: "fill"}},
        ]

        for (let i=0; i<14; i++) {
            worksheet.getColumn(colWidthData[i].col).width = colWidthData[i].width;
            worksheet.getColumn(colWidthData[i].col).alignment = colWidthData[i].alignment;
        }

        // set font and alignment for the header cells
        for (let i=1; i<15; i++) {
            worksheet.getRow(1).getCell(i).alignment = { vertical: "middle", horizontal: "center", wrapText: true };
            worksheet.getRow(1).getCell(i).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "12" };
            worksheet.getRow(1).getCell(i).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };
            worksheet.getRow(1).getCell(i).border = {
                top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                right: {style:'thin', color: {argb: 'FFA6A6A6'}}
            }
        }

        // height for header row
        worksheet.getRow(1).height = 24;

        // add table to a sheet
        worksheet.addTable({
            name: 'MyTable',
            ref: 'A1',
            headerRow: true,
            // totalsRow: true,
            style: {
                theme: 'TableStyleMedium2',
                showRowStripes: true,
            },
            columns: [
                {name: 'Tytuł strony', filterButton: true},
                {name: 'URL strony', filterButton: true},
                {name: 'Etykieta skanu', filterButton: true},
                {name: 'ID problemu', filterButton: true},
                {name: 'Typ problemu', filterButton: true},
                {name: 'Poziom zestawu', filterButton: true},
                {name: 'Punkt kontrolny', filterButton: true},
                {name: 'Poziom WCAG', filterButton: true},
                {name: 'Reguła', filterButton: true},
                {name: 'Problem', filterButton: true},
                {name: 'Element', filterButton: true},
                {name: 'Kod', filterButton: true},
                {name: 'Xpath', filterButton: true},
                {name: 'Pomoc', filterButton: true},
                
            ],
            rows: rowArray
        });

        for (let i=2; i<=rowArray.length+1; i++) {
            worksheet.getRow(i).height = 14;
            for (let j=1; j<=14; j++) {
                worksheet.getRow(i).getCell(j).border = {
                    top: {style:'thin', color: {argb: 'FFA6A6A6'}},
                    left: {style:'thin', color: {argb: 'FFA6A6A6'}},
                    bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
                    right: {style:'thin', color: {argb: 'FFA6A6A6'}}
                }
            }
        }
    }

    public static createDefinitionsSheet(workbook: any) {

        const worksheet = workbook.addWorksheet("Definicje pól");

        // "Definition of fields" title
        worksheet.mergeCells('A1', "B1");

        const titleRow = worksheet.getRow(1);
        titleRow.height = "36"; // actual is 48

        titleRow.getCell(1).value = "Definicje pól";
        titleRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        titleRow.getCell(1).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "20" };
        titleRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };

        const colWidthData = [
            {col: 'A', width: '41.51'}, // note .84 added to actual width
            {col: 'B', width: '119.51'},
        ]

        for (let i=0; i<2; i++) {
            worksheet.getColumn(colWidthData[i].col).width = colWidthData[i].width;
        }

        // blank row
        worksheet.mergeCells('A2', "B2");
        const blankRow = worksheet.getRow(2);
        blankRow.height = "12"; // actual is 16

        // "Scan summary and Issue summary" title
        worksheet.mergeCells('A3', "B3");

        const summaryRow = worksheet.getRow(3);
        summaryRow.height = "20"; // actual is 26.75

        summaryRow.getCell(1).value = "Zestawienie skanowań i zestawienie problemów";
        summaryRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        summaryRow.getCell(1).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        summaryRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };

        // row 4 Field / Definition
        const row4 = worksheet.getRow(4);
        row4.height = "16"; // actual is 

        row4.getCell(1).value = "Pole";
        row4.getCell(2).value = "Definicja";
        row4.getCell(1).alignment = row4.getCell(2).alignment = { vertical: "middle", horizontal: "left"};
        row4.getCell(1).font = row4.getCell(2).font = { name: "Calibri", color: { argb: "FF000000" }, size: "16" };
        row4.getCell(1).fill = row4.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFCCC0DA'} };
        row4.getCell(1).border = row4.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // rows 5-13
        
        // set row height for rows 5-13
        for (let i=5; i<14; i++) {
            worksheet.getRow(i).height = 12; // results in a row height of 16
        }

        let rowData = [
            {key1: 'Strona', key2: 'Określa stronę lub plik html, który został zeskanowany.'},
            {key1: 'Etykieta skanu', key2: 'Etykieta dla skanowania. Wartości domyślne mogą być edytowane w programie sprawdzania dostępności przed zapisaniem raportu, lub programowo przypisane w testach automatycznych.'},
            {key1: 'Skan bazowy', key2: 'Etykieta poprzedniego skanu, z którym porównywany jest ten skan. W przypadku użycia skanowania podstawowego zgłaszane są tylko nowe problemy.'},
            {key1: 'Naruszenia', key2: 'Błędy w dostępności, które muszą zostać poprawione.'},
            {key1: 'Do przeglądu', key2: 'Kwestie, które mogą stanowić naruszenia. Wymagają one ręcznego przeglądu w celu określenia, czy istnieje problem z dostępnością.'}, 
            {key1: 'Rekomendacje', key2: 'Możliwości zastosowania dobrych praktyk w celu dalszej poprawy dostępności.'},
            {key1: '% elementów bez naruszeń', key2: 'Procent elementów na stronie, w których nie znaleziono naruszeń.'},
            {key1: '% elementów bez naruszeń i do przeglądu', key2: 'Procent elementów na stronie, w których nie stwierdzono naruszeń i nie ma elementów do przeglądu.'},
            {key1: 'Poziom 1,2,3,4', key2: 'Poziom priorytetu określony przez IBM Equal Access Toolkit. Zobacz https://www.ibm.com/able/toolkit/plan#pace-of-completion, aby dowiedziec się więcej.'}
        ];

        for (let i=5; i<14; i++) {
            worksheet.getRow(i).getCell(1).font = worksheet.getRow(i).getCell(2).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            worksheet.getRow(i).getCell(1).alignment = worksheet.getRow(i).getCell(2).alignment = { horizontal: "left"};
            
        }
        for (let i=5; i<14; i++) {
            worksheet.getRow(i).getCell(1).value = rowData[i-5].key1; worksheet.getRow(i).getCell(2).value = rowData[i-5].key2;
        }

        // "Scan summary and Issue summary" title
        worksheet.mergeCells('A14', "B14");

        const issuesRow = worksheet.getRow(14);
        issuesRow.height = "20"; // actual is 26.75

        issuesRow.getCell(1).value = "Problemy";
        issuesRow.getCell(1).alignment = { vertical: "middle", horizontal: "left"};
        issuesRow.getCell(1).font = { name: "Calibri", color: { argb: "FFFFFFFF" }, size: "16" };
        issuesRow.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FF403151'} };

        // row 15 Field / Definition
        const row15 = worksheet.getRow(15);
        row15.height = "16"; // actual is 

        row15.getCell(1).value = "Pole";
        row15.getCell(2).value = "Definicja";
        row15.getCell(1).alignment = row15.getCell(2).alignment = { vertical: "middle", horizontal: "left"};
        row15.getCell(1).font = row15.getCell(2).font = { name: "Calibri", color: { argb: "FF000000" }, size: "16" };
        row15.getCell(1).fill = row15.getCell(2).fill = { type: 'pattern', pattern: 'solid', fgColor:{argb:'FFCCC0DA'} };
        row15.getCell(1).border = row15.getCell(2).border = {
            top: {style:'thin', color: {argb: 'FFA6A6A6'}},
            left: {style:'thin', color: {argb: 'FFA6A6A6'}},
            bottom: {style:'thin', color: {argb: 'FFA6A6A6'}},
            right: {style:'thin', color: {argb: 'FFA6A6A6'}}
        };

        // rows 16-28
        
        // set row height for rows 16-28
        for (let i=16; i<29; i++) {
            worksheet.getRow(i).height = 12; // results in a row height of 16
        }

        rowData = [];

        rowData = [
            {key1: 'Strona', key2: 'Określa stronę lub plik html, który został zeskanowany.'},
            {key1: 'Etykieta skanu', key2: 'Etykieta dla skanowania. Wartości domyślne mogą być edytowane w programie sprawdzania dostępności przed zapisaniem raportu, lub programowo przypisane w testach automatycznych.'},
            {key1: 'ID problemu', key2: 'Identyfikator problemu na tej stronie. Ponowne skanowanie tej samej strony spowoduje wyświetlenie tego samego identyfikatora problemu. '},
            {key1: 'Rodzaj problemu', key2: 'Naruszenie, do przeglądu lub zalecenie'},
            {key1: 'Poziom zestawu', key2: '1, 2, 3 lub 4. Poziom priorytetu określony przez IBM Equal Access Toolkit. Zobacz  https://www.ibm.com/able/toolkit/plan#pace-of-completion, aby dowiedzieć się więcej'}, 
            {key1: 'Punkt kontrolny', key2: 'Wytyczne dla dostępności treści internetowych (WCAG) określają punkty kontrolne, do których należy ten problem.'},
            {key1: 'Poziom WCAG', key2: 'A, AA lub AAA. Poziom WCAG dla tego problemu.'},
            {key1: 'Reguła', key2: 'Nazwa reguły testu dostępności, która wykryła ten problem.'},
            {key1: 'Problem', key2: 'Komunikat opisujący problem.'},
            {key1: 'Element', key2: 'Typ elementu HTML, w którym wystąpił problem.'},
            {key1: 'Kod', key2: 'Rzeczywisty element HTML, w którym występuje problem.'},
            {key1: 'Xpath', key2: 'Ścieżka do elementu HTML, w którym znajduje się problem'},
            {key1: 'Pomoc', key2: 'Link do bardziej szczegółowego opisu problemu i sugerowanych rozwiązań.'},
        ];

        for (let i=16; i<29; i++) {
            worksheet.getRow(i).getCell(1).font = worksheet.getRow(i).getCell(2).font = { name: "Calibri", color: { argb: "FF000000" }, size: "12" };
            worksheet.getRow(i).getCell(1).alignment = worksheet.getRow(i).getCell(2).alignment = { horizontal: "left"};
            
        }
        for (let i=16; i<29; i++) {
            worksheet.getRow(i).getCell(1).value = rowData[i-16].key1; worksheet.getRow(i).getCell(2).value = rowData[i-16].key2;
        }

    }

    public static countDuplicatesInArray(array: []) {
        let count = {};
        // let result = [];
        
        array.forEach(item => {
            
            if (count[item]) {
                //@ts-ignore
                count[item] +=1
                return
            }
            //@ts-ignore
            count[item] = 1;
        })
        return count;
    }   
}