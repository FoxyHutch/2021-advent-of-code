import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";
import { FlashPrediction } from "./FlashPrediction";
class Main {
  constructor() {
    const data = new AoCUtil().getEntriesAsStringsFromInputNamedTextFile(__dirname);
    // const flashPrediction = new FlashPrediction(data);
    // const hydrothermalVentDetectionWithoutDiagonals = new HydrothermalVentDetection(data, false);
    // const hydrothermalVentDetection = new HydrothermalVentDetection(data, true);
    // console.log(
    //   new ConsoleTextUtil().formatSolutionText(
    //     5,
    //     "Calculate Overlapping Points Without Diagonals",
    //     hydrothermalVentDetectionWithoutDiagonals.determineNumberOfDangerousPoints().toString(),
    //     "Calculate Overlapping Points With Diagonals",
    //     hydrothermalVentDetection.determineNumberOfDangerousPoints().toString()
    //   )
    // );
  }
}

new Main();
