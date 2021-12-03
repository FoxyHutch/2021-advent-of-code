import { ConsoleTextUtil } from "./../util/ConsoleTextUtil";
import { FileUtil } from "../util/FileUtil";
import { SonarSweepService } from "./SonarSweepService";

class DayOneMain {
  constructor() {
    const dayOne = new SonarSweepService(
      new FileUtil().getEntriesFromInputNamedTextFile(__dirname)
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

new DayOneMain();
