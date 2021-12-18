import { ConsoleTextUtil } from "../util/ConsoleTextUtil";
import { AoCUtil } from "../util/AoCUtil";
import { FlashPrediction } from "./FlashPrediction";
class Main {
	constructor() {
		const data = new AoCUtil().getEntriesAsStringsFromInputNamedTextFile(__dirname);

		console.log(
			new ConsoleTextUtil().formatSolutionText(
				5,
				"Calculate amount of flashes after 100 steps",
				new FlashPrediction(data).calculateFlashesForStepAmount(100).toString(),
				"Calculate first step, when all octopus flash the same step",
				new FlashPrediction(data).calculateAllOctopusFlashingStep().toString()
			)
		);
	}
}

new Main();
