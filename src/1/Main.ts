import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";
import { SonarSweepService } from "./SonarSweepService";

class Main {
  constructor() {
    const dayOne = new SonarSweepService(
      new AoCUtil().getEntriesAsStringsFromInputNamedTextFile(__dirname)
    );

    console.log(
      new ConsoleTextUtil().formatSolutionText(
        1,
        "Number of times a depth measurement increases",
        dayOne.findDepthIncreasements().toString(),
        "Number of times a 'Three-Part-Sliding-Window-Measurement' increases",
        dayOne.findDepthIncreasementsInThreeMeasurementSlidingWindow().toString()
      )
    );
  }
}

new Main();
