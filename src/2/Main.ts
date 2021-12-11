import { CourseCalculationService } from "./CourseCalculationService";
import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";

class Main {
  constructor() {
    const service = new CourseCalculationService(
      new AoCUtil().getEntriesAsStringsFromInputNamedTextFile(__dirname)
    );

    console.log(
      new ConsoleTextUtil().formatSolutionText(
        2,
        "Simple Coursecalculations",
        service.calculateWithHorizontalPosAndDepth().toString(),
        "Advanced Coursecalculations",
        service.calculateWithHorizontalPosAndDepthAndAim().toString()
      )
    );
  }
}

new Main();
