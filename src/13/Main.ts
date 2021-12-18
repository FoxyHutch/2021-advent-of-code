import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";
import { TransparentPaperDecoder } from "./TransparentPaperDecoder";
class Main {
	constructor() {
		const data = new AoCUtil().getEntriesAsStringsFromInputNamedTextFile(__dirname);

		const transparentPD = new TransparentPaperDecoder(data);

		console.log(
			new ConsoleTextUtil().formatSolutionText(
				13,
				"Calculate amount of points after first fold",
				new TransparentPaperDecoder(data)
					.decodeTP(transparentPD.transparentPaper, transparentPD.foldingInstructions, 1)
					.length.toString(),
				"Print finished transparent paper",
				"separate Line"
			)
		);

		transparentPD.printTP(
			transparentPD.decodeTP(
				transparentPD.transparentPaper,
				transparentPD.foldingInstructions,
				transparentPD.foldingInstructions.length
			)
		);
	}
}

new Main();
