export class DiagnosticReportService {
  instructions: Array<string>;

  constructor(entries: Array<string>) {
    this.instructions = entries;
  }

  calculatePowerConsumption(): number {
    return 0;
  }
}
