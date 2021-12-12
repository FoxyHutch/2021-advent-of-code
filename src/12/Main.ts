import { PathFinder } from "./PathFinder";
import { ConsoleTextUtil } from "./../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";
class Main {
  constructor() {
    const data = new AoCUtil().getEntriesAsStringsFromInputNamedTextFile(__dirname);

    console.log(
      new ConsoleTextUtil().formatSolutionText(
        12,
        "Calculate amount of paths",
        "TODO"
        // new PathFinder(data).calculateFlashesForStepAmount(100).toString()
        // "Calculate first step, when all octopus flash the same step",
        // new FlashPrediction(data).calculateAllOctopusFlashingStep().toString()
      )
    );
  }
}

new Main();
