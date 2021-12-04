import { BinarySearchResult } from "./types";
export class DiagnosticReportService {
  diagnosticReport: Array<string>;

  constructor(entries: Array<string>) {
    this.diagnosticReport = entries;
  }

  calculatePowerConsumption(): number {
    const columnCount = this.diagnosticReport[0].length;

    let gammaRateBinary: Array<number> = [];
    let epsilonRateBinary: Array<number> = [];

    for (let currentPosInRow = 0; currentPosInRow < columnCount; currentPosInRow++) {
      const searchResult: BinarySearchResult = this.findMostCommonBitInReportCol(
        this.diagnosticReport,
        currentPosInRow
      );

      if (searchResult == BinarySearchResult.ONE) {
        gammaRateBinary.push(1);
        epsilonRateBinary.push(0);
      } else {
        gammaRateBinary.push(0);
        epsilonRateBinary.push(1);
      }
    }

    const gammaRateDecimal = this.binaryArrayToDecimal(gammaRateBinary);
    const epsilonRateDecimal = this.binaryArrayToDecimal(epsilonRateBinary);

    return gammaRateDecimal * epsilonRateDecimal;
  }

  calculateLifeSupportRating(): number {
    const matchingOxygenReportEntry = this.filterReportByBitCriteria(this.diagnosticReport, "1");
    const matchingCO2ReportEntry = this.filterReportByBitCriteria(this.diagnosticReport, "0");

    const decimalOxygenGeneratorRating = this.binaryStringToDecimal(matchingOxygenReportEntry);
    const decimalCO2ScrubberRating = this.binaryStringToDecimal(matchingCO2ReportEntry);

    return decimalOxygenGeneratorRating * decimalCO2ScrubberRating;
  }

  /**
   * Filters the binary list report by a bit criteria.
   * The list is getting searched column by column.
   * The criteria determines if for the current column only the
   * - 1: most common bit
   * - 2: least common bit
   * are kept. At the end, only one row is getting returned
   *
   * @param report
   * @param bitCriteria
   * @returns string wich meets the criteria
   */
  filterReportByBitCriteria(report: Array<string>, bitCriteria: string): string {
    const columnCount = report[0].length;

    let matchingReportEntries = Array.from(report);

    for (let currentPosInRow = 0; currentPosInRow < columnCount; currentPosInRow++) {
      const binarySearchResult = this.findMostCommonBitInReportCol(
        matchingReportEntries,
        currentPosInRow
      );

      let searchedForBit: number;

      if (binarySearchResult == BinarySearchResult.ONE) {
        searchedForBit = bitCriteria == "1" ? 1 : 0;
      } else if (binarySearchResult == BinarySearchResult.ZERO) {
        searchedForBit = bitCriteria == "1" ? 0 : 1;
      } else if (binarySearchResult == BinarySearchResult.EQUALS) {
        searchedForBit = bitCriteria == "1" ? 1 : 0;
      }

      matchingReportEntries = matchingReportEntries.filter(
        (el) => parseInt(el.charAt(currentPosInRow)) == searchedForBit
      );

      if (matchingReportEntries.length == 1) {
        break;
      }
    }

    return matchingReportEntries[0];
  }

  findMostCommonBitInReportCol(report: Array<string>, col: number): BinarySearchResult {
    let bitOneCount: number = 0;
    const reportRowCount = report.length;

    for (const reportRow of report) {
      bitOneCount += parseInt(reportRow[col]);
    }

    if (bitOneCount > reportRowCount / 2) {
      return BinarySearchResult.ONE;
    } else if (bitOneCount < reportRowCount / 2) {
      return BinarySearchResult.ZERO;
    } else {
      return BinarySearchResult.EQUALS;
    }
  }

  binaryStringToDecimal(binary: string): number {
    return parseInt(binary, 2);
  }

  binaryArrayToDecimal(binary: Array<number>): number {
    return parseInt(binary.join(""), 2);
  }
}
