import { DiagnosticReportService } from "./DiagnosticReportService";
import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { FileUtil } from "../util/FileUtil";

class DayThreeMain {
  constructor() {
    const service = new DiagnosticReportService(
      new FileUtil().getEntriesFromInputNamedTextFile(__dirname)
    );

    console.log(
      new ConsoleTextUtil().formatSolutionText(
        3,
        "Calculate Powerconsumption",
        service.calculatePowerConsumption().toString()
        // "Advanced Coursecalculations",
        // service.calculateWithHorizontalPosAndDepthAndAim().toString()
      )
    );
  }
}

new DayThreeMain();
