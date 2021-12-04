import { BingoService } from "./BingoService";
import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { FileUtil } from "../util/FileUtil";

class DayFourMain {
  constructor() {
    const service = new BingoService(new FileUtil().getEntriesFromInputNamedTextFile(__dirname));

    // console.log(
    //   new ConsoleTextUtil().formatSolutionText(
    //     3,
    //     "Calculate Powerconsumption",
    //     service.calculatePowerConsumption().toString(),
    //     "Calculate Life Support Rating",
    //     service.calculateLifeSupportRating().toString()
    //   )
    // );
  }
}

new DayFourMain();
