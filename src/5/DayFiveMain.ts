import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";
import { HydrothermalVentDetection } from "./HydrothermalVentDetection";
class DayFiveMain {
  constructor() {
    const data = new AoCUtil().getEntriesFromInputNamedTextFile(__dirname);
    const hydrothermalVentDetectionWithoutDiagonals = new HydrothermalVentDetection(data, false);
    const hydrothermalVentDetection = new HydrothermalVentDetection(data, true);
    console.log(
      new ConsoleTextUtil().formatSolutionText(
        5,
        "Calculate Overlapping Points Without Diagonals",
        hydrothermalVentDetectionWithoutDiagonals.determineNumberOfDangerousPoints().toString(),
        "Calculate Overlapping Points With Diagonals",
        hydrothermalVentDetection.determineNumberOfDangerousPoints().toString()
      )
    );
  }
}

new DayFiveMain();
