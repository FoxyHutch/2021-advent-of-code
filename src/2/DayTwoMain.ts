import { CourseCalculationService } from "./CourseCalculationService";
import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";

class DayTwoMain {
  constructor() {
    const service = new CourseCalculationService(
      new AoCUtil().getEntriesFromInputNamedTextFile(__dirname)
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

new DayTwoMain();
