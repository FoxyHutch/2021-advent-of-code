import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";
import { FlashPrediction } from "./FlashPrediction";
class Main {
  constructor() {
    const data = new AoCUtil().getEntriesAsStringsFromInputNamedTextFile(__dirname);

    const flashPrediction = new FlashPrediction(data);
    console.log(
      new ConsoleTextUtil().formatSolutionText(
        5,
        "Calculate Overlapping Points Without Diagonals",
        flashPrediction.calculateFlashesForStepAmount(100).toString()
        //     "Calculate Overlapping Points With Diagonals",
        //     hydrothermalVentDetection.determineNumberOfDangerousPoints().toString()
      )
    );
  }
}

new Main();
