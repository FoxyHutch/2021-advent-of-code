import { DiagnosticReportService } from "./DiagnosticReportService";
import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { FileUtil } from "../util/FileUtil";

class DayTwoMain {
  constructor() {
    const service = new DiagnosticReportService(
      new FileUtil().getEntriesFromInputNamedTextFile(__dirname)
    );

    // console.log(
    //   new ConsoleTextUtil().formatSolutionText(
    //     2,
    //     "Simple Coursecalculations",
    //     service.calculateWithHorizontalPosAndDepth().toString(),
    //     "Advanced Coursecalculations",
    //     service.calculateWithHorizontalPosAndDepthAndAim().toString()
    //   )
    // );
  }
}

new DayTwoMain();
