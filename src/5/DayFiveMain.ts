import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";
import { HydrothermalVentDetection } from "./HydrothermalVentDetection";
class DayFiveMain {
  constructor() {
    const hydrothermalVentDetection = new HydrothermalVentDetection(
      new AoCUtil().getEntriesFromInputNamedTextFile(__dirname)
    );
    // const game = new BingoGame(new AoCUtil().getEntriesFromInputNamedTextFile(__dirname));
    console.log(
      new ConsoleTextUtil().formatSolutionText(
        5,
        "Calculate Overlapping Points",
        hydrothermalVentDetection.determineNumberOfDangerousPoints().toString()
        // "Calculate Bingo Losingscore",
        // game.playGame(WinnerLoser.LOSER).toString()
      )
    );
  }
}

new DayFiveMain();
