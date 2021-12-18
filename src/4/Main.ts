import { BingoGame } from "./BingoGame";
import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";
import { WinnerLoser } from "./types";

class Main {
	constructor() {
		const game = new BingoGame(new AoCUtil().getEntriesAsStringsFromInputNamedTextFile(__dirname));

		console.log(
			new ConsoleTextUtil().formatSolutionText(
				4,
				"Calculate Bingo Winningscore",
				game.playGame(WinnerLoser.WINNER).toString(),
				"Calculate Bingo Losingscore",
				game.playGame(WinnerLoser.LOSER).toString()
			)
		);
	}
}

new Main();
