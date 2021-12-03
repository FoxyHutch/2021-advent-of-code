export class SonarSweepService {
  sonarSweepReport: Array<string>;

  constructor(entries: Array<string>) {
    this.sonarSweepReport = entries;
  }

  findDepthIncreasementsInThreeMeasurementSlidingWindow(): number {
    let depthIncreasements = 0;

    for (let index = 0; index < this.sonarSweepReport.length - 3; index++) {
      const firstMeasurement = parseInt(this.sonarSweepReport[index]);
      const secondMeasurement = parseInt(this.sonarSweepReport[index + 1]);
      const thirdMeasurement = parseInt(this.sonarSweepReport[index + 2]);
      const fourthMeasurement = parseInt(this.sonarSweepReport[index + 3]);

      const firstSlidingWindow = firstMeasurement + secondMeasurement + thirdMeasurement;
      const secondSlidingWindow = secondMeasurement + thirdMeasurement + fourthMeasurement;

      if (firstSlidingWindow < secondSlidingWindow) {
        depthIncreasements++;
      }
    }

    return depthIncreasements;
  }

  findDepthIncreasements(): number {
    let depthIncreasements = 0;

    for (let index = 0; index < this.sonarSweepReport.length - 1; index++) {
      const currentMeasurement = parseInt(this.sonarSweepReport[index]);
      const nextMeasurement = parseInt(this.sonarSweepReport[index + 1]);

      if (currentMeasurement < nextMeasurement) {
        depthIncreasements++;
      }
    }

    return depthIncreasements;
  }
}
