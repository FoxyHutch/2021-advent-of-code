export class DiagnosticReportService {
  diagnosticReport: Array<string>;

  constructor(entries: Array<string>) {
    this.diagnosticReport = entries;
  }

  calculatePowerConsumption(): number {
    const columnCount = this.diagnosticReport[0].length;
    const rowCount = this.diagnosticReport.length;
    console.log(rowCount);

    let gammaRateBinary: Array<number> = [];
    let epsilonRateBinary: Array<number> = [];

    for (let currentPosInRow = 0; currentPosInRow < columnCount; currentPosInRow++) {
      let bitOneCount: number = 0;

      for (const dReportRow of this.diagnosticReport) {
        bitOneCount += parseInt(dReportRow[currentPosInRow]);
      }

      let oneIsMostCommonBit = bitOneCount > rowCount / 2;

      if (oneIsMostCommonBit) {
        gammaRateBinary.push(1);
        epsilonRateBinary.push(0);
      } else {
        gammaRateBinary.push(0);
        epsilonRateBinary.push(1);
      }
    }

    const gammaRateDecimal = this.binaryToDecimal(gammaRateBinary);
    const epsilonRateDecimal = this.binaryToDecimal(epsilonRateBinary);

    return gammaRateDecimal * epsilonRateDecimal;
  }

  binaryToDecimal(binary: Array<number>): number {
    return parseInt(binary.join(""), 2);
  }
}
